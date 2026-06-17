#!/usr/bin/env python3
"""
BCBDA reference scraper — open-source only.

A small, dependency-light crawler to collect public reference material that
informs the Bapatla–Chirala master plan: official tourism pages, coastal-zone
and Blue-Flag documentation, and design precedents from other coasts.

Stack (all open source / free):
  - requests          : HTTP
  - beautifulsoup4    : HTML parsing
  - trafilatura       : main-content extraction (boilerplate removal)
  - pandas            : tabular export

Usage:
  pip install -r requirements.txt
  python scrape_references.py --config sources.yml --out ../../data/references.json

Be a good citizen: this script honours robots.txt, sends a descriptive
User-Agent, and rate-limits requests. Only scrape pages you are permitted to.
"""
from __future__ import annotations

import argparse
import json
import time
import urllib.robotparser as robotparser
from urllib.parse import urlparse

import requests
import yaml
from bs4 import BeautifulSoup

try:
    import trafilatura
except Exception:  # optional
    trafilatura = None

UA = "BCBDA-ReferenceBot/0.1 (+https://github.com/your-org/bcbda; research)"
HEADERS = {"User-Agent": UA}


def allowed_by_robots(url: str) -> bool:
    """Respect robots.txt before fetching."""
    parts = urlparse(url)
    robots_url = f"{parts.scheme}://{parts.netloc}/robots.txt"
    rp = robotparser.RobotFileParser()
    try:
        rp.set_url(robots_url)
        rp.read()
        return rp.can_fetch(UA, url)
    except Exception:
        # If robots cannot be read, err on the side of caution.
        return False


def extract(url: str, timeout: int = 20) -> dict:
    """Fetch one URL and return title + clean main text."""
    if not allowed_by_robots(url):
        return {"url": url, "ok": False, "reason": "blocked by robots.txt"}

    resp = requests.get(url, headers=HEADERS, timeout=timeout)
    resp.raise_for_status()
    html = resp.text

    title = ""
    soup = BeautifulSoup(html, "lxml")
    if soup.title and soup.title.string:
        title = soup.title.string.strip()

    text = ""
    if trafilatura is not None:
        text = trafilatura.extract(html, include_comments=False) or ""
    if not text:
        text = " ".join(p.get_text(" ", strip=True) for p in soup.find_all("p"))

    return {
        "url": url,
        "ok": True,
        "title": title,
        "chars": len(text),
        "text": text[:8000],
    }


def main() -> None:
    ap = argparse.ArgumentParser(description="Scrape public reference pages for BCBDA.")
    ap.add_argument("--config", default="sources.yml", help="YAML list of source URLs")
    ap.add_argument("--out", default="references.json", help="Output JSON path")
    ap.add_argument("--delay", type=float, default=2.0, help="Seconds between requests")
    args = ap.parse_args()

    with open(args.config, "r", encoding="utf-8") as fh:
        cfg = yaml.safe_load(fh) or {}
    urls = cfg.get("urls", [])

    results = []
    for url in urls:
        print(f"→ {url}")
        try:
            results.append(extract(url))
        except Exception as exc:  # keep going on individual failures
            results.append({"url": url, "ok": False, "reason": str(exc)})
        time.sleep(args.delay)

    with open(args.out, "w", encoding="utf-8") as fh:
        json.dump({"count": len(results), "results": results}, fh, indent=2, ensure_ascii=False)
    ok = sum(1 for r in results if r.get("ok"))
    print(f"Done: {ok}/{len(results)} fetched → {args.out}")


if __name__ == "__main__":
    main()

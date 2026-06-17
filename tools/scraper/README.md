# BCBDA Reference Scraper (open-source)

A small, fully **open-source** web-scraping toolkit for collecting public
reference material that informs the master plan — official tourism pages,
coastal-zone and Blue Flag documentation, and design precedents.

No paid APIs or proprietary services. Stack: `requests`, `beautifulsoup4`,
`lxml`, `trafilatura`, `pandas`, `PyYAML`.

## Install

```bash
cd tools/scraper
python -m venv .venv && source .venv/bin/activate   # optional
pip install -r requirements.txt
```

## Run

```bash
python scrape_references.py --config sources.yml --out ../../data/references.json
```

Edit `sources.yml` to choose which URLs to collect.

## Responsible use

This tool **honours `robots.txt`**, sends a descriptive `User-Agent`, and
rate-limits requests (default 2s between fetches). Only scrape pages you are
permitted to access, respect each site's terms of service, and prefer official
or openly licensed sources. Use it for research and planning, not bulk
republication.

## What it produces

A JSON file of `{ url, title, clean main text }` records you can feed into the
planning documents, the website data files, or a downstream analysis notebook.

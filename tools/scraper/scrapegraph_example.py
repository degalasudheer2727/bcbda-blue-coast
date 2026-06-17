#!/usr/bin/env python3
"""
ScrapeGraphAI example — LLM-powered, prompt-driven scraping.

ScrapeGraphAI (https://github.com/ScrapeGraphAI/Scrapegraph-ai) lets you extract
structured data from a page by *describing what you want* in natural language,
instead of hand-writing CSS/XPath selectors. It's open source.

It needs an LLM backend. Two common options:
  • OpenAI  : set OPENAI_API_KEY  (uses a hosted model)
  • Ollama  : run a local model with `ollama serve` (fully local, no API key)

Install (use a CLEAN virtualenv — this avoids langchain version clashes):
    python -m venv .venv && source .venv/bin/activate
    pip install -r requirements.txt        # pins a known-good set

Run:
    # OpenAI
    export OPENAI_API_KEY=sk-...
    python scrapegraph_example.py --url https://example.com --backend openai

    # Local Ollama (no key)
    ollama pull llama3.1
    python scrapegraph_example.py --url https://example.com --backend ollama
"""
from __future__ import annotations

import argparse
import json
import os


def build_config(backend: str) -> dict:
    if backend == "openai":
        return {
            "llm": {
                "api_key": os.environ.get("OPENAI_API_KEY", ""),
                "model": "openai/gpt-4o-mini",
            },
            "verbose": True,
            "headless": True,
        }
    # local, no API key
    return {
        "llm": {
            "model": "ollama/llama3.1",
            "model_tokens": 8192,
        },
        "verbose": True,
        "headless": True,
    }


def main() -> None:
    ap = argparse.ArgumentParser(description="Prompt-driven scrape with ScrapeGraphAI.")
    ap.add_argument("--url", required=True, help="Page to extract from")
    ap.add_argument("--backend", choices=["openai", "ollama"], default="ollama")
    ap.add_argument(
        "--prompt",
        default="Extract the page title, a 2-sentence summary, and any facts "
        "relevant to coastal/beach tourism development as JSON.",
    )
    ap.add_argument("--out", default="scrapegraph_output.json")
    args = ap.parse_args()

    # Imported here so the file is readable even before deps are installed.
    from scrapegraphai.graphs import SmartScraperGraph

    graph = SmartScraperGraph(
        prompt=args.prompt,
        source=args.url,
        config=build_config(args.backend),
    )
    result = graph.run()

    with open(args.out, "w", encoding="utf-8") as fh:
        json.dump(result, fh, indent=2, ensure_ascii=False)
    print(json.dumps(result, indent=2, ensure_ascii=False))
    print(f"\nSaved → {args.out}")


if __name__ == "__main__":
    main()

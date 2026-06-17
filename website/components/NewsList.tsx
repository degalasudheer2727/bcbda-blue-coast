"use client";

import { useState } from "react";
import type { NewsItem } from "@/lib/content";

export default function NewsList({
  items,
  categories,
}: {
  items: NewsItem[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...categories];
  const shown = active === "All" ? items : items.filter((n) => n.category === active);

  return (
    <>
      <div
        className="filterbar"
        role="tablist"
        aria-label="Filter developments by category"
      >
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            className={`chip ${active === f ? "chip--active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-2" style={{ marginTop: 28 }}>
        {shown.map((n) => (
          <article className="card" key={n.slug}>
            <div className="meta-row">
              <time className="news-date" dateTime={n.date}>{n.dateLabel}</time>
              <span className="tag">{n.category}</span>
            </div>
            <h3 style={{ marginTop: 12 }}>{n.title}</h3>
            <p className="muted">{n.body}</p>
            {n.sourceUrl && (
              <a
                className="source"
                href={n.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {n.source} <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="muted" style={{ marginTop: 24 }}>
          No developments in this category yet.
        </p>
      )}
    </>
  );
}

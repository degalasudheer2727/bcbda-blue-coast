// Content layer for the BCBDA site.
// Editable Markdown collections live in /content and are managed via the CMS
// at /admin (Sveltia/Decap → GitHub). This module is the typed read API the
// pages use; it runs at build time (static generation), so there is no runtime
// filesystem cost on the client.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO (YYYY-MM-DD)
  dateLabel: string; // human label, may carry "(approx)"
  category: string;
  featured: boolean;
  source: string;
  sourceUrl: string;
  body: string;
};

export type CultureItem = {
  slug: string;
  name: string;
  category: string;
  order: number;
  source: string;
  sourceUrl: string;
  body: string;
};

function readCollection(name: string): { slug: string; data: Record<string, unknown>; body: string }[] {
  const dir = path.join(CONTENT_DIR, name);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug: file.replace(/\.md$/, ""), data, body: content.trim() };
    });
}

export function getNews(): NewsItem[] {
  return readCollection("news")
    .map(({ slug, data, body }) => ({
      slug,
      title: String(data.title ?? ""),
      date: String(data.date ?? ""),
      dateLabel: String(data.dateLabel ?? data.date ?? ""),
      category: String(data.category ?? "Update"),
      featured: Boolean(data.featured),
      source: String(data.source ?? ""),
      sourceUrl: String(data.sourceUrl ?? ""),
      body,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getFeaturedNews(limit = 3): NewsItem[] {
  const all = getNews();
  const featured = all.filter((n) => n.featured);
  return (featured.length >= limit ? featured : all).slice(0, limit);
}

export function getNewsCategories(): string[] {
  return Array.from(new Set(getNews().map((n) => n.category))).sort();
}

export function getCulture(): CultureItem[] {
  return readCollection("culture")
    .map(({ slug, data, body }) => ({
      slug,
      name: String(data.name ?? ""),
      category: String(data.category ?? "Highlight"),
      order: Number(data.order ?? 99),
      source: String(data.source ?? ""),
      sourceUrl: String(data.sourceUrl ?? ""),
      body,
    }))
    .sort((a, b) => a.order - b.order);
}

export function getCultureCategories(): string[] {
  return Array.from(new Set(getCulture().map((c) => c.category)));
}

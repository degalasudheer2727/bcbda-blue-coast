// Live media coverage of the Bapatla–Chirala coast.
// Pulls public news headlines (Google News RSS), revalidated periodically so the
// site stays fresh without a separate cron. These are THIRD-PARTY media items
// (title + source + link only) — clearly not official BCBDA notifications.
// Fails gracefully to [] so a network/RSS hiccup never breaks the site.

export type CoverageItem = {
  title: string;
  url: string;
  source: string;
  date: string; // ISO
  dateLabel: string;
};

const QUERY =
  '("Bapatla" OR "Chirala" OR "Suryalanka" OR "Vodarevu") (beach OR tourism OR coast OR development OR BCBDA)';
const FEED = `https://news.google.com/rss/search?q=${encodeURIComponent(QUERY)}&hl=en-IN&gl=IN&ceid=IN:en`;

function decode(s: string): string {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function tag(block: string, name: string): string {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? decode(m[1]) : "";
}

export async function getCoverage(limit = 12): Promise<CoverageItem[]> {
  try {
    const res = await fetch(FEED, {
      headers: { "User-Agent": "Mozilla/5.0 (BCBDA site coverage)" },
      next: { revalidate: 1800 }, // refresh every 30 min
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.split("<item>").slice(1);
    const out: CoverageItem[] = [];
    for (const raw of items) {
      const block = raw.split("</item>")[0];
      const titleRaw = tag(block, "title");
      const link = tag(block, "link");
      const pub = tag(block, "pubDate");
      const sourceTag = tag(block, "source");
      if (!titleRaw || !link) continue;
      // Google News titles are "Headline - Source"
      const splitIdx = titleRaw.lastIndexOf(" - ");
      const title = splitIdx > 20 ? titleRaw.slice(0, splitIdx) : titleRaw;
      const source = sourceTag || (splitIdx > 0 ? titleRaw.slice(splitIdx + 3) : "News");
      const d = pub ? new Date(pub) : null;
      const iso = d && !isNaN(d.getTime()) ? d.toISOString() : "";
      const dateLabel =
        d && !isNaN(d.getTime())
          ? d.toLocaleDateString("en-IN", { day: "numeric", month: "short" })
          : "";
      out.push({ title, url: link, source, date: iso, dateLabel });
    }
    return out
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, limit);
  } catch {
    return [];
  }
}

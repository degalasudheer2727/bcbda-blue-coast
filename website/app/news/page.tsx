import type { Metadata } from "next";
import NewsList from "@/components/NewsList";
import { getNews, getNewsCategories } from "@/lib/content";
import { getCoverage } from "@/lib/coverage";

export const metadata: Metadata = {
  title: "Latest Developments",
  description:
    "Recent developments shaping the Bapatla–Chirala coast — Suryalanka beach funding, the Bay of Bapatla plan, NH-167A connectivity, the Amaravati capital nearby, and coastal-resilience news.",
  alternates: { canonical: "/news" },
};

export default async function NewsPage() {
  const news = getNews();
  const categories = getNewsCategories();
  const latest = news[0];
  const coverage = await getCoverage(15);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Latest Developments — BCBDA",
    about: "Bapatla–Chirala coastal development",
    hasPart: news.slice(0, 12).map((n) => ({
      "@type": "NewsArticle",
      headline: n.title,
      datePublished: n.date,
      articleSection: n.category,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section--tight" style={{ paddingTop: 64 }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">/</span> Latest Developments
          </nav>
          <div className="section-head" style={{ marginBottom: 14 }}>
            <span className="eyebrow">Newsroom</span>
            <h1>Latest developments on the coast</h1>
            <p className="lead">
              The case for this corridor is not static — it is being built in real
              time. Here is the verifiable, sourced record of the policies, funding,
              and infrastructure moving the Bapatla–Chirala coast forward.
              {latest && (
                <>
                  {" "}Last updated <strong>{latest.dateLabel}</strong>.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <NewsList items={news} categories={categories} />
          <p className="muted" style={{ marginTop: 34, fontSize: "0.85rem" }}>
            Every item links to its public source. Dates marked “(approx)” are
            pending confirmation of the exact month. This newsroom is editable in
            the <a href="/admin">content studio</a>.
          </p>
        </div>
      </section>

      {coverage.length > 0 && (
        <section className="section bg-sand" style={{ paddingTop: 56 }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: 26 }}>
              <span className="eyebrow">Live · media coverage</span>
              <h2>In the news — govt meetings, visits &amp; reporting</h2>
              <p className="lead">
                Auto-updated public coverage of the Bapatla–Chirala coast from print
                and electronic media, refreshed continuously. These are{" "}
                <strong>third-party news items</strong> aggregated for reference —
                not official BCBDA notifications.
              </p>
            </div>
            <ul className="coverage-list">
              {coverage.map((c, i) => (
                <li key={`${c.url}-${i}`}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer">
                    <span className="cov-title">{c.title}</span>
                    <span className="cov-meta">
                      {c.source}{c.dateLabel ? ` · ${c.dateLabel}` : ""} <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="muted" style={{ marginTop: 22, fontSize: "0.8rem" }}>
              Source: Google News (public RSS) for the Bapatla / Chirala / Suryalanka
              coast · refreshes every ~30 minutes.
            </p>
          </div>
        </section>
      )}
    </>
  );
}

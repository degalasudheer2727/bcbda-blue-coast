import type { Metadata } from "next";
import NewsList from "@/components/NewsList";
import { getNews, getNewsCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Latest Developments",
  description:
    "Recent developments shaping the Bapatla–Chirala coast — Suryalanka beach funding, the Bay of Bapatla plan, NH-167A connectivity, the Amaravati capital nearby, and coastal-resilience news.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const news = getNews();
  const categories = getNewsCategories();
  const latest = news[0];

  return (
    <>
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
    </>
  );
}

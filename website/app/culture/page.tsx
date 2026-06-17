import type { Metadata } from "next";
import { getCulture } from "@/lib/content";
import Media from "@/components/Media";

// Map each highlight to its image (real area photos where they exist).
const CULTURE_IMG: Record<string, string> = {
  "suryalanka-beach": "place-suryalanka",
  "vodarevu-beach": "place-vodarevu",
  "sri-bhavanarayana-swamy-temple-bapatla": "temple",
  "how-bapatla-got-its-name-bhavapuri": "chirala-boats",
  "chirala-perala-handloom-weaving": "handloom",
  "vetapalem-cashews-jeedipappu": "cashew",
  "saraswata-niketanam-library-vetapalem": "library",
  "coastal-andhra-seafood-cuisine": "seafood",
  "vodarevu-nizampatnam-fishing-community": "fishing-boat",
  "bhattiprolu-buddhist-stupa": "bhattiprolu",
  "nizampatnam-backwaters-mangroves": "mangrove",
};

export const metadata: Metadata = {
  title: "Culture & Local Highlights",
  description:
    "The living context of the Bapatla–Chirala coast — Suryalanka and Vodarevu beaches, the Bhavanarayana temple, Chirala handloom, Vetapalem cashews, Saraswata Niketanam, coastal cuisine, and Bhattiprolu's ancient stupa.",
  alternates: { canonical: "/culture" },
};

export default function CulturePage() {
  const items = getCulture();
  const categories = Array.from(new Set(items.map((c) => c.category)));

  return (
    <>
      <section className="section--tight" style={{ paddingTop: 64 }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">/</span> Culture &amp; Local Highlights
          </nav>
          <div className="section-head">
            <span className="eyebrow">A coast with deep roots</span>
            <h1>Culture &amp; local highlights</h1>
            <p className="lead">
              This is not an empty shore. The Bapatla–Chirala coast carries
              ancient temples, a script older than Telugu itself, a proud weaving
              and cashew trade, and a fishing culture centuries deep. Development
              here means building <em>on</em> this identity — never over it.
            </p>
          </div>
        </div>
      </section>

      {categories.map((cat, ci) => (
        <section
          key={cat}
          className={`section ${ci % 2 === 1 ? "bg-sand" : ""}`}
          style={{ paddingTop: ci === 0 ? 8 : undefined }}
        >
          <div className="container">
            <div className="section-head" style={{ marginBottom: 28 }}>
              <span className="eyebrow">{cat}</span>
            </div>
            <div className="grid grid-3">
              {items
                .filter((c) => c.category === cat)
                .map((c) => (
                  <article className="card has-media" key={c.slug}>
                    {CULTURE_IMG[c.slug] && <Media k={CULTURE_IMG[c.slug]} ratio="16 / 11" />}
                    <span className="tag">{c.category}</span>
                    <h3 style={{ margin: "12px 0 8px" }}>{c.name}</h3>
                    <p className="muted">{c.body}</p>
                    {c.sourceUrl && (
                      <a
                        className="source"
                        href={c.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {c.source} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section--tight bg-ocean">
        <div className="container center">
          <p className="lead center" style={{ margin: "0 auto" }}>
            Heritage is infrastructure too. The master plan protects these places
            as the foundation of the corridor's value.
          </p>
          <div className="center" style={{ marginTop: 22 }}>
            <a href="/vision" className="btn btn--ghost">Read the charter →</a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PROPERTIES, NOT_HERE, STATUS_META } from "@/lib/stays";

export const metadata: Metadata = {
  title: "Stays & Hospitality",
  description:
    "Hotels, resorts and residential developments on the Bapatla–Chirala coast — Sea Breeze, Riviera, V Resort, Yaganti Golden Sands, Alohaa, and the signed Lemon Tree Bapatla. Verified status, honestly reported.",
  alternates: { canonical: "/stays" },
};

function Card({ p }: { p: (typeof PROPERTIES)[number] }) {
  const s = STATUS_META[p.status];
  return (
    <article className="card stay-card">
      <div className="meta-row">
        <span className="tag">{p.type}</span>
        <span className={`tag ${s.tag}`}>{s.label}</span>
      </div>
      <h3 style={{ marginTop: 12 }}>{p.name}</h3>
      <p className="stay-loc">{p.location}</p>
      <p className="muted">{p.detail}</p>
      {p.price && <div className="stay-price">{p.price}</div>}
      {p.url && (
        <a className="source" href={p.url} target="_blank" rel="noopener noreferrer">
          Visit / source <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
}

export default function StaysPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 56 }}>
          <span className="eyebrow">Where to stay</span>
          <h1>Stays &amp; hospitality on the coast</h1>
          <p className="lead">
            From operating beach resorts to a signed Lemon Tree and an under-construction
            resort township — the real hospitality landscape of the Bapatla–Chirala coast,
            with status reported honestly. We don’t list what isn’t here.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 28 }}>
            <span className="eyebrow">On the coast</span>
            <h2>Resorts, hotels &amp; communities</h2>
          </div>
          <div className="grid grid-3">
            {PROPERTIES.map((p) => <Card key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <span className="eyebrow">Transparency</span>
            <h2>Asked about, but not (yet) here</h2>
            <p className="lead">
              A few names get mentioned for this coast that we couldn’t verify. Rather
              than imply they’re present, here’s the honest status.
            </p>
          </div>
          <div className="grid grid-3">
            {NOT_HERE.map((p) => {
              const s = STATUS_META[p.status];
              return (
                <article className="card stay-card stay-card--muted" key={p.name}>
                  <div className="meta-row">
                    <span className="tag">{p.type}</span>
                    <span className={`tag ${s.tag}`}>{s.label}</span>
                  </div>
                  <h3 style={{ marginTop: 12 }}>{p.name}</h3>
                  <p className="stay-loc">{p.location}</p>
                  <p className="muted">{p.detail}</p>
                </article>
              );
            })}
          </div>
          <p className="muted" style={{ marginTop: 26, fontSize: "0.82rem" }}>
            Prices are indicative from public listings. If a chain announces a verified
            property here, it’ll be added with its source. Have a correction? The site is
            open on <a href="https://github.com/degalasudheer2727/bcbda-blue-coast">GitHub</a>.
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BEACHES, getBeach } from "@/lib/beaches";
import { img } from "@/lib/images";
import MapEmbed from "@/components/MapEmbed";

export function generateStaticParams() {
  return BEACHES.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const b = getBeach(params.slug);
  if (!b) return {};
  return {
    title: `${b.name} — ${b.town}`,
    description: `${b.speciality} Developments, directions, stays and indicative prices for ${b.name}.`,
    alternates: { canonical: `/beaches/${b.slug}` },
  };
}

const STATUS_TAG: Record<string, string> = {
  Funded: "tag--p1",
  Proposed: "tag--p2",
  "Study-stage": "tag--p2",
  "None confirmed": "",
};

export default function BeachPage({ params }: { params: { slug: string } }) {
  const b = getBeach(params.slug);
  if (!b) notFound();
  const im = img(b.img);
  const others = BEACHES.filter((x) => x.slug !== b.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Beach",
    name: b.name,
    description: b.speciality,
    geo: { "@type": "GeoCoordinates", latitude: b.coords.lat, longitude: b.coords.lng },
    address: { "@type": "PostalAddress", addressLocality: b.town, addressRegion: "Andhra Pradesh", addressCountry: "IN" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero with aerial photo */}
      <section className="beach-hero">
        {im && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img className="beach-hero-img" src={im.src} alt={im.alt} />
        )}
        <div className="beach-hero-overlay" />
        <div className="container beach-hero-body">
          <nav className="breadcrumb beach-crumb" aria-label="Breadcrumb">
            <Link href="/beaches">Beaches</Link> <span aria-hidden="true">/</span> {b.name}
          </nav>
          <span className="eyebrow" style={{ color: "var(--teal-100)" }}>{b.focus}</span>
          <h1>{b.name}</h1>
          <p className="lead" style={{ color: "rgba(255,255,255,0.92)" }}>
            {b.town} · {b.distanceKm} km from town · Bay of Bengal
          </p>
          <div className="chip-row">
            {b.famousFor.map((f) => <span className="chip chip--ghost" key={f}>{f}</span>)}
          </div>
        </div>
      </section>

      {/* Speciality + map */}
      <section className="section">
        <div className="container beach-split">
          <div>
            <span className="eyebrow">What it’s famous for</span>
            <h2>Speciality &amp; focus</h2>
            <p className="lead" style={{ marginTop: 12 }}>{b.speciality}</p>
            <h3 style={{ marginTop: 26 }}>Government development &amp; progress</h3>
            <div className="timeline" style={{ marginTop: 8 }}>
              {b.developments.map((d) => (
                <div className="phase" key={d.title} style={{ gridTemplateColumns: "120px 1fr" }}>
                  <div className="when">
                    <span className={`tag ${STATUS_TAG[d.status]}`}>{d.status}</span>
                  </div>
                  <div>
                    <h3>{d.title}</h3>
                    <p className="muted">{d.detail}</p>
                    {d.url && (
                      <a className="source" href={d.url} target="_blank" rel="noopener noreferrer">
                        Source <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside>
            <span className="eyebrow">Getting there</span>
            <h3 style={{ marginBottom: 14 }}>Directions &amp; location</h3>
            <MapEmbed lat={b.coords.lat} lng={b.coords.lng} label={b.name} />
          </aside>
        </div>
      </section>

      {/* Stays + market price */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 26 }}>
            <span className="eyebrow">Stays &amp; market</span>
            <h2>Where to stay — and what land costs</h2>
            <p className="lead">
              Indicative options near {b.name}. Prices are <strong>indicative</strong> from
              public listings, not official rates; only verified properties are marked real.
            </p>
          </div>
          <div className="grid grid-3">
            {b.stays.map((s) => (
              <div className="card price-card" key={s.name}>
                <div className="meta-row">
                  <span className="tag">{s.type}</span>
                  {s.real ? <span className="tag tag--p1">Verified</span> : <span className="tag">Indicative</span>}
                </div>
                <h3 style={{ marginTop: 12 }}>{s.name}</h3>
                <div className="price">{s.price}</div>
                {s.url && (
                  <a className="source" href={s.url} target="_blank" rel="noopener noreferrer">
                    More <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            ))}
            <div className="card price-card price-card--land">
              <div className="meta-row"><span className="tag">Land · indicative</span></div>
              <h3 style={{ marginTop: 12 }}>Market price (plots)</h3>
              <div className="price">{b.realEstate.range}</div>
              <p className="muted" style={{ fontSize: "0.82rem", marginTop: 6 }}>{b.realEstate.note}</p>
              {b.realEstate.url && (
                <a className="source" href={b.realEstate.url} target="_blank" rel="noopener noreferrer">
                  Listings <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other beaches */}
      <section className="section--tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 22 }}>
            <span className="eyebrow">Continue the coast</span>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}>Other beaches</h2>
          </div>
          <div className="grid grid-3">
            {others.map((o) => (
              <Link href={`/beaches/${o.slug}`} className="card" key={o.slug} style={{ color: "inherit" }}>
                <span className="tag">{o.town} · {o.distanceKm} km</span>
                <h3 style={{ marginTop: 10 }}>{o.name}</h3>
                <p className="muted">{o.focus}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

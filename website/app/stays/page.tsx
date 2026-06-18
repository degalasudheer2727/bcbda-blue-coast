import type { Metadata } from "next";
import { PROPERTIES, NOT_HERE, STATUS_META } from "@/lib/stays";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Stays & Hospitality",
  description:
    "Hotels, resorts and residential developments on the Bapatla–Chirala coast — Sea Breeze, Riviera, V Resort, Yaganti Golden Sands, Alohaa, and the signed Lemon Tree Bapatla. Verified status, honestly reported.",
  alternates: { canonical: "/stays" },
};

// Type → icon (representative category glyph, not a specific property photo).
function StayIcon({ type }: { type: string }) {
  const t = type.toLowerCase();
  let path: React.ReactNode;
  if (t.includes("resort"))
    path = <><path d="M12 21V11" /><path d="M12 11c-3.5-3-7.5-1.5-8.5 1 2.2-.6 4 .2 4.2 2.2.4-2 2.6-3 4.3-3.2Z" /><path d="M12 11c3.5-3 7.5-1.5 8.5 1-2.2-.6-4 .2-4.2 2.2-.4-2-2.6-3-4.3-3.2Z" /></>;
  else if (t.includes("township") || t.includes("villa") || t.includes("community") || t.includes("plotted") || t.includes("developer"))
    path = <><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></>;
  else
    path = <><path d="M3 17v-4h14a3 3 0 0 1 3 3v1" /><path d="M3 17V8" /><path d="M21 17v-2" /><path d="M3 11h6V9" /></>;
  return (
    <span className="stay-ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{path}</svg>
    </span>
  );
}

function Card({ p, muted = false }: { p: (typeof PROPERTIES)[number]; muted?: boolean }) {
  const s = STATUS_META[p.status];
  return (
    <article className={`card stay-card ${muted ? "stay-card--muted" : ""}`}>
      <div className="stay-head">
        {!muted && <StayIcon type={p.type} />}
        <div className="meta-row">
          <span className="tag">{p.type}</span>
          <span className={`tag ${s.tag}`}>{s.label}</span>
        </div>
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
  const hero = img("place-suryalanka");
  return (
    <>
      {/* Photo hero — matches the rest of the destination site */}
      <section className="beach-hero stays-hero">
        {hero && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img className="beach-hero-img" src={hero.src} alt={hero.alt} />
        )}
        <div className="beach-hero-overlay" />
        <div className="container beach-hero-body">
          <span className="eyebrow" style={{ color: "var(--teal-100)" }}>Where to stay</span>
          <h1>Stays &amp; hospitality</h1>
          <p className="lead" style={{ color: "rgba(255,255,255,0.92)" }}>
            From operating beach resorts to a signed Lemon Tree and a new resort
            township — the real hospitality landscape of the Bapatla–Chirala coast,
            with status reported honestly. We don’t list what isn’t here.
          </p>
          <div className="chip-row">
            <span className="chip chip--ghost">{PROPERTIES.filter((p) => p.status === "Operating").length} operating now</span>
            <span className="chip chip--ghost">1 under construction</span>
            <span className="chip chip--ghost">Lemon Tree signed</span>
          </div>
        </div>
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
            {NOT_HERE.map((p) => <Card key={p.name} p={p} muted />)}
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

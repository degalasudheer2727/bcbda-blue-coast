import Link from "next/link";
import { SITE } from "@/lib/site-data";
import { BEACHES } from "@/lib/beaches";
import { EXPERIENCES } from "@/lib/experiences";
import { getFeaturedNews } from "@/lib/content";
import { img } from "@/lib/images";

export default function Home() {
  const news = getFeaturedNews(3);
  const hero = img("place-vodarevu");

  return (
    <>
      {/* ---- Destination hero ---- */}
      <section className="dest-hero">
        {hero && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img className="beach-hero-img" src={hero.src} alt={hero.alt} />
        )}
        <div className="beach-hero-overlay" />
        <div className="container dest-hero-body">
          <span className="future-chip">Bay of Bengal · Andhra Pradesh, India</span>
          <h1>Discover the Bay of Bapatla.</h1>
          <p className="lead" style={{ color: "rgba(255,255,255,0.92)" }}>
            Golden beaches, fresh seafood, ancient temples and a living fishing
            culture — the Suryalanka–Vodarevu–Ramapuram coast is Andhra’s next great
            seaside escape, taking shape the right way.
          </p>
          <div className="hero-actions">
            <Link href="/beaches" className="btn btn--primary">Explore the beaches</Link>
            <Link href="/plan" className="btn btn--ghost">Plan your trip</Link>
          </div>
        </div>
        {/* quick facts bar */}
        <div className="container">
          <div className="quickbar">
            <div><span className="qb-k">Best time</span><span className="qb-v">Oct – Mar</span></div>
            <div><span className="qb-k">Beaches</span><span className="qb-v">4 along one coast</span></div>
            <div><span className="qb-k">Nearest rail</span><span className="qb-v">Bapatla · Chirala</span></div>
            <div><span className="qb-k">From Amaravati</span><span className="qb-v">~60 km</span></div>
          </div>
        </div>
      </section>

      {/* ---- Things to do ---- */}
      <section className="section">
        <div className="container">
          <div className="meta-row" style={{ justifyContent: "space-between", marginBottom: 26 }}>
            <div>
              <span className="eyebrow">Things to do</span>
              <h2>Your coast, your way</h2>
            </div>
            <Link href="/experiences" className="btn btn--outline">All experiences →</Link>
          </div>
          <div className="grid grid-4">
            {EXPERIENCES.slice(0, 8).map((e) => {
              const im = img(e.img);
              return (
                <Link href="/experiences" className="card has-media exp-card" key={e.slug} style={{ color: "inherit" }}>
                  {im && (
                    <div className="card-media" style={{ aspectRatio: "4 / 3" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={im.src} alt={im.alt} loading="lazy" decoding="async" />
                    </div>
                  )}
                  <span className="exp-where">{e.where}</span>
                  <h3 style={{ marginTop: 4 }}>{e.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Beaches showcase ---- */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">The beaches</span>
            <h2>Four beaches, one green-blue coast</h2>
            <p className="lead center">
              From Suryalanka’s lively promenade to Ramapuram’s quiet conservation shore
              — each with its own character.
            </p>
          </div>
          <div className="grid grid-2">
            {BEACHES.map((b) => {
              const im = img(b.img);
              return (
                <Link href={`/beaches/${b.slug}`} className="card has-media beach-card" key={b.slug} style={{ color: "inherit" }}>
                  {im && (
                    <div className="card-media" style={{ aspectRatio: "16 / 9" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={im.src} alt={im.alt} loading="lazy" decoding="async" />
                      <span className="beach-focus">{b.focus}</span>
                    </div>
                  )}
                  <span className="tag" style={{ marginTop: 4 }}>{b.town} · {b.distanceKm} km</span>
                  <h3 style={{ marginTop: 10 }}>{b.name}</h3>
                  <p className="muted">{b.speciality}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Stays + Plan split ---- */}
      <section className="section">
        <div className="container split-2">
          <Link href="/stays" className="promo promo--stays">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>Where to stay</span>
            <h3>Resorts, retreats &amp; beach homes</h3>
            <p>Operating beach resorts, a signed Lemon Tree and new villa communities — with honest, sourced status.</p>
            <span className="promo-go">Browse stays →</span>
          </Link>
          <Link href="/plan" className="promo promo--plan">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>Plan your trip</span>
            <h3>How to reach &amp; what to know</h3>
            <p>Road, rail and air routes, the best season, getting around, and ready-made day and weekend itineraries.</p>
            <span className="promo-go">Start planning →</span>
          </Link>
        </div>
      </section>

      {/* ---- Culture teaser ---- */}
      <section className="section--tight">
        <div className="container">
          <div className="meta-row" style={{ justifyContent: "space-between", marginBottom: 22 }}>
            <div>
              <span className="eyebrow">Deep roots</span>
              <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}>Culture &amp; heritage</h2>
            </div>
            <Link href="/culture" className="btn btn--outline">Explore culture →</Link>
          </div>
          <p className="lead" style={{ maxWidth: "70ch" }}>
            A coast with an ancient temple that names its town, a script older than
            Telugu, a proud weaving and cashew trade, and a centuries-deep fishing
            culture. The development is built <em>on</em> this identity — never over it.
          </p>
        </div>
      </section>

      {/* ---- Latest developments ---- */}
      <section className="section--tight">
        <div className="container">
          <div className="meta-row" style={{ justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <span className="eyebrow">Momentum</span>
              <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}>Latest developments</h2>
            </div>
            <Link href="/news" className="btn btn--outline">All updates →</Link>
          </div>
          <div className="grid grid-3">
            {news.map((n) => (
              <Link href="/news" className="card" key={n.slug} style={{ color: "inherit" }}>
                <div className="meta-row">
                  <time className="news-date" dateTime={n.date}>{n.dateLabel}</time>
                  <span className="tag">{n.category}</span>
                </div>
                <h3 style={{ marginTop: 12 }}>{n.title}</h3>
                <p className="muted">{n.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- The project (credible backstory) ---- */}
      <section className="section bg-ocean">
        <div className="container center">
          <span className="eyebrow" style={{ color: "var(--teal-100)" }}>The plan behind it</span>
          <h2>Developed the right way — clean, resilient, community-owned</h2>
          <p className="lead center">
            A ₹2,500 crore, three-phase plan to develop the coast as a clean,
            climate-resilient, community-owned and self-funding destination — soft
            coastal defences first, Blue Flag standards, and local cooperatives as
            co-owners of coastal prosperity.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/about" className="btn btn--ghost">About the project →</Link>
            <Link href="/future" className="btn btn--ghost">See the 2036 vision</Link>
          </div>
          <p className="muted center" style={{ marginTop: 22, fontSize: "0.82rem" }}>
            {SITE.shortName} is a proposed authority and a public planning concept — not an official body. {SITE.status}.
          </p>
        </div>
      </section>
    </>
  );
}

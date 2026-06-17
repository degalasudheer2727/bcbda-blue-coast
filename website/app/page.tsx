import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SITE, VISION, PILLARS, FACTS, NODES, PHASES, CATALYSTS, BUDGET } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">● {SITE.status}</span>
          <span className="eyebrow">Bay of Bengal · Bapatla District, Andhra Pradesh</span>
          <h1>A self-sustaining coast, built to last generations.</h1>
          <p className="lead">
            A ₹2,500 crore, three-phase plan to develop the
            Suryalanka–Vodarevu–Ramapuram corridor as a clean, climate-resilient,
            community-owned, and economically self-funding beach destination.
            This site is its pitch, its blueprint, and its execution runbook.
          </p>
          <div className="hero-actions">
            <Link href="/budget" className="btn btn--ghost">The investment case →</Link>
            <Link href="/experience" className="btn btn--ghost">See it in 3D / VR</Link>
          </div>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      {/* Stats */}
      <section className="section--tight">
        <div className="container">
          <div className="stats">
            {FACTS.map((f) => (
              <div className="stat" key={f.label}>
                <div className="num">{f.value}</div>
                <div className="lbl">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now — growth catalysts */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why now</span>
            <h2>The growth is already arriving at the coast</h2>
            <p className="lead">
              This is not a bet on demand appearing — it is infrastructure meeting
              a wave of growth that is already underway across the region.
            </p>
          </div>
          <div className="grid grid-3">
            {CATALYSTS.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p className="muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision teaser */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our vision</span>
            <h2>Ecology, economy, and community — engineered to reinforce each other.</h2>
          </div>
          <p className="lead center" style={{ fontSize: "1.3rem", color: "var(--ocean-900)" }}>
            “{VISION.statement}”
          </p>
          <div className="center" style={{ marginTop: 28 }}>
            <Link href="/vision" className="btn btn--outline">The full charter →</Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Six strategic pillars</span>
            <h2>How the corridor is organised</h2>
          </div>
          <div className="grid grid-3">
            {PILLARS.map((p) => (
              <div className="card" key={p.name}>
                <div className="icon"><Icon name={p.icon} /></div>
                <h3>{p.name}</h3>
                <p className="muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nodes */}
      <section className="section bg-ocean">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>A string of pearls</span>
            <h2>Four nodes along one green-blue spine</h2>
            <p className="lead">
              Built activity concentrates in four well-served nodes; long stretches
              of coast stay natural — dunes, casuarina, and mangrove reserves that
              defend the shore and nurse the fishery.
            </p>
          </div>
          <div className="grid grid-2">
            {NODES.map((n) => (
              <div className="node" key={n.id} style={{ borderTopColor: "rgba(255,255,255,0.15)" }}>
                <div className="badge">{n.id}</div>
                <div>
                  <span className="role" style={{ color: "var(--teal-100)" }}>{n.role}</span>
                  <h3 style={{ color: "#fff", margin: "2px 0 6px" }}>{n.name}</h3>
                  <p className="muted">{n.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/master-plan" className="btn btn--ghost">See the spatial plan →</Link>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Delivery</span>
            <h2>A ten-year path to self-sufficiency</h2>
          </div>
          <div className="timeline">
            {PHASES.map((p) => (
              <div className="phase" key={p.n}>
                <div className="when">
                  Phase {p.n}
                  <small>{p.years}</small>
                </div>
                <div>
                  <h3>{p.name}</h3>
                  <p className="muted">{p.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment ask */}
      <section className="section bg-ocean">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>The ask</span>
            <h2>₹2,500 crore, across three phases</h2>
          </div>
          <div className="grid grid-3">
            {BUDGET.byPhase.map((p) => (
              <div className="card center" key={p.phase}>
                <div className="num" style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--ocean-700)" }}>₹{p.amount.toLocaleString("en-IN")} cr</div>
                <h3 style={{ marginTop: 6 }}>Phase {p.phase} — {p.name}</h3>
                <p className="muted">{p.years}</p>
              </div>
            ))}
          </div>
          <p className="lead center" style={{ marginTop: 26 }}>
            Front-loaded into a ₹1,500 cr “proof beach,” with ~44% from catalytic
            public schemes and the rest from PPP, green finance, and recaptured
            value — reaching O&amp;M self-sufficiency by about Year 6.
          </p>
          <div className="center" style={{ marginTop: 16 }}>
            <Link href="/budget" className="btn btn--ghost">See the full budget →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-sand">
        <div className="container center">
          <span className="eyebrow">Open by default</span>
          <h2>This is a public planning artifact.</h2>
          <p className="lead center">
            Every plan, dataset, and decision is published openly. Read it,
            critique it, and help make the case to develop this coast the right way.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/get-involved" className="btn btn--primary">Get involved</Link>
            <a href={SITE.repoUrl} className="btn btn--outline">View on GitHub</a>
          </div>
        </div>
      </section>
    </>
  );
}

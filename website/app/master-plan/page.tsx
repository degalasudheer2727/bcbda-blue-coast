import type { Metadata } from "next";
import Link from "next/link";
import { NODES, BEACHES, ENGINEERING, INSPIRATIONS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Master Plan",
  description: "Spatial structure, zoning, coastal-engineering fundamentals, and design inspiration for the Bapatla–Chirala corridor.",
};

export default function MasterPlanPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 64 }}>
          <span className="eyebrow">Spatial &amp; development framework</span>
          <h1>A “string of pearls” master plan</h1>
          <p className="lead">
            Built activity concentrates in four well-served nodes along a continuous
            green-blue spine; the stretches between stay natural — dunes, casuarina,
            and mangrove reserves that defend the shore and nurse the fishery.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The four nodes</span>
            <h2>Concentrate development, protect the coast</h2>
          </div>
          {NODES.map((n) => (
            <div className="node" key={n.id}>
              <div className="badge">{n.id}</div>
              <div>
                <span className="role">{n.role}</span>
                <h3 style={{ margin: "2px 0 6px" }}>{n.name}</h3>
                <p className="muted">{n.body}</p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 28 }}>
            <Link href="/experience" className="btn btn--primary">See it in 3D / VR →</Link>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Anchor beaches</span>
            <h2>Three beaches, three roles</h2>
          </div>
          <div className="grid grid-3">
            {BEACHES.map((b) => (
              <div className="card" key={b.id}>
                <span className="tag">Node {b.node}</span>
                <h3 style={{ marginTop: 10 }}>{b.name}</h3>
                <p className="muted" style={{ marginBottom: 10 }}>{b.distanceKm} km from {b.town}</p>
                <p className="muted">{b.highlights.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Civil engineering &amp; coastal-planning fundamentals</span>
            <h2>Designed on accepted practice — and India's own direction</h2>
            <p className="lead">
              India is moving from hard structures to <strong>soft coastal
              engineering</strong>. We lead with nature-based defence and rigorous
              setback, surge, and sediment-cell discipline.
            </p>
          </div>
          <div className="grid grid-3">
            {ENGINEERING.map((e) => (
              <div className="card" key={e.title}>
                <h3>{e.title}</h3>
                <p className="muted">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ocean">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>Learning from the best</span>
            <h2>Inspiration from world-class coasts</h2>
          </div>
          <div className="grid grid-2">
            {INSPIRATIONS.map((i) => (
              <div className="card" key={i.name}>
                <h3>{i.name}</h3>
                <p className="muted">{i.lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>Read the full master plan</h2>
          <p className="lead center">The complete spatial framework, zoning matrix, mobility plan, and risk register are in the repository.</p>
          <Link href="/projects" className="btn btn--primary">View the project pipeline →</Link>
        </div>
      </section>
    </>
  );
}

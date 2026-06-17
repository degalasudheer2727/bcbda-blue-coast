import type { Metadata } from "next";
import Link from "next/link";
import { INFRASTRUCTURE, ZONES } from "@/lib/site-data";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Infrastructure & Zones",
  description: "The physical blueprint: zoning, parking, beachfront parks, water sports, helipads, markets, shacks, EV charging, and waste & cleaning systems.",
};

export default function InfrastructurePage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 60 }}>
          <span className="hero-badge">● The blueprint</span>
          <span className="eyebrow">Great infrastructure, affordably delivered</span>
          <h1>What gets built on the ground</h1>
          <p className="lead">
            Every component is designed to be world-class yet affordable for an
            ordinary family — clear zones, smart parking, beachfront parks, water
            sports and games, helipads, vibrant markets and shacks, EV charging in
            PPP mode, and a relentless waste-and-cleaning regime.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Components</span>
            <h2>The infrastructure programme</h2>
          </div>
          <div className="grid grid-3">
            {INFRASTRUCTURE.map((c) => (
              <div className="card" key={c.name}>
                <div className="icon"><Icon name={c.icon} /></div>
                <h3 style={{ marginBottom: 6 }}>
                  {c.name} {c.ppp && <span className="tag tag--p2" style={{ verticalAlign: "middle" }}>PPP</span>}
                </h3>
                <p className="muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Zoning framework</span>
            <h2>Six zones, keyed to the shoreline</h2>
            <p className="lead">A simple, enforceable hierarchy from the active beach to the conservation hinterland — so development concentrates where it belongs and the coast stays open and protected.</p>
          </div>
          <div className="grid grid-2">
            {ZONES.map((z) => (
              <div className="card" key={z.code} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 16, alignItems: "start" }}>
                <div className="badge" style={{ width: 56, height: 56, borderRadius: 14, display: "grid", placeItems: "center", background: "var(--ocean-600)", color: "#fff", fontWeight: 800 }}>{z.code}</div>
                <div>
                  <h3 style={{ marginBottom: 4 }}>{z.name}</h3>
                  <p className="muted" style={{ marginBottom: 4 }}>{z.use}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--ocean-700)", fontWeight: 600 }}>Rule: {z.rule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="callout">
            <strong>Affordability is a design rule, not an afterthought.</strong> Parking, shacks,
            markets, and water games run on capped, transparent pricing with free
            and low-cost options reserved at every node, so the corridor stays a
            public beach for every family — not an enclave.
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/experience" className="btn btn--primary">See it in 3D / VR →</Link>{" "}
            <Link href="/runbook" className="btn btn--outline">How it gets delivered →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

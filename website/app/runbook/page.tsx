import type { Metadata } from "next";
import Link from "next/link";
import { RUNBOOK, PROJECTS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Execution Runbook",
  description: "A step-by-step delivery runbook: who does what, in what order, to take the corridor from approval to a self-sustaining destination.",
};

export default function RunbookPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 60 }}>
          <span className="hero-badge">● From plan to reality</span>
          <span className="eyebrow">Execution runbook</span>
          <h1>How it actually gets built</h1>
          <p className="lead">
            Not just a vision — a sequenced delivery plan. Each step names what
            happens, who owns it, and what “done” looks like, so the programme is
            executable from day one.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="timeline">
            {RUNBOOK.map((r) => (
              <div className="phase" key={r.step}>
                <div className="when">
                  Step {r.step}
                  <small>{r.owner}</small>
                </div>
                <div>
                  <h3>{r.title}</h3>
                  <p className="muted">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Project pipeline by phase</span>
            <h2>The 14 flagship projects</h2>
          </div>
          {[1, 2, 3].map((ph) => (
            <div key={ph} style={{ marginBottom: 26 }}>
              <h3 style={{ marginBottom: 12 }}>
                <span className={`tag tag--p${ph}`}>Phase {ph}</span>{" "}
                {ph === 1 ? "₹1,500 cr · Foundations" : ph === 2 ? "₹500 cr · Build-out" : "₹500 cr · Maturity & resilience"}
              </h3>
              <div className="grid grid-3">
                {PROJECTS.filter((p) => p.phase === ph).map((p) => (
                  <div className="card" key={p.id}>
                    <span className={`tag tag--p${p.phase}`}>{p.id} · Node {p.node}</span>
                    <h3 style={{ marginTop: 10, fontSize: "1.05rem" }}>{p.name}</h3>
                    <p className="muted" style={{ fontSize: "0.9rem" }}>{p.pillar}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Link href="/get-involved" className="btn btn--primary">Partner on delivery →</Link>
        </div>
      </section>
    </>
  );
}

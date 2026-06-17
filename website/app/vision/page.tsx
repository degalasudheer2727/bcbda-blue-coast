import type { Metadata } from "next";
import Link from "next/link";
import { VISION, PILLARS, VISION_2047, SITE } from "@/lib/site-data";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Vision & Charter",
  description: "The founding vision, mission, values, and pillars of the Bapatla–Chirala Beach Development Authority.",
};

export default function VisionPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 64 }}>
          <span className="eyebrow">Founding charter</span>
          <h1>Vision &amp; mandate</h1>
          <p className="lead">{SITE.status}. A proposed special-purpose authority to develop one of Andhra Pradesh's most accessible coastlines the right way.</p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="callout" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            “{VISION.statement}”
          </div>
        </div>
      </section>

      <section className="section--tight bg-sand">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <span className="eyebrow">Mission</span>
              <h2 style={{ marginTop: 8 }}>Five things this Authority exists to do</h2>
            </div>
            <ul className="prose" style={{ margin: 0 }}>
              {VISION.mission.map((m, i) => (
                <li key={i} style={{ listStyle: "none", display: "flex", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontWeight: 800, color: "var(--ocean-600)" }}>{i + 1}.</span>
                  <span className="muted">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Core values — the five tides</span>
            <h2>What we will not compromise on</h2>
          </div>
          <div className="grid grid-3">
            {VISION.values.map((v) => (
              <div className="card" key={v.name}>
                <h3>{v.name}</h3>
                <p className="muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ocean">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>Six strategic pillars</span>
            <h2>The structure of the plan</h2>
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Vision 2047 · Viksit Bharat</span>
            <h2>Out-of-the-box moves that justify the ambition</h2>
          </div>
          <div className="grid grid-2">
            {VISION_2047.map((v) => (
              <div className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p className="muted">{v.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <Link href="/master-plan" className="btn btn--primary">Explore the master plan →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

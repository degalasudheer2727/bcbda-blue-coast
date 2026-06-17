import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About the Project",
  description:
    "About the proposed Bapatla–Chirala Beach Development Authority — the vision, master plan, infrastructure, investment case, sustainability, governance and execution behind developing the coast.",
  alternates: { canonical: "/about" },
};

const SECTIONS = [
  { href: "/vision", t: "Vision & charter", b: "The mission, values and the case for an integrated, self-sustaining coast." },
  { href: "/master-plan", t: "Master plan", b: "The spatial plan — four nodes, six zones, and a green-blue spine." },
  { href: "/infrastructure", t: "Infrastructure", b: "Parking & mobility, beachfront parks, watersports, markets and clean-energy backbone." },
  { href: "/projects", t: "Project pipeline", b: "The 14 flagship projects, phased across ten years." },
  { href: "/budget", t: "Investment case", b: "₹2,500 crore across three phases, with a front-loaded ‘proof beach’." },
  { href: "/sustainability", t: "Sustainability", b: "Soft coastal defences, blue carbon, water reuse and climate resilience." },
  { href: "/governance", t: "Governance (draft)", b: "The proposed authority structure — a draft for discussion, not an issued order." },
  { href: "/runbook", t: "Execution runbook", b: "How it actually gets delivered, step by step." },
  { href: "/future", t: "The 2036 vision", b: "An envisioned scenario of the realised, self-sustaining coast." },
  { href: "/news", t: "Latest developments", b: "Sourced developments and live media coverage." },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 56 }}>
          <span className="eyebrow">About the project</span>
          <h1>The plan behind the destination</h1>
          <p className="lead">
            Behind the beaches is a proposal to develop this coast the right way —
            ecology first, financially self-sustaining, and community-owned. Everything
            is published openly for review.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {SECTIONS.map((s) => (
              <Link href={s.href} className="card" key={s.href} style={{ color: "inherit" }}>
                <h3>{s.t}</h3>
                <p className="muted">{s.b}</p>
                <span className="source" aria-hidden="true">Open →</span>
              </Link>
            ))}
          </div>
          <div className="callout" style={{ marginTop: 36 }}>
            <strong>Not official.</strong> {SITE.shortName} is a proposed authority and a
            public planning concept — not an officially constituted government body, and
            not endorsed. {SITE.status}. Figures are indicative and sourced from public
            reporting.
          </div>
        </div>
      </section>
    </>
  );
}

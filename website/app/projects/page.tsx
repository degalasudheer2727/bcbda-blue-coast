import type { Metadata } from "next";
import { PROJECTS, PHASES } from "@/lib/site-data";
import Media from "@/components/Media";

export const metadata: Metadata = {
  title: "Project Pipeline",
  description: "The 14 flagship projects of the Bapatla–Chirala corridor, phased across ten years.",
};

// One representative image per project (real area photos where they exist,
// otherwise illustrative themes — see lib/images.ts).
const PROJECT_IMG: Record<string, string> = {
  P1: "place-suryalanka", P2: "solar", P3: "dunes", P4: "waste", P5: "mobility",
  P6: "mangrove", P7: "seafood", P8: "skilling", P9: "wellness", P10: "cycling",
  P11: "water-treatment", P12: "research", P13: "warning", P14: "digital",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 64 }}>
          <span className="eyebrow">Delivery pipeline</span>
          <h1>Fourteen flagship projects</h1>
          <p className="lead">Catalytic projects sequenced so a clean, certified “proof beach” comes first, the loops that make everything cheaper to run come early, and commercialisation scales on top.</p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      {PHASES.map((ph) => (
        <section className={`section--tight ${ph.n === 2 ? "bg-sand" : ""}`} key={ph.n}>
          <div className="container">
            <div className="phase" style={{ borderTop: "none", paddingTop: 8 }}>
              <div className="when">
                Phase {ph.n}
                <small>{ph.years}</small>
              </div>
              <div>
                <h2>{ph.name}</h2>
                <p className="muted">{ph.goal}</p>
              </div>
            </div>
            <div className="grid grid-3" style={{ marginTop: 18 }}>
              {PROJECTS.filter((p) => p.phase === ph.n).map((p) => (
                <div className="card has-media" key={p.id}>
                  <Media k={PROJECT_IMG[p.id]} />
                  <span className={`tag tag--p${p.phase}`}>{p.id} · Node {p.node}</span>
                  <h3 style={{ marginTop: 10 }}>{p.name}</h3>
                  <p className="muted">{p.pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

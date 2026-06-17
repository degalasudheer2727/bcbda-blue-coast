import type { Metadata } from "next";
import { KPIS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "The self-sustaining eco-system model: closed loops for energy, water, waste, food, and ecology.",
};

const LOOPS = [
  { name: "Energy loop", body: "Rooftop and canopy solar plus coastal wind feed a corridor micro-grid; surplus is exported to the grid. Target ≥ 90% renewable electricity.", icon: "☀" },
  { name: "Water loop", body: "Rainwater harvested, wastewater treated to tertiary standard and reused, groundwater recharged. Zero untreated discharge to the sea.", icon: "💧" },
  { name: "Waste loop", body: "Segregate, compost, and recover materials for revenue. Zero-landfill operations and plastic-free beaches.", icon: "♻" },
  { name: "Food loop", body: "Boat-to-market and farm-to-shack chains keep value local; sustainable fisheries and aquaculture protect the resource.", icon: "🐟" },
  { name: "Ecology loop", body: "Dunes, casuarina, mangroves, and reefs provide free coastal defence, fish nurseries, and blue-carbon storage.", icon: "🌿" },
  { name: "Economy loop", body: "Fees, concessions, energy, and recovery revenue recirculate into O&M, conservation, and a community benefit share.", icon: "⟳" },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 64 }}>
          <span className="eyebrow">The core idea</span>
          <h1>A self-sustaining eco-system</h1>
          <p className="lead">
            A coastal destination is normally a drain — importing energy, water,
            food and materials, and exporting waste and profit. We invert that:
            the corridor is engineered as closed loops, so it is cheaper to run,
            more resilient, and able to fund its own upkeep.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Six loops</span>
            <h2>Nature and economy, engineered to feed each other</h2>
          </div>
          <div className="grid grid-3">
            {LOOPS.map((l) => (
              <div className="card" key={l.name}>
                <div className="icon" style={{ fontSize: "1.5rem" }}>{l.icon}</div>
                <h3>{l.name}</h3>
                <p className="muted">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ocean">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>How “self-sustaining” is measured</span>
            <h2>Ten-year targets, published openly</h2>
          </div>
          <div className="grid grid-2">
            <div>
              {KPIS.slice(0, 4).map((k) => (
                <div className="kpi" key={k.goal} style={{ borderBottomColor: "rgba(255,255,255,0.18)" }}>
                  <span>{k.goal}</span>
                  <span className="target" style={{ color: "var(--teal-100)" }}>{k.target}</span>
                </div>
              ))}
            </div>
            <div>
              {KPIS.slice(4).map((k) => (
                <div className="kpi" key={k.goal} style={{ borderBottomColor: "rgba(255,255,255,0.18)" }}>
                  <span>{k.goal}</span>
                  <span className="target" style={{ color: "var(--teal-100)" }}>{k.target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

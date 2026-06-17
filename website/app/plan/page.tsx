import type { Metadata } from "next";
import Link from "next/link";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description:
    "Plan a trip to the Bapatla–Chirala coast — how to reach by road, rail and air, the best time to visit, getting around, and ready-made day and weekend itineraries.",
  alternates: { canonical: "/plan" },
};

const REACH = [
  { mode: "By road", body: "NH-167A (Vodarevu–Piduguralla, four-laning underway) plugs the coast into the interior and the capital region. ~60 km from Amaravati; well connected to Guntur & Vijayawada." },
  { mode: "By rail", body: "Bapatla and Chirala stations sit on the busy Vijayawada–Gudur line (both being upgraded under Amrit Bharat). Frequent trains from across Andhra Pradesh." },
  { mode: "By air", body: "Nearest airport is Vijayawada (Gannavaram), roughly 100 km away, with onward road/rail. Visakhapatnam and Chennai are the larger hubs further out." },
];

const ITINERARIES = [
  {
    name: "Day trip",
    items: ["Sunrise at Suryalanka", "Breakfast + beach walk", "Watersports at Vodarevu", "Seafood lunch", "Bhavanarayana temple, Bapatla", "Sunset & drive back"],
  },
  {
    name: "Weekend",
    items: ["Day 1: Suryalanka beach + stay", "Evening market & seafood", "Day 2: Vodarevu watersports", "Ramapuram quiet coast", "Bhattiprolu stupa detour", "Cashew & handloom shopping"],
  },
];

const KNOW = [
  { k: "Best time", v: "October – March", d: "Cooler, pleasant and dry; ideal for the beach. Summers are hot; monsoon (Jun–Sep) brings rough seas." },
  { k: "Getting around", v: "Edge parking + shuttle", d: "The plan keeps the active beach vehicle-free — park at the edge of each node and use shuttles / NMT along the green-blue spine." },
  { k: "Safety & water", v: "Blue-Flag standard", d: "Lifeguards, tested bathing water and clean beaches are the target; swim in flagged zones and follow local guidance." },
  { k: "Dolphins", v: "Around November", d: "Seasonal dolphin-spotting boat trips run off Suryalanka with local fishers — weather permitting." },
];

export default function PlanPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 56 }}>
          <span className="eyebrow">Plan your trip</span>
          <h1>Everything you need to go</h1>
          <p className="lead">
            How to reach the coast, when to come, how to get around, and two ready-made
            itineraries — so you can spend less time planning and more time on the sand.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" />
        </svg>
      </section>

      {/* How to reach + map */}
      <section className="section">
        <div className="container beach-split">
          <div>
            <span className="eyebrow">Getting here</span>
            <h2>How to reach</h2>
            <div className="grid" style={{ marginTop: 18, gap: 16 }}>
              {REACH.map((r) => (
                <div className="card" key={r.mode}>
                  <h3>{r.mode}</h3>
                  <p className="muted">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
          <aside>
            <span className="eyebrow">On the map</span>
            <h3 style={{ marginBottom: 14 }}>The corridor</h3>
            <MapEmbed lat={15.8} lng={80.46} label="Bapatla–Chirala coast" />
          </aside>
        </div>
      </section>

      {/* Know before you go */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 26 }}>
            <span className="eyebrow">Know before you go</span>
            <h2>The essentials</h2>
          </div>
          <div className="grid grid-4">
            {KNOW.map((k) => (
              <div className="card" key={k.k}>
                <span className="exp-where">{k.k}</span>
                <div className="stay-price" style={{ marginTop: 2 }}>{k.v}</div>
                <p className="muted" style={{ marginTop: 8 }}>{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itineraries */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 26 }}>
            <span className="eyebrow">Ready-made</span>
            <h2>Sample itineraries</h2>
          </div>
          <div className="grid grid-2">
            {ITINERARIES.map((it) => (
              <div className="card" key={it.name}>
                <span className="tag tag--p2">{it.name}</span>
                <ol className="gov-list" style={{ marginTop: 16 }}>
                  {it.items.map((x, i) => (
                    <li key={i}><span className="gov-num">{i + 1}</span><span>{x}</span></li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 34 }}>
            <Link href="/stays" className="btn btn--primary">Find a place to stay →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

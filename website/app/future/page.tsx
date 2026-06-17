import type { Metadata } from "next";
import Link from "next/link";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "BCBDA 2036 — The Coast, Realised",
  description:
    "An envisioned scenario: the Bapatla–Chirala coast ten years on — Blue Flag beaches, an energy-positive shoreline, a living blue-carbon reserve, and a smart coastal command centre. A forward-looking vision, not a forecast.",
  alternates: { canonical: "/future" },
};

const ACHIEVED = [
  { v: "2", l: "Blue Flag beaches certified" },
  { v: "100%", l: "O&M from own revenue" },
  { v: "92%", l: "renewable electricity" },
  { v: "5,400", l: "local jobs · 46% women" },
  { v: "62 ha", l: "ecology restored" },
  { v: "+18 MW", l: "clean energy exported" },
];

const CMD = [
  { k: "Beach water quality", v: "Excellent", s: [6, 7, 7, 8, 8, 9, 9], tone: "good" },
  { k: "Footfall today", v: "21,480", s: [3, 5, 6, 8, 7, 9, 8], tone: "" },
  { k: "Renewable mix", v: "92%", s: [7, 7, 8, 8, 9, 9, 9], tone: "good" },
  { k: "Waste diverted", v: "99.2%", s: [8, 8, 9, 9, 9, 9, 9], tone: "good" },
  { k: "Sea state", v: "Calm · safe", s: [4, 5, 4, 5, 5, 6, 5], tone: "" },
  { k: "Surge risk", v: "Low", s: [2, 2, 3, 2, 2, 1, 2], tone: "good" },
];

const REALISED = [
  { img: "place-suryalanka", t: "The Blue Flag promenade", b: "Suryalanka’s ‘Bay of Bapatla’ promenade runs clean and certified — lifeguarded, vehicle-free, lit by its own solar grid." },
  { img: "solar", t: "An energy-positive shoreline", b: "Solar and wind surplus is exported to the grid. The coast earns from the same sun and breeze that draw the visitor." },
  { img: "mangrove", t: "A living blue-carbon reserve", b: "Restored mangroves and dunes defend the shore and pay for their own protection through verified carbon credits." },
  { img: "skilling", t: "Community co-ownership", b: "Fisherfolk and SHGs hold real stakes — cleaning brigades, shacks, watersports and tours run by local cooperatives." },
];

const DAY = [
  { t: "06:00", h: "Dawn patrol", b: "Blue-brigade crews and lifeguards open a freshly-cleaned beach; water-quality sensors report ‘excellent’." },
  { t: "11:00", h: "Marine recreation", b: "Regulated watersports run at Vodarevu; the seafood culinary district fills with day visitors from Amaravati and Hyderabad." },
  { t: "17:00", h: "Golden hour", b: "The waterfront market hums; e-shuttles glide the green-blue spine; parking stays at the edge, the sand stays free." },
  { t: "21:00", h: "The coast gives back", b: "Surplus renewable power flows to the grid; the command centre logs another self-funded, surge-safe day." },
];

function Spark({ data, tone }: { data: number[]; tone: string }) {
  const w = 120, h = 34, max = 10;
  const pts = data.map((d, i) => `${(i / (data.length - 1)) * w},${h - (d / max) * (h - 4) - 2}`).join(" ");
  return (
    <svg className="cmd-spark" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      <polyline points={pts} fill="none" stroke={tone === "good" ? "#5cc7b6" : "#7fb8ff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FuturePage() {
  return (
    <div className="future">
      {/* Hero */}
      <section className="future-hero">
        <div className="container">
          <span className="future-chip">Envisioned scenario · 10 years forward</span>
          <span className="eyebrow" style={{ color: "var(--teal-100)" }}>BCBDA · 2036</span>
          <h1>The coast, realised.</h1>
          <p className="lead" style={{ color: "rgba(255,255,255,0.9)" }}>
            Imagine the Bapatla–Chirala corridor ten years on — certified, self-funding,
            energy-positive, and alive with a blue-green economy its own community owns.
            This is a forward-looking vision of what the plan builds toward, not a
            forecast or a commitment.
          </p>
          <div className="hero-actions">
            <Link href="/vision" className="btn btn--ghost">How we get there →</Link>
            <Link href="/beaches" className="btn btn--ghost">Explore the coast</Link>
          </div>
        </div>
      </section>

      {/* Achieved targets */}
      <section className="section future-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>2036 · targets realised</span>
            <h2>What “done” looks like</h2>
          </div>
          <div className="future-stats">
            {ACHIEVED.map((a) => (
              <div className="fstat" key={a.l}>
                <div className="fstat-v">{a.v}</div>
                <div className="fstat-l">{a.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Command centre mock */}
      <section className="section future-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>Smart coastal command centre</span>
            <h2>One live view of the corridor</h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.85)" }}>
              A 2036 mock-up: real-time tiles a control room would watch. Illustrative
              data — the architecture is on the roadmap, the numbers are scenario values.
            </p>
          </div>
          <div className="cmd">
            <div className="cmd-bar">
              <span className="cmd-live"><span className="ticker-dot" aria-hidden="true" /> LIVE · 2036</span>
              <span className="cmd-title">Bapatla–Chirala Corridor · Operations</span>
            </div>
            <div className="cmd-grid">
              {CMD.map((c) => (
                <div className="cmd-tile" key={c.k}>
                  <div className="cmd-k">{c.k}</div>
                  <div className="cmd-v">{c.v}</div>
                  <Spark data={c.s} tone={c.tone} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Realised corridor */}
      <section className="section future-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>The realised corridor</span>
            <h2>Four promises, kept</h2>
          </div>
          <div className="grid grid-2">
            {REALISED.map((r) => {
              const im = img(r.img);
              return (
                <article className="card has-media future-card" key={r.t}>
                  {im && (
                    <div className="card-media" style={{ aspectRatio: "16 / 9" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={im.src} alt={im.alt} loading="lazy" decoding="async" />
                      <span className="media-tag">Envisioned 2036</span>
                    </div>
                  )}
                  <h3 style={{ marginTop: 14 }}>{r.t}</h3>
                  <p className="muted">{r.b}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* A day in 2036 */}
      <section className="section future-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>A day in 2036</span>
            <h2>Dawn to dark on a self-sustaining coast</h2>
          </div>
          <div className="future-day">
            {DAY.map((d) => (
              <div className="fday" key={d.t}>
                <div className="fday-t">{d.t}</div>
                <div>
                  <h3 style={{ color: "#fff" }}>{d.h}</h3>
                  <p className="muted">{d.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section future-section future-cta">
        <div className="container center">
          <span className="eyebrow" style={{ color: "var(--teal-100)" }}>Back to today</span>
          <h2>This is the destination. Here’s the first step.</h2>
          <p className="lead center" style={{ color: "rgba(255,255,255,0.88)" }}>
            2036 is a scenario — it’s earned, not assumed. It starts with a single
            certified “proof beach” and a plan published in the open.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/vision" className="btn btn--primary">Read the vision</Link>
            <Link href="/news" className="btn btn--ghost">See today’s progress</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

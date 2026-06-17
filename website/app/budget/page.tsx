import type { Metadata } from "next";
import { BUDGET } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Investment & Budget",
  description: "A realistic ₹15,000 crore, 10-year investment programme for the Bapatla–Chirala corridor.",
};

function Bar({ label, amount, share, color }: { label: string; amount: number; share: number; color: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem", marginBottom: 6 }}>
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span className="muted" style={{ whiteSpace: "nowrap" }}>₹{amount.toLocaleString("en-IN")} cr · {share}%</span>
      </div>
      <div style={{ background: "var(--sand-200)", borderRadius: 999, height: 12, overflow: "hidden" }}>
        <div style={{ width: `${share}%`, height: "100%", background: color, borderRadius: 999 }} />
      </div>
    </div>
  );
}

export default function BudgetPage() {
  const phaseColors = ["#2a9d52", "#0a9396", "#ee6c4d"];
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 60 }}>
          <span className="hero-badge">● Three phases · ₹1,500 + ₹500 + ₹500 cr</span>
          <span className="eyebrow">Investment programme</span>
          <h1>₹2,500 crore, in three phases</h1>
          <p className="lead">
            A lean, affordable, public–private programme — front-loaded into a
            ₹1,500 cr Phase 1 that delivers a certifiable “proof beach,” then
            two ₹500 cr phases to build out and harden. Structured so the public
            exchequer carries the minority of risk: 44% catalytic schemes, 36%
            private/PPP, 12% green debt, 8% recaptured value.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="stats">
            <div className="stat"><div className="num">₹2,500 cr</div><div className="lbl">total investment</div></div>
            <div className="stat"><div className="num">~44%</div><div className="lbl">non-exchequer capital</div></div>
            <div className="stat"><div className="num">~Year 6</div><div className="lbl">O&amp;M self-sufficient</div></div>
            <div className="stat"><div className="num">~30 lakh</div><div className="lbl">annual visitors at maturity</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start" }}>
            <div className="card">
              <span className="eyebrow">By phase</span>
              <h3 style={{ margin: "6px 0 18px" }}>When it is spent</h3>
              {BUDGET.byPhase.map((p, i) => (
                <Bar key={p.phase} label={`Phase ${p.phase} — ${p.name} (${p.years})`} amount={p.amount} share={p.share} color={phaseColors[i]} />
              ))}
            </div>
            <div className="card">
              <span className="eyebrow">By financing source</span>
              <h3 style={{ margin: "6px 0 18px" }}>Where it comes from</h3>
              {BUDGET.byFinancing.map((f, i) => (
                <Bar key={f.source} label={f.source} amount={f.amount} share={f.share} color={["#0a9396", "#2a9d52", "#5b8a72", "#ee6c4d"][i]} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">By sector</span>
            <h2>Where the ₹15,000 crore goes</h2>
          </div>
          <div className="card">
            {BUDGET.bySector.map((s) => (
              <Bar key={s.sector} label={s.sector} amount={s.amount} share={s.share} color="#0a7d6b" />
            ))}
          </div>
          <p className="muted" style={{ marginTop: 16, fontSize: "0.9rem" }}>
            Indicative planning allocation for discussion, to be confirmed by a full
            feasibility study, EIA, and financial model. Not financial advice or a
            commitment of public funds.
          </p>
        </div>
      </section>
    </>
  );
}

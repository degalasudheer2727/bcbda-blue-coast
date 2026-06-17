"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  VISION, NODES, ZONES, INFRASTRUCTURE, PROJECTS, PHASES, BUDGET, KPIS, ENGINEERING,
} from "@/lib/site-data";

const TABS = [
  { id: "vision", label: "Vision" },
  { id: "plan", label: "Master Plan" },
  { id: "projects", label: "Projects" },
  { id: "invest", label: "Investment" },
  { id: "green", label: "Sustainability" },
  { id: "gov", label: "Governance" },
  { id: "deliver", label: "Execution" },
];

function Accordion({ items }: { items: { t: string; b: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc-item ${isOpen ? "open" : ""}`} key={it.t}>
            <button className="acc-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <span>{it.t}</span>
              <span className="acc-chevron" aria-hidden="true" />
            </button>
            <div className="acc-body" hidden={!isOpen}>
              <p className="muted">{it.b}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AboutTabs() {
  const [active, setActive] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const go = (i: number) => setActive(Math.max(0, Math.min(TABS.length - 1, i)));

  // swipe gesture on the panel — left/right changes tab
  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(active + (dx < 0 ? 1 : -1));
    touch.current = null;
  };

  const id = TABS[active].id;

  return (
    <div className="tabs">
      {/* swipeable segmented control */}
      <div className="tabbar" role="tablist" aria-label="About sections">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === i}
            className={`tab ${active === i ? "active" : ""}`}
            onClick={() => go(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        className="tab-panel"
        role="tabpanel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {id === "vision" && (
          <div className="reveal-in">
            <p className="lead">“{VISION.statement}”</p>
            <div className="grid grid-3" style={{ marginTop: 24 }}>
              {VISION.values.map((v) => (
                <div className="card" key={v.name}>
                  <h3>{v.name}</h3>
                  <p className="muted">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {id === "plan" && (
          <div className="reveal-in">
            <h3 className="sub">Four nodes along one spine</h3>
            <div className="grid grid-2">
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
            </div>
            <h3 className="sub" style={{ marginTop: 32 }}>Zoning &amp; infrastructure</h3>
            <Accordion items={[
              ...ZONES.map((z) => ({ t: `${z.code} · ${z.name}`, b: `${z.use} — ${z.rule}` })),
              ...INFRASTRUCTURE.slice(0, 6).map((x) => ({ t: x.name, b: x.body })),
            ]} />
          </div>
        )}

        {id === "projects" && (
          <div className="reveal-in">
            {PHASES.map((ph) => (
              <div key={ph.n} style={{ marginBottom: 22 }}>
                <div className="meta-row" style={{ marginBottom: 12 }}>
                  <span className={`tag tag--p${ph.n}`}>Phase {ph.n}</span>
                  <strong>{ph.name}</strong>
                  <span className="muted" style={{ fontSize: "0.85rem" }}>{ph.years}</span>
                </div>
                <div className="chip-row">
                  {PROJECTS.filter((p) => p.phase === ph.n).map((p) => (
                    <span className="chip" key={p.id} style={{ cursor: "default" }}>{p.id} · {p.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {id === "invest" && (
          <div className="reveal-in">
            <p className="lead">₹{BUDGET.total.toLocaleString("en-IN")} crore across three phases — front-loaded into a ₹1,500 cr “proof beach”.</p>
            <div style={{ marginTop: 22, display: "grid", gap: 16 }}>
              {BUDGET.byPhase.map((p) => (
                <div key={p.phase}>
                  <div className="meta-row" style={{ justifyContent: "space-between", marginBottom: 6 }}>
                    <span><strong>Phase {p.phase}</strong> — {p.name}</span>
                    <span className="muted">₹{p.amount.toLocaleString("en-IN")} cr · {p.share}%</span>
                  </div>
                  <div className="bar"><div className="bar-fill" style={{ width: `${p.share}%` }} /></div>
                </div>
              ))}
            </div>
            <h3 className="sub" style={{ marginTop: 28 }}>How it’s financed</h3>
            <div className="grid grid-2">
              {BUDGET.byFinancing.map((f) => (
                <div className="card" key={f.source}>
                  <div className="stay-price">₹{f.amount.toLocaleString("en-IN")} cr · {f.share}%</div>
                  <p className="muted" style={{ marginTop: 4 }}>{f.source}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {id === "green" && (
          <div className="reveal-in">
            <h3 className="sub">Engineering with nature</h3>
            <div className="grid grid-2">
              {ENGINEERING.slice(0, 6).map((e) => (
                <div className="card" key={e.title}>
                  <h3>{e.title}</h3>
                  <p className="muted">{e.body}</p>
                </div>
              ))}
            </div>
            <h3 className="sub" style={{ marginTop: 28 }}>Targets</h3>
            <div className="grid grid-2">
              {KPIS.map((k) => (
                <div className="kpi" key={k.goal}>
                  <span>{k.goal}</span>
                  <span className="target">{k.target}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {id === "gov" && (
          <div className="reveal-in">
            <div className="draft-banner" role="note">
              <span className="draft-dot" aria-hidden="true" />
              <span><strong>Draft proposal — not an issued Government Order.</strong> BCBDA is a proposed authority, not yet officially constituted.</span>
            </div>
            <p className="muted">Proposed to function under the Municipal Administration &amp; Urban Development Department, with headquarters in the Bapatla/Chirala area.</p>
            <div className="gov-table" style={{ marginTop: 16 }}>
              <div className="gov-table-head" role="row"><span>Position</span><span>Name / Designation</span></div>
              <div className="gov-table-row"><span className="gov-role">Chairman</span><span>Secretary to Government, MA&amp;UD Department</span></div>
              <div className="gov-table-row"><span className="gov-role">Vice-Chairman</span><span>District Collector, Bapatla / Prakasam</span></div>
              <div className="gov-table-row"><span className="gov-role">Members</span><span className="muted">To be notified per rules.</span></div>
            </div>
          </div>
        )}

        {id === "deliver" && (
          <div className="reveal-in">
            <h3 className="sub">A ten-year delivery path</h3>
            <Accordion items={[
              { t: "Mobilise (Months 0–6)", b: "Secure approval, constitute the authority and board, open the fund, commission baseline surveys, start community engagement." },
              { t: "Notify the statutory master plan", b: "Notify the area and zoning, stand up the single-window approval desk, publish everything openly." },
              { t: "Phase 1 — Proof beach (₹1,500 cr)", b: "Deliver the Suryalanka Blue Flag beach, parking & mobility, dune restoration, waste system, beachfront park, first shacks & market, micro-grid + EV starter." },
              { t: "Stand up O&M & cooperatives", b: "Form and train local cooperatives; put maintenance contracts and SLAs in place; begin revenue collection." },
              { t: "Phase 2 — Build-out (₹500 cr)", b: "Vodarevu watersports, estuary mangrove reserve, eco-resort concessions, the green-blue spine, skilling campus. Target O&M self-sufficiency by ~Year 6." },
              { t: "Phase 3 — Maturity (₹500 cr)", b: "Zero-discharge water, Ramapuram conservation node, coastal resilience & early-warning, the open digital twin. Pursue a second Blue Flag." },
            ]} />
            <p className="muted" style={{ marginTop: 18 }}>
              See the <Link href="/future">2036 vision</Link> for the realised scenario.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

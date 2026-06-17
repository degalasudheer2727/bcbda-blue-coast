import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "How government, investors, communities, and citizens can help shape the Bapatla–Chirala coast.",
};

const AUDIENCES = [
  { who: "Government & agencies", body: "Champion the statutory authority, align line departments, and unlock catalytic Phase-1 schemes (Tourism, Sagarmala, coastal & climate funds)." },
  { who: "Investors & developers", body: "Partner on PPP concessions — eco-resorts, watersports, renewable energy, and the culinary district — under public standards with revenue-share terms." },
  { who: "Coastal communities", body: "Form cooperatives and SHGs for shacks, homestays, tours, and clean-up; take reserved seats on the Community Assembly and a share of corridor revenue." },
  { who: "Experts & citizens", body: "Strengthen the plan: contribute data, coastal-engineering review, and ideas through the open GitHub repository." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 64 }}>
          <span className="eyebrow">Open by default</span>
          <h1>Help shape this coast</h1>
          <p className="lead">This is a public planning artifact. Whether you govern, invest, fish these waters, or simply care about doing coastal development right — there is a way to contribute.</p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {AUDIENCES.map((a) => (
              <div className="card" key={a.who}>
                <h3>{a.who}</h3>
                <p className="muted">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container center">
          <span className="eyebrow">Contribute</span>
          <h2>Everything is on GitHub</h2>
          <p className="lead center">The full vision, master plan, governance framework, sustainability model, budget, and this website's source are public. Open an issue, propose an edit, or fork the plan.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a href={SITE.repoUrl} className="btn btn--primary">Open the repository</a>
            <a href={`${SITE.repoUrl}/issues`} className="btn btn--outline">Raise an issue or idea</a>
          </div>
          <p className="muted" style={{ marginTop: 24, fontSize: "0.9rem" }}>
            BCBDA is a <strong>proposed</strong> body. This material is an independent
            planning concept for consideration by the Government of Andhra Pradesh,
            not an official decision.
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";
import AboutTabs from "@/components/AboutTabs";

export const metadata: Metadata = {
  title: "About the Project",
  description:
    "The proposed Bapatla–Chirala Beach Development Authority — vision, master plan, projects, investment, sustainability, governance and execution, in one place.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 52 }}>
          <span className="eyebrow">About the project</span>
          <h1>The plan behind the destination</h1>
          <p className="lead">
            Ecology first, financially self-sustaining, community-owned — and published
            openly. Swipe or tap through the plan.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" />
        </svg>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <AboutTabs />
          <div className="callout" style={{ marginTop: 40 }}>
            <strong>Not official.</strong> {SITE.shortName} is a proposed authority and a
            public planning concept — not an officially constituted government body, and
            not endorsed. {SITE.status}. Figures are indicative and sourced from public reporting.
          </div>
        </div>
      </section>
    </>
  );
}

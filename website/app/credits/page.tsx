import type { Metadata } from "next";
import { CREDITS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Image Credits",
  description:
    "Attribution for the photographs used on this site — sourced from Wikimedia Commons under public-domain and Creative Commons licences.",
  alternates: { canonical: "/credits" },
};

export default function CreditsPage() {
  const authentic = CREDITS.filter((c) => !c.illustrative);
  const illustrative = CREDITS.filter((c) => c.illustrative);

  return (
    <section className="section" style={{ paddingTop: 64 }}>
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a> <span aria-hidden="true">/</span> Image Credits
        </nav>
        <div className="section-head">
          <span className="eyebrow">Attribution</span>
          <h1>Image credits</h1>
          <p className="lead">
            Every photograph on this site comes from <strong>Wikimedia Commons</strong>{" "}
            under a public-domain or Creative Commons licence. We do not use images
            from social media or any source we cannot legally republish. Images
            labelled “Illustrative” are representative — the projects they depict are
            proposed, not yet built.
          </p>
        </div>

        <h2 style={{ marginTop: 8 }}>Photos of the Bapatla–Chirala area</h2>
        <ul className="doclist" style={{ marginTop: 18 }}>
          {authentic.map((c) => (
            <li key={c.key}>
              <a href={c.source} target="_blank" rel="noopener noreferrer">
                <span>{c.title}</span>
                <span className="muted" style={{ fontWeight: 600 }}>
                  {c.author} · {c.license} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        <h2 style={{ marginTop: 40 }}>Representative / illustrative imagery</h2>
        <ul className="doclist" style={{ marginTop: 18 }}>
          {illustrative.map((c) => (
            <li key={c.key}>
              <a href={c.source} target="_blank" rel="noopener noreferrer">
                <span>{c.title}</span>
                <span className="muted" style={{ fontWeight: 600 }}>
                  {c.author} · {c.license} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

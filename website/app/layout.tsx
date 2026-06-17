import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ScrollFX";
import UpdatesTicker, { type TickerItem } from "@/components/UpdatesTicker";
import { SITE } from "@/lib/site-data";
import { getNews } from "@/lib/content";
import { getCoverage } from "@/lib/coverage";

// Display: Fraunces — an editorial, optical-sized serif for civic authority + warmth.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body / UI: DM Sans — clean, highly legible, accessible at 16px+.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} — Bapatla–Chirala Beach Development Authority`,
    template: `%s · ${SITE.shortName}`,
  },
  description:
    "A ₹2,500 crore, three-phase plan to develop the Suryalanka–Vodarevu–Ramapuram coast as a clean, climate-resilient, community-owned, self-sustaining beach destination — with a 3D/VR experience.",
  applicationName: "BCBDA",
  keywords: [
    "Bapatla", "Chirala", "Suryalanka beach", "Vodarevu beach", "Ramapuram beach",
    "beach development authority", "Andhra Pradesh", "blue economy", "Blue Flag beach",
    "coastal development", "eco-tourism", "sustainable beach", "Viksit Bharat 2047",
    "coastal master plan", "beach tourism India",
  ],
  authors: [{ name: "BCBDA (proposed)" }],
  creator: "BCBDA",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.shortName,
    title: `${SITE.shortName} — A self-sustaining coast on the Bay of Bengal`,
    description:
      "Vision, master plan, ₹2,500 cr investment case, blueprint, execution runbook, and an interactive 3D/VR model of the future Bapatla–Chirala coast.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.shortName} — Bapatla–Chirala Beach Development Authority`,
    description: "A self-sustaining, eco-first coastal corridor on the Bay of Bengal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "government",
};

export const viewport: Viewport = {
  themeColor: "#0a9396",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "Bapatla–Chirala Beach Development Authority",
  alternateName: "BCBDA",
  description:
    "A proposed special-purpose authority to develop the Bapatla–Chirala coast as a self-sustaining, climate-resilient beach destination.",
  url: SITE.url,
  areaServed: {
    "@type": "Place",
    name: "Bapatla District, Andhra Pradesh, India",
    geo: { "@type": "GeoCoordinates", latitude: 15.8, longitude: 80.5 },
  },
  knowsAbout: [
    "Coastal development", "Blue Flag beaches", "Sustainable tourism",
    "Coastal engineering", "Blue economy",
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Build the live ticker from CMS-curated developments + auto-fetched coverage.
  const news = getNews().slice(0, 5);
  const coverage = await getCoverage(10);
  const tickerItems: TickerItem[] = [
    ...news.map((n) => ({ label: n.title, href: "/news", tag: n.category })),
    ...coverage.map((c) => ({
      label: `${c.title} — ${c.source}`,
      href: c.url,
      tag: c.dateLabel || "Coverage",
      external: true,
    })),
  ];

  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollFX />
        <UpdatesTicker items={tickerItems} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

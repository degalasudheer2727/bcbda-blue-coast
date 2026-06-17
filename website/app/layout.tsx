import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ScrollFX";
import { SITE } from "@/lib/site-data";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollFX />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

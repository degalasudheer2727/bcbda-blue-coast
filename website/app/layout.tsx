import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    default: `${SITE.shortName} — ${SITE.name}`,
    template: `%s · ${SITE.shortName}`,
  },
  description: SITE.tagline,
  keywords: ["Bapatla", "Chirala", "Suryalanka", "Vodarevu", "beach development", "Andhra Pradesh", "blue economy", "Blue Flag", "coastal", "eco-tourism"],
  openGraph: {
    title: `${SITE.shortName} — ${SITE.name}`,
    description: SITE.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

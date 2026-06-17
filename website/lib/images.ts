// Image manifest. Files are downloaded from Wikimedia Commons by
// scripts/fetch-images.mjs (PD / CC only) with attribution in credits.json.
// Authentic = a real photo of the actual area/landmark. Others are
// representative ("illustrative") because the projects are not yet built.

import creditsData from "@/public/images/credits.json";

export type Credit = {
  key: string;
  file: string;
  title: string;
  author: string;
  license: string;
  source: string;
  illustrative: boolean;
};

export const CREDITS = creditsData as Credit[];
const BY_KEY = new Map(CREDITS.map((c) => [c.key, c]));

// Keys that are genuine photos of the Bapatla–Chirala area / its landmarks.
const AUTHENTIC = new Set([
  "hero-coast", "place-suryalanka", "place-vodarevu", "chirala-boats",
  "fishing-boat", "temple", "bhattiprolu", "library", "seafood",
]);

const ALT: Record<string, string> = {
  "hero-coast": "A ghost crab on the wet sand at Suryalanka beach, Bapatla, with the Bay of Bengal behind",
  "place-suryalanka": "A traditional catamaran log boat and a palm-thatch shack on Suryalanka beach",
  "place-vodarevu": "Children playing in the surf with fishing boats offshore on the Chirala–Vodarevu coast",
  "chirala-boats": "Fishing boats drawn up on the shore near Chirala beach",
  "fishing-boat": "A wooden fishing boat on the sand near Suryalanka beach",
  "temple": "The historic Sri Bhavanarayana Swamy temple at Bapatla",
  "bhattiprolu": "The ancient Maha Stupa at Bhattiprolu in Bapatla district",
  "library": "The building of the historic Saraswata Niketanam library at Vetapalem",
  "seafood": "Andhra-style pepper prawn fry — a coastal seafood specialty",
  "handloom": "A weaver at a traditional handloom",
  "cashew": "Cashew kernels, the crop Vetapalem is known for",
  "mangrove": "A coastal mangrove forest",
  "solar": "A solar photovoltaic power plant",
  "dunes": "Vegetated coastal sand dunes that defend the shore",
  "waste": "Segregated recycling and waste-recovery bins",
  "mobility": "A clean electric shuttle bus",
  "skilling": "A community vocational-training workshop",
  "wellness": "A low-rise beachfront eco-resort",
  "cycling": "A cycling path along the coast",
  "water-treatment": "A wastewater treatment plant",
  "research": "A coastal marine research station",
  "warning": "Coastal disaster response and early-warning operations",
  "digital": "A data centre powering an open digital platform",
  "market": "A coastal fish market",
};

export type SiteImage = { src: string; alt: string; illustrative: boolean; credit?: Credit };

export function img(key: string): SiteImage | null {
  const c = BY_KEY.get(key);
  if (!c) return null;
  return {
    src: c.file,
    alt: ALT[key] ?? c.title,
    illustrative: !AUTHENTIC.has(key),
    credit: c,
  };
}

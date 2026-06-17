// Things to do on the Bapatla–Chirala coast — the tourism "product".
export type Experience = {
  slug: string;
  title: string;
  img: string;
  where: string;
  body: string;
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "beaches-sunrise",
    title: "Beaches & sunrises",
    img: "place-suryalanka",
    where: "All four beaches",
    body: "Swim, sunbathe and walk long stretches of golden sand. Suryalanka’s sunrises over the Bay of Bengal are the corridor’s signature moment.",
  },
  {
    slug: "watersports",
    title: "Watersports",
    img: "place-vodarevu",
    where: "Vodarevu",
    body: "Jet-ski, kayaking, paddle-boarding and parasailing — concentrated in regulated zones at Vodarevu and run by trained local cooperatives.",
  },
  {
    slug: "dolphin-trips",
    title: "Dolphin & boat trips",
    img: "fishing-boat",
    where: "Suryalanka",
    body: "Seasonal dolphin-spotting boat rides (around November) and gentle fishing-boat trips with the local fishing community.",
  },
  {
    slug: "seafood",
    title: "Seafood trails",
    img: "seafood",
    where: "Vodarevu culinary district",
    body: "Fresh prawn fry, tangy chepala pulusu and beach-shack dining — coastal Andhra’s fiery, tamarind-bright seafood, landed that morning.",
  },
  {
    slug: "heritage",
    title: "Heritage & temples",
    img: "temple",
    where: "Bapatla & Bhattiprolu",
    body: "The ancient Bhavanarayana temple, Bhattiprolu’s 3rd-century-BCE stupa, and Vetapalem’s historic Saraswata Niketanam library.",
  },
  {
    slug: "wellness",
    title: "Wellness & eco-retreats",
    img: "wellness",
    where: "Eco-adventure node",
    body: "Low-density eco-resorts and wellness retreats set behind the casuarina belt — high-value, low-volume escapes that fund conservation.",
  },
  {
    slug: "markets-crafts",
    title: "Markets & crafts",
    img: "market",
    where: "Waterfront markets",
    body: "Seafood and craft markets, Chirala’s famed handloom cotton, and street food — footfall turned into local livelihoods.",
  },
  {
    slug: "nature-birding",
    title: "Nature & birding",
    img: "mangrove",
    where: "Ramapuram & Nizampatnam",
    body: "Quiet shores, restored dunes, mangroves and the Nizampatnam backwaters — a calmer, conservation-led counterpoint for nature lovers.",
  },
];

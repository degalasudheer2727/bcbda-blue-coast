// Beaches of the Bapatla–Chirala corridor. Facts/coords from public sources;
// stays & land prices are INDICATIVE (only APTDC Haritha Suryalanka is a verified
// real property). Government development reflects what is publicly reported —
// framed as proposed/funded, never as an official BCBDA act.

export type Stay = {
  name: string;
  type: string;
  price: string;
  real: boolean;
  url?: string;
};

export type Development = {
  title: string;
  status: "Funded" | "Proposed" | "Study-stage" | "None confirmed";
  detail: string;
  url?: string;
};

export type Beach = {
  slug: string;
  name: string;
  town: string;
  distanceKm: number;
  coords: { lat: number; lng: number };
  img: string; // image key in lib/images
  focus: string; // one-line role in the corridor
  famousFor: string[];
  speciality: string;
  developments: Development[];
  stays: Stay[];
  realEstate: { range: string; note: string; url?: string };
};

export const BEACHES: Beach[] = [
  {
    slug: "suryalanka",
    name: "Suryalanka Beach",
    town: "Bapatla",
    distanceKm: 9,
    coords: { lat: 15.8345, lng: 80.5051 },
    img: "place-suryalanka",
    focus: "Flagship · arrival & civic node",
    famousFor: ["Broad golden shoreline", "Water sports & jet-ski", "Sunrise over the Bay", "APTDC beach resort", "Casuarina approach"],
    speciality:
      "The most developed beach of the corridor, ~9 km from Bapatla, known for its broad sandy stretch, water-sports operators and the only government beach resort on the coast. It is the focus of the flagship ‘Bay of Bapatla’ upgrade.",
    developments: [
      {
        title: "‘Bay of Bapatla’ — world-class beach development (Swadesh Darshan 2.0)",
        status: "Funded",
        detail:
          "₹97.52 cr released under Swadesh Darshan 2.0 to rebrand Suryalanka: welcome arch, camping, cycling-track approach road, cobblestone walkways, tourist & admin buildings, landscaping, water sports, an 11 KV solar system and waste management. Blue Flag certification is being pursued.",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/centre-releases-9752-crore-for-suryalanka-beach-development-1869329",
      },
    ],
    stays: [
      { name: "Haritha Suryalanka Beach Resort (APTDC)", type: "Govt resort", price: "₹2,500–₹5,000 / night", real: true, url: "https://aptdc.ap.gov.in/" },
      { name: "Beachfront cottage / homestay", type: "Cottage", price: "₹1,500–₹3,000 / night", real: false },
    ],
    realEstate: {
      range: "≈ ₹6,000–₹13,000 / sq yd",
      note: "Indicative, beach-adjacent plots — extrapolated from Chirala-corridor listings; not an official rate.",
      url: "https://www.99acres.com/residential-land-plots-in-chirala-prakasham-ffid",
    },
  },
  {
    slug: "vodarevu",
    name: "Vodarevu Beach",
    town: "Chirala",
    distanceKm: 6,
    coords: { lat: 15.7956, lng: 80.4142 },
    img: "place-vodarevu",
    focus: "Marine recreation node",
    famousFor: ["Coconut-palm shore", "Closest beach to Hyderabad", "Weekend crowds", "Watersports, fishing & boat rides", "Large fishing community"],
    speciality:
      "About 6 km from Chirala, Vodarevu is the corridor’s busiest weekend beach — palms line the shore and it draws heavy footfall from Hyderabad and Telangana. It is also home to a large fishing community the plan aims to bring in as co-owners.",
    developments: [
      {
        title: "Sustainable coastal / marine tourism",
        status: "Study-stage",
        detail:
          "No funded beach package specific to Vodarevu is on record yet. Research flags it as an ‘untapped’ site needing structured, community-benefiting tourism and basic infrastructure — a Phase-2 marine-recreation candidate.",
        url: "https://www.ijfmr.com/papers/2025/2/38872.pdf",
      },
    ],
    stays: [
      { name: "Chirala–Vodarevu homestay / lodge", type: "Homestay", price: "₹1,200–₹3,000 / night", real: false },
      { name: "Budget hotels, Chirala town (6 km)", type: "Hotel", price: "₹1,000–₹2,500 / night", real: false },
    ],
    realEstate: {
      range: "≈ ₹6,000–₹13,000 / sq yd",
      note: "Indicative; beach-view villa plots marketed ~₹12,999/sq yd between Vodarevu and Ramapuram (developer listing, not an official rate).",
      url: "https://www.99acres.com/residential-land-plots-in-chirala-prakasham-ffid",
    },
  },
  {
    slug: "ramapuram",
    name: "Ramapuram Beach",
    town: "Chirala",
    distanceKm: 4,
    coords: { lat: 15.7766, lng: 80.382 },
    img: "hero-coast",
    focus: "Conservation-led quiet coast",
    famousFor: ["Quiet, clean & uncrowded", "Shoreline casuarina", "Birdwatching & nature", "Serene retreat"],
    speciality:
      "A calmer, cleaner counterpoint ~4 km from Chirala, with trees lining the shore and a peaceful, low-development feel favoured by nature lovers. Deliberately conservation-leaning rather than mass tourism.",
    developments: [
      {
        title: "Kept low-density by design",
        status: "None confirmed",
        detail:
          "No state beautification package is on record for Ramapuram, consistent with its role as the corridor’s quiet, conservation-led stretch. Private plot/resort activity exists nearby but is not a government project.",
        url: "https://www.tripadvisor.in/Attraction_Review-g5868158-d5792063-Reviews-Ramapuram_Beach-Chirala_Prakasam_District_Andhra_Pradesh.html",
      },
    ],
    stays: [
      { name: "Eco-stay / cottage near Ramapuram", type: "Cottage", price: "₹1,500–₹3,500 / night", real: false },
      { name: "Budget hotels, Chirala town (4 km)", type: "Hotel", price: "₹1,000–₹2,500 / night", real: false },
    ],
    realEstate: {
      range: "≈ ₹6,000–₹13,000 / sq yd",
      note: "Indicative; villa plots marketed ~₹12,999/sq yd nearby (developer marketing, not an official/registration rate).",
      url: "https://www.99acres.com/residential-land-plots-in-chirala-prakasham-ffid",
    },
  },
  {
    slug: "nizampatnam",
    name: "Nizampatnam Beach",
    town: "Nizampatnam",
    distanceKm: 2,
    coords: { lat: 15.9007, lng: 80.6685 },
    img: "fishing-boat",
    focus: "Fishing harbour & port heritage",
    famousFor: ["Fishing harbour & port", "Nizampatnam lighthouse", "Working maritime town", "Backwaters & mangroves nearby"],
    speciality:
      "A historic port and fishing town south-east of the main corridor, defined by its harbour and lighthouse rather than leisure tourism — a working, maritime coast and a gateway to backwaters and mangroves.",
    developments: [
      {
        title: "Nizampatnam fishing harbour expansion",
        status: "Funded",
        detail:
          "The state is developing the Nizampatnam fishing harbour at ~₹450 cr (Phase II), works reported near completion, also covered under the Centre’s Sagar Parikrama programme. This is fisheries/port infrastructure rather than a beach-leisure project.",
        url: "https://www.thehansindia.com/andhra-pradesh/nizampatnam-fishing-harbour-to-be-developed-with-rs-450-crores-709680",
      },
    ],
    stays: [
      { name: "Lodge / guesthouse, Nizampatnam town", type: "Hotel", price: "₹800–₹2,000 / night", real: false },
    ],
    realEstate: {
      range: "≈ ₹3,000–₹8,000 / sq yd",
      note: "Broad indicative estimate for a smaller coastal town; no reliable local listings found — low confidence.",
    },
  },
];

export function getBeach(slug: string): Beach | undefined {
  return BEACHES.find((b) => b.slug === slug);
}

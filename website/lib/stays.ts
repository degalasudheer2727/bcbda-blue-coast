// Hotels, resorts & residential developments on the Bapatla–Chirala coast.
// Verified from public sources. Status is reported HONESTLY — including "no
// verifiable presence" for chains that have not actually signed/built here.
// Nothing is invented; absence is stated plainly.

export type StayStatus =
  | "Operating"
  | "Under construction"
  | "Announced"
  | "Elsewhere"
  | "Unverified";

export type Property = {
  name: string;
  type: string;
  location: string;
  status: StayStatus;
  detail: string;
  price?: string;
  url?: string;
};

// On-coast properties (real, verifiable).
export const PROPERTIES: Property[] = [
  {
    name: "Sea Breeze Beach Resort",
    type: "Beach resort",
    location: "Suryalanka Beach, Bapatla",
    status: "Operating",
    detail: "A family beach resort near Suryalanka with a beachfront pool, multi-cuisine restaurant and private beach access — popular for getaways and pre-wedding shoots.",
    url: "https://seabreezebeachresorts.co.in/",
  },
  {
    name: "Riviera Beach Resort",
    type: "Boutique resort",
    location: "Chirala (beachfront)",
    status: "Operating",
    detail: "A boutique beachfront resort (~30 rooms/suites) with an outdoor pool, sea-view balconies and a multi-cuisine restaurant; listed on Booking.com, Agoda and Tripadvisor.",
    price: "≈ ₹4,500+ / night (indicative)",
    url: "https://rivierabeachresort.in/",
  },
  {
    name: "V Hotels & Resorts",
    type: "Resort",
    location: "Chirala · ~9 min from Vodarevu Beach",
    status: "Operating",
    detail: "A mid-range resort a short walk from Vodarevu Beach with garden, restaurant, family rooms and a 24-hour desk; bookable on MakeMyTrip / Goibibo.",
    url: "https://www.goibibo.com/hotels/v-hotels-and-resorts-hotel-in-chirala-8410234663851331045/",
  },
  {
    name: "Yaganti Golden Sands",
    type: "Villa & plotted community",
    location: "Ipurupalem, near Bapatla beach",
    status: "Operating",
    detail: "A beachfront plotted/villa development with an associated resort by the Guntur-based Yaganti Group, a short drive from Bapatla town. (This is the ‘Yanganti’ you mentioned.)",
    url: "https://www.yagantigroup.com/yaganti-goldensands-bapatla.html",
  },
  {
    name: "Alohaa Beach Resort",
    type: "Resort township (RERA)",
    location: "Maddiboinavaripalem · ~20 min from Chirala/Bapatla",
    status: "Under construction",
    detail: "A RERA-registered (P08230055599) plotted resort-township of ~281–290 plots plus simplex/villa cottages by Sri Bhramara Townships; expected delivery around 2027. (The ‘Aalaa’ you mentioned — distinct from Sea Breeze.)",
    url: "https://alohaabeachresort.com/",
  },
  {
    name: "Lemon Tree Resort, Bapatla",
    type: "Branded hotel (signed)",
    location: "Bapatla · near Suryalanka Beach",
    status: "Announced",
    detail: "Lemon Tree Hotels has signed — not yet built — a 90-room resort with restaurant & bar, banquet space, pool, spa and fitness centre, to be managed by its Carnation Hotels arm. A genuine branded property coming to this coast.",
    url: "https://hospitalitynews.in/news/lemon-tree-hotels-expands-presence-with-new-properties-in-andhra-pradesh-and-chhattisgarh",
  },
];

// Names raised that do NOT have a verifiable property on this coast — shown
// transparently rather than faked.
export const NOT_HERE: Property[] = [
  {
    name: "Suncity",
    type: "Plotted-land developer",
    location: "Hyderabad / Yadadri corridor (Telangana)",
    status: "Elsewhere",
    detail: "The recognisable ‘Suncity’ brand (JSR Group) develops plotted ventures around Hyderabad — no verifiable project on the Bapatla–Chirala coast.",
  },
  {
    name: "Radisson",
    type: "Hotel chain",
    location: "Bapatla / Chirala / Prakasam",
    status: "Unverified",
    detail: "No operating, under-construction or announced Radisson-branded property was found on this coast. We won’t list one until there is a verifiable source.",
  },
  {
    name: "Hilton",
    type: "Hotel chain",
    location: "Bapatla / Chirala / Prakasam",
    status: "Unverified",
    detail: "No Hilton-branded property (operating, under construction or signed) was found here. Listed transparently as ‘not present’ rather than implied.",
  },
];

export const STATUS_META: Record<StayStatus, { label: string; tag: string }> = {
  Operating: { label: "Operating", tag: "tag--p1" },
  "Under construction": { label: "Under construction", tag: "tag--p2" },
  Announced: { label: "Announced · signed", tag: "tag--p3" },
  Elsewhere: { label: "Elsewhere — not on this coast", tag: "" },
  Unverified: { label: "No verifiable presence", tag: "" },
};

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bapatla–Chirala Beach Development Authority",
    short_name: "BCBDA",
    description: "A self-sustaining, eco-first coastal corridor on the Bay of Bengal.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfbf6",
    theme_color: "#0a9396",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

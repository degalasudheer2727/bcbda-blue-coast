import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-data";
import { BEACHES } from "@/lib/beaches";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/beaches", "/experiences", "/stays", "/plan", "/about", "/future",
    "/news", "/culture", "/experience", "/get-involved", "/credits",
    ...BEACHES.map((b) => `/beaches/${b.slug}`),
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

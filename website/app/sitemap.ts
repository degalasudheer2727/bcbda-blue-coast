import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/vision", "/master-plan", "/infrastructure", "/experience",
    "/budget", "/runbook", "/projects", "/sustainability", "/get-involved",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

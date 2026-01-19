import type { MetadataRoute } from "next";
import { SITE_URL, staticPaths } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-01-19"),
  }));
}

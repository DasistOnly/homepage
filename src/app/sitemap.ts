import type { MetadataRoute } from "next";
import { config } from "@/config";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    }
  ]
}
import { MetadataRoute } from "next";
import { SWAG_ITEMS } from "@/lib/data/swags";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gdgportharcourt.com.ng";
  const currentDate = new Date().toISOString();

  // Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/speakers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/swag`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dp-generator`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/brand-guidelines`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic Swag Product Detail Pages
  const swagProductRoutes: MetadataRoute.Sitemap = SWAG_ITEMS.map((item) => ({
    url: `${baseUrl}/swag/${item.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...swagProductRoutes];
}


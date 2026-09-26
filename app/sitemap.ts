import type { MetadataRoute } from "next";
import { getSlugs, getPosts, getCategorySlugs } from "@/lib/posts";

const BASE = "https://maplegadget.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getPosts();
  const dateFor = (slug: string) => {
    const p = posts.find((x) => x.slug === slug);
    const d = p?.date ? new Date(p.date) : now;
    return isNaN(d.getTime()) ? now : d;
  };

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/deals`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/disclosure`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const reviewPages: MetadataRoute.Sitemap = getSlugs().map((slug) => ({
    url: `${BASE}/reviews/${slug}`,
    lastModified: dateFor(slug),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = getCategorySlugs().map((slug) => ({
    url: `${BASE}/reviews/category/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...reviewPages, ...categoryPages];
}

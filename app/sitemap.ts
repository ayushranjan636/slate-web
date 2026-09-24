import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog-posts"

const SITE_URL = "https://www.slatemate.in"

// Update these dates when a page's content meaningfully changes.
const staticPages: Array<{
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}> = [
  { path: "", lastModified: "2026-09-24", changeFrequency: "weekly", priority: 1.0 },
  { path: "/product", lastModified: "2026-09-24", changeFrequency: "weekly", priority: 0.9 },
  { path: "/features", lastModified: "2026-09-24", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", lastModified: "2026-09-24", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", lastModified: "2026-09-24", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", lastModified: "2026-09-24", changeFrequency: "weekly", priority: 0.8 },
  { path: "/faq", lastModified: "2026-09-24", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources", lastModified: "2026-09-24", changeFrequency: "monthly", priority: 0.7 },
  { path: "/careers", lastModified: "2026-09-24", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", lastModified: "2026-09-24", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", lastModified: "2026-09-24", changeFrequency: "yearly", priority: 0.3 },
  { path: "/research/parent-survey-2025", lastModified: "2026-09-24", changeFrequency: "monthly", priority: 0.8 },
  { path: "/compare/eraksha-vs-google-family-link", lastModified: "2026-09-24", changeFrequency: "monthly", priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticPages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updated,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [...pages, ...posts]
}

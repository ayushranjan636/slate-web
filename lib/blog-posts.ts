import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

/**
 * Blog posts live as MDX files in /content/blog/<slug>.mdx.
 * To add a post: create a new .mdx file with the front-matter fields below.
 * It automatically appears on /blog, gets its own page, metadata, schema and sitemap entry.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export type BlogPostMeta = {
  slug: string
  title: string
  /** Shorter title used on blog cards (optional). */
  cardTitle: string
  tagline: string
  excerpt: string
  /** ISO date, e.g. "2025-11-05" */
  date: string
  /** ISO date of last meaningful update */
  updated: string
  category: string
  image: string
  author: string
  /** Optional expert reviewer shown on the post, e.g. "Pranali Joshi, Child Counsellor" */
  reviewedBy?: string
  trending: boolean
}

export type BlogPost = BlogPostMeta & { content: string }

function readPost(file: string): BlogPost {
  const slug = file.replace(/\.mdx$/, "")
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title,
    cardTitle: data.cardTitle ?? data.title,
    tagline: data.tagline ?? "",
    excerpt: data.excerpt ?? data.tagline ?? "",
    date: String(data.date),
    updated: String(data.updated ?? data.date),
    category: data.category ?? "Insights",
    image: data.image ?? "",
    author: data.author ?? "SlateMate Team",
    reviewedBy: data.reviewedBy,
    trending: Boolean(data.trending),
    content,
  }
}

let cache: BlogPost[] | null = null

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  if (cache && process.env.NODE_ENV === "production") return cache
  const posts = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date))
  cache = posts
  return posts
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

/** Formats an ISO date as "5 November 2025" for display. */
export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00+05:30`)
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" })
}

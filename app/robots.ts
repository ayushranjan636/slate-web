import type { MetadataRoute } from "next"

const SITE_URL = "https://www.slatemate.in"
const PRIVATE_PATHS = ["/api/", "/admin", "/dashboard/", "/login"]

// AI search & assistant crawlers we explicitly welcome so eRaksha can be cited in
// ChatGPT, Claude, Perplexity, Gemini / Google AI Overviews, Copilot, etc.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // CSS/JS under /_next/ stays crawlable so pages render correctly for every bot.
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}

"use client"

import dynamic from "next/dynamic"

// Reserve roughly the feed's height while it loads so the page below doesn't jump (CLS).
const SocialFeed = dynamic(
  () => import("./social-feed").then((m) => m.SocialFeed),
  {
    ssr: false,
    loading: () => <div className="min-h-[640px] bg-muted/30 border-y border-border/30" aria-hidden="true" />,
  }
)

export function SocialFeedLoader() {
  return <SocialFeed />
}

"use client"

import dynamic from "next/dynamic"

const SocialFeed = dynamic(
  () => import("./social-feed").then((m) => m.SocialFeed),
  { ssr: false }
)

export function SocialFeedLoader() {
  return <SocialFeed />
}

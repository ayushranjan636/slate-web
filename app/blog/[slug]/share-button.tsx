"use client"

import { useState } from "react"
import { Share2, Check } from "lucide-react"

export function ShareButton({ title, text, url }: { title: string; text: string; url: string }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url })
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // User cancelled the share sheet or clipboard is unavailable — nothing to do.
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center gap-2 hover:text-blue-primary transition-colors"
      aria-label={`Share "${title}"`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      <span className="text-sm">{copied ? "Link copied" : "Share"}</span>
    </button>
  )
}

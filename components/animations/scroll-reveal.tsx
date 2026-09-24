import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  width?: "full" | "auto"
  delay?: number
  className?: string
}

/**
 * CSS-only reveal animation.
 *
 * Content is fully visible in the server-rendered HTML (good for LCP, SEO and AI crawlers)
 * and never depends on JavaScript. A short fade-up plays via CSS `animation-timeline: view()`
 * in supporting browsers, and is disabled for users who prefer reduced motion.
 */
export function ScrollReveal({ children, width = "full", delay = 0, className }: ScrollRevealProps) {
  const classes = ["scroll-reveal", width === "full" ? "w-full" : "", className].filter(Boolean).join(" ")
  return (
    <div className={classes} style={delay ? { animationDelay: `${Math.min(delay, 0.3)}s` } : undefined}>
      {children}
    </div>
  )
}

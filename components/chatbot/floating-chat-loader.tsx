"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const FloatingChat = dynamic(
  () => import("./floating-chat").then((m) => m.FloatingChat),
  { ssr: false }
)

/**
 * Loads the chat widget (and the AI SDK it depends on) only after the page is idle
 * or the user interacts, so it doesn't compete with first paint / hydration.
 */
export function FloatingChatLoader() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let done = false
    const load = () => {
      if (done) return
      done = true
      setReady(true)
    }
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const
    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }))

    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
    const idle = w.requestIdleCallback
      ? w.requestIdleCallback(load, { timeout: 5000 })
      : window.setTimeout(load, 3500)

    return () => {
      events.forEach((e) => window.removeEventListener(e, load))
      if (!w.requestIdleCallback) window.clearTimeout(idle)
    }
  }, [])

  return ready ? <FloatingChat /> : null
}

"use client"

import { useEffect, useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Countdown } from "@/components/animations/countdown"

const LAUNCH_ISO = "2026-11-14T00:00:00+05:30"
const LAUNCH_LABEL = "14th November 2026"
// Set NEXT_PUBLIC_PLAY_STORE_URL once the Play Store listing is live.
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL

function GooglePlayBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white shadow-lg transition hover:opacity-90"
      aria-label="Get eRaksha on Google Play"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path fill="#34A853" d="M3.6 1.8 13.4 12l-9.8 10.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2Z" />
        <path fill="#FBBC04" d="m16.8 15.4-3.4-3.4 3.4-3.4 3.9 2.2c1 .6 1 1.9 0 2.4l-3.9 2.2Z" />
        <path fill="#EA4335" d="M16.8 15.4 13.4 12l-9.8 10.2c.4.2.9.2 1.4-.1l11.8-6.7Z" />
        <path fill="#4285F4" d="M16.8 8.6 5 1.9c-.5-.3-1-.3-1.4-.1L13.4 12l3.4-3.4Z" />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] uppercase tracking-wider opacity-80">Get it on</span>
        <span className="text-lg font-semibold">Google Play</span>
      </span>
    </a>
  )
}

/**
 * Before launch: shows the countdown.
 * After launch: shows "Now live" with a Google Play badge and (on desktop) a QR code.
 */
export function LaunchCta() {
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    const target = new Date(LAUNCH_ISO).getTime()
    const check = () => setIsLive(Date.now() >= target)
    check()
    const id = setInterval(check, 30_000)
    return () => clearInterval(id)
  }, [])

  if (isLive && PLAY_STORE_URL) {
    return (
      <div className="mt-12 flex flex-col items-center gap-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald">Now live on Android</p>
        <div className="flex items-center gap-8">
          <GooglePlayBadge href={PLAY_STORE_URL} />
          <div className="hidden md:flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-white p-3 shadow-sm">
            <QRCodeSVG value={PLAY_STORE_URL} size={96} level="M" title="Scan to download eRaksha" />
            <span className="text-[11px] text-muted-foreground">Scan to download</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-12">
      <p className="text-sm font-semibold text-electric uppercase tracking-wider">
        Official Launch on {LAUNCH_LABEL}
      </p>
      <Countdown targetDate={LAUNCH_ISO} liveMessage="eRaksha is now live!" />
    </div>
  )
}

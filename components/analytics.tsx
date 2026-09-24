"use client"

import Script from "next/script"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const GTM_ID = "GTM-T6KKHN2L"
const CONSENT_KEY = "slatemate-analytics-consent"

type Consent = "granted" | "denied" | null

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Loads analytics (Google Tag Manager) only after the visitor gives consent,
 * as expected under India's DPDP Act 2023. Wrap in a Suspense boundary
 * because it uses useSearchParams.
 */
export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [consent, setConsent] = useState<Consent>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    if (stored === "granted" || stored === "denied") setConsent(stored)
    setReady(true)
  }, [])

  // Send a virtual page view to GTM on client-side navigation
  useEffect(() => {
    if (consent !== "granted") return
    const query = searchParams.toString()
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "page_view",
      page_path: pathname + (query ? `?${query}` : ""),
    })
  }, [pathname, searchParams, consent])

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value)
    setConsent(value)
  }

  return (
    <>
      {consent === "granted" && (
        <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-border/60 bg-card/95 p-5 shadow-xl backdrop-blur md:left-6 md:right-auto"
        >
          <p className="text-sm text-foreground/80">
            We use cookies for anonymous analytics to improve eRaksha. No ads, no data selling. See our{" "}
            <Link href="/privacy" className="font-medium text-electric underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="rounded-lg bg-gradient-to-r from-bluePrimary to-electric px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  )
}

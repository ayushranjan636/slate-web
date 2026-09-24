"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { MessageCircle } from "lucide-react"
import { WaitlistModal } from "@/components/modals/waitlist-modal"

const WHATSAPP_URL =
  "https://wa.me/919025867204?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20eRaksha"

/**
 * Sticky bottom CTA bar for mobile. Appears after the user scrolls past the hero,
 * offering the two highest-converting actions in India: WhatsApp and the waitlist.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Legal pages don't need a sales bar.
  if (pathname === "/privacy" || pathname === "/terms") return null

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 md:hidden border-t border-border/60 bg-background/95 backdrop-blur px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp us
        </a>
        <WaitlistModal>
          <button
            type="button"
            tabIndex={visible ? 0 : -1}
            className="flex-1 rounded-xl bg-gradient-to-r from-bluePrimary to-electric py-3 text-sm font-semibold text-white"
          >
            Join Waitlist
          </button>
        </WaitlistModal>
      </div>
    </div>
  )
}

import { Suspense } from "react"
import type { Metadata } from "next"
import { PricingPageContent } from "./_components/pricing-page-content"

export const metadata: Metadata = {
  title: "eRaksha Pricing Plans | Affordable Child Safety Platform India",
  description:
    "Transparent eRaksha pricing for Indian families. AI-powered child safety with free trial. DNS protection and AI companion starting from affordable family-friendly rates.",
  keywords: [
    "eRaksha pricing",
    "child safety pricing India",
    "parental control subscription",
    "family digital protection plans",
    "AI child safety pricing",
    "affordable parental controls",
    "DNS protection pricing",
    "child safety software cost",
  ],
  openGraph: {
    title: "eRaksha Pricing | Affordable Family Digital Safety",
    description:
      "Transparent pricing for child digital protection. Start with our free trial and choose the plan that fits your family.",
    url: "https://www.slatemate.in/pricing",
    siteName: "SlateMate eRaksha",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eRaksha Pricing | Family Digital Safety Plans",
    description:
      "Affordable, transparent pricing for family digital protection and child online safety.",
    images: ["https://www.slatemate.in/og-image.jpg"],
    site: "@slatemate_in",
    creator: "@slatemate_in",
  },
  alternates: {
    canonical: "https://www.slatemate.in/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading pricing...</div>}>
      <PricingPageContent />
    </Suspense>
  )
}
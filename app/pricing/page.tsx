import { Suspense } from "react"
import type { Metadata } from "next"
import { PricingPageContent } from "./_components/pricing-page-content"
import { Breadcrumbs } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "eRaksha Pricing – Free & Premium at ₹349/month",
  description:
    "eRaksha pricing for Indian families: Free forever, or Premium at ₹349/month per child with advanced DNS protection, AI companion and parent dashboard.",
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
      "Free forever, or Premium at ₹349/month per child. Transparent pricing for child digital protection.",
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
      "Free forever, or Premium at ₹349/month per child. Transparent pricing for child online safety.",
    images: ["https://www.slatemate.in/og-image.jpg"],
    site: "@slatemate_",
    creator: "@slatemate_",
  },
  alternates: {
    canonical: "/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} />
    <Suspense fallback={<div className="p-12 text-center">Loading pricing...</div>}>
      <PricingPageContent />
    </Suspense>
    </>
  )
}
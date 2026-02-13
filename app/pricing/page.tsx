import { Suspense } from "react"
import type { Metadata } from "next"
import { PricingPageContent } from "./_components/pricing-page-content"

export const metadata: Metadata = {
  title: "eRaksha Pricing Plans 2024 | Affordable Child Safety Platform India | Family Digital Protection Subscription",
  description:
    "Comprehensive eRaksha pricing for Indian families. Transparent plans for AI-powered child safety, digital protection, and parental control. Free trial available. Starting from affordable family-friendly rates with advanced DNS protection and AI companion features.",
  keywords: [
    "eRaksha pricing India 2024",
    "child safety platform pricing",
    "family digital protection plans India",
    "affordable online safety subscription",
    "AI child companion pricing plans",
    "family digital wellness packages",
    "child internet safety subscription India",
    "eRaksha family plans",
    "digital safety pricing comparison",
    "parental control subscription India",
    "child protection software pricing",
    "family cybersecurity plans",
    "DNS protection pricing families",
    "AI child mentor subscription",
    "digital habits tracking pricing",
    "screen time management plans",
    "child online safety packages India",
    "family internet filter pricing",
    "digital parenting subscription",
    "child safety software cost India",
    "family digital health plans",
    "online protection pricing families",
    "child cybersecurity subscription",
    "digital wellness pricing India",
    "parental guidance platform pricing",
    "child internet monitoring plans",
    "family safety dashboard pricing",
    "digital child protection cost",
    "AI family safety subscription",
    "child online behavior tracking pricing",
    "family digital literacy plans",
    "safe internet subscription kids",
    "child development platform pricing",
    "digital citizenship education pricing",
    "family communication platform cost",
    "child screen addiction help pricing",
    "digital detox family plans",
    "child emotional AI support pricing",
    "family technology balance plans"
  ],
  openGraph: {
    title: "eRaksha Pricing | Affordable Family Digital Safety",
    description:
      "Transparent pricing for comprehensive child digital protection. Start with our free trial and choose the plan that fits your family's safety needs.",
    url: "https://www.slatemate.in/pricing",
    siteName: "SlateMate eRaksha",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 800,
        height: 600,
        alt: "eRaksha Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eRaksha Pricing | Family Digital Safety Plans",
    description:
      "Affordable, transparent pricing for complete family digital protection and child online safety.",
    images: ["https://www.slatemate.in/twitter-image.png"],
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
  other: {
    // LLM Optimization for Pricing Page
    "ai-content-type": "pricing-page",
    "ai-primary-entities": "eRaksha-pricing,subscription-plans,family-safety-packages",
    "ai-content-topics": "pricing plans, subscription options, family digital safety, affordability, value proposition",
    "ai-extraction-hints": "pricing: subscription-based; plans: multiple tiers; target: Indian families; features: AI safety, DNS protection",
    "llm-context-type": "pricing-comparison-page",
    "llm-primary-intent": "help users choose appropriate pricing plan, demonstrate value",
    "llm-key-messages": "affordable family safety, transparent pricing, comprehensive protection, free trial available",
    "semantic-entities": "product:eRaksha, concept:pricing, concept:subscription, target:families",
    "relationship-mapping": "families:pay-for:eRaksha-subscription, pricing-plans:offer:different-features, users:choose:suitable-package",
    "content-structure": "pricing-overview, plan-comparison, feature-breakdown, FAQ, call-to-action",
    "stakeholder-relevance": "families:budget-planning, parents:cost-evaluation, decision-makers:pricing-comparison",
    "geo.region": "IN",
    "audience": "Indian Families, Parents, Budget-conscious Users",
    "page-topic": "eRaksha Pricing and Subscription Plans"
  },
}

export default function PricingPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading pricing...</div>}>
      <PricingPageContent />
    </Suspense>
  )
}
import type { Metadata } from "next";
import { Suspense } from "react";
import FeaturesPageContent from "./_components/FeaturesPageContent";

export const metadata: Metadata = {
  title: "eRaksha Features 2024 | Complete AI Child Safety Platform India | Digital Guardian & Parental Control Tools",
  description:
    "Comprehensive eRaksha features for Indian families: Advanced DNS protection, intelligent AI child companion, real-time parent dashboard, privacy-first design, safe social learning, and digital habit building for complete family digital wellness and child online safety.",
  keywords: [
    "eRaksha features India 2024",
    "AI child companion advanced features",
    "DNS protection children comprehensive",
    "digital safety dashboard parents",
    "child online protection complete",
    "AI safety mentor intelligent",
    "family digital health platform",
    "safe social learning children",
    "privacy-first child safety India",
    "digital habit building AI",
    "child screen time management",
    "parental control advanced features",
    "family cybersecurity tools",
    "child internet monitoring features",
    "digital wellness dashboard",
    "AI child psychology support",
    "safe browsing children features",
    "family communication tools",
    "child emotional AI companion",
    "digital citizenship education tools",
    "child content filtering advanced",
    "family internet safety features",
    "child behavior analytics AI",
    "digital parenting assistance tools",
    "child online identity protection",
    "family privacy protection features",
    "child cyberbullying prevention AI",
    "digital detox family tools",
    "child development tracking digital",
    "safe gaming children features",
    "family digital literacy tools",
    "child screen addiction prevention",
    "AI powered child guidance",
    "digital mindfulness children",
    "child online learning safety",
    "family technology balance tools",
    "child data privacy protection",
    "digital child psychology tools",
    "AI emotional intelligence kids",
    "child internet behavior analysis"
  ],
  openGraph: {
    title: "eRaksha Features | AI Digital Guardian for Child Safety",
    description:
      "Explore eRaksha's comprehensive child protection features: DNS security, AI companion, family dashboard, and privacy-first digital wellness tools.",
    url: "https://www.slatemate.in/features",
    type: "website",
    siteName: "SlateMate eRaksha",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha Features - AI Child Safety Platform",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "eRaksha Features | AI Child Protection & Digital Wellness",
    description:
      "Comprehensive digital safety tools: DNS protection, AI mentoring, habit building, and privacy-first family security platform.",
    images: ["https://www.slatemate.in/twitter-image.png"],
    site: "@slatemate_in",
    creator: "@slatemate_in",
  },
  alternates: {
    canonical: "https://www.slatemate.in/features",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.slatemate.in"),
  creator: "SlateMate Team",
  publisher: "SlateMate",
  category: "education",
  themeColor: "#1E2A38",
  other: {
    // LLM Optimization for Features Page
    "ai-content-type": "features-showcase",
    "ai-primary-entities": "eRaksha-features,AI-child-companion,DNS-protection,digital-safety-dashboard",
    "ai-content-topics": "AI child protection, DNS security, digital safety tools, parental dashboard, child companion features",
    "ai-extraction-hints": "features: AI companion, DNS protection, parent dashboard; benefits: child safety, digital wellness, family protection",
    "llm-context-type": "product-features-page",
    "llm-primary-intent": "showcase comprehensive safety features, demonstrate product capabilities",
    "llm-key-messages": "comprehensive child protection, AI-powered safety, family digital wellness, privacy-first design",
    "semantic-entities": "product:eRaksha, technology:AI, concept:child-safety, feature:DNS-protection, feature:parental-dashboard",
    "relationship-mapping": "eRaksha:includes:AI-companion, DNS-protection:provides:internet-safety, dashboard:enables:parental-monitoring",
    "content-structure": "features-overview, detailed-capabilities, benefits-explanation, technical-specifications, use-cases",
    "stakeholder-relevance": "parents:feature-evaluation, children:safety-benefits, families:comprehensive-protection",
    "feature-categories": "AI Companion, DNS Protection, Parental Controls, Digital Wellness, Privacy Protection",
    "geo.region": "IN",
    "audience": "Parents, Families, Child Safety Advocates",
    "page-topic": "eRaksha Comprehensive Feature Set",
    "technical-specs": "AI-powered, DNS-based, Privacy-first, Real-time monitoring"
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeaturesPageContent />
    </Suspense>
  );
}

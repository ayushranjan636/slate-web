import type { Metadata } from "next";
import { Suspense } from "react";
import FeaturesPageContent from "./_components/FeaturesPageContent";

export const metadata: Metadata = {
  title: "eRaksha Features | AI Child Safety Tools & Digital Guardian",
  description:
    "Explore eRaksha's child safety features: DNS protection, AI companion, parent dashboard, privacy-first design, and safe social learning for family digital wellness.",
  keywords: [
    "eRaksha features",
    "AI child companion",
    "DNS protection children",
    "parent dashboard",
    "child online safety",
    "digital safety tools",
    "privacy-first child safety",
    "safe social learning",
    "screen time management",
    "parental control features",
  ],
  openGraph: {
    title: "eRaksha Features | AI Digital Guardian for Child Safety",
    description:
      "DNS security, AI companion, family dashboard, and privacy-first digital wellness tools for complete child protection.",
    url: "https://www.slatemate.in/features",
    type: "website",
    siteName: "SlateMate eRaksha",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha Features – AI Child Safety Platform",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "eRaksha Features | AI Child Protection & Digital Wellness",
    description:
      "DNS protection, AI mentoring, habit building, and privacy-first digital safety for children and families.",
    images: ["https://www.slatemate.in/og-image.jpg"],
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
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeaturesPageContent />
    </Suspense>
  );
}

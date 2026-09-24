import { Suspense } from "react"
import type { Metadata } from "next"
import AboutContent from "./_components/AboutPageContent"
import { Breadcrumbs, JsonLd } from "@/components/seo/json-ld"
import { ORG_ID, SITE_URL, founders, personSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: 'About Us – IITMIC Incubated Child Safety Startup',
  description:
    "Meet SlateMate, the IIT Madras-incubated team building eRaksha, an AI-powered digital guardian that keeps Indian children safe and happy online.",
  keywords: [
    'SlateMate about',
    'eRaksha',
    'AI child protection',
    'IITMIC incubated',
    'IIT Madras startup',
    'child internet safety India',
    'digital safety kids',
  ],
  openGraph: {
    title: 'About SlateMate | IITMIC Incubated AI Child Safety Startup',
    description:
      'eRaksha by SlateMate is an AI-powered child digital safety platform. IITMIC incubated, built from IIT Madras ecosystem.',
    url: 'https://www.slatemate.in/about',
    siteName: 'SlateMate eRaksha',
    images: [
      {
        url: 'https://www.slatemate.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SlateMate – IITMIC Incubated AI Child Safety Startup',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SlateMate | IITMIC Incubated Startup',
    description:
      'IITMIC incubated startup building eRaksha – AI-powered child safety platform from IIT Madras.',
    site: '@slatemate_',
    images: ['https://www.slatemate.in/og-image.jpg'],
  },
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": `${SITE_URL}/about#page`,
              url: `${SITE_URL}/about`,
              name: "About SlateMate",
              about: { "@id": ORG_ID },
              mainEntity: { "@id": ORG_ID },
            },
            ...founders.map(personSchema),
          ],
        }}
      />
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AboutContent />
    </Suspense>
    </>
  )
}

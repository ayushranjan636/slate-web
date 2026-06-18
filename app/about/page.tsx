import { Suspense } from "react"
import type { Metadata } from "next"
import AboutContent from "./_components/AboutPageContent"

export const metadata: Metadata = {
  title: 'About SlateMate | IITMIC Incubated Child Safety Startup',
  description:
    'Learn about SlateMate – our mission to create safer internet experiences for children. We develop eRaksha, an AI-powered digital guardian. IITMIC incubated startup from IIT Madras.',
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
    site: '@slatemate_in',
    images: ['https://www.slatemate.in/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.slatemate.in/about',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AboutContent />
    </Suspense>
  )
}

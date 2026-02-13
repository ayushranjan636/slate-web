import { Suspense } from "react"
import type { Metadata } from "next"
import AboutContent from "./_components/AboutPageContent"

export const metadata: Metadata = {
  title: 'About SlateMate | Building Digital Safety Solutions',
  description:
    'Learn about SlateMate — our mission to create safer internet experiences for children. We develop eRaksha, an AI-powered digital guardian. Pre-incubated at Nirmaan Pre-Incubator, IIT Madras.',
  keywords: [
    'eRaksha',
    'SlateMate',
    'AI child protection',
    'digital safety for kids',
    'online child safety',
    'family digital wellness',
    'IIT Madras startups',
    'Nirmaan Pre Incubator',
    'child internet safety India'
  ],
  openGraph: {
    title: 'About eRaksha | AI Digital Guardian for Children',
    description:
      'eRaksha by SlateMate is an AI-powered child digital safety platform creating safer internet experiences for families. Pre-incubated at Nirmaan Pre-Incubator, IIT Madras.',
    url: 'https://www.slatemate.in/about',
    siteName: 'SlateMate eRaksha',
    images: [
      {
        url: 'https://www.slatemate.in/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'eRaksha - AI Child Digital Safety Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About eRaksha | AI Child Protection Platform',
    description:
      'Discover how eRaksha, an AI-powered child safety platform from IIT Madras, is creating safer digital experiences for children and families.',
    site: '@slatemate_in',
    images: ['https://www.slatemate.in/og-image.jpg'],
  },
  metadataBase: new URL('https://www.slatemate.in'),
  authors: [{ name: 'SlateMate Team', url: 'https://www.slatemate.in/about' }],
  creator: 'SlateMate Team',
  publisher: 'SlateMate',
  robots: {
    index: true,
    follow: true,
  },
  category: 'education',
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <AboutContent />
    </Suspense>
  )
}

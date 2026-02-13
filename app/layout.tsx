import { Suspense } from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { PageTransition } from "@/components/animations/page-transition"
import { Analytics } from "@/components/analytics"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
}

export const metadata: Metadata = {
  title: {
    default: "SlateMate eRaksha | India's Leading AI Child Safety Platform 2024 | Digital Protection for Families",
    template: "%s | SlateMate eRaksha - AI Child Safety India",
  },
  description:
    "eRaksha by SlateMate - India's most trusted AI-powered child digital guardian. Advanced DNS protection, intelligent companion, emotional support, and positive habit building. Privacy-first family digital safety platform from IIT Madras for Indian families.",
  metadataBase: new URL("https://www.slatemate.in"),
  keywords: [
    "eRaksha India 2024",
    "SlateMate child safety platform",
    "child online safety India",
    "digital protection kids India",
    "AI child companion India",
    "DNS protection children",
    "parental control India best",
    "online safety platform Indian families",
    "digital habits children guidance",
    "family digital health India",
    "AI safety mentor children",
    "child internet guardian India",
    "safe browsing kids platform",
    "digital wellness family India",
    "IIT Madras child safety startup",
    "Chennai child protection technology",
    "Indian EdTech child safety",
    "Swadeshi child digital protection",
    "Made in India child safety",
    "Tamil Nadu startup child safety",
    "child cybersecurity India",
    "digital parenting India",
    "family internet safety India",
    "child screen time management",
    "digital citizenship education India",
    "child emotional AI support",
    "family cybersecurity platform",
    "child online behavior monitoring",
    "digital child psychology India",
    "AI powered parental guidance",
    "child data privacy India",
    "family digital literacy",
    "child internet addiction prevention",
    "digital mindfulness children India",
    "safe social media children",
    "child online identity protection",
    "family technology balance India",
    "child development digital platform",
    "AI child emotional intelligence",
    "digital detox families India",
    "child cyberbullying prevention AI"
  ],
  openGraph: {
    siteName: "SlateMate",
    type: "website",
    url: "https://www.slatemate.in",
    title: "SlateMate – AI Digital Safety Platform",
    description:
      "More than parental control - eRaksha is your child's AI companion for safer internet, smarter habits, and happier families.",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha - AI-Powered Digital Safety Platform for Children",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@slatemate_in",
    title: "SlateMate – AI Digital Safety Platform",
    description:
      "eRaksha - AI-powered protection and growth companion for children. DNS security, habit building, and family digital wellness.",
    images: ["https://www.slatemate.in/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.slatemate.in",
    languages: {
      "en-IN": "https://www.slatemate.in",
      "hi-IN": "https://www.slatemate.in/hi",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "Ayush Ranjan",
      url: "https://www.linkedin.com/in/ayushranjan636",
    },
    {
      name: "Sagar Gujrati",
      url: "https://www.linkedin.com/in/sagar-gujrati-a30822293/",
    },
  ],
  creator: "SlateMate Team",
  publisher: "SlateMate",
  category: "education",
  other: {
    // Global LLM Optimization
    "ai-website-type": "child-safety-platform",
    "ai-primary-business": "SlateMate Technologies - eRaksha child digital safety",
    "ai-target-audience": "Indian families, parents, children, educators",
    "ai-core-offering": "AI-powered child online safety and digital wellness platform",
    "ai-geographic-focus": "India, Chennai, Tamil Nadu, IIT Madras ecosystem",
    "ai-business-model": "SaaS child safety platform with AI companion technology",
    "ai-key-differentiators": "AI companion, privacy-first, Indian innovation, IIT Madras incubated",
    "llm-website-purpose": "showcase eRaksha platform, convert families to users, build trust",
    "llm-content-strategy": "educational, safety-focused, family-friendly, technically robust",
    "semantic-website-structure": "homepage, product, about, pricing, features, support",
    "business-classification": "B2C EdTech, Child Safety, Family Technology",
    "innovation-focus": "Artificial Intelligence, Child Psychology, Digital Safety",
    "geographic-targeting": "India-first with global expansion potential",
    // Technical SEO
    "google-site-verification": "to-be-configured",
    "msvalidate.01": "to-be-configured", 
    "yandex-verification": "to-be-configured",
    "format-detection": "telephone=no, address=no, email=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "eRaksha Safety",
    "msapplication-TileColor": "#FFFFFF",
    "msapplication-tooltip": "eRaksha - Child Digital Safety",
    "theme-color": "#FFFFFF",
    "color-scheme": "light",
    "language": "en-IN",
    "content-language": "en-IN",
    "geo.region": "IN",
    "geo.country": "India",
    "distribution": "global",
    "rating": "general",
    "audience": "Parents, Families, Educators, Children"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en-IN" 
      dir="ltr" 
      suppressHydrationWarning
      data-llm-website="slatemate-eraksha"
      data-llm-business-type="child-safety-platform"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <head>
        <meta charSet="utf-8" />
        <title>SlateMate | AI for Safer Digital Learning</title>
        
        {/* Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["WebSite", "Corporation"],
                  "@id": "https://www.slatemate.in#website",
                  "name": "SlateMate eRaksha",
                  "alternateName": "SlateMate",
                  "url": "https://www.slatemate.in",
                  "description": "India's leading AI-powered child digital safety platform",
                  "inLanguage": "en-IN",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.slatemate.in/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "@id": "https://www.slatemate.in#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.slatemate.in#organization",
                  "name": "SlateMate Technologies Pvt Ltd",
                  "alternateName": "SlateMate",
                  "legalName": "SlateMate Technologies Private Limited",
                  "url": "https://www.slatemate.in",
                  "logo": "https://www.slatemate.in/logo.png",
                  "description": "Revolutionary AI child safety platform from IIT Madras",
                  "foundingDate": "2023",
                  "foundingLocation": "Chennai, Tamil Nadu, India",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "1st Floor Nirmaan, Sudha & Shankar Innovation Hub, IIT Madras",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600036",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-90258-67204",
                    "contactType": "customer service",
                    "email": "support@slatemate.in",
                    "availableLanguage": ["English", "Hindi"]
                  },
                  "sameAs": [
                    "https://twitter.com/slatemate_in",
                    "https://linkedin.com/company/slatemate",
                    "https://facebook.com/slatemate",
                    "https://instagram.com/slatemate.in"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "eRaksha Child Safety Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "SoftwareApplication",
                          "name": "eRaksha AI Child Safety Platform",
                          "applicationCategory": "Child Safety Software",
                          "operatingSystem": "Cross-platform"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T6KKHN2L');
            `,
          }}
        />

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SlateMate",
              url: "https://www.slatemate.in",
              logo: "https://www.slatemate.in/logo.png",
              foundingDate: "2024",
              email: "contact@slatemate.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "India",
              },
              sameAs: [
                "https://twitter.com/slatemate_in",
                "https://www.linkedin.com/company/slatemate",
              ],
              founder: [
                {
                  "@type": "Person",
                  name: "Ayush Ranjan",
                  jobTitle: "CTO & Co-founder",
                  url: "https://www.linkedin.com/in/ayushranjan636",
                },
              ],
              makesOffer: {
                "@type": "Offer",
                name: "eRaksha",
                description: "AI-powered digital guardian providing comprehensive online safety, DNS protection, and positive habit building for children and families.",
                category: "ChildSafetyApplication"
              },
              description:
                "SlateMate develops eRaksha, an AI-powered digital safety platform for children and families.",
            }),
          }}
        />
      </head>

      <body
        className={`${poppins.variable} font-sans bg-background text-foreground antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6KKHN2L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <PageTransition>
              <main className="flex-1">{children}</main>
            </PageTransition>
            <Footer />
          </div>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

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
import { FloatingChatLoader } from "@/components/chatbot/floating-chat-loader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
}

export const metadata: Metadata = {
  title: {
    default: "SlateMate eRaksha | AI-Powered Child Safety Platform India",
    template: "%s | SlateMate eRaksha",
  },
  description:
    "eRaksha by SlateMate – AI-powered child digital safety platform. DNS protection, intelligent AI companion, emotional support, and positive habit building. Privacy-first, IITMIC incubated startup from Chennai.",
  metadataBase: new URL("https://www.slatemate.in"),
  keywords: [
    "eRaksha",
    "SlateMate",
    "child online safety India",
    "AI child companion",
    "parental control India",
    "DNS protection children",
    "digital safety kids",
    "IITMIC incubated startup",
    "child internet safety",
    "family digital wellness",
    "screen time management",
    "AI parental guidance",
    "child cybersecurity India",
    "safe browsing kids",
    "digital parenting India",
  ],
  openGraph: {
    siteName: "SlateMate",
    type: "website",
    url: "https://www.slatemate.in",
    title: "SlateMate – AI Digital Safety Platform for Children",
    description:
      "eRaksha is your child's AI companion for safer internet, smarter habits, and happier families. IITMIC incubated startup.",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha – AI-Powered Digital Safety Platform for Children",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@slatemate_in",
    title: "SlateMate – AI Digital Safety Platform",
    description:
      "eRaksha – AI-powered protection and growth companion for children. DNS security, habit building, and family digital wellness.",
    images: ["https://www.slatemate.in/og-image.jpg"],
  },
  icons: {
    icon: "/s_logo.png",
    shortcut: "/s_logo.png",
    apple: "/s_logo.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.slatemate.in",
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
  ],
  creator: "SlateMate Team",
  publisher: "SlateMate",
  category: "education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" dir="ltr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />

        {/* Consolidated Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
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
                  "name": "SLATEMATE PRIVATE LIMITED",
                  "alternateName": "SlateMate",
                  "legalName": "SLATEMATE PRIVATE LIMITED",
                  "url": "https://www.slatemate.in",
                  "logo": "https://www.slatemate.in/logo.png",
                  "description": "AI-powered child safety platform – IITMIC incubated startup developing eRaksha",
                  "foundingDate": "2023",
                  "foundingLocation": "Chennai, Tamil Nadu, India",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "C/o. IITM Research Park, 1FA I Floor, Kanagam Road, TTTI Taramani",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600113",
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
                  "founder": [
                    {
                      "@type": "Person",
                      "name": "Ayush Ranjan",
                      "jobTitle": "CEO & Co-founder",
                      "url": "https://www.linkedin.com/in/ayushranjan636"
                    }
                  ],
                  "makesOffer": {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "eRaksha AI Child Safety Platform",
                      "applicationCategory": "Child Safety Software",
                      "operatingSystem": "Cross-platform"
                    }
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

        {/* Zoho PageSense */}
        <script src="https://cdn-in.pagesense.io/js/slatemateprivatelimited/358c6f3faafd451585b83b4de1d3594a.js" async></script>
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
          <FloatingChatLoader />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

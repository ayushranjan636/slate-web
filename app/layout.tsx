import { Suspense } from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Analytics } from "@/components/analytics"
import { Toaster } from "@/components/ui/toaster"
import { FloatingChatLoader } from "@/components/chatbot/floating-chat-loader"
import { MobileCtaBar } from "@/components/navigation/mobile-cta-bar"
import { ORG_ID, SITE_URL, jsonLd, organizationSchema } from "@/lib/seo"

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
    template: "%s | SlateMate",
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
    site: "@slatemate_",
    creator: "@slatemate_",
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

        {/* Site-wide structured data: WebSite + Organization (referenced by every page's schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}#website`,
                name: "SlateMate eRaksha",
                alternateName: ["SlateMate", "eRaksha"],
                url: SITE_URL,
                description: "AI-powered child digital safety platform from India",
                inLanguage: "en-IN",
                publisher: { "@id": ORG_ID },
              },
              organizationSchema(),
            ],
          })}
        />
      </head>

      <body
        className={`${poppins.variable} font-sans bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <FloatingChatLoader />
          <MobileCtaBar />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

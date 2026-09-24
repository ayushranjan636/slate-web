import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { WaitlistModal } from "@/components/modals/waitlist-modal"
import { Button } from "@/components/ui/button"
import { Shield, Brain, ArrowRight } from "lucide-react"
import { Breadcrumbs, JsonLd } from "@/components/seo/json-ld"
import { BRAND, ORG_ID, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "eRaksha – AI Child Safety & Parental Control App",
  description:
    "eRaksha combines DNS filtering with a caring AI companion to protect kids from harmful content and cyberbullying and build healthy digital habits.",
  keywords: [
    "eRaksha",
    "child safety software",
    "parental control app India",
    "AI child companion",
    "DNS filtering children",
    "cyberbullying prevention",
    "screen time management",
    "digital parenting",
    "child online protection",
    "family internet safety",
    "safe browsing kids",
    "IITMIC incubated startup",
  ],
  openGraph: {
    title: "eRaksha – AI Child Safety & Parental Control Software",
    description: "AI-powered child safety platform with DNS filtering, AI companion, and family dashboard. IITMIC incubated startup.",
    url: "https://www.slatemate.in/product",
    siteName: "SlateMate eRaksha",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha AI Child Safety Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eRaksha – AI Child Safety & Parental Control Software",
    description: "AI-powered child safety with DNS filtering, AI companion, and family digital wellness.",
    creator: "@slatemate_",
    site: "@slatemate_",
    images: ["https://www.slatemate.in/og-image.jpg"],
  },
  alternates: {
    canonical: "/product",
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Visible on the page AND used for FAQPage schema (Google requires both to match).
const productFaqs = [
  {
    q: "What is eRaksha and how does it protect children online?",
    a: "eRaksha is an AI-powered child safety app from India. It combines DNS filtering, which blocks pornography, scams, violence and malware before they load, with an AI companion that explains in kid-friendly language why something was blocked and offers emotional support.",
  },
  {
    q: "How is eRaksha different from other parental control apps?",
    a: "Traditional parental controls only block. eRaksha also guides: its AI companion explains decisions, supports children emotionally and nudges them toward healthier habits, while parents get Safety, Focus and Emotional Balance scores instead of invasive message logs.",
  },
  {
    q: "Does eRaksha read my child's private messages?",
    a: "No. eRaksha never reads or records private messages, camera feeds or calls. It works on web domains, app categories and usage patterns only, and all data is stored on servers in India in line with the DPDP Act 2023.",
  },
  {
    q: "How much does eRaksha cost?",
    a: "eRaksha has a Free plan that is free forever and a Premium plan at ₹349 per month per child, which adds advanced DNS protection, the full AI companion, emotion-based alerts and the parent dashboard.",
  },
  {
    q: "When does eRaksha launch?",
    a: "eRaksha officially launches on 14th November 2026. Families can join the waitlist today for early access.",
  },
]

const structuredData = {
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/product#software`,
      name: "eRaksha",
      description:
        "AI-powered child safety and parental control app combining DNS filtering, an AI companion for children and a parent dashboard.",
      url: `${SITE_URL}/product`,
      image: `${SITE_URL}/og-image.jpg`,
      applicationCategory: "LifestyleApplication",
      applicationSubCategory: "Parental control",
      operatingSystem: "Android",
      inLanguage: "en-IN",
      countriesSupported: "IN",
      releaseNotes: `Official launch on ${BRAND.launchDateLabel}`,
      datePublished: BRAND.launchDate,
      offers: [
        {
          "@type": "Offer",
          name: "Free Plan",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/PreOrder",
          availabilityStarts: BRAND.launchDate,
          url: `${SITE_URL}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: String(BRAND.pricing.premiumMonthly),
          priceCurrency: "INR",
          availability: "https://schema.org/PreOrder",
          availabilityStarts: BRAND.launchDate,
          url: `${SITE_URL}/pricing`,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(BRAND.pricing.premiumMonthly),
            priceCurrency: "INR",
            unitText: "per month per child",
            billingDuration: "P1M",
          },
        },
      ],
      featureList: [
        "DNS content filtering",
        "AI companion for children",
        "Parent dashboard with Safety, Focus and Emotional Balance scores",
        "Screen time and habit building",
        "Privacy-first: no ads, no data selling, data stored in India",
      ],
      publisher: { "@id": ORG_ID },
      isFamilyFriendly: true,
      isAccessibleForFree: true,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/product#faq`,
      mainEntity: productFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function ProductPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Product", path: "/product" }]} />
      <JsonLd data={structuredData} />
      
      <div>
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
                  eRaksha
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-4">
                AI-powered digital companion that protects, guides, and inspires children online
              </p>
              <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                eRaksha is an AI-powered child safety app from India that combines DNS filtering with a caring AI
                companion and a parent dashboard. It blocks harmful content, explains why in kid-friendly language,
                and helps children build healthier digital habits. Free forever, or Premium at ₹349/month per child —
                launching {BRAND.launchDateLabel}.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <WaitlistModal>
                  <Button variant="glow" size="lg" className="cursor-pointer">
                    Join Waitlist
                  </Button>
                </WaitlistModal>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://wa.me/919025867204?text=Hi,%20I%27d%20like%20to%20schedule%20a%20demo%20for%20eRaksha" target="_blank" rel="noopener noreferrer">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-foreground/80 mb-12">
                  Children face online dangers while parents struggle with traditional blocking tools that don't explain or educate.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center bg-card p-8 rounded-xl border border-border/30 hover:shadow-[0_0_30px_rgba(249,189,96,0.3)] transition-all duration-500">
                    <div className="text-3xl font-bold text-destructive mb-2">67%</div>
                    <p className="text-sm text-foreground/70">encounter harmful content (McAfee India, 2023)</p>
                  </div>
                  <div className="text-center bg-card p-8 rounded-xl border border-border/30 hover:shadow-[0_0_30px_rgba(115,158,254,0.3)] transition-all duration-500">
                    <div className="text-3xl font-bold text-destructive mb-2">1 in 3</div>
                    <p className="text-sm text-foreground/70">face cyberbullying or online threats (CRY India, 2023)</p>
                  </div>
                  <div className="text-center bg-card p-8 rounded-xl border border-border/30 hover:shadow-[0_0_30px_rgba(249,189,96,0.3)] transition-all duration-500">
                    <div className="text-3xl font-bold text-destructive mb-2">84%</div>
                    <p className="text-sm text-foreground/70">of parents feel helpless (eRaksha Parent Survey, 2025)</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Areas Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6">Core Areas of eRaksha</h2>
                  <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                    A comprehensive platform designed for schools, parents, and students.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ScrollReveal delay={0.1}>
                  <div className="bg-gradient-to-br from-blueLight/10 to-electric/5 p-8 rounded-2xl border border-electric/20 hover:shadow-lg transition-all h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-electric/10">
                      <Shield className="h-8 w-8 text-electric" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Digital Safety</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-electric shrink-0 mt-0.5" /> Harmful content detection</li>
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-electric shrink-0 mt-0.5" /> Online risk monitoring</li>
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-electric shrink-0 mt-0.5" /> Safe internet engagement</li>
                    </ul>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <div className="bg-gradient-to-br from-emerald/10 to-green-500/5 p-8 rounded-2xl border border-emerald/20 hover:shadow-lg transition-all h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald/10">
                      <svg className="w-8 h-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Parent Engagement</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-emerald shrink-0 mt-0.5" /> Parent dashboard</li>
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-emerald shrink-0 mt-0.5" /> Progress tracking</li>
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-emerald shrink-0 mt-0.5" /> Awareness and guidance</li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="bg-gradient-to-br from-orangeLight/10 to-orange/5 p-8 rounded-2xl border border-orange/20 hover:shadow-lg transition-all h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-orange/10">
                      <Brain className="h-8 w-8 text-orange" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Child Wellbeing</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-orange shrink-0 mt-0.5" /> Behavioural trend identification</li>
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-orange shrink-0 mt-0.5" /> Early warning indicators</li>
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-orange shrink-0 mt-0.5" /> Child support mechanisms</li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 p-8 rounded-2xl border border-purple-500/20 hover:shadow-lg transition-all h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-purple-500/10">
                      <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">School Dashboard</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-purple-500 shrink-0 mt-0.5" /> Institution-level insights</li>
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-purple-500 shrink-0 mt-0.5" /> Student wellbeing reports</li>
                      <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 text-purple-500 shrink-0 mt-0.5" /> Intervention tracking</li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Data Safety & Security */}
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/10 blur-3xl rounded-full" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Data Safety & Security</h2>
                <p className="text-xl text-zinc-400">
                  At SlateMate, protecting children's data is a foundational commitment. We have designed our platform with security, privacy, and compliance at its core.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <ScrollReveal delay={0.1}>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-full hover:border-electric/50 transition-colors">
                  <div className="text-electric font-bold text-lg mb-2">ISO/IEC 27001 & 27002</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Security Framework</h3>
                  <p className="text-zinc-400 leading-relaxed">Our security architecture follows internationally recognized ISMS principles, ensuring a structured approach to managing sensitive info and industry-standard security controls.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-full hover:border-electric/50 transition-colors">
                  <div className="text-electric font-bold text-lg mb-2">DPDP Act Compliance</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Privacy Law Aligned</h3>
                  <p className="text-zinc-400 leading-relaxed">SlateMate is committed to aligning with the provisions of India's Digital Personal Data Protection (DPDP) Act, ensuring responsible collection and protection of personal data.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-full hover:border-electric/50 transition-colors">
                  <div className="text-electric font-bold text-lg mb-2">Data Localization</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Residency in India</h3>
                  <p className="text-zinc-400 leading-relaxed">All application data is stored and processed exclusively on servers located within India, ensuring compliance with local requirements and greater control over data governance.</p>
                </div>
              </ScrollReveal>


              <ScrollReveal delay={0.5}>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-full hover:border-electric/50 transition-colors">
                  <div className="text-emerald font-bold text-lg mb-2">Architectural Standard</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Privacy by Design</h3>
                  <p className="text-zinc-400 leading-relaxed">Security and privacy are embedded into every layer, with role-based access controls, encryption mechanisms, audit capabilities, and strict authorization policies.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-full hover:border-electric/50 transition-colors">
                  <div className="text-emerald font-bold text-lg mb-2">Technology & Humanity</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Human-Centric Security</h3>
                  <p className="text-zinc-400 leading-relaxed">Technology supports decision-making, while schools, parents, and authorized stakeholders remain in control of critical actions involving children and their data.</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.7}>
              <div className="mt-16 text-center max-w-3xl mx-auto border-t border-zinc-800 pt-10">
                <p className="text-2xl font-serif italic text-white">
                  "Our commitment is simple: Protect every child's data with the same care and responsibility as we protect their future."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ – question-style headings with answer-first copy (quoted by AI search) */}
        <section className="py-20 bg-muted/30" aria-labelledby="product-faq">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 id="product-faq" className="text-3xl font-bold mb-10 text-center">eRaksha: Common Questions</h2>
              <div className="space-y-6">
                {productFaqs.map((f) => (
                  <div key={f.q} className="bg-card rounded-xl p-6 border border-border/40">
                    <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                    <p className="text-foreground/80 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-foreground/80 mb-8">
                  Join families who trust eRaksha to keep their children safe online
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <WaitlistModal>
                    <Button variant="glow" size="lg" className="cursor-pointer">
                      Join Waitlist
                    </Button>
                  </WaitlistModal>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://wa.me/919025867204?text=Hi,%20I%27d%20like%20to%20schedule%20a%20demo%20for%20eRaksha" target="_blank" rel="noopener noreferrer">Schedule Demo</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
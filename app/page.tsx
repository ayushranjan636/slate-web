import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, Shield, Brain, BarChart3, Lock, Users, School, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Counter } from "@/components/animations/counter"
import { LaunchCta } from "@/components/sections/launch-cta"
import { WaitlistModal } from "@/components/modals/waitlist-modal"
import { SocialFeedLoader } from "@/components/sections/social-feed-loader"
import { JsonLd } from "@/components/seo/json-ld"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: { absolute: "SlateMate eRaksha – AI-Powered Child Safety Platform India" },
  description:
    "eRaksha by SlateMate is India's AI-powered child safety app: DNS protection, a caring AI companion and a parent dashboard. Free plan. Launching 14 Nov 2026.",
  openGraph: {
    title: "SlateMate | AI-Powered Digital Safety for Children",
    description:
      "eRaksha protects children online with AI-powered safety tools, DNS protection, and digital habit guidance. IITMIC incubated startup.",
    url: "https://www.slatemate.in",
    siteName: "SlateMate",
    type: "website",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha Digital Safety for Children",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlateMate | Digital Safety & AI Child Companion",
    description:
      "Join families using eRaksha to protect children online while building positive digital habits. IITMIC incubated startup.",
    images: ["https://www.slatemate.in/og-image.jpg"],
    site: "@slatemate_",
    creator: "@slatemate_",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const benefits = [
  {
    icon: Shield,
    title: "DNS Protection Layer",
    description: "Blocks pornography, scams, violence, and malware across devices with context-aware interventions.",
    color: "from-electric to-bluePrimary",
  },
  {
    icon: Brain,
    title: "AI Child Companion",
    description: "Explains why content is blocked, supports emotions, helps with studies, and builds positive habits.",
    color: "from-emerald to-electric",
  },
  {
    icon: BarChart3,
    title: "Parent Dashboard",
    description: "Get insights on Safety Score, Focus Score, and Emotional Balance Index to guide family digital health.",
    color: "from-orange to-golden",
  },
  {
    icon: Lock,
    title: "Privacy-First Design",
    description: "No ads. No data selling. End-to-end encrypted for maximum family trust.",
    color: "from-bluePrimary to-blueLight",
  },
  {
    icon: Users,
    title: "Safe Social Learning",
    description: "Moderated, private community where children can learn, collaborate, and grow safely.",
    color: "from-blueLight to-electric",
  },
  {
    icon: School,
    title: "School & NGO Integration",
    description: "Scalable B2B2C model empowering institutions to protect children at scale.",
    color: "from-electric to-emerald",
  },
]

const stats = [
  { value: 500, suffix: "+", label: "Harmful Websites Blocked" },
  { value: 25, suffix: "+", label: "Active Beta Users" },
  { value: 100, suffix: "+", label: "Waitlist Signups" },
]

const trustLogos = [
  { src: "/iitmic_logo.jpg", alt: "IIT Madras Incubation Cell", caption: "IITMIC Incubated", width: 400, height: 400, href: "https://incubation.iitm.ac.in" },
  { src: "/IITMRP_logo.jpeg", alt: "IIT Madras Research Park", caption: "Headquarters", width: 597, height: 597, href: "https://respark.iitm.ac.in" },
  { src: "/nirmaan.png", alt: "Nirmaan – The Pre-Incubator, IIT Madras", caption: "Nirmaan Fellow", width: 500, height: 500 },
  { src: "/Amazon-Web-Services-AWS-Logo.png", alt: "Amazon Web Services", caption: "Powered by AWS", width: 3840, height: 2160 },
  { src: "/sarvam-ai-logo.png", alt: "Sarvam AI", caption: "AI Partner", width: 391, height: 129 },
]

const steps = [
  {
    step: "01",
    title: "Install eRaksha",
    description: "Download and set up eRaksha on your child's Android phone (Android 10+) in under 2 minutes. iOS and web are coming later.",
  },
  {
    step: "02",
    title: "Configure Protection",
    description: "Customize safety levels, content filters, and screen time rules based on your child's age.",
  },
  {
    step: "03",
    title: "Relax & Monitor",
    description: "Let the AI companion protect and guide your child while you track everything from the parent dashboard.",
  },
]

/**
 * Testimonials. Add `city`, `childAge`, `photo` (path in /public) and `rating` (1–5)
 * as you collect them. AggregateRating schema is emitted automatically once
 * at least 3 testimonials have a real rating.
 */
type Testimonial = {
  quote: string
  author: string
  role: string
  city?: string
  childAge?: number
  photo?: string
  rating?: number
}

const testimonials: Testimonial[] = [
  {
    quote: "TED feels like a friend, not surveillance.",
    author: "Rishi",
    role: "Child",
  },
  {
    quote: "DNS works silently.",
    author: "Meenu Verma",
    role: "Parent",
  },
  {
    quote: "Waiting for full app.",
    author: "Rajeev Ranjan",
    role: "Parent",
  },
]

const rated = testimonials.filter((t): t is Testimonial & { rating: number } => typeof t.rating === "number")
const aggregateRatingSchema =
  rated.length >= 3
    ? {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/product#software`,
        name: "eRaksha",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: (rated.reduce((sum, t) => sum + t.rating, 0) / rated.length).toFixed(1),
          ratingCount: rated.length,
          bestRating: 5,
          worstRating: 1,
        },
        review: rated.map((t) => ({
          "@type": "Review",
          reviewBody: t.quote,
          author: { "@type": "Person", name: t.author },
          reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
        })),
      }
    : null

export default function Home() {
  return (
    <>
      {aggregateRatingSchema && <JsonLd data={aggregateRatingSchema} />}
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blueLight/40 to-bluePrimary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-orangeLight/40 to-orange/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 py-20 mt-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-6 rounded-full bg-gradient-to-r from-electric/10 to-emerald/10 border border-electric/30 text-xs font-semibold tracking-wide text-electric shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
                </span>
                IITMIC Incubated Startup
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-bluePrimary via-electric to-blueLight">
                  A Smarter, Kinder Digital Guardian for Your Child
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-foreground/80">
                eRaksha is the AI companion parents trust to protect, guide, and emotionally support children online — not just block apps.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <WaitlistModal>
                  <Button variant="glow" size="lg" className="bg-gradient-to-r from-bluePrimary to-electric hover:opacity-90 text-white border-0 shadow-lg shadow-electric/20 cursor-pointer w-full sm:w-auto h-14 text-lg">
                    Join Waiting List <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </WaitlistModal>
                <Button variant="outline" size="lg" className="border-2 border-electric hover:bg-blueLight/20 cursor-pointer w-full sm:w-auto h-14 text-lg" asChild>
                  <Link href="/features">
                    Explore Features
                  </Link>
                </Button>
              </div>
              
              <LaunchCta />
            </div>
        </div>
      </section>

      {/* Answer-first summary: the passage AI search engines quote */}
      <section className="py-16 border-y border-border/30 bg-background" aria-labelledby="what-is-eraksha">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 id="what-is-eraksha" className="text-2xl md:text-3xl font-bold mb-4">What is eRaksha?</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            eRaksha is an AI-powered child safety app from India, built by SlateMate at IIT Madras Research Park.
            It blocks harmful websites through DNS filtering, explains every block to children through a caring AI
            companion, and gives parents a simple dashboard instead of invasive message logs. eRaksha is free forever,
            with a Premium plan at ₹349/month per child, and officially launches on 14th November 2026.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Abstract dark background overlay */}
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950" />
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-bluePrimary/20 blur-3xl rounded-full" />
           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-electric/20 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="mb-16 border-b border-zinc-800 pb-8">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-white uppercase">The Problem</h2>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl">
                Indian children are online earlier than ever. Protection hasn&apos;t kept up.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            <ScrollReveal delay={0.1}>
              <div className="flex gap-4 items-start group">
                <ArrowRight className="h-8 w-8 text-electric mt-1 shrink-0 group-hover:translate-x-2 transition-transform" />
                <div>
                  <h3 className="text-4xl font-bold mb-2">259 M+</h3>
                  <p className="text-lg text-zinc-300 leading-snug">Indian children are online &mdash; one of the largest connected youth populations globally</p>
                  <span className="text-sm text-electric/70 block mt-2 font-medium">(Source: UNICEF-ITU 2023)</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="flex gap-4 items-start group">
                <ArrowRight className="h-8 w-8 text-electric mt-1 shrink-0 group-hover:translate-x-2 transition-transform" />
                <div>
                  <h3 className="text-4xl font-bold mb-2">67%</h3>
                  <p className="text-lg text-zinc-300 leading-snug">encounter harmful or age-inappropriate content</p>
                  <span className="text-sm text-electric/70 block mt-2 font-medium">(Source: McAfee India Teens Report 2023)</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex gap-4 items-start group">
                <ArrowRight className="h-8 w-8 text-electric mt-1 shrink-0 group-hover:translate-x-2 transition-transform" />
                <div>
                  <h3 className="text-4xl font-bold mb-2">1 in 3</h3>
                  <p className="text-lg text-zinc-300 leading-snug">children face cyberbullying, harassment, or online threats</p>
                  <span className="text-sm text-electric/70 block mt-2 font-medium">(Source: CRY India Report 2023)</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="flex gap-4 items-start group">
                <ArrowRight className="h-8 w-8 text-electric mt-1 shrink-0 group-hover:translate-x-2 transition-transform" />
                <div>
                  <h3 className="text-4xl font-bold mb-2">11,000+</h3>
                  <p className="text-lg text-zinc-300 leading-snug">cases of online child sexual exploitation reported in 2023</p>
                  <span className="text-sm text-electric/70 block mt-2 font-medium">(Source: NCRB Crime in India 2023)</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.5}>
              <div className="flex gap-4 items-start group">
                <ArrowRight className="h-8 w-8 text-electric mt-1 shrink-0 group-hover:translate-x-2 transition-transform" />
                <div>
                  <h3 className="text-4xl font-bold mb-2">1 in 7</h3>
                  <p className="text-lg text-zinc-300 leading-snug">adolescents struggle with mental health challenges.</p>
                  <span className="text-sm text-electric/70 block mt-2 font-medium">(Source: World Health Organization (WHO))</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.6}>
              <div className="flex gap-4 items-start group">
                <ArrowRight className="h-8 w-8 text-electric mt-1 shrink-0 group-hover:translate-x-2 transition-transform" />
                <div>
                  <h3 className="text-4xl font-bold mb-2">84%</h3>
                  <p className="text-lg text-zinc-300 leading-snug">of Indian parents feel helpless managing their child's digital life</p>
                  <span className="text-sm text-electric/70 block mt-2 font-medium">(Source: eRaksha Parent Survey, 150+ respondents, 2025)</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/10 relative z-20 border-b border-border/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">What We Have Achieved</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/30 shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bluePrimary to-electric bg-clip-text text-transparent mb-1">
                    <Counter end={stat.value} />{stat.suffix}
                  </div>
                  <p className="text-sm text-foreground/60 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust strip – real partner & recognition logos */}
      <section className="py-12 bg-muted/10 border-b border-border/30" aria-labelledby="trust-heading">
        <div className="container mx-auto px-6">
          <p id="trust-heading" className="text-center text-sm font-semibold text-electric uppercase tracking-wider mb-8">
            Backed by &amp; recognised by
          </p>
          <ul className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-14">
            {trustLogos.map((logo) => {
              const img = (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  sizes="160px"
                  className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              )
              return (
                <li key={logo.alt} className="group flex flex-col items-center gap-2">
                  {logo.href ? (
                    <Link href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.alt}>
                      {img}
                    </Link>
                  ) : (
                    img
                  )}
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{logo.caption}</span>
                </li>
              )
            })}
            <li className="group flex flex-col items-center gap-2">
              <Link
                href="https://www.thehindubusinessline.com/news/education/iit-madras-hosts-delta-expo-to-showcase-student-innovations-and-startups/article70743268.ece"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 md:h-12 flex items-center text-2xl font-bold font-serif text-foreground/70 group-hover:text-foreground transition"
              >
                businessline.
              </Link>
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Featured in The Hindu</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="h-10 md:h-12 flex items-center px-3 rounded-lg border border-border/60 text-sm md:text-base font-bold text-foreground/70">
                DPIIT Recognised
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Startup India</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How does eRaksha work?</h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Three simple steps to a safer digital experience for your child.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="relative bg-card rounded-2xl p-8 border border-border/30 shadow-sm hover:shadow-lg transition-all duration-300 group h-full">
                  {/* Step number */}
                  <div className="text-5xl font-bold bg-gradient-to-br from-electric/20 to-bluePrimary/10 bg-clip-text text-transparent mb-4 select-none">
                    {step.step}
                  </div>
                  {/* Connector line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-14 -right-4 w-8 h-[2px] bg-gradient-to-r from-electric/50 to-transparent z-10" />
                  )}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-electric transition-colors">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-blueLight/20 via-background to-orangeLight/15">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why do families choose eRaksha?</h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                More than parental control — eRaksha is a digital mentor, protector, and growth partner.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-card border border-blueLight/30 rounded-xl p-6 h-full tilt-card hover:border-electric/50 transition-all duration-300 hover:shadow-lg group">
                  <div className="tilt-card-content">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-foreground/80">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What are families saying about eRaksha?</h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Real feedback from the families shaping the future of eRaksha.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="bg-card border border-border/50 rounded-2xl p-8 relative shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between"
              >
                <Quote className="absolute top-6 right-6 h-12 w-12 text-electric/10 rotate-180" aria-hidden="true" />
                {testimonial.rating && (
                  <div className="flex gap-0.5 mb-4" aria-label={`Rated ${testimonial.rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating! ? "fill-golden text-golden" : "text-border"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}
                <blockquote className="text-lg font-medium italic text-foreground/90 mb-8 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  {testimonial.photo ? (
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bluePrimary to-electric flex items-center justify-center text-white font-bold text-lg shadow-sm" aria-hidden="true">
                      {testimonial.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold leading-tight">{testimonial.author}</p>
                    <p className="text-sm text-electric font-medium">
                      {[
                        testimonial.role,
                        testimonial.childAge ? `child aged ${testimonial.childAge}` : null,
                        testimonial.city,
                      ]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SocialFeedLoader />

      {/* CTA Section */}
      <section className="py-24">
        <ScrollReveal>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-bluePrimary via-electric to-blueLight rounded-3xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">We are not parental control. We are eRaksha.</h2>
              <p className="text-xl mb-8 opacity-90">
                Join us in shaping a safer digital future. Empower your child with guidance, trust, and protection.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <WaitlistModal>
                  <Button variant="glow" size="lg" className="border border-white/20 bg-white/20 backdrop-blur-sm hover:bg-white/30 cursor-pointer">
                    Join Waiting List
                  </Button>
                </WaitlistModal>
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-white/40 hover:bg-white/10 text-white" asChild>
                  <Link href="https://wa.me/919025867204?text=Hi,%20I%27d%20like%20to%20schedule%20a%20demo%20for%20eRaksha" target="_blank" rel="noopener noreferrer">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}

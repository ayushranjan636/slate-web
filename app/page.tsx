import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, Shield, Brain, BarChart3, Lock, Users, School, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Counter } from "@/components/animations/counter"
import { Countdown } from "@/components/animations/countdown"
import { WaitlistModal } from "@/components/modals/waitlist-modal"
import { SocialFeedLoader } from "@/components/sections/social-feed-loader"

export const metadata: Metadata = {
  title: "SlateMate eRaksha – AI-Powered Child Safety Platform",
  description:
    "eRaksha by SlateMate – India's AI-powered child safety companion. DNS protection, intelligent mentoring, and privacy-first design for safer internet. IITMIC incubated startup.",
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
    site: "@slatemate_in",
    creator: "@slatemate_in",
  },
  alternates: {
    canonical: "https://www.slatemate.in",
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

const steps = [
  {
    step: "01",
    title: "Install eRaksha",
    description: "Download and set up eRaksha on your child's device in under 2 minutes. Works across all platforms.",
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

const testimonials = [
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blueLight/40 to-bluePrimary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-orangeLight/40 to-orange/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 py-20 mt-8 relative z-10">
          <ScrollReveal>
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
              
              <div className="mt-12">
                <p className="text-sm font-semibold text-electric uppercase tracking-wider">Public Launch on 5th September</p>
                <Countdown targetDate="2026-09-05T00:00:00" />
              </div>
            </div>
          </ScrollReveal>
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
                The issue is becoming bigger and bigger nowadays.
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

      {/* Press & Recognition Section */}
      <section className="py-12 bg-muted/10 border-b border-border/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-2">Backed By & Recognized By</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="group flex flex-col items-center gap-1 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <span className="text-xl md:text-2xl font-bold text-foreground">DPIIT Recognized</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Startup India</span>
              </div>
              <Link href="https://www.thehindubusinessline.com/news/education/iit-madras-hosts-delta-expo-to-showcase-student-innovations-and-startups/article70743268.ece" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <span className="text-xl md:text-2xl font-bold font-serif text-foreground">businessline.</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">The Hindu</span>
              </Link>
              <div className="group flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-border/50 overflow-hidden">
                  <Image src="/iitmic_logo.jpg" alt="IITMIC" width={40} height={40} className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground leading-tight">IITM Incubated</span>
                  <span className="text-[10px] font-medium text-emerald bg-emerald/10 px-1.5 py-0.5 rounded mt-0.5 w-fit border border-emerald/20">Startup Shatham Mission</span>
                </div>
              </div>
              <div className="group flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-border/50 overflow-hidden">
                  <Image src="/IITMRP_logo.jpeg" alt="IITMRP" width={40} height={40} className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground leading-tight">IITM Research Park</span>
                  <span className="text-[10px] font-medium text-electric bg-electric/10 px-1.5 py-0.5 rounded mt-0.5 w-fit border border-electric/20">Headquarters</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How eRaksha Works</h2>
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
              <h2 className="text-3xl font-bold mb-4">Why Families Choose eRaksha</h2>
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
              <h2 className="text-3xl font-bold mb-4">What Families Are Saying</h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Real feedback from the families shaping the future of eRaksha.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-card border border-border/50 rounded-2xl p-8 relative shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 h-full flex flex-col justify-between group">
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-electric/10 rotate-180 group-hover:text-electric/20 transition-colors" />
                  <p className="text-lg font-medium italic text-foreground/90 mb-8 relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bluePrimary to-electric flex items-center justify-center text-white font-bold text-lg shadow-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold leading-tight">{testimonial.author}</h4>
                      <p className="text-sm text-electric font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
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

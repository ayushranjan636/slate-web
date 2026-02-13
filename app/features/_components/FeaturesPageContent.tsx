"use client"

import Head from "next/head" // ✅ Add Head
import { TiltCard } from "@/components/ui/tilt-card"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { motion } from "framer-motion"
import {
  LucideBrain,
  LucideShield,
  LucideUsers,
  LucideBarChart,
  LucideLock,
  LucideTarget,
} from "lucide-react"


const FeaturePageContent = () => {
  const features = [
    {
      title: "DNS Protection Layer",
      description:
        "Advanced DNS filtering blocks pornography, scams, violence, and malware across all devices. Context-aware interventions warn, blur, block, and suggest safe alternatives automatically.",
      icon: LucideShield,
      color: "bg-electric",
      shadowColor: "shadow-electric/30",
    },
    {
      title: "AI Child Companion",
      description:
        "Friendly AI companion explains blocked content in kid-friendly terms, provides emotional check-ins, study support, and builds positive digital habits through gamification.",
      icon: LucideBrain,
      color: "bg-bluePrimary",
      shadowColor: "shadow-bluePrimary/30",
    },
    {
      title: "Parent Dashboard",
      description:
        "Comprehensive insights with Safety Score, Focus Score, and Emotional Balance Index. Real-time monitoring and family digital health guidance to support your child's growth.",
      icon: LucideBarChart,
      color: "bg-orange",
      shadowColor: "shadow-orange/30",
    },
    {
      title: "Privacy-First Design",
      description:
        "Zero ads, no data selling, end-to-end encryption for maximum family trust. Your child's data stays private and secure with industry-leading protection standards.",
      icon: LucideLock,
      color: "bg-blueLight",
      shadowColor: "shadow-blueLight/30",
    },
    {
      title: "Safe Social Learning",
      description:
        "Moderated, private community where children learn, collaborate, and grow safely. Age-appropriate interactions with built-in safety controls and expert supervision.",
      icon: LucideUsers,
      color: "bg-orangeLight",
      shadowColor: "shadow-orangeLight/30",
    },
    {
      title: "School & NGO Integration",
      description:
        "Scalable B2B2C model empowering educational institutions to protect children at scale. Bulk licensing and custom deployment for schools and organizations.",
      icon: LucideTarget,
      color: "bg-electric",
      shadowColor: "shadow-electric/30",
    },
  ]

  return (
    <div className="pt-16">
      <Head>
  <title>eRaksha Features | AI Digital Guardian & Child Safety Tools</title>
  <meta
    name="description"
    content="Explore eRaksha's comprehensive child safety features — DNS protection, AI companion, parent dashboard, privacy-first design, and safe social learning for complete family digital wellness."
  />
  <meta
    name="keywords"
    content="eRaksha Features, AI child companion, DNS protection children, digital safety dashboard, child online protection, AI safety mentor, family digital health, safe social learning"
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="SlateMate Team" />
  <meta name="language" content="en" />

  {/* Open Graph */}
  <meta property="og:title" content="eRaksha Features | AI Digital Guardian" />
  <meta
    property="og:description"
    content="Comprehensive digital safety tools: DNS protection, AI mentoring, habit building, and privacy-first family security platform."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.slatemate.in/features" />
  <meta property="og:image" content="https://www.slatemate.in/og-image.jpg" />
  <meta property="og:site_name" content="SlateMate" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="eRaksha Features | AI Child Protection" />
  <meta
    name="twitter:description"
    content="DNS protection, AI mentoring, habit building, and privacy-first digital safety for children and families."
  />
  <meta name="twitter:image" content="https://www.slatemate.in/twitter-image.png" />
  <meta name="twitter:site" content="@slatemate_in" />
</Head>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">eRaksha</span> Features
            </h1>
            <p className="text-xl mb-8 text-foreground/80">
              Comprehensive digital safety features that protect, guide, and inspire children to build positive digital habits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group h-full bg-white border border-border/30 rounded-xl p-8 transition-all duration-500 ease-out cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_-5px] hover:border-border/50"
                  style={{
                    boxShadow: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const shadowColor = feature.shadowColor.replace('shadow-', '').replace('/30', '')
                    e.currentTarget.style.boxShadow = `0 0 40px -5px hsl(var(--${shadowColor}) / 0.3)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">See eRaksha in Action</h2>
              <p className="text-lg text-foreground/80">
                Experience how our features work together to create a safer, smarter digital environment for children.
              </p>
            </div>
          </ScrollReveal>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-card">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Demo Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Choose eRaksha?</h2>
              <p className="text-lg text-foreground/80">See how we compare to traditional parental control solutions.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-muted">Features</th>
                    <th className="p-4 text-center bg-muted">eRaksha</th>
                    <th className="p-4 text-center bg-muted">Traditional Parental Controls</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "AI Child Companion", slatemate: true, traditional: false },
                    { feature: "DNS Protection Layer", slatemate: true, traditional: false },
                    { feature: "Emotional Balance Monitoring", slatemate: true, traditional: false },
                    { feature: "Positive Habit Building", slatemate: true, traditional: false },
                    { feature: "Context-Aware Blocking", slatemate: true, traditional: false },
                    { feature: "Privacy-First Design (No Ads)", slatemate: true, traditional: false },
                  ].map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.slatemate ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald rounded-full">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-crimson rounded-full">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.traditional ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald rounded-full">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-crimson rounded-full">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default FeaturePageContent

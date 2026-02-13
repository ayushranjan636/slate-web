"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import Head from "next/head"

export function PricingPageContent() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Basic",
      price: "Free",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      originalYearlyPrice: null,
      description: "Essential digital safety for 1 child",
      features: [
        "Basic DNS protection",
        "Simple content filtering", 
        "Weekly safety reports",
        "Email support",
        "1 child profile",
        "Basic AI companion"
      ],
      cta: "Join Community",
      ctaLink: "https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt",
      popular: false,
      gradient: "white",
    },
    {
      name: "Standard",
      monthlyPrice: "₹299",
      yearlyPrice: "₹2,990",
      originalYearlyPrice: "₹3,588",
      description: "Complete protection & AI companion for 1 child",
      features: [
        "Advanced DNS protection",
        "Real-time AI companion",
        "Parent dashboard with insights",
        "Safety Score & Focus Score",
        "24/7 content monitoring",
        "Habit building tools",
        "Email & chat support",
        "1 child profile"
      ],
      cta: "Join Community",
      ctaLink: "https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt",
      popular: true,
      gradient: "blue",
    },
    {
      name: "Premium", 
      monthlyPrice: "₹599",
      yearlyPrice: "₹5,990",
      originalYearlyPrice: "₹7,188",
      description: "Advanced family digital wellness for 1 child",
      features: [
        "Everything in Standard",
        "Advanced AI mentoring",
        "Emotional Balance Index",
        "Safe social learning access",
        "Custom content filters",
        "School integration",
        "Priority support",
        "1 child profile",
        "Family coaching sessions"
      ],
      cta: "Join Community",
      ctaLink: "https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt",
      popular: false,
      gradient: "orange",
    },
  ]

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer:
        "Yes, you can upgrade or downgrade your eRaksha plan at any time. Changes will be applied at the start of your next billing cycle.",
    },
    {
      question: "Are there discounts for annual subscriptions?",
      answer: "Yes, we offer a 2-month discount for annual subscriptions on both Standard and Premium plans. Pay for 10 months, get 12 months of protection.",
    },
    {
      question: "How does per-child pricing work?",
      answer:
        "Each plan is priced per child. The Standard plan includes up to 3 child profiles at ₹299/month, while Premium offers unlimited child profiles at ₹599/month per child.",
    },
    {
      question: "Do you offer family discounts?",
      answer:
        "Yes! For families with multiple children, our Premium plan offers the best value with unlimited child profiles and advanced family coaching features.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial of our Standard plan, no credit card required. You can also use our Basic plan free forever.",
    },
  ]

  return (
    <div className="pt-16">
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Pricing | SlateMate</title>
        <meta
          name="description"
          content="Explore SlateMate's affordable pricing plans for students, families, and schools. Get started with AI-powered, personalized, and safe education today."
        />
        <meta
          name="keywords"
          content="SlateMate pricing, AI education platform, school software pricing, EdTech plans, parental control software, student safety, LMS integration, custom education software, education analytics"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SlateMate Team" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E2A38" />
        <meta name="copyright" content="SlateMate" />

        {/* Open Graph */}
        <meta property="og:title" content="Pricing | SlateMate" />
        <meta
          property="og:description"
          content="Choose a plan that suits your learning needs — from free tools to full school solutions. SlateMate offers flexible AI-powered pricing options."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.slatemate.in/pricing" />
        <meta property="og:image" content="https://www.slatemate.in/og-image.jpg" />
        <meta property="og:site_name" content="SlateMate" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing | SlateMate" />
        <meta
          name="twitter:description"
          content="Discover flexible, transparent pricing for SlateMate’s AI-powered education platform. Designed for students, families, and institutions."
        />
        <meta name="twitter:image" content="https://www.slatemate.in/og-image.jpg" />
        <meta name="twitter:site" content="@slatemate_in" />
        <meta name="twitter:creator" content="@slatemate_in" />
      </Head>

      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">eRaksha</span> Pricing Plans
            </h1>
            <p className="text-xl mb-6 text-foreground/80">
              Protect your child's digital journey with transparent, family-friendly pricing.
            </p>
            <p className="text-sm text-foreground/60 mb-8">All plans are for 1 child</p>
            
            {/* Monthly/Yearly Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-foreground/50'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-16 h-8 rounded-full transition-colors ${isYearly ? 'bg-electric' : 'bg-muted-foreground/30'}`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${isYearly ? 'translate-x-8' : 'translate-x-0'}`}
                />
              </button>
              <span className={`text-lg font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-foreground/50'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="text-sm bg-emerald/20 text-emerald px-3 py-1 rounded-full font-semibold">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice
              const showOriginalPrice = isYearly && plan.originalYearlyPrice
              
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div
                    className={`relative rounded-xl p-8 h-full transition-all duration-300 border bg-white
                      ${plan.gradient === 'blue'
                        ? 'hover:shadow-2xl shadow-xl border-electric/50'
                        : plan.gradient === 'orange'
                        ? 'hover:shadow-2xl shadow-lg border-orange/40'
                        : 'hover:shadow-lg shadow-sm border-border'
                      }
                      ${plan.popular ? "border-2 border-electric scale-105" : ""}
                    `}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-bluePrimary to-electric text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
                        Most Popular
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        {showOriginalPrice && (
                          <div className="text-lg text-foreground/50 line-through">
                            {plan.originalYearlyPrice}
                          </div>
                        )}
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold">{currentPrice}</span>
                          {currentPrice !== "Free" && (
                            <span className="text-foreground/70">/{isYearly ? 'year' : 'month'}</span>
                          )}
                        </div>
                      </div>
                      <p className="text-foreground/80 mb-6">{plan.description}</p>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-3 h-5 w-5 flex-shrink-0 rounded-full bg-emerald/20 text-emerald flex items-center justify-center mt-0.5">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-foreground/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <Button 
                        variant={plan.popular ? "glow" : "default"} 
                        className={`w-full ${
                          plan.gradient === 'blue' 
                            ? 'bg-gradient-to-r from-bluePrimary to-electric text-white hover:opacity-90' 
                            : plan.gradient === 'orange'
                            ? 'bg-gradient-to-r from-orange to-orangeLight text-white hover:opacity-90'
                            : ''
                        }`}
                        asChild={!!plan.ctaLink}
                      >
                        {plan.ctaLink ? (
                          <Link href={plan.ctaLink} target="_blank" rel="noopener noreferrer">{plan.cta}</Link>
                        ) : (
                          <span>{plan.cta}</span>
                        )}
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Pricing Questions</h2>
              <p className="text-lg text-foreground/80">
                Everything you need to know about eRaksha pricing and family protection plans.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {faqs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="mb-6 bg-card rounded-lg p-6 border shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-foreground/80">{item.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-card rounded-2xl p-12 text-center shadow-lg border">
              <h2 className="text-3xl font-bold mb-4">Ready to protect your child?</h2>
              <p className="text-lg mb-8 text-foreground/80">
                Start with our free Basic plan or get full protection with a 14-day free trial.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg" asChild>
                  <Link href="https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Start Free Trial
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://wa.me/919025867204?text=Hi,%20I%27d%20like%20to%20schedule%20a%20demo%20for%20eRaksha" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Schedule Demo
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

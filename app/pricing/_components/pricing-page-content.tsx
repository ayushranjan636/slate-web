"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function PricingPageContent() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "/forever",
      description: "Essential digital safety for 1 child — free forever",
      features: [
        "DNS protection against harmful sites",
        "Simple content filtering",
        "Weekly safety reports",
        "Basic AI companion",
        "Email support",
        "1 child profile",
      ],
      cta: "Join Community",
      ctaLink: "https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt",
      popular: false,
    },
    {
      name: "Premium",
      price: "₹349",
      period: "/month per child",
      description: "Complete protection, AI companion & parent insights for 1 child",
      features: [
        "Everything in Free",
        "Advanced DNS protection",
        "Real-time AI companion & mentoring",
        "Parent dashboard with insights",
        "Safety Score, Focus Score & Emotional Balance Index",
        "Emotion-based alerts & weekly reports",
        "Habit building tools",
        "Custom content filters",
        "Priority email & chat support",
        "1 child profile",
      ],
      cta: "Join Community",
      ctaLink: "https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt",
      popular: true,
    },
  ]

  const faqs = [
    {
      question: "How much does eRaksha cost?",
      answer:
        "eRaksha has two plans. The Free plan is free forever. The Premium plan costs ₹349 per month per child.",
    },
    {
      question: "Can I switch plans at any time?",
      answer:
        "Yes, you can upgrade from Free to Premium or downgrade at any time. Changes apply at the start of your next billing cycle.",
    },
    {
      question: "How does per-child pricing work?",
      answer:
        "Each plan covers one child. For families with multiple children, add a separate Premium subscription (₹349/month) for each child who needs full protection.",
    },
    {
      question: "When does eRaksha launch?",
      answer: "eRaksha officially launches on 14th November 2026. Join the waitlist to get early access.",
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">eRaksha</span> Pricing Plans
            </h1>
            <p className="text-xl mb-6 text-foreground/80">
              Protect your child's digital journey with transparent, family-friendly pricing.
            </p>
            <p className="text-sm text-foreground/60 mb-8">Simple pricing: Free forever, or Premium at ₹349/month per child</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => {
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div
                    className={`relative rounded-xl p-8 h-full flex flex-col transition-all duration-300 border bg-white
                      ${plan.popular
                        ? 'hover:shadow-2xl shadow-xl border-2 border-electric'
                        : 'hover:shadow-lg shadow-sm border-border'
                      }
                    `}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-bluePrimary to-electric text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
                        Recommended
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          {plan.period && (
                            <span className="text-foreground/70">{plan.period}</span>
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
                          plan.popular
                            ? 'bg-gradient-to-r from-bluePrimary to-electric text-white hover:opacity-90'
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
                Start free forever, or unlock full protection with Premium at ₹349/month per child. Launching 14th November 2026.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg" asChild>
                  <Link href="https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt" target="_blank" rel="noopener noreferrer">
                    Join the Community
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://wa.me/919025867204?text=Hi,%20I%27d%20like%20to%20schedule%20a%20demo%20for%20eRaksha" target="_blank" rel="noopener noreferrer">
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

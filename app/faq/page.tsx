import { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { HelpCircle, Shield, Smartphone, Lock, CreditCard, Settings, School, Wrench, Building2, Target, Mail, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ | SlateMate eRaksha - Child Safety Questions & Answers",
  description:
    "Complete FAQ for eRaksha child safety platform. Get answers about AI companion features, DNS protection, pricing, privacy, installation, and family digital safety.",
  keywords:
    "eRaksha FAQ India 2024, child safety platform questions, AI digital protection answers, family internet safety FAQ, parental control questions India, DNS protection children FAQ, digital wellness platform support, child online safety answers, AI companion questions, family cybersecurity FAQ, screen time management questions, digital parenting support India, child privacy protection FAQ, online safety education answers, family digital health questions, child internet monitoring FAQ, digital habits guidance questions, AI child psychology support FAQ, cyber safety children answers, digital citizenship education FAQ, child screen addiction help questions, family technology balance FAQ, child emotional AI support answers, digital detox family questions, safe internet browsing FAQ, child development platform questions, digital mindfulness children FAQ, family communication platform support, child online behavior FAQ, AI safety mentor questions, digital guardian platform FAQ, child data privacy questions India, family digital literacy support, safe social media children FAQ, educational technology safety questions, child cyberbullying prevention FAQ, digital child protection answers, AI powered parenting FAQ, family internet filter questions, child online identity protection FAQ, digital wellness dashboard support, AI child guidance platform FAQ",
  openGraph: {
    title: "Frequently Asked Questions | SlateMate - AI-Powered Learning Platform",
    description:
      "Find answers to common questions about SlateMate's AI-powered learning platform. Learn about features, pricing, and safety measures.",
    type: "website",
    url: "https://slatemate.in/faq",
    images: [
      {
        url: "https://slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | SlateMate - AI-Powered Learning Platform",
    description:
      "Find answers to common questions about SlateMate's AI-powered learning platform, including safety, pricing, and features.",
    images: ["https://slatemate.in/og-image.jpg"],
    site: "@slatemate_in",
  },
  alternates: {
    canonical: "https://slatemate.in/faq",
  },
  metadataBase: new URL("https://slatemate.in"),
  robots: {
    index: true,
    follow: true,
  },
  creator: "SlateMate Team",
  publisher: "SlateMate",
  category: "education",
  other: {
    // LLM Optimization for FAQ Page
    "ai-content-type": "faq-support-page",
    "ai-primary-entities": "eRaksha-FAQ,child-safety-questions,AI-companion-answers,support-documentation",
    "ai-content-topics": "frequently asked questions, child safety support, AI companion guidance, technical help, platform assistance",
    "ai-extraction-hints": "content: Q&A format; purpose: user support; topics: child safety, AI features, pricing, technical issues",
    "llm-context-type": "question-answer-database",
    "llm-primary-intent": "provide comprehensive answers to user questions, reduce support burden",
    "llm-key-messages": "comprehensive support, expert answers, user-friendly guidance, technical assistance available",
    "semantic-entities": "document:FAQ, concept:questions-answers, product:eRaksha, support:customer-service",
    "relationship-mapping": "users:ask:questions, FAQ:provides:answers, support:helps:users, eRaksha:addresses:concerns",
    "content-structure": "question-categories, detailed-answers, technical-explanations, troubleshooting-guides",
    "stakeholder-relevance": "users:problem-solving, parents:safety-concerns, technical-users:implementation-details",
    "question-categories": "Safety Features, Pricing, Technical Setup, Privacy, AI Companion, Family Use",
    "geo.region": "IN",
    "audience": "Parents, Families, Technical Users, Potential Customers",
    "page-topic": "eRaksha Frequently Asked Questions and Support",
    "support-level": "Comprehensive FAQ Database"
  },
}

export default function FAQ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SlateMate eRaksha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SlateMate eRaksha is an AI-powered digital safety and learning companion designed for children aged 10 – 16. It helps them build healthy screen habits, learn safely online, and stay protected from harmful or distracting digital content — while keeping parents informed and in control."
        }
      },
      {
        "@type": "Question",
        "name": "Is eRaksha free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The basic version is completely free. The Premium Plan (₹299/month per child) unlocks advanced AI insights, weekly reports, emotion-based alerts, and deeper parental analytics."
        }
      },
      {
        "@type": "Question",
        "name": "How does eRaksha keep my child safe online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI continuously analyses online content (videos, sites, messages) and classifies it as harmful, neutral, or educational. Harmful content is redirected to safe, age-appropriate learning alternatives."
        }
      },
      {
        "@type": "Question",
        "name": "Does the app monitor personal chats or private messages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. eRaksha does not read or record private messages, camera feeds, or calls. It focuses only on usage patterns, app categories, and open-web content — never personal data."
        }
      }
    ]
  }

  const FAQItem = ({ question, answer, emoji }: { question: string; answer: string | React.ReactNode; emoji?: string }) => (
    <div className="mb-6 bg-card p-6 rounded-lg border border-border/30 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold mb-3 text-foreground flex items-start gap-2">
        {emoji && <span className="text-xl">{emoji}</span>}
        <span>{question}</span>
      </h3>
      <div className="text-foreground/70 leading-relaxed">{answer}</div>
    </div>
  )

  return (
    <>
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="pt-16">
        {/* Hero Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-primary/10 rounded-full">
                    <HelpCircle className="h-12 w-12 text-blue-primary" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                <p className="text-lg text-foreground/70 mb-2">
                  SlateMate / eRaksha
                </p>
                <p className="text-sm text-foreground/60">
                  Last updated: October 2025
                </p>
                <p className="text-base text-foreground/70 mt-4 max-w-2xl mx-auto">
                  Here you'll find answers to the most common questions from parents, students, and schools about our platform.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          
          {/* About eRaksha */}
          <ScrollReveal>
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-7 w-7 text-blue-primary" />
                <h2 className="text-3xl font-bold">About eRaksha</h2>
              </div>
              
              <FAQItem
                question="1. What is SlateMate eRaksha?"
                answer="SlateMate eRaksha is an AI-powered digital safety and learning companion designed for children aged 10 – 16. It helps them build healthy screen habits, learn safely online, and stay protected from harmful or distracting digital content — while keeping parents informed and in control."
              />
              
              <FAQItem
                question="2. Who created eRaksha?"
                answer="eRaksha is built by SlateMate, a mission-driven Indian startup focused on child safety, emotional intelligence, and digital well-being."
              />
              
              <FAQItem
                question="3. What makes eRaksha different from other parental-control apps?"
                answer={
                  <>
                    <p className="mb-2">Unlike typical blocking tools, eRaksha focuses on <strong>guidance + growth</strong>.</p>
                    <p className="mb-2">It doesn't just restrict — it explains, redirects, and teaches.</p>
                    <p>Our AI companion helps children understand "why" certain content is unsafe and gently encourages productive habits.</p>
                  </>
                }
              />
            </section>
          </ScrollReveal>

          {/* Using the App */}
          <ScrollReveal>
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="h-7 w-7 text-orange" />
                <h2 className="text-3xl font-bold">Using the App</h2>
              </div>
              
              <FAQItem
                question="4. What are the two apps — Child App and Parent App?"
                answer={
                  <>
                    <p className="mb-2"><strong>eRaksha (Child App):</strong> Installed on the child's device. It filters content, tracks digital habits, and offers positive reinforcement through an AI companion.</p>
                    <p><strong>Parent App:</strong> Installed on the parent's phone. It shows reports, allows limit-setting, and manages permissions or subscriptions.</p>
                  </>
                }
              />
              
              <FAQItem
                question="5. Do I need both apps?"
                answer="Yes. eRaksha works best as a parent–child pair. The parent app connects securely with the child app to manage settings and view insights."
              />
              
              <FAQItem
                question="6. Can children use eRaksha without a parent account?"
                answer="No. A parent or legal guardian must first create and approve the child profile to comply with digital-safety laws and ensure proper consent."
              />
            </section>
          </ScrollReveal>

          {/* Safety & Technology */}
          <ScrollReveal>
            <section className="mb-12 bg-gradient-to-br from-blueLight/10 to-orangeLight/10 p-8 rounded-xl border border-border/30">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-7 w-7 text-blue-primary" />
                <h2 className="text-3xl font-bold">Safety & Technology</h2>
              </div>
              
              <FAQItem
                question="7. How does eRaksha keep my child safe online?"
                answer="Our AI continuously analyses online content (videos, sites, messages) and classifies it as harmful, neutral, or educational. Harmful content is redirected to safe, age-appropriate learning alternatives."
              />
              
              <FAQItem
                question="8. Does the app monitor personal chats or private messages?"
                answer="No. eRaksha does not read or record private messages, camera feeds, or calls. It focuses only on usage patterns, app categories, and open-web content — never personal data."
              />
              
              <FAQItem
                question="9. How is my child's privacy protected?"
                answer={
                  <>
                    <p className="mb-2">All collected data is encrypted, stored securely, and used only to provide core safety and learning features.</p>
                    <p>We comply with India's Digital Personal Data Protection Act (2023) and international child-safety norms (COPPA, GDPR-K). See our full <a href="/privacy" className="text-blue-primary hover:underline font-medium">Privacy Policy</a>.</p>
                  </>
                }
              />
            </section>
          </ScrollReveal>

          {/* Subscriptions & Payments */}
          <ScrollReveal>
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-7 w-7 text-orange" />
                <h2 className="text-3xl font-bold">Subscriptions & Payments</h2>
              </div>
              
              <FAQItem
                question="10. Is eRaksha free?"
                answer="Yes. The basic version is completely free."
              />
              
              <FAQItem
                question="11. What is included in the Premium Plan?"
                answer="The Premium Plan (₹299 / month per child) unlocks advanced AI insights, weekly reports, emotion-based alerts, and deeper parental analytics."
              />
              
              <FAQItem
                question="12. How can I pay or cancel my subscription?"
                answer="All payments go through Google Play Billing. You can manage or cancel your plan anytime from your Google Play account settings."
              />
              
              <FAQItem
                question="13. Do you offer refunds?"
                answer={
                  <>
                    Refunds follow <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">Google Play's official refund policy</a>. You can also contact <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline">support@slatemate.in</a> for billing issues.
                  </>
                }
              />
            </section>
          </ScrollReveal>

          {/* Parental Controls & Features */}
          <ScrollReveal>
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-7 w-7 text-blue-primary" />
                <h2 className="text-3xl font-bold">Parental Controls & Features</h2>
              </div>
              
              <FAQItem
                question="14. Can I set screen-time limits or block apps?"
                answer="Yes. Parents can set daily usage limits, bedtime schedules, and block or allow specific app categories."
              />
              
              <FAQItem
                question="15. What type of reports will I receive?"
                answer={
                  <>
                    <p className="mb-2">You'll receive weekly insights on:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Screen-time distribution</li>
                      <li>Top learning vs. distraction categories</li>
                      <li>Positive habit streaks</li>
                      <li>AI-generated suggestions for improving focus</li>
                    </ul>
                  </>
                }
              />
              
              <FAQItem
                question="16. What if my child tries to uninstall the app?"
                answer="The parent app will receive an instant alert. You can re-link or re-enforce child protection easily through secure pairing."
              />
            </section>
          </ScrollReveal>

          {/* Data & Permissions */}
          <ScrollReveal>
            <section className="mb-12 bg-gradient-to-br from-orangeLight/10 to-blueLight/10 p-8 rounded-xl border border-border/30">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-7 w-7 text-orange" />
                <h2 className="text-3xl font-bold">Data & Permissions</h2>
              </div>
              
              <FAQItem
                question="17. What permissions does eRaksha ask for?"
                answer="We only request permissions necessary for functionality — such as accessibility (for usage monitoring), notifications (for alerts), and device statistics. The parent must explicitly grant these during setup."
              />
              
              <FAQItem
                question="18. Can I delete my or my child's data?"
                answer={
                  <>
                    Yes. You may request deletion anytime by emailing <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline">support@slatemate.in</a> from your registered parent account. Your data will be erased securely within a reasonable period, except where retention is legally required.
                  </>
                }
              />
            </section>
          </ScrollReveal>

          {/* Schools & Collaborations */}
          <ScrollReveal>
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <School className="h-7 w-7 text-blue-primary" />
                <h2 className="text-3xl font-bold">Schools & Collaborations</h2>
              </div>
              
              <FAQItem
                question="19. Can schools use eRaksha?"
                answer={
                  <>
                    Yes. eRaksha can integrate with school networks to provide safe digital environments for students. Schools can contact us for pilot programs or partnerships at <a href="mailto:partners@slatemate.in" className="text-blue-primary hover:underline">partners@slatemate.in</a>.
                  </>
                }
              />
              
              <FAQItem
                question="20. Is there a dashboard for teachers or administrators?"
                answer="A school dashboard is currently in development. It will enable classroom-safe browsing, student analytics, and parent communication tools."
              />
            </section>
          </ScrollReveal>

          {/* Technical Help */}
          <ScrollReveal>
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="h-7 w-7 text-orange" />
                <h2 className="text-3xl font-bold">Technical Help</h2>
              </div>
              
              <FAQItem
                question="21. The app isn't connecting between parent and child devices. What should I do?"
                answer={
                  <>
                    Ensure both apps are updated, and both devices have an active internet connection. If the problem persists, open the Parent App → Help & Support → Reconnect Device, or email <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline">support@slatemate.in</a>.
                  </>
                }
              />
              
              <FAQItem
                question="22. How do I report bugs or suggest improvements?"
                answer={
                  <>
                    You can report directly inside the app under "Feedback" or email <a href="mailto:feedback@slatemate.in" className="text-blue-primary hover:underline">feedback@slatemate.in</a>.
                  </>
                }
              />
              
              <FAQItem
                question="23. Does eRaksha work on iOS?"
                answer="Currently, eRaksha is optimized for Android 10+. iOS and web versions are planned for future releases."
              />
            </section>
          </ScrollReveal>

          {/* Company & Compliance */}
          <ScrollReveal>
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-7 w-7 text-blue-primary" />
                <h2 className="text-3xl font-bold">Company & Compliance</h2>
              </div>
              
              <FAQItem
                question="24. Is SlateMate a registered company?"
                answer="SlateMate operates as a technology initiative currently under incorporation. We adhere to all Indian legal frameworks and Google Play requirements for family-oriented apps."
              />
              
              <FAQItem
                question="25. Where are you based?"
                answer="We are based in India, with our technology and R&D operations supported by mentors and partners from IIT Madras and allied institutions."
              />
              
              <FAQItem
                question="26. How can I contact your team?"
                answer={
                  <>
                    <p className="mb-1">📧 <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline">support@slatemate.in</a></p>
                    <p className="mb-1">🌐 <a href="https://www.slatemate.in" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">www.slatemate.in</a></p>
                    <p>For collaborations or media inquiries, reach <a href="mailto:team@slatemate.in" className="text-blue-primary hover:underline">team@slatemate.in</a>.</p>
                  </>
                }
              />
            </section>
          </ScrollReveal>

          {/* Vision & Promise */}
          <ScrollReveal>
            <section className="mb-12 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/15 p-8 rounded-xl border border-border/30">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-7 w-7 text-orange" />
                <h2 className="text-3xl font-bold">Vision & Promise</h2>
              </div>
              
              <FAQItem
                question="27. What is your long-term mission?"
                answer="To build a future where children can explore technology fearlessly — protected, emotionally supported, and empowered to grow smarter online."
              />
              
              <FAQItem
                question="28. What does 'eRaksha' mean?"
                answer='"eRaksha" means electronic protection — symbolizing digital safety combined with care and learning.'
              />
            </section>
          </ScrollReveal>

          {/* Still Have Questions */}
          <ScrollReveal>
            <section className="bg-gradient-to-br from-orangeLight/15 via-background to-blueLight/15 p-10 rounded-xl border border-border/30 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Sparkles className="h-10 w-10 text-blue-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                If you didn't find what you were looking for, please reach us anytime at <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline font-medium">support@slatemate.in</a>.
              </p>
              <p className="text-foreground/70">
                We love hearing from parents, educators, and innovators who believe in safe digital growth for children.
              </p>
            </section>
          </ScrollReveal>

        </div>
      </div>
    </>
  )
}

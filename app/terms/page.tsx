import { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FileText, Shield, Users, CreditCard, Code, AlertCircle, RefreshCw, UserCheck, Link2, Scale, Ban, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | SlateMate eRaksha - Child Safety Platform Agreement",
  description: "Terms of Service for SlateMate eRaksha. Understand your rights, responsibilities, and usage guidelines for our AI-powered child safety platform.",
  keywords: "SlateMate terms, eRaksha terms of service, user agreement, child safety terms, service conditions, platform usage",
  openGraph: {
    title: "Terms of Service | SlateMate eRaksha",
    description: "Terms of Service for SlateMate eRaksha child safety platform.",
    type: "website",
    url: "https://slatemate.in/terms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | SlateMate eRaksha",
    description: "Terms of Service for SlateMate eRaksha child safety platform.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://slatemate.in/terms",
  },
}

export default function TermsOfService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Terms of Service for SlateMate eRaksha Child Safety Platform",
    "publisher": {
      "@type": "Organization",
      "name": "SlateMate",
      "logo": {
        "@type": "ImageObject",
        "url": "https://slatemate.in/logo.png"
      }
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Terms of Service",
      "datePublished": "2024-10-01",
      "dateModified": "2025-10-01",
      "author": {
        "@type": "Organization",
        "name": "SlateMate"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="pt-16">
        {/* Hero Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-orangeLight/15 via-background to-blueLight/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-orange/10 rounded-full">
                    <FileText className="h-12 w-12 text-orange" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                <p className="text-lg text-foreground/70 mb-2">
                  SlateMate / eRaksha
                </p>
                <p className="text-sm text-foreground/60">
                  Last updated: October 2025
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <ScrollReveal>
            <div className="mb-12 bg-gradient-to-br from-blueLight/10 to-orangeLight/10 p-8 rounded-xl border border-border/30">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Welcome to <strong>SlateMate eRaksha</strong>, a digital safety and learning platform created to help families build healthy, secure, and meaningful online habits.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These Terms of Service ("Terms", "Agreement") govern your use of our mobile applications (the "Apps") — including the eRaksha Child App and Parent App — and our website (<a href="https://www.slatemate.in" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">https://www.slatemate.in</a>) (collectively, the "Services").
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>By downloading, installing, or using our Services, you ("you", "user", "parent", or "child") agree to these Terms. If you do not agree, please do not use our Services.</strong>
              </p>
            </div>
          </ScrollReveal>

          {/* Section 1 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    SlateMate eRaksha ("SlateMate", "we", "our", "us") is a family-safety and learning system that uses artificial intelligence to guide children aged <strong>10 – 16</strong> toward positive, safe, and educational digital habits.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The parent app allows guardians to supervise, approve, and customize the experience.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Our Services comply with Google Play Families Policy Requirements and relevant Indian data-protection laws.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 2 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <UserCheck className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>The <strong>Child App</strong> is intended for children aged <strong>10 – 16</strong>, under the consent and active supervision of a parent or legal guardian.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>The <strong>Parent App</strong> is intended for adults (<strong>18 years and above</strong>).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>By using the Services, you confirm that you are legally competent to agree to these Terms and, if acting as a parent or guardian, that you consent to your child's participation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 3 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Users className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Your Account</h2>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>A parent account is required to enable the child app and access reports, insights, or settings.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>You must provide accurate and current information.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>You are responsible for maintaining confidentiality of your login credentials and for all activity under your account.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>If you suspect unauthorized access, you should notify us immediately at <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline">support@slatemate.in</a>.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 4 */}
          <ScrollReveal>
            <section className="mb-12 bg-gradient-to-br from-orangeLight/10 to-blueLight/10 p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Use of the Services</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">You agree to:</p>
                  <ul className="space-y-3 text-foreground/70 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">✓</span>
                      <span>Use the Services only for lawful, educational, and family-safety purposes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">✓</span>
                      <span>Not modify, disrupt, reverse-engineer, or misuse the software or its data.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">✓</span>
                      <span>Not upload or distribute any harmful, obscene, or illegal content.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">✓</span>
                      <span>Respect the rights and privacy of other users.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">✓</span>
                      <span>Not use the Services to advertise or promote unrelated products.</span>
                    </li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed font-semibold">
                    Violation of these rules may lead to suspension or permanent termination of access.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 5 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <CreditCard className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Subscriptions and Payments</h2>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>The core app functions are available free of charge ("<strong>Freemium Plan</strong>").</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>Advanced features, insights, and reports are available through a paid subscription ("<strong>Premium Plan</strong>") at <strong>₹299/month per child</strong>, billed securely via Google Play Billing.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>Subscriptions renew automatically unless canceled via your Google Play account settings.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>Refunds are handled according to Google Play's refund policies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>Pricing and features may change; any significant change will be communicated in-app or by email.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 6 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Code className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Content and Intellectual Property</h2>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>All trademarks, graphics, UI designs, code, and AI systems belong exclusively to SlateMate.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>You may not copy, modify, distribute, or derive works from any part of the Services without written authorization.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>Content produced by the AI companion is generated solely for personal learning and guidance; SlateMate retains rights to improve models based on anonymized insights.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 7 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <RefreshCw className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Updates and Availability</h2>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>We may release updates or improvements from time to time.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>Continuing to use the app after an update signifies acceptance of the new version.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>We make reasonable efforts to keep the Services available and secure, but temporary interruptions may occur due to maintenance or factors beyond our control.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 8 */}
          <ScrollReveal>
            <section className="mb-12 bg-gradient-to-br from-blueLight/10 to-orangeLight/10 p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Parental Responsibilities</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">Parents are expected to:</p>
                  <ul className="space-y-3 text-foreground/70 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>Review and consent to the collection and use of data as explained in the Privacy Policy.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>Supervise their child's use of the Services.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>Set appropriate limits and review insights regularly.</span>
                    </li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed">
                    Parents may request deletion of a child's data or deactivate an account at any time by emailing <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline">support@slatemate.in</a>.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 9 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Link2 className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Third-Party Services</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    The Services may include links or integrations to third-party content (e.g., educational sources, YouTube-filtered feeds, or cloud analytics). These third-party services are governed by their own terms and privacy policies. <strong>SlateMate is not responsible for their practices or availability.</strong>
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 10 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Limitations of Liability</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    To the fullest extent permitted by law:
                  </p>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>SlateMate provides the Services on an <strong>"as is"</strong> and <strong>"as available"</strong> basis, without warranties of any kind.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>We do not guarantee that AI recommendations, reports, or analyses will be error-free or uninterrupted.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>SlateMate shall not be liable for any indirect, incidental, or consequential damages, loss of data, or unauthorized access resulting from misuse or technical failures.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2 mt-1">•</span>
                      <span>If your local law does not allow limitations of liability, some provisions may not apply to you.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 11 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Ban className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">11. Suspension or Termination</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We may suspend or terminate accounts that:
                  </p>
                  <ul className="space-y-3 text-foreground/70 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>Violate these Terms or applicable law.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>Interfere with others' use of the Services.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2 mt-1">•</span>
                      <span>Engage in fraudulent or abusive behavior.</span>
                    </li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed">
                    Users may stop using and uninstall the app at any time. Upon termination, your license to use the Services ends immediately.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 12 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <RefreshCw className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">12. Changes to These Terms</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We may revise these Terms periodically to reflect new features or legal requirements. Updated versions will be posted on the Website and within the Apps with a clear "last updated" date. Your continued use after such updates constitutes acceptance of the revised Terms.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 13 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Scale className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">13. Governing Law and Jurisdiction</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    These Terms are governed by the <strong>laws of India</strong>, and disputes shall be subject to the exclusive jurisdiction of the <strong>courts of Tamil Nadu, India</strong>.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 14 - Contact */}
          <ScrollReveal>
            <section className="bg-gradient-to-br from-orangeLight/15 via-background to-blueLight/15 p-10 rounded-xl border border-border/30 shadow-lg">
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    If you have any questions about these Terms or the Services, please contact:
                  </p>
                  <div className="bg-card p-6 rounded-lg border border-border/30">
                    <p className="font-semibold text-lg mb-2">SlateMate</p>
                    <p className="text-foreground/70 mb-1">
                      Email: <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline font-medium">support@slatemate.in</a>
                    </p>
                    <p className="text-foreground/70">
                      Website: <a href="https://www.slatemate.in" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline font-medium">https://www.slatemate.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

        </div>
      </div>
    </>
  )
} 

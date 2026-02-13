import { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Shield, Lock, Eye, Users, FileText, Globe, AlertCircle, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | SlateMate eRaksha - Child Safety & Data Protection",
  description: "Comprehensive privacy policy for SlateMate eRaksha. Learn how we protect children's data, comply with DPDPA 2023, and ensure safe digital experiences for families.",
  keywords: "SlateMate privacy policy, eRaksha data protection, child privacy, DPDPA compliance, digital safety privacy, parental consent",
  openGraph: {
    title: "Privacy Policy | SlateMate eRaksha",
    description: "Learn how SlateMate protects your family's privacy and handles data securely.",
    type: "website",
    url: "https://slatemate.in/privacy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SlateMate eRaksha",
    description: "Learn how SlateMate protects your family's privacy and handles data securely.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://slatemate.in/privacy",
  },
}

export default function PrivacyPolicy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for SlateMate eRaksha Child Safety Platform",
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
      "headline": "Privacy Policy",
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-primary/10 rounded-full">
                    <Shield className="h-12 w-12 text-blue-primary" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-lg text-foreground/70 mb-2">
                  For SlateMate / eRaksha
                </p>
                <p className="text-sm text-foreground/60">
                  Last updated: October 2025
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          
          {/* Section 1 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Users className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Who We Are</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    "SlateMate" (the "Company", "we", "us", "our") provides the mobile applications <strong>eRaksha</strong> (child-app) and the corresponding Parent app (together, the "Apps") and the website (the "Website"). Our mission is to make the Internet a safer and more meaningful place for children aged 10-16, by combining AI-powered guidance with digital-well-being tools.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 2 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Scope and Acceptance</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    By using our Website, downloading or using the Apps (child version or parent version), you agree to this Privacy Policy (the "Policy"), together with our Terms & Conditions. If you do not agree, you should not use the Apps or the services.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    The Policy applies to all users of the Apps (children, with parental consent/supervision, and their parents/guardians) and the Website where the parent or guardian may interact with the service.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 3 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Data We Collect</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We collect and process certain personal data and device/usage information in order to provide our services. The data we collect may include (but is not limited to):
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Account Information</h3>
                      <p className="text-foreground/70">When a parent registers via the Parent App or on the Website, we may collect name, email address, possibly phone number, and parent/guardian identity.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Child Profile Information</h3>
                      <p className="text-foreground/70">With parental consent, we collect the child's age (10-16), device identifier (non-advertising IDs only), usage information (e.g., time spent in the App, learning/interactions).</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Device & Usage Data</h3>
                      <p className="text-foreground/70">Information about the device (e.g., device model, operating system version, app version), crash logs, metadata, feature-usage analytics, timestamps of actions, screen-time metrics, parental settings.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Behavioral & AI Interaction Data</h3>
                      <p className="text-foreground/70">Data about the child's situation as processed by the AI companion (emotional signals, app usage patterns, suggestions accepted/ignored) — all processed securely and with due privacy controls.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Payment & Subscription Data</h3>
                      <p className="text-foreground/70">For parents subscribing to premium features (₹299/month via Google Play billing), we record subscription status, transaction identifiers — we do not store sensitive payment card details ourselves.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Support / Contact Data</h3>
                      <p className="text-foreground/70">When users contact us via <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline">support@slatemate.in</a> or other channels, we collect the data necessary to respond.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 4 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Lock className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">4. How We Use the Data</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We use the data we collect for the following purposes:
                  </p>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>Provide, maintain, and improve the Apps and Website, including adding new features, customising the experience, and fixing bugs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>Enable parent/child supervision: providing parents with reports, screen-time summaries, parental controls, alerts, and customizing child-app experience.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>Ensure child safety: monitor usage to detect harmful content, redirect the child to safe educational material, use AI to identify risky behaviour or emotional distress.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>Analytics and research (in aggregated/de-identified form) to understand usage patterns, improve AI models, study digital-well-being outcomes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>Manage subscriptions, billing, refunds, and customer support.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>Comply with legal, regulatory, audit, security and internal policy obligations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>Communicate with you (parents) about updates, changes to terms or policies, features, and support messages.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 5 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Globe className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Data Sharing, Third-Party Services & Disclosures</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    <strong>We do not sell personal data of children or parents to third-parties for advertising or marketing.</strong>
                  </p>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>We may share data with trusted service-providers (vendors) who perform services on our behalf (analytics, crash-reporting, cloud infrastructure). These vendors are contractually bound to keep the data secure.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>If required by applicable law or regulation, we may disclose data to law enforcement or regulatory bodies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>Data may be processed and stored on servers located in India or elsewhere; when transferred internationally, we ensure appropriate safeguards.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 6 */}
          <ScrollReveal>
            <section className="mb-12 bg-gradient-to-br from-blueLight/10 to-orangeLight/10 p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Children's Data, Parental Consent & Supervision</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Given that the Apps are designed for children aged 10-16 (with parental/guardian consent and supervision):
                  </p>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>A parent or guardian must review these Terms & Conditions and this Privacy Policy and consent on behalf of the child.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>We comply with the <a href="https://support.aiir.com/article/869-google-play-families-policy" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">Google Play Families policy</a> — we do not collect certain prohibited identifiers from children or transmit Android Advertising ID (AAID).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>We restrict any targeted advertising to children and ensure that any ads or content are age-appropriate and safe.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>Parents retain control: the Parent App allows monitoring, setting screen-time, customizing restrictions, viewing reports and insights.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>We limit the data collected from the child and ensure data minimisation and secure handling.</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-background/50 rounded-lg">
                    <p className="text-sm text-foreground/70">
                      <strong>Related Resources:</strong><br />
                      • <a href="https://support.google.com/googleplay/android-developer/answer/11043825" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">Google Play Data Safety Requirements</a><br />
                      • <a href="https://www.aparlaw.com/post/is-your-app-privacy-policy-compliant-a-legal-guide-for-indian-startups" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">App Privacy Policy Compliance Guide</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 7 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Cookies, Tracking & Identifiers</h2>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>On the Website, we may use cookies and similar tracking technologies for analytics, performance, remembering preferences, and essential functionality.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>In the child App, we ensure we comply with Google Play's data-safety and identifier collection rules: we do not transmit hardware identifiers (IMEI, IMSI, MAC, SSID, BSSID) or AAID from children/unknown age users.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>Parents/guardians may disable certain tracking or opt out through their device settings where applicable.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 8 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Data Retention & Deletion</h2>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>We retain personal data for as long as is necessary to fulfil the purposes described (e.g., while the parent-child relationship is active, accounting/billing/legal obligations apply).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>If a parent unsubscribes or deletes the child's profile and account, we will securely delete or anonymise the data (subject to any legal, regulatory or internal retention obligations).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-primary mr-2">•</span>
                      <span>Parents have the right to request deletion or export of their or the child's personal data — contact us via <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline">support@slatemate.in</a>. We will respond within a reasonable time and in accordance with the <a href="https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">Digital Personal Data Protection Act, 2023 (DPDPA)</a> in India.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 9 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Lock className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Security of Data</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We use industry-standard encryption (in transit and at rest) to protect personal data. Access to data is limited to authorised personnel and vendors on a need-to-know basis.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We follow reasonable security practices and procedures as required under Indian law and international standards.
                  </p>
                  <p className="text-foreground/70">
                    However, no system is completely secure and we cannot guarantee absolute security. Any security breach will be managed according to our internal processes and regulatory requirements.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 10 */}
          <ScrollReveal>
            <section className="mb-12 bg-gradient-to-br from-orangeLight/10 to-blueLight/10 p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <Users className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Your Rights & Controls</h2>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>Parents/legal guardians may access, update, or correct their account/profile details and the child's profile or data.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>You may cancel your subscription at any time via your Google Play account settings.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>You may request a copy of the personal data we hold about you or your child, request deletion, or restrict processing.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>If you are a parent/guardian and you provided consent on behalf of your child, you may withdraw consent at any time.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>You may disable or refuse cookies/trackers as permitted by device/browser settings.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange mr-2">•</span>
                      <span>If you believe that we have violated your rights under the DPDPA or other applicable law, you may lodge a complaint with us at <a href="mailto:support@slatemate.in" className="text-blue-primary hover:underline">support@slatemate.in</a>.</span>
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
                <Globe className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">11. International Transfers</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Where personal data is transferred outside India, we shall ensure it is subject to appropriate safeguards (contractual or otherwise). We will comply with applicable cross-border data protection obligations.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 12 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="h-6 w-6 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We may update this Privacy Policy from time to time (for example to reflect new features, legal/regulatory changes or improvements to our security/processing practices). We will publish the updated version on the Website and/or in the App with a clear "last updated" date. Your continued use of the Apps or Website after such changes means you accept the updated Policy.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 13 */}
          <ScrollReveal>
            <section className="mb-12 bg-card p-8 rounded-xl border border-border/30">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">13. Governing Law & Jurisdiction</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    This Policy is governed by the laws of India and any disputes will be subject to the jurisdiction of the courts of Tamil Nadu. (In line with our Terms & Conditions.)
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 14 - Contact */}
          <ScrollReveal>
            <section className="bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/15 p-10 rounded-xl border border-border/30 shadow-lg">
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 text-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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

          {/* Additional Resources */}
          <ScrollReveal>
            <section className="mt-12 bg-card p-8 rounded-xl border border-border/30">
              <h3 className="text-xl font-bold mb-4">Additional Resources & Compliance</h3>
              <div className="space-y-2">
                <p className="text-sm text-foreground/70">
                  📄 <a href="https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">Digital Personal Data Protection Act, 2023 (DPDPA)</a>
                </p>
                <p className="text-sm text-foreground/70">
                  📱 <a href="https://support.aiir.com/article/869-google-play-families-policy" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">Google Play Families Policy</a>
                </p>
                <p className="text-sm text-foreground/70">
                  🔒 <a href="https://support.google.com/googleplay/android-developer/answer/11043825" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">Google Play Data Safety Section Requirements</a>
                </p>
                <p className="text-sm text-foreground/70">
                  ⚖️ <a href="https://www.aparlaw.com/post/is-your-app-privacy-policy-compliant-a-legal-guide-for-indian-startups" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline">App Privacy Policy Compliance Guide for Indian Startups</a>
                </p>
              </div>
            </section>
          </ScrollReveal>

        </div>
      </div>
    </>
  )
} 

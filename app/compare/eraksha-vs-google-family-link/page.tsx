import type { Metadata } from "next"
import Link from "next/link"
import { Check, Minus } from "lucide-react"
import { Breadcrumbs, JsonLd } from "@/components/seo/json-ld"
import { WaitlistModal } from "@/components/modals/waitlist-modal"
import { Button } from "@/components/ui/button"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const PATH = "/compare/eraksha-vs-google-family-link"
const UPDATED = "2026-09-24"

export const metadata: Metadata = {
  title: "eRaksha vs Google Family Link: Which Is Better in India?",
  description:
    "An honest comparison of eRaksha and Google Family Link for Indian parents: content filtering, AI companion, screen time, privacy, pricing and who each suits best.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "eRaksha vs Google Family Link: Honest Comparison for Indian Parents",
    description: "Content filtering, AI companion, privacy and pricing compared side by side.",
    url: PATH,
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "eRaksha vs Google Family Link" }],
  },
}

type Cell = boolean | string
const rows: Array<{ feature: string; eraksha: Cell; familyLink: Cell }> = [
  { feature: "Price", eraksha: "Free, or ₹349/month per child (Premium)", familyLink: "Free" },
  { feature: "Blocks harmful websites (DNS-level filtering)", eraksha: true, familyLink: "Chrome/SafeSearch filters only" },
  { feature: "AI companion that explains blocks to the child", eraksha: true, familyLink: false },
  { feature: "Emotional support & habit-building nudges", eraksha: true, familyLink: false },
  { feature: "Screen-time limits & bedtime", eraksha: true, familyLink: true },
  { feature: "App install approvals", eraksha: false, familyLink: true },
  { feature: "Device location", eraksha: false, familyLink: true },
  { feature: "Parent insights (Safety, Focus, Emotional Balance scores)", eraksha: true, familyLink: "Usage reports" },
  { feature: "Reads private messages", eraksha: "Never", familyLink: "No" },
  { feature: "Data stored in India (DPDP Act 2023)", eraksha: true, familyLink: "Google global infrastructure" },
  { feature: "Built for Indian families & languages", eraksha: true, familyLink: "Global product" },
]

const faqs = [
  {
    q: "Is eRaksha better than Google Family Link?",
    a: "They solve different problems. Google Family Link is a free tool for controlling apps, screen time and location. eRaksha focuses on protecting children from harmful content and guiding them with an AI companion that explains decisions and supports their wellbeing. Many families can use both together.",
  },
  {
    q: "Can I use eRaksha and Google Family Link together?",
    a: "Yes. Family Link handles app approvals and location, while eRaksha adds DNS-level content protection, an AI companion for the child and wellbeing insights for parents.",
  },
  {
    q: "How much does eRaksha cost compared to Family Link?",
    a: "Google Family Link is free. eRaksha has a Free plan that is free forever and a Premium plan at ₹349 per month per child.",
  },
]

function CellView({ value }: { value: Cell }) {
  if (value === true) return <Check className="h-5 w-5 text-emerald mx-auto" aria-label="Yes" />
  if (value === false) return <Minus className="h-5 w-5 text-foreground/30 mx-auto" aria-label="No" />
  return <span className="text-sm text-foreground/80">{value}</span>
}

export default function ComparePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "eRaksha vs Google Family Link", path: PATH }]} />
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "Article",
              headline: "eRaksha vs Google Family Link: Which Is Better in India?",
              datePublished: UPDATED,
              dateModified: UPDATED,
              author: { "@id": ORG_ID },
              publisher: { "@id": ORG_ID },
              mainEntityOfPage: `${SITE_URL}${PATH}`,
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />

      <article className="pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-3">Comparison</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">eRaksha vs Google Family Link</h1>

          {/* Answer-first summary */}
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            <strong>Short answer:</strong> Google Family Link is a free app for managing your child&apos;s apps,
            screen time and location. eRaksha is an AI-powered child safety app from India that blocks harmful
            websites at the DNS level and adds an AI companion that explains blocks, supports your child emotionally
            and builds healthier habits. Choose Family Link for device control; choose eRaksha for content
            protection and guidance, or use both together.
          </p>
          <p className="text-sm text-foreground/60 mb-12">
            Last updated <time dateTime={UPDATED}>24 September 2026</time> · Written by the SlateMate team. Features of
            third-party products may change; please check Google&apos;s official Family Link documentation.
          </p>

          <h2 className="text-2xl font-bold mb-6">How do eRaksha and Family Link compare?</h2>
          <div className="overflow-x-auto rounded-xl border border-border/50 mb-16">
            <table className="w-full text-left">
              <thead className="bg-muted/50">
                <tr>
                  <th scope="col" className="p-4 text-sm font-semibold">Feature</th>
                  <th scope="col" className="p-4 text-sm font-semibold text-center text-electric">eRaksha</th>
                  <th scope="col" className="p-4 text-sm font-semibold text-center">Google Family Link</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.feature} className="border-t border-border/40">
                    <th scope="row" className="p-4 text-sm font-medium">{r.feature}</th>
                    <td className="p-4 text-center"><CellView value={r.eraksha} /></td>
                    <td className="p-4 text-center"><CellView value={r.familyLink} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4">Who should choose eRaksha?</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            Parents of children aged 10–16 who worry about pornography, scams, violent content and cyberbullying, and
            who want their child to understand <em>why</em> something is unsafe rather than simply being blocked.
            eRaksha is privacy-first: no ads, no data selling, and data stored in India.
          </p>

          <h2 className="text-2xl font-bold mb-4">Who should choose Google Family Link?</h2>
          <p className="text-foreground/80 leading-relaxed mb-12">
            Families that mainly need to approve app downloads, set daily screen-time limits and see where their
            child&apos;s device is, at no cost.
          </p>

          <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-6 mb-16">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-border/40 p-6">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-foreground/80">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-bluePrimary via-electric to-blueLight p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Try eRaksha free from 14th November 2026</h2>
            <p className="opacity-90 mb-6">Join the waitlist for early access. Free forever, or Premium at ₹349/month per child.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WaitlistModal>
                <Button size="lg" className="bg-white text-bluePrimary hover:bg-white/90">Join the waitlist</Button>
              </WaitlistModal>
              <Button size="lg" variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white/10" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs, JsonLd } from "@/components/seo/json-ld"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const PATH = "/research/parent-survey-2025"
const UPDATED = "2026-09-24"

/**
 * ⚠️ Confirm these before promoting the page. The homepage said "150+ respondents"
 * while the survey blog post said "over 500 families". Set the verified number here.
 */
const SURVEY = {
  name: "eRaksha Parent Survey 2025",
  sampleSizeLabel: "150+ parents",
  period: "Early 2025",
  coverage: "Metro and tier-2 cities across India",
  method: "Online questionnaire shared with parents of school-age children",
  // Optional: path to a downloadable PDF in /public, e.g. "/research/eraksha-parent-survey-2025.pdf"
  pdf: "" as string,
}

const findings = [
  { value: 84, label: "of parents feel helpless managing their child's digital life" },
  { value: 78, label: "feel anxious about screen time but are unsure how to set boundaries" },
  { value: 63, label: "of children sometimes feel “empty” or “disconnected” after scrolling social media" },
  { value: 52, label: "of parents want an AI that guides their child instead of punishing them" },
]

export const metadata: Metadata = {
  title: "Parent Survey 2025: How Indian Families Feel About Screens",
  description:
    "Findings from the eRaksha Parent Survey 2025: 84% of Indian parents feel helpless managing their child's digital life. Methodology, key statistics and how to cite.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "eRaksha Parent Survey 2025 – Key Findings",
    description: "84% of Indian parents feel helpless managing their child's digital life. Full findings and methodology.",
    url: PATH,
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "eRaksha Parent Survey 2025" }],
  },
}

export default function SurveyReportPage() {
  const url = `${SITE_URL}${PATH}`
  return (
    <>
      <Breadcrumbs items={[{ name: "Parent Survey 2025", path: PATH }]} />
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "Dataset",
              "@id": `${url}#dataset`,
              name: SURVEY.name,
              description:
                "Survey of Indian parents on children's screen time, online safety and emotional wellbeing, conducted by SlateMate.",
              url,
              creator: { "@id": ORG_ID },
              publisher: { "@id": ORG_ID },
              spatialCoverage: { "@type": "Place", name: "India" },
              temporalCoverage: "2025",
              datePublished: "2025-10-28",
              dateModified: UPDATED,
              isAccessibleForFree: true,
              license: "https://creativecommons.org/licenses/by/4.0/",
              keywords: ["child online safety", "screen time", "Indian parents", "digital wellbeing"],
              variableMeasured: findings.map((f) => f.label),
            },
            {
              "@type": "Article",
              headline: "eRaksha Parent Survey 2025: How Indian Families Feel About Screens",
              datePublished: "2025-10-28",
              dateModified: UPDATED,
              author: { "@id": ORG_ID },
              publisher: { "@id": ORG_ID },
              mainEntityOfPage: url,
              about: { "@id": `${url}#dataset` },
            },
          ],
        }}
      />

      <article className="pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-3">Original research</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">eRaksha Parent Survey 2025</h1>

          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            <strong>Key finding:</strong> 84% of Indian parents surveyed by SlateMate say they feel helpless managing
            their child&apos;s digital life. Most don&apos;t want to take phones away — they want help guiding
            children to use them better. This page summarises the survey&apos;s methodology and main results.
          </p>
          <p className="text-sm text-foreground/60 mb-12">
            Last updated <time dateTime={UPDATED}>24 September 2026</time> · Published by SlateMate Private Limited
          </p>

          <h2 className="text-2xl font-bold mb-6">What did Indian parents tell us?</h2>
          <ul className="space-y-5 mb-16">
            {findings.map((f) => (
              <li key={f.label}>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-foreground/80">{f.label}</span>
                  <span className="text-2xl font-bold text-electric tabular-nums">{f.value}%</span>
                </div>
                <div
                  className="h-3 rounded-full bg-muted overflow-hidden"
                  role="img"
                  aria-label={`${f.value}% ${f.label}`}
                >
                  <div className="h-full rounded-full bg-gradient-to-r from-bluePrimary to-electric" style={{ width: `${f.value}%` }} />
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-4">How was the survey conducted?</h2>
          <dl className="grid sm:grid-cols-2 gap-4 mb-16">
            {[
              ["Sample", SURVEY.sampleSizeLabel],
              ["Period", SURVEY.period],
              ["Coverage", SURVEY.coverage],
              ["Method", SURVEY.method],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-border/40 p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/50">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <h2 className="text-2xl font-bold mb-4">How to cite this research</h2>
          <p className="rounded-xl bg-muted/50 p-5 font-mono text-sm mb-6">
            SlateMate Private Limited. (2025). {SURVEY.name}. {url}
          </p>
          <p className="text-foreground/80 mb-10">
            You&apos;re welcome to quote these findings with attribution and a link to this page (CC BY 4.0). For
            media enquiries or the full dataset, email{" "}
            <a href="mailto:info@slatemate.in" className="text-electric underline">info@slatemate.in</a>.
          </p>

          {SURVEY.pdf && (
            <a
              href={SURVEY.pdf}
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-bluePrimary to-electric px-6 py-3 font-semibold text-white mb-10"
              download
            >
              Download the full report (PDF)
            </a>
          )}

          <p className="text-foreground/80">
            Read the story behind the survey:{" "}
            <Link href="/blog/slatemate-survey" className="text-electric underline">
              What Indian Families Told Us About Digital Childhood
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  )
}

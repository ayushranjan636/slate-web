/**
 * Single source of truth for brand facts + JSON-LD helpers.
 * Keep these identical to LinkedIn, Crunchbase, Google Business Profile,
 * Startup India and Wikidata — AI search engines trust facts that match everywhere.
 */

export const SITE_URL = "https://www.slatemate.in"

export const BRAND = {
  legalName: "SLATEMATE PRIVATE LIMITED",
  name: "SlateMate",
  product: "eRaksha",
  foundingDate: "2023",
  launchDate: "2026-11-14",
  launchDateLabel: "14th November 2026",
  email: "info@slatemate.in",
  phone: "+91-90258-67204",
  whatsapp: "919025867204",
  whatsappCommunity: "https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0",
  pricing: { free: 0, premiumMonthly: 349, currency: "INR" },
  address: {
    streetAddress: "C/o. IITM Research Park, 1FA I Floor, Kanagam Road, TTTI Taramani",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600113",
    addressCountry: "IN",
  },
  geo: { latitude: 12.9908, longitude: 80.2460 },
  sameAs: [
    "https://x.com/slatemate_",
    "https://www.linkedin.com/company/slate-mate",
    "https://www.facebook.com/profile.php?id=61575675892179",
    "https://www.instagram.com/slatemate_official",
  ],
} as const

export const ORG_ID = `${SITE_URL}#organization`

export const founders = [
  {
    name: "Ayush Ranjan",
    jobTitle: "Founder & CEO",
    image: "/ayush.jpg",
    url: "https://www.linkedin.com/in/ayushranjan636",
    description:
      "Entrepreneur and IIT Madras (Nirmaan) fellow focusing on child digital wellbeing and AI safety.",
  },
  {
    name: "Prabhat Ranjan",
    jobTitle: "CTO",
    image: "/prabhat.jpg",
    description:
      "Founding Engineer at WiserStack & former developer at Dobby Ads, building secure infrastructure and ethical AI systems.",
  },
  {
    name: "Drushti Surkar",
    jobTitle: "CPO",
    image: "/Drushti.jpg",
    description:
      "Growth marketer building AI workflows, automation systems and applied ML models.",
  },
]

export function personSchema(p: (typeof founders)[number]) {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/about#${p.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: p.name,
    jobTitle: p.jobTitle,
    description: p.description,
    image: `${SITE_URL}${p.image}`,
    ...("url" in p && p.url ? { sameAs: [p.url] } : {}),
    worksFor: { "@id": ORG_ID },
  }
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  const all = [{ name: "Home", path: "/" }, ...items]
  return {
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  }
}

/** Organization + LocalBusiness-style data (used on the homepage). */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND.legalName,
    alternateName: [BRAND.name, BRAND.product],
    legalName: BRAND.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description:
      "SlateMate is an IIT Madras Incubation Cell (IITMIC) incubated, DPIIT-recognised startup from Chennai building eRaksha, an AI-powered child digital safety platform.",
    foundingDate: BRAND.foundingDate,
    foundingLocation: { "@type": "Place", name: "Chennai, Tamil Nadu, India" },
    address: { "@type": "PostalAddress", ...BRAND.address },
    areaServed: { "@type": "Country", name: "India" },
    email: BRAND.email,
    telephone: BRAND.phone,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND.phone,
      email: BRAND.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Tamil"],
    },
    sameAs: BRAND.sameAs,
    founder: founders.map((f) => ({ "@id": personSchema(f)["@id"] })),
    knowsAbout: [
      "Child online safety",
      "Parental control",
      "DNS filtering",
      "Digital wellbeing",
      "AI companions for children",
    ],
  }
}

/** Renders a JSON-LD <script> safely (escapes "<" to prevent script injection). */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") }
}

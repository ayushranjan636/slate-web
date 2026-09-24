import { breadcrumbSchema, jsonLd } from "@/lib/seo"

/** Renders any JSON-LD object as a <script type="application/ld+json">. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonLd({ "@context": "https://schema.org", ...data })}
    />
  )
}

/** BreadcrumbList schema. "Home" is prepended automatically. */
export function Breadcrumbs({ items }: { items: Array<{ name: string; path: string }> }) {
  return <JsonLd data={breadcrumbSchema(items)} />
}

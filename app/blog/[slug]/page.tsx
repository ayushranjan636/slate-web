import type { Metadata } from "next"
import { Calendar, ArrowLeft, RefreshCw, UserRound } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ShareButton } from "./share-button"
import { JsonLd } from "@/components/seo/json-ld"
import { formatDate, getAllPosts, getPost } from "@/lib/blog-posts"
import { ORG_ID, SITE_URL, breadcrumbSchema } from "@/lib/seo"

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return { title: "Blog Post Not Found", robots: { index: false, follow: true } }
  }

  const url = `/blog/${post.slug}`
  const image = post.image || "/og-image.jpg"

  return {
    title: post.title,
    description: post.excerpt || post.tagline,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.tagline,
      type: "article",
      url,
      siteName: "SlateMate",
      locale: "en_IN",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      section: post.category,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.tagline,
      images: [image],
      site: "@slatemate_",
    },
  }
}

// Styled MDX elements
const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => <h2 className="text-2xl font-bold mt-10 mb-4" {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <h3 className="text-xl font-semibold mt-8 mb-3" {...props} />,
  p: (props: React.ComponentProps<"p">) => <p className="text-foreground/80 leading-relaxed mb-4" {...props} />,
  ul: (props: React.ComponentProps<"ul">) => <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80" {...props} />,
  ol: (props: React.ComponentProps<"ol">) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-foreground/80" {...props} />,
  a: (props: React.ComponentProps<"a">) => <a className="text-blue-primary underline" {...props} />,
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote className="border-l-4 border-electric pl-4 italic text-foreground/70 my-6" {...props} />
  ),
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${post.slug}`
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  const schema = {
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt || post.tagline,
        image: `${SITE_URL}${post.image || "/og-image.jpg"}`,
        datePublished: post.date,
        dateModified: post.updated,
        articleSection: post.category,
        inLanguage: "en-IN",
        mainEntityOfPage: url,
        url,
        author:
          post.author === "SlateMate Team"
            ? { "@type": "Organization", name: "SlateMate Team", url: `${SITE_URL}/about` }
            : { "@type": "Person", name: post.author, url: `${SITE_URL}/about` },
        ...(post.reviewedBy ? { reviewedBy: { "@type": "Person", name: post.reviewedBy } } : {}),
        publisher: { "@id": ORG_ID },
      },
      breadcrumbSchema([
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  }

  return (
    <article>
      <JsonLd data={schema} />

      {/* Hero */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <Link href="/blog" className="inline-flex items-center gap-2 text-blue-primary hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </nav>

            <span className="inline-block mb-4 px-3 py-1 bg-blue-primary/10 text-blue-primary text-sm font-semibold rounded-full">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-foreground/70 italic mb-6">{post.tagline}</p>

            {/* E-E-A-T: who wrote it, who reviewed it, when it was updated */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60">
              <span className="flex items-center gap-2">
                <UserRound className="h-4 w-4" />
                By <Link href="/about" className="font-medium text-foreground/80 hover:underline">{post.author}</Link>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              {post.updated !== post.date && (
                <span className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </span>
              )}
              <ShareButton title={post.title} text={post.tagline} url={url} />
            </div>
            {post.reviewedBy && (
              <p className="mt-3 text-sm text-emerald font-medium">Reviewed by {post.reviewedBy}</p>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {post.image && (
              <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden bg-muted border border-border/30">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="text-lg">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {related.length > 0 && (
              <aside className="mt-16">
                <h2 className="text-xl font-bold mb-4">Related reading</h2>
                <ul className="grid sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blog/${r.slug}`}
                        className="block h-full rounded-xl border border-border/40 p-4 hover:border-electric/50 hover:shadow-md transition"
                      >
                        <span className="text-xs font-semibold text-electric">{r.category}</span>
                        <span className="mt-1 block font-semibold leading-snug">{r.cardTitle}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            <div className="mt-12 p-8 bg-gradient-to-br from-blueLight/10 to-orangeLight/10 rounded-xl border border-border/30">
              <h2 className="text-xl font-bold mb-4">Learn more</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/product" className="text-blue-primary hover:underline font-medium">→ Explore eRaksha</Link>
                <Link href="/pricing" className="text-blue-primary hover:underline font-medium">→ See pricing</Link>
                <Link href="/about" className="text-blue-primary hover:underline font-medium">→ About SlateMate</Link>
                <Link
                  href="https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-primary hover:underline font-medium"
                >
                  → Join our WhatsApp community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

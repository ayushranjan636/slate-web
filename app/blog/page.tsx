import { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { BookOpen, Calendar, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatDate, getAllPosts } from "@/lib/blog-posts"
import { Breadcrumbs } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Blog – Child Safety & Digital Wellness Insights",
  description:
    "Research, stories and practical guides on child digital safety in India: screen time, cyberbullying, online exploitation, AI for good and healthy habits.",
  keywords: "SlateMate blog, eRaksha insights, child safety articles, digital wellness, AI for children, parenting technology",
  openGraph: {
    title: "SlateMate Blog – Child Safety & Digital Wellness",
    description: "Stories, insights, and research about child digital safety and AI for good.",
    type: "website",
    url: "https://www.slatemate.in/blog",
    siteName: "SlateMate",
    locale: "en_IN",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SlateMate Blog – Child Safety & Digital Wellness",
    description: "Stories, insights, and research about child digital safety and AI for good.",
    images: ["https://www.slatemate.in/og-image.jpg"],
    site: "@slatemate_",
  },
  alternates: {
    canonical: "/blog",
  },
}

const allPosts = getAllPosts()
const trendingPosts = allPosts.filter((post) => post.trending)
const gradients = ["from-blue-primary/10 to-blueLight/5", "from-orange/10 to-orangeLight/5"]

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
    <div>
      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-primary/10 rounded-full">
                  <BookOpen className="h-12 w-12 text-blue-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">SlateMate Blog</h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Stories, insights, and research about child digital safety, AI for good, and building a safer internet for the next generation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trending Blogs Section */}
      <section className="py-16 bg-gradient-to-br from-orange/5 via-background to-blueLight/5">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange/10 rounded-full">
                  <TrendingUp className="h-6 w-6 text-orange" />
                </div>
                <h2 className="text-3xl font-bold">Trending Blogs</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingPosts.map((post, index) => (
                <div key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className={`group bg-gradient-to-br ${gradients[index % 2]} p-6 rounded-xl border-2 border-orange/30 hover:border-orange/60 hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-full flex flex-col relative overflow-hidden`}>
                      
                      {/* Image */}
                      {post.image && (
                      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-muted">
                        <Image 
                          src={post.image} 
                          alt={post.cardTitle}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                          className="object-cover"
                        />
                      </div>
                      )}

                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-orange/10 text-orange text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-orange transition-colors">
                        {post.cardTitle}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm text-foreground/60 italic mb-3">
                        {post.tagline}
                      </p>

                      {/* Excerpt */}
                      <p className="text-foreground/70 text-sm mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/20">
                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                          <Calendar className="h-3 w-3" />
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                        </div>
                        <div className="flex items-center gap-1 text-orange text-sm font-medium group-hover:gap-2 transition-all">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-8">All Posts</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post, index) => (
              <div key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className={`group bg-gradient-to-br ${gradients[index % 2]} p-6 rounded-xl border border-border/30 hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-full flex flex-col`}>
                    {/* Image */}
                    {post.image && (
                    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-muted">
                      <Image 
                        src={post.image} 
                        alt={post.cardTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover"
                      />
                    </div>
                    )}

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-primary/10 text-blue-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-primary transition-colors">
                      {post.cardTitle}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-foreground/60 italic mb-3">
                      {post.tagline}
                    </p>

                    {/* Excerpt */}
                    <p className="text-foreground/70 text-sm mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/20">
                      <div className="flex items-center gap-2 text-xs text-foreground/60">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </div>
                      <div className="flex items-center gap-1 text-blue-primary text-sm font-medium group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
              <p className="text-gray-200 mb-6">
                Subscribe to our newsletter for the latest insights on child digital safety and AI innovation.
              </p>
              <Link href="https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
                  Join Our Community
                </button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

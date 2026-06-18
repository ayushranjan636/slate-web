import { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { BookOpen, Calendar, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog | SlateMate eRaksha - Child Safety & Digital Wellness Insights",
  description:
    "Read stories, insights, and research about child digital safety, AI for good, and building a safer internet for the next generation.",
  keywords: "SlateMate blog, eRaksha insights, child safety articles, digital wellness, AI for children, parenting technology",
  openGraph: {
    title: "Blog | SlateMate eRaksha",
    description: "Stories, insights, and research about child digital safety and AI for good.",
    type: "website",
    url: "https://slatemate.in/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | SlateMate eRaksha",
    description: "Stories, insights, and research about child digital safety and AI for good.",
  },
  alternates: {
    canonical: "https://slatemate.in/blog",
  },
}

const blogPosts = [
  {
    id: "indian-children-online-stats",
    title: "259M+ Indian Children Online",
    tagline: "One of the largest connected youth populations globally.",
    excerpt: "With 259M+ children online in India (UNICEF–ITU 2023), digital safety is no longer optional—it's a necessity for our future generation.",
    date: "November 10, 2025",
    dateObj: new Date("2025-11-10"),
    category: "Statistics",
    image: "", // No image
    gradient: "from-blue-primary/10 to-blueLight/5",
    trending: true
  },
  {
    id: "harmful-content-exposure",
    title: "67% Children Encounter Harmful Content",
    tagline: "The silent crisis on our screens.",
    excerpt: "A staggering 67% of teens in India encounter harmful or age-inappropriate content (McAfee India Teens Report 2023). We must act now.",
    date: "November 11, 2025",
    dateObj: new Date("2025-11-11"),
    category: "Safety",
    image: "", // No image
    gradient: "from-orange/10 to-orangeLight/5",
    trending: true
  },
  {
    id: "cyberbullying-mental-health",
    title: "The Toll of Cyberbullying",
    tagline: "1 in 3 children face online threats.",
    excerpt: "1 in 3 children face cyberbullying (CRY India Report 2023), and 1 in 7 adolescents struggle with mental health (WHO). The link is undeniable.",
    date: "November 12, 2025",
    dateObj: new Date("2025-11-12"),
    category: "Wellness",
    image: "", // No image
    gradient: "from-blue-primary/10 to-blueLight/5",
    trending: false
  },
  {
    id: "online-exploitation-stats",
    title: "11,000+ Cases of Exploitation",
    tagline: "The statistics we can't ignore.",
    excerpt: "Over 11,000 cases of online child sexual exploitation were reported in 2023 (NCRB). This is a wake-up call for better digital protection.",
    date: "November 13, 2025",
    dateObj: new Date("2025-11-13"),
    category: "Safety",
    image: "", // No image
    gradient: "from-orange/10 to-orangeLight/5",
    trending: false
  },
  {
    id: "parental-helplessness",
    title: "84% Parents Feel Helpless",
    tagline: "Bridging the gap between parents and digital life.",
    excerpt: "84% of Indian parents feel helpless managing their child’s digital life (eRaksha Parent Survey 2025). We are here to empower you, not judge you.",
    date: "November 14, 2025",
    dateObj: new Date("2025-11-14"),
    category: "Parenting",
    image: "", // No image
    gradient: "from-blue-primary/10 to-blueLight/5",
    trending: true
  },
  {
    id: "validated-insight-gap",
    title: "The Real Problem: The Understanding Gap",
    tagline: "It's not just about content.",
    excerpt: "Validated Insight: The problem is not just unsafe content. The problem is the gap between what children feel and what parents know.",
    date: "November 15, 2025",
    dateObj: new Date("2025-11-15"),
    category: "Insight",
    image: "", // No image
    gradient: "from-orange/10 to-orangeLight/5",
    trending: true
  },
  {
    id: "founders-story",
    title: "The Founders' Story: Turning Concern Into a Movement",
    tagline: "From late-night questions to a nationwide mission in digital well-being.",
    excerpt: "Every startup begins with a question. For us, it was: 'How safe is our child online?' Discover how SlateMate was born from concern and transformed into a movement.",
    date: "October 15, 2025",
    dateObj: new Date("2025-10-15"),
    category: "Company",
    image: "/blog/founders-story.jpg",
    gradient: "from-blue-primary/10 to-blueLight/5",
    trending: true
  },
  {
    id: "eraksha-ai-friend",
    title: "eRaksha: The AI Friend Every Child Deserves",
    tagline: "Where digital safety meets emotional intelligence.",
    excerpt: "Children today are the most connected generation — and yet, the loneliest. Learn how eRaksha fills this gap as a guardian that guides without judging.",
    date: "October 18, 2025",
    dateObj: new Date("2025-10-18"),
    category: "Product",
    image: "/blog/eraksha-ai-friend.jpg",
    gradient: "from-orange/10 to-orangeLight/5",
    trending: true
  },
  {
    id: "iit-madras-story",
    title: "The IIT Madras Story: Where Ideas Became Innovation",
    tagline: "From student sketches to India's most promising child-safety AI startup.",
    excerpt: "When SlateMate was selected for IIT Madras Nirmaan, it wasn't just validation — it was acceleration. Discover how mentorship shaped our mission.",
    date: "October 20, 2025",
    dateObj: new Date("2025-10-20"),
    category: "Partnerships",
    image: "/blog/iit-madras-story.jpg",
    gradient: "from-blue-primary/10 to-blueLight/5",
    trending: false
  },
  {
    id: "powered-by-aws",
    title: "Powered by AWS: Scaling Empathy Through the Cloud",
    tagline: "Security, speed, and scalability — built on Amazon Web Services.",
    excerpt: "Child safety apps demand precision and security. Learn how AWS infrastructure powers eRaksha's AI pipeline with encrypted, globally available services.",
    date: "October 22, 2025",
    dateObj: new Date("2025-10-22"),
    category: "Technology",
    image: "/blog/powered-by-aws.jpg",
    gradient: "from-orange/10 to-orangeLight/5",
    trending: false
  },
  {
    id: "sarvam-ai-partnership",
    title: "SarvamAI x SlateMate: Giving Voice to Safety",
    tagline: "Voice technology that listens, learns, and speaks with care.",
    excerpt: "Not every child is fluent in typing, but every child can speak. Discover how we partnered with SarvamAI to bring multilingual voice AI to eRaksha.",
    date: "October 25, 2025",
    dateObj: new Date("2025-10-25"),
    category: "Partnerships",
    image: "/blog/sarvam-ai-partnership.jpg",
    gradient: "from-blue-primary/10 to-blueLight/5",
    trending: true
  },
  {
    id: "slatemate-survey",
    title: "The SlateMate Survey: What Indian Families Told Us",
    tagline: "Data, emotions, and the untold story behind India's screen generation.",
    excerpt: "Before building technology, we listened. Over 500 families shared their digital struggles. Here's what we learned about screen time and family connection.",
    date: "October 28, 2025",
    dateObj: new Date("2025-10-28"),
    category: "Research",
    image: "/blog/slatemate-survey.jpg",
    gradient: "from-orange/10 to-orangeLight/5",
    trending: false
  },
  {
    id: "child-addiction-attention-economy",
    title: "Child Addiction & the Attention Economy",
    tagline: "Why our kids are fighting a battle for focus — and how we can help them win.",
    excerpt: "Every notification and autoplay video is designed to keep you there. Learn how eRaksha helps children break free from dopamine loops and digital addiction.",
    date: "October 30, 2025",
    dateObj: new Date("2025-10-30"),
    category: "Research",
    image: "/blog/child-addiction.jpg",
    gradient: "from-blue-primary/10 to-blueLight/5",
    trending: false
  },
  {
    id: "phone-detoxification",
    title: "The Science of Phone Detoxification",
    tagline: "How AI helps children unplug — not by force, but by flow.",
    excerpt: "Constant digital noise erodes focus and creativity. Discover how eRaksha's Digital Detox Mode uses psychology to help children rediscover balance.",
    date: "November 1, 2025",
    dateObj: new Date("2025-11-01"),
    category: "Wellness",
    image: "/blog/phone-detox.jpg",
    gradient: "from-orange/10 to-orangeLight/5",
    trending: false
  },
  {
    id: "brain-routing",
    title: "Brain Routing: How AI Learns From the Mind",
    tagline: "Using neuroscience to personalize focus, learning, and emotional growth.",
    excerpt: "Every brain routes attention differently. Learn how SlateMate's Brain Routing model adapts to each child's natural learning rhythm using neuroscience.",
    date: "November 3, 2025",
    dateObj: new Date("2025-11-03"),
    category: "Technology",
    image: "/blog/brain-routing.jpg",
    gradient: "from-blue-primary/10 to-blueLight/5",
    trending: false
  },
  {
    id: "doom-scrolling",
    title: "Doom Scrolling and the Digital Fog",
    tagline: "Breaking the loop of endless scrolling — one gentle nudge at a time.",
    excerpt: "Doom scrolling reinforces anxiety and self-doubt. Discover how eRaksha's Reflect Mode gently interrupts the pattern and helps children reclaim control.",
    date: "November 5, 2025",
    dateObj: new Date("2025-11-05"),
    category: "Wellness",
    image: "/blog/doom-scrolling.jpg",
    gradient: "from-orange/10 to-orangeLight/5",
    trending: false
  }
]

// Sort posts in descending order by date (newest first)
const sortedBlogPosts = [...blogPosts].sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())

// Get trending posts
const trendingPosts = blogPosts.filter(post => post.trending)

export default function BlogPage() {
  return (
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
                <ScrollReveal key={post.id} delay={index * 0.1}>
                  <Link href={`/blog/${post.id}`}>
                    <div className={`group bg-gradient-to-br ${post.gradient} p-6 rounded-xl border-2 border-orange/30 hover:border-orange/60 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-full flex flex-col relative overflow-hidden`}>
                      
                      {/* Image */}
                      {post.image && (
                      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-muted">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          fill
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
                        {post.title}
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
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-orange text-sm font-medium group-hover:gap-2 transition-all">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
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
              {sortedBlogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <Link href={`/blog/${post.id}`}>
                  <div className={`group bg-gradient-to-br ${post.gradient} p-6 rounded-xl border border-border/30 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-full flex flex-col`}>
                    {/* Image */}
                    {post.image && (
                    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-muted">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
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
                      {post.title}
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
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-primary text-sm font-medium group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
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
  )
}

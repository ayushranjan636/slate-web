import { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Calendar, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

type BlogPost = {
  id: string
  title: string
  tagline: string
  date: string
  category: string
  image: string
  content: {
    sections: Array<{
      heading?: string
      paragraphs: string[]
      emoji?: string
    }>
  }
}

const blogPosts: Record<string, BlogPost> = {
  "indian-children-online-stats": {
    id: "indian-children-online-stats",
    title: "259M+ Indian Children Online: A Digital Tsunami",
    tagline: "One of the largest connected youth populations globally.",
    date: "November 10, 2025",
    category: "Statistics",
    image: "",
    content: {
      sections: [
        {
          heading: "The Scale of Connectivity",
          paragraphs: [
            "India is witnessing a digital revolution unlike any other. According to the UNICEF–ITU 2023 report, over 259 million Indian children are now online. This makes India home to one of the largest connected youth populations in the world.",
            "This connectivity opens doors to education, global communities, and boundless information. However, it also presents an unprecedented challenge: managing the digital footprint of a quarter of a billion young minds."
          ]
        },
        {
          heading: "Opportunity Meets Responsibility",
          paragraphs: [
            "With such scale comes great responsibility. The infrastructure to protect these children hasn't kept pace with their adoption of technology. Schools, parents, and policymakers are racing to catch up.",
            "At SlateMate, we see this statistic not just as a number, but as a mandate. 259 million children need more than just access; they need safe access."
          ]
        }
      ]
    }
  },
  "harmful-content-exposure": {
    id: "harmful-content-exposure",
    title: "67% Children Encounter Harmful Content",
    tagline: "The silent crisis on our screens.",
    date: "November 11, 2025",
    category: "Safety",
    image: "",
    content: {
      sections: [
        {
          heading: "A Startling Reality",
          paragraphs: [
            "We often think of the internet as a library, but for many children, it's a minefield. The McAfee India Teens Report 2023 reveals that a staggering 67% of children encounter harmful or age-inappropriate content.",
            "This isn't just about stumbling upon 'adult' sites. It includes violent content, hate speech, self-harm promotion, and toxic communities that are easily accessible via social media algorithms."
          ]
        },
        {
          heading: "The Impact on Young Minds",
          paragraphs: [
            "Early exposure to such content desensitizes children, normalizes aggression, and can lead to anxiety or distorted worldviews. The filter bubbles created by modern apps often trap children in loops of negative content.",
            "We must act now to build better guardrails—technology that understands context and protects innocence without stifling curiosity."
          ]
        }
      ]
    }
  },
  "cyberbullying-mental-health": {
    id: "cyberbullying-mental-health",
    title: "The Toll of Cyberbullying & Mental Health",
    tagline: "1 in 3 children face online threats.",
    date: "November 12, 2025",
    category: "Wellness",
    image: "",
    content: {
      sections: [
        {
          heading: "The Invisible Wounds",
          paragraphs: [
            "The CRY India Report 2023 highlights a worrying trend: 1 in 3 children face cyberbullying, harassment, or online threats. Unlike playground bullying, online harassment follows the child home, into their bedroom, and onto their pillow via their smartphone.",
            "Simultaneously, the World Health Organization reports that 1 in 7 adolescents struggle with mental health challenges. The correlation between negative online experiences and mental distress is undeniable."
          ]
        },
        {
          heading: "Creating Digital Resilience",
          paragraphs: [
            "We cannot simply ban devices. We must teach resilience. eRaksha focuses not just on blocking bullies, but on detecting signs of distress in children's digital interactions.",
            "Mental health support must be integrated into the very platforms children use daily."
          ]
        }
      ]
    }
  },
  "online-exploitation-stats": {
    id: "online-exploitation-stats",
    title: "11,000+ Cases of Exploitation: A Wake-Up Call",
    tagline: "The statistics we can't ignore.",
    date: "November 13, 2025",
    category: "Safety",
    image: "",
    content: {
      sections: [
        {
          heading: "The Darkest Corner",
          paragraphs: [
            "According to the NCRB Crime in India 2023 report, over 11,000 cases of online child sexual exploitation were reported. This figure likely represents only the tip of the iceberg, as many cases go unreported due to shame or lack of awareness.",
            "Predators use sophisticated grooming techniques in gaming chats and social media DMs, often bypassing traditional parental awareness."
          ]
        },
        {
          heading: "Systemic Defense",
          paragraphs: [
            "Protecting against exploitation requires proactive monitoring. It requires systems that can identify grooming patterns and alert parents before a child is coerced.",
            "This is the most critical monitoring layer eRaksha provides—a shield against the most severe online threats."
          ]
        }
      ]
    }
  },
  "parental-helplessness": {
    id: "parental-helplessness",
    title: "84% Parents Feel Helpless: You Are Not Alone",
    tagline: "Bridging the gap between parents and digital life.",
    date: "November 14, 2025",
    category: "Parenting",
    image: "",
    content: {
      sections: [
        {
          heading: "The Digital Divide in Families",
          paragraphs: [
            "In our own survey of over 150 respondents in 2025, we found that 84% of Indian parents feel helpless managing their child’s digital life. Parents often feel technically outmatched by their digital-native children.",
            "This helplessness leads to two extremes: total bans on devices (which creates rebellion) or total surrender (which creates risk)."
          ]
        },
        {
          heading: "Empowerment, Not Surveillance",
          paragraphs: [
            "Parents need tools that translate tech-speak into parenting insights. You don't need to be a hacker to keep your child safe. You just need the right partner.",
            "eRaksha aims to replace that feeling of helplessness with confidence and connection."
          ]
        }
      ]
    }
  },
  "validated-insight-gap": {
    id: "validated-insight-gap",
    title: "The Real Problem: The Understanding Gap",
    tagline: "It's not just about content.",
    date: "November 15, 2025",
    category: "Insight",
    image: "",
    content: {
      sections: [
        {
          heading: "Beyond Content Filtering",
          paragraphs: [
            "For years, the industry focused on blocking 'bad' content. But our research at SlateMate has validated a deeper insight: The problem is not just unsafe content. The problem is the gap between what children feel and what parents know.",
            "A child might be viewing 'safe' content but feeling excluded, anxious, or pressured. Traditional filters miss this completely."
          ]
        },
        {
          heading: "Emotional Intelligence in AI",
          paragraphs: [
            "Safety isn't binary (Safe/Unsafe). It's emotional. That's why we are building eRaksha to bridge this emotional gap.",
            "We don't just tell you what they saw; we help you understand how they might be feeling. This insight transforms digital safety from a police state into a conversation starter."
          ]
        }
      ]
    }
  },
  "founders-story": {
    id: "founders-story",
    title: "The Founders' Story: Turning Concern Into a Movement",
    tagline: "From late-night questions to a nationwide mission in digital well-being.",
    date: "October 15, 2025",
    category: "Company",
    image: "/blog/founders-story.jpg",
    content: {
      sections: [
        {
          heading: "A Question That Started It All",
          paragraphs: [
            "Every startup begins with a question. For us, it was a simple but powerful one: \"How safe is our child online?\"",
            "In 2023, as AI began to infiltrate every corner of life, we saw children exploring a world more vast — and more vulnerable — than ever. While technology promised learning, it also introduced new anxieties: cyberbullying, toxic content, endless scrolling, and emotional isolation."
          ]
        },
        {
          heading: "The Spark That Lit the Vision",
          paragraphs: [
            "When we saw how the internet was shaping young minds, we realized — education needed not more content, but more care. That's how SlateMate was born: not as another EdTech product, but as a safety and empathy company for the digital generation. Our mission became clear — to make the internet safer, smarter, and kinder for children."
          ]
        },
        {
          heading: "Building the Core Philosophy",
          paragraphs: [
            "From day one, SlateMate has stood for balanced growth — using AI not to replace humans, but to protect and elevate them. We wanted to turn technology into a digital mentor, not a manipulator. What began as sketches on a whiteboard evolved into our flagship innovation, eRaksha — an AI companion designed to safeguard children's minds while nurturing curiosity and emotional intelligence."
          ]
        },
        {
          heading: "The Journey Forward",
          paragraphs: [
            "Our team, shaped by educators, engineers, psychologists, and parents, built more than software — we built trust. Today, SlateMate is growing through school partnerships, incubator programs, and parent communities who believe that technology should feel like a friend, not a threat."
          ]
        },
        {
          heading: "Closing Note",
          paragraphs: [
            "We aren't just coding algorithms — we're rewriting the digital childhood experience."
          ]
        }
      ]
    }
  },
  "eraksha-ai-friend": {
    id: "eraksha-ai-friend",
    title: "eRaksha: The AI Friend Every Child Deserves",
    tagline: "Where digital safety meets emotional intelligence.",
    date: "October 18, 2025",
    category: "Product",
    image: "/blog/eraksha-ai-friend.jpg",
    content: {
      sections: [
        {
          heading: "Why the World Needs eRaksha",
          paragraphs: [
            "Children today live in a paradox. They're the most connected generation ever — and yet, the loneliest. Their digital footprints are vast, but their emotional guardrails are thin. eRaksha was created to fill this gap — a guardian angel that guides without judging, protects without policing, and listens when parents can't always be there."
          ]
        },
        {
          heading: "What Makes eRaksha Different",
          paragraphs: [
            "eRaksha isn't just a parental-control app; it's an AI companion that understands both logic and emotion. Using advanced machine learning and sentiment analysis, it moderates harmful content, promotes healthy digital habits, and creates personalized learning pathways for every child.",
            "But the magic lies in its empathy — it detects digital distress patterns, like excessive scrolling or emotional burnout, and suggests small, science-backed interventions to restore balance."
          ]
        },
        {
          heading: "Empowering Parents, Respecting Privacy",
          paragraphs: [
            "For parents, eRaksha offers peace of mind without prying into personal moments. The parent dashboard provides anonymized insights, allowing caregivers to guide their child's growth without breaching trust — a design inspired by privacy-first AI ethics."
          ]
        },
        {
          heading: "The Bigger Impact",
          paragraphs: [
            "By transforming screen time into learning time, eRaksha becomes a gentle ally for every child's mental well-being. It doesn't punish curiosity — it protects it."
          ]
        },
        {
          heading: "Final Thought",
          paragraphs: [
            "In a noisy world of clicks and likes, eRaksha is the quiet voice that says: \"Take a breath. You're doing great.\""
          ]
        }
      ]
    }
  },
  "iit-madras-story": {
    id: "iit-madras-story",
    title: "The IIT Madras Story: Where Ideas Became Innovation",
    tagline: "From student sketches to India's most promising child-safety AI startup.",
    date: "October 20, 2025",
    category: "Partnerships",
    image: "/blog/iit-madras-story.jpg",
    content: {
      sections: [
        {
          heading: "The Start of Something Bold",
          paragraphs: [
            "When SlateMate was selected for the IIT Madras Nirmaan Pre-Incubation Program, it wasn't just validation — it was acceleration. What began as a dream in a dorm room now had the backing of one of India's top innovation ecosystems."
          ]
        },
        {
          heading: "Mentorship That Mattered",
          paragraphs: [
            "At IIT-M, our founders met mentors who challenged every assumption — about scalability, user trust, and ethical AI. The focus wasn't just on building technology, but building responsibly. Our \"Harmful to Harmless\" content-redirection model took shape here, guided by professors and researchers who believed AI could be as compassionate as it is capable."
          ]
        },
        {
          heading: "Research Meets Reality",
          paragraphs: [
            "Through access to labs, mentorship sessions, and technical grants, we refined our algorithms to detect unsafe content, measure emotional sentiment, and redirect users to safer alternatives — all in real time."
          ]
        },
        {
          heading: "The Broader Impact",
          paragraphs: [
            "This collaboration gave SlateMate a foundation in both academic excellence and real-world relevance — helping us emerge as one of India's most credible voices in AI for child safety."
          ]
        },
        {
          heading: "Reflection",
          paragraphs: [
            "IIT Madras didn't just incubate our startup — it incubated our purpose."
          ]
        }
      ]
    }
  },
  "powered-by-aws": {
    id: "powered-by-aws",
    title: "Powered by AWS: Scaling Empathy Through the Cloud",
    tagline: "Security, speed, and scalability — built on Amazon Web Services.",
    date: "October 22, 2025",
    category: "Technology",
    image: "/blog/powered-by-aws.jpg",
    content: {
      sections: [
        {
          heading: "Why AWS Matters to Our Mission",
          paragraphs: [
            "Child safety apps demand precision, reliability, and security — all at once. With AWS as our partner, SlateMate's architecture achieves exactly that. Every piece of eRaksha's AI pipeline — from real-time content filtering to emotional analytics — runs on robust, encrypted, and globally available AWS infrastructure."
          ]
        },
        {
          heading: "Inside the Stack",
          paragraphs: [
            "We use AWS RDS for secure relational data storage, S3 for encrypted media storage, and App Runner + Lambda for serverless scalability. Our AI microservices interact through secure APIs, allowing instant model inference even during heavy loads."
          ]
        },
        {
          heading: "The Human Side of the Cloud",
          paragraphs: [
            "But this partnership isn't just about compute power — it's about trust power. With AWS compliance frameworks, SlateMate ensures no child's data is ever at risk. Every dataset is anonymized, encrypted, and regionally stored in line with India's DPDPA and global privacy standards."
          ]
        },
        {
          heading: "Growing Together",
          paragraphs: [
            "AWS mentors also guided us through credits, architecture design sessions, and DevOps optimization, enabling us to handle 100x scale during pilot deployments."
          ]
        },
        {
          heading: "Closing Thought",
          paragraphs: [
            "When empathy meets engineering, the cloud becomes more than infrastructure — it becomes a safety net."
          ]
        }
      ]
    }
  },
  "sarvam-ai-partnership": {
    id: "sarvam-ai-partnership",
    title: "SarvamAI x SlateMate: Giving Voice to Safety",
    tagline: "Voice technology that listens, learns, and speaks with care.",
    date: "October 25, 2025",
    category: "Partnerships",
    image: "/blog/sarvam-ai-partnership.jpg",
    content: {
      sections: [
        {
          heading: "Why Voice Matters",
          paragraphs: [
            "In India, not every child is fluent in English or typing. But every child can speak. That's why SlateMate partnered with SarvamAI, India's homegrown voice-AI platform, to bring natural, multilingual speech recognition into eRaksha."
          ]
        },
        {
          heading: "The Experience",
          paragraphs: [
            "Children can now talk to eRaksha — share how they feel, ask for study help, or just chat safely — in English, Hindi, Tamil, or Bengali. eRaksha responds with warmth, adapting tone and language to the child's emotional state."
          ]
        },
        {
          heading: "The Technology Behind Empathy",
          paragraphs: [
            "Through SarvamAI's advanced speech models, we've built a conversational AI that doesn't just process language — it perceives feeling. The system detects vocal cues of frustration, sadness, or stress and responds gently with supportive affirmations."
          ]
        },
        {
          heading: "Why It's Revolutionary",
          paragraphs: [
            "This integration makes eRaksha the first Indian child-safety app with emotion-aware voice interaction. It transforms AI from a text box into a comforting presence — a true digital friend."
          ]
        },
        {
          heading: "Final Line",
          paragraphs: [
            "When children can talk to technology — and feel heard — safety becomes connection."
          ]
        }
      ]
    }
  },
  "slatemate-survey": {
    id: "slatemate-survey",
    title: "The SlateMate Survey: What Indian Families Told Us About Digital Childhood",
    tagline: "Data, emotions, and the untold story behind India's screen generation.",
    date: "October 28, 2025",
    category: "Research",
    image: "/blog/slatemate-survey.jpg",
    content: {
      sections: [
        {
          heading: "Listening Before Building",
          paragraphs: [
            "Before building technology, we listened. In early 2025, SlateMate launched a nationwide survey — reaching over 500 families from metros and tier-2 towns. We wanted to understand not just \"how much\" children were online, but how they felt about it. What we found wasn't just statistics — it was emotion."
          ]
        },
        {
          heading: "The Findings",
          paragraphs: [
            "More than 78% of parents admitted feeling anxious about their child's screen time but uncertain about setting boundaries. 63% of children confessed they sometimes felt \"empty\" or \"disconnected\" after scrolling social media. Yet, most said they didn't want their phones taken away — they wanted to \"use them better.\"",
            "Even more striking: 52% of parents wished for an AI system that could guide instead of punish — something that could talk to their child when they couldn't. That insight became the emotional foundation of eRaksha."
          ]
        },
        {
          heading: "The Deeper Meaning",
          paragraphs: [
            "These numbers reveal more than habits; they reveal a relationship problem between families and technology. The issue isn't the screen — it's the silence that screens create between parent and child. SlateMate's mission is to bridge that silence with understanding, empathy, and intelligent guidance."
          ]
        },
        {
          heading: "What We're Doing With It",
          paragraphs: [
            "The survey helped us personalize eRaksha's features — adding parent-friendly dashboards, emotion-based alerts, and behavior trends mapped to focus cycles. We're turning insights into action — ensuring that every data point leads to a healthier digital habit."
          ]
        },
        {
          heading: "Final Thought",
          paragraphs: [
            "In a world obsessed with algorithms, we're obsessed with understanding humans."
          ]
        }
      ]
    }
  },
  "child-addiction-attention-economy": {
    id: "child-addiction-attention-economy",
    title: "Child Addiction & the Attention Economy",
    tagline: "Why our kids are fighting a battle for focus — and how we can help them win.",
    date: "October 30, 2025",
    category: "Research",
    image: "/blog/child-addiction.jpg",
    content: {
      sections: [
        {
          heading: "The Hidden Design of Distraction",
          paragraphs: [
            "Every notification, autoplay video, and algorithmic feed is designed to do one thing — keep you there. For children, whose brains are still wiring themselves for impulse control, this is no small threat. Dopamine loops and short-term gratification have turned the smartphone into both a playground and a trap."
          ]
        },
        {
          heading: "Understanding the Addiction Cycle",
          paragraphs: [
            "Our AI research team studied how children react during \"digital cravings.\" The results mirror addiction psychology: anticipation, pleasure, guilt, and repetition. What makes it worse? The algorithms learn faster than we do — adapting to every pause, click, and scroll."
          ]
        },
        {
          heading: "The SlateMate Solution",
          paragraphs: [
            "eRaksha uses behavioral modeling to detect early signs of digital addiction — sudden spikes in screen time, emotional volatility, and sleep disruptions. Instead of blocking abruptly, it gently redirects attention using emotional coaching: \"Let's pause for a quick stretch,\" or \"Would you like a 2-minute breathing game?\""
          ]
        },
        {
          heading: "Balancing Tech and Trust",
          paragraphs: [
            "For parents, this means smarter control with emotional awareness. For children, it means learning self-regulation — the foundation of lifelong digital discipline."
          ]
        },
        {
          heading: "The Hope Ahead",
          paragraphs: [
            "The goal isn't to create fear around screens — it's to create freedom within them. Addiction ends not with restriction, but with awareness. And that's the awareness SlateMate is building."
          ]
        }
      ]
    }
  },
  "phone-detoxification": {
    id: "phone-detoxification",
    title: "The Science of Phone Detoxification",
    tagline: "How AI helps children unplug — not by force, but by flow.",
    date: "November 1, 2025",
    category: "Wellness",
    image: "/blog/phone-detox.jpg",
    content: {
      sections: [
        {
          heading: "The Paradox of Connectivity",
          paragraphs: [
            "Children today live in a world that never stops buzzing. The average teen checks their phone 70+ times a day, often without purpose — just to \"feel connected.\" But constant digital noise erodes focus, creativity, and rest. That's where digital detox comes in — not as punishment, but as balance."
          ]
        },
        {
          heading: "How SlateMate Redefines Detox",
          paragraphs: [
            "Traditional screen-time blockers trigger rebellion; we took a different path. eRaksha's \"Digital Detox Mode\" uses habit-loop psychology — suggesting short, reward-based pauses rather than abrupt cut-offs. The AI companion might say, \"You've been learning for an hour — time for a quick walk?\" or \"Let's play an offline reflection game.\""
          ]
        },
        {
          heading: "Why It Works",
          paragraphs: [
            "These gentle nudges work because they respect autonomy. The child feels empowered to choose mindfulness, not forced to obey it. Over time, this builds self-awareness and internal motivation — the essence of true digital detoxification."
          ]
        },
        {
          heading: "Data Meets Mindfulness",
          paragraphs: [
            "Behind the scenes, our models analyze focus patterns, sleep rhythms, and emotional feedback to tailor breaks that restore balance. It's neuroscience in action — helping the brain breathe."
          ]
        },
        {
          heading: "The Result",
          paragraphs: [
            "Children rediscover boredom — and with it, creativity. Parents see calmer evenings. And families start talking again, not scrolling."
          ]
        }
      ]
    }
  },
  "brain-routing": {
    id: "brain-routing",
    title: "Brain Routing: How AI Learns From the Mind",
    tagline: "Using neuroscience to personalize focus, learning, and emotional growth.",
    date: "November 3, 2025",
    category: "Technology",
    image: "/blog/brain-routing.jpg",
    content: {
      sections: [
        {
          heading: "The Idea",
          paragraphs: [
            "Every brain routes attention differently — and yet, most learning systems treat children the same. SlateMate's \"Brain Routing\" model changes that. Inspired by neuroscience, it analyzes how children shift focus, handle emotion, and retain information — then adjusts the learning rhythm accordingly."
          ]
        },
        {
          heading: "How It Works",
          paragraphs: [
            "Our AI doesn't just track what a child watches; it tracks how they engage. Is the child curious, distracted, or anxious? By mapping focus cycles and response times, eRaksha can suggest when to study, when to pause, and when to recharge."
          ]
        },
        {
          heading: "The Science",
          paragraphs: [
            "Studies show that children learn best in bursts of 25–30 minutes, followed by reflective rest. Our model mirrors this — dynamically shaping the digital environment to match cognitive stamina. Think of it as an adaptive coach for the brain's natural tempo."
          ]
        },
        {
          heading: "Impact Beyond Learning",
          paragraphs: [
            "Brain Routing also powers eRaksha's emotional guidance. If the AI detects frustration during tasks, it shifts tone — from instructive to supportive — making learning feel human again."
          ]
        },
        {
          heading: "Why It Matters",
          paragraphs: [
            "This is how we make AI feel less artificial. By aligning algorithms with biology, SlateMate turns digital time into mental growth time."
          ]
        }
      ]
    }
  },
  "doom-scrolling": {
    id: "doom-scrolling",
    title: "Doom Scrolling and the Digital Fog",
    tagline: "Breaking the loop of endless scrolling — one gentle nudge at a time.",
    date: "November 5, 2025",
    category: "Wellness",
    image: "/blog/doom-scrolling.jpg",
    content: {
      sections: [
        {
          heading: "The Trap",
          paragraphs: [
            "We've all done it — that endless scroll through bad news, viral reels, or random content that leaves us oddly numb. Psychologists call it \"doom scrolling.\" For children, this habit is especially harmful — it reinforces anxiety, self-doubt, and sleep deprivation."
          ]
        },
        {
          heading: "The Emotional Cost",
          paragraphs: [
            "Our internal research shows that children caught in doom-scroll cycles report feeling more \"tired but wired.\" Their attention span shortens, and emotional volatility increases. Worse, they start seeking validation from algorithms instead of humans."
          ]
        },
        {
          heading: "How eRaksha Intervenes",
          paragraphs: [
            "eRaksha's behavioral AI identifies doom-scroll loops through repetitive engagement and late-night activity spikes. When detected, it activates \"Reflect Mode.\"",
            "This mode uses voice prompts and gentle cognitive breaks — like \"Let's try a happy story?\" or \"You've been scrolling for a while, want to play a focus game?\" — to interrupt the pattern empathetically, not punitively."
          ]
        },
        {
          heading: "Reclaiming Control",
          paragraphs: [
            "By transforming moments of mindless consumption into moments of awareness, eRaksha helps children rediscover control over their attention. Parents see calmer behavior, while children learn that peace is a choice — even online."
          ]
        },
        {
          heading: "Closing Reflection",
          paragraphs: [
            "The goal isn't to disconnect kids from technology. It's to reconnect them with themselves."
          ]
        }
      ]
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: "Blog Post Not Found | SlateMate"
    }
  }

  return {
    title: `${post.title} | SlateMate Blog`,
    description: post.tagline,
    openGraph: {
      title: post.title,
      description: post.tagline,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-blue-primary hover:underline mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-primary/10 text-blue-primary text-sm font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-foreground/70 italic mb-6">{post.tagline}</p>
              
              <div className="flex items-center gap-6 text-foreground/60">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <button className="flex items-center gap-2 hover:text-blue-primary transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            {post.image && (
            <ScrollReveal>
              <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-blueLight/20 via-background to-orangeLight/20 border border-border/30">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
            )}

            {/* Content Sections */}
            {post.content.sections.map((section, index) => (
              <ScrollReveal key={index}>
                <div className="mb-10">
                  {section.heading && (
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      {section.emoji && <span>{section.emoji}</span>}
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground/80 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            ))}

            {/* CTA Links */}
            <ScrollReveal>
              <div className="mt-12 p-8 bg-gradient-to-br from-blueLight/10 to-orangeLight/10 rounded-xl border border-border/30">
                <h3 className="text-xl font-bold mb-4">Learn More</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/product" className="text-blue-primary hover:underline font-medium">
                    → Explore eRaksha
                  </Link>
                  <Link href="/about" className="text-blue-primary hover:underline font-medium">
                    → About SlateMate
                  </Link>
                  <Link href="https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt" target="_blank" rel="noopener noreferrer" className="text-blue-primary hover:underline font-medium">
                    → Join Our Community
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

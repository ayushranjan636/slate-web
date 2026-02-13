import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Briefcase, Heart, Rocket, Users, Globe, TrendingUp, Code, Palette, BookOpen, Search, Megaphone, Mail, Sparkles, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers at SlateMate | Join eRaksha Team - Shape Child Safety Innovation",
  description:
    "Join SlateMate's mission to build AI-powered digital safety for children. Open positions for AI engineers, developers, content creators, and more. Remote-first, meaningful work, competitive compensation.",
  keywords:
    "SlateMate careers India 2024, eRaksha team jobs, IIT Madras startup careers, child safety platform jobs Chennai, AI child protection careers, digital safety engineer jobs, child psychology technology careers, EdTech startup hiring India, AI engineer jobs Chennai, child safety innovation careers, digital wellness platform jobs, family technology careers India, child protection software developer jobs, AI companion developer careers, DNS protection engineer jobs, child cybersecurity careers India, digital parenting technology jobs, family safety platform careers, child development technology jobs, AI child mentor developer careers, digital citizenship education jobs, child online safety expert careers, family digital health careers, child behavior analysis careers, digital child psychology jobs, AI emotional intelligence developer, child safety research careers, family cybersecurity jobs India, digital wellness educator careers, child internet safety specialist jobs, parental control developer careers, child data privacy careers, digital child protection advocate jobs, AI family technology careers, child safety compliance careers, digital mindfulness technology jobs, child screen time researcher careers, family communication platform jobs, child online behavior analyst careers, digital child development careers, AI child guidance counselor jobs, child safety product manager careers, digital family wellness careers, child protection policy careers India",
  openGraph: {
    title: "Careers | SlateMate - Join Our AI-Powered Learning Team",
    description:
      "Join SlateMate's team and help shape the future of AI-powered education. Explore current job openings and opportunities.",
    type: "website",
    url: "https://slatemate.in/careers",
    images: [
      {
        url: "https://slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | SlateMate - Join Our AI-Powered Learning Team",
    description:
      "Join SlateMate's team and help shape the future of AI-powered education.",
    images: ["https://slatemate.in/og-image.jpg"],
    site: "@slatemate_in",
  },
  alternates: {
    canonical: "https://slatemate.in/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://slatemate.in"),
  creator: "SlateMate Team",
  publisher: "SlateMate",
  category: "careers",
  other: {
    // LLM Optimization for Careers Page
    "ai-content-type": "careers-hiring-page",
    "ai-primary-entities": "SlateMate-careers,eRaksha-team-jobs,IIT-Madras-startup-hiring,child-safety-careers",
    "ai-content-topics": "job opportunities, career growth, child safety innovation, AI technology careers, startup culture",
    "ai-extraction-hints": "company: SlateMate; location: Chennai, IIT Madras; industry: child safety AI; positions: engineering, psychology, design",
    "llm-context-type": "job-listings-recruitment",
    "llm-primary-intent": "attract top talent, showcase company culture, promote job openings",
    "llm-key-messages": "innovative startup environment, meaningful child safety work, IIT Madras connection, growth opportunities",
    "semantic-entities": "organization:SlateMate, location:Chennai-IIT-Madras, concept:careers, industry:child-safety-AI",
    "relationship-mapping": "SlateMate:offers:career-opportunities, candidates:join:eRaksha-team, IIT-Madras:incubates:SlateMate",
    "content-structure": "company-overview, open-positions, benefits-perks, application-process, culture-values",
    "stakeholder-relevance": "job-seekers:career-opportunities, professionals:growth-potential, students:internship-opportunities",
    "job-categories": "AI Engineering, Child Psychology, Digital Safety, Product Development, Research",
    "company-stage": "Pre-Series A Startup",
    "geo.region": "IN-TN",
    "geo.placename": "Chennai, Tamil Nadu, India",
    "audience": "Engineers, Designers, Researchers, Child Psychology Experts, AI Professionals",
    "page-topic": "SlateMate Career Opportunities and Team Recruitment",
    "hiring-focus": "Child Safety Innovation and AI Technology"
  },
}

export default function Careers() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "JobPosting",
        "position": 1,
        "title": "AI/ML Engineer",
        "description": "Help us design and optimize AI models for personalized learning, emotional analysis, and child-safety systems.",
        "datePosted": "2025-10-01",
        "validThrough": "2026-03-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "SlateMate",
          "sameAs": "https://www.slatemate.in",
          "logo": "https://www.slatemate.in/logo.png"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        },
        "jobLocationType": "TELECOMMUTE"
      },
      {
        "@type": "JobPosting",
        "position": 2,
        "title": "Frontend Developer",
        "description": "Create elegant, high-performance web interfaces for our apps and dashboards.",
        "datePosted": "2025-10-01",
        "validThrough": "2026-03-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "SlateMate",
          "sameAs": "https://www.slatemate.in"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        },
        "jobLocationType": "TELECOMMUTE"
      }
    ]
  }

  const JobCard = ({ 
    icon, 
    title, 
    type, 
    description, 
    responsibilities, 
    skills 
  }: { 
    icon: React.ReactNode; 
    title: string; 
    type: string; 
    description: string; 
    responsibilities: string[]; 
    skills: string; 
  }) => (
    <div className="bg-card p-8 rounded-xl border border-border/30 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-primary/10 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/60 text-sm">{type}</p>
        </div>
      </div>
      
      <p className="text-foreground/80 leading-relaxed mb-4">
        <strong>About the Role:</strong><br />
        {description}
      </p>
      
      <div className="mb-4">
        <p className="font-semibold text-foreground mb-2">You'll Work On:</p>
        <ul className="space-y-1">
          {responsibilities.map((item, idx) => (
            <li key={idx} className="flex items-start text-foreground/70">
              <span className="text-blue-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-foreground/70">
          <strong>Preferred Skills:</strong> {skills}
        </p>
      </div>
      
      <Button 
        asChild 
        className="w-full bg-gradient-to-r from-blue-primary to-orange hover:shadow-lg transition-all"
      >
        <a href={`mailto:careers@slatemate.in?subject=Application for ${title}`}>
          Apply Now →
        </a>
      </Button>
    </div>
  )

  return (
    <>
      {/* JSON-LD Structured Data */}
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
                    <Briefcase className="h-12 w-12 text-orange" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
                <p className="text-2xl text-foreground/80 mb-6">
                  Shape the Future of Safe, Intelligent Learning
                </p>
                <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                  At SlateMate, we're reimagining how technology supports the next generation — not distracts them. We're building AI that protects, guides, and empowers children to thrive in a digital-first world.
                </p>
                <p className="text-lg text-foreground/80 mt-4 font-medium">
                  If you're passionate about meaningful tech, education, and human impact, you belong here.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Work at SlateMate */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">🌍 Why Work at SlateMate?</h2>
              </div>
            </ScrollReveal>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal>
                <div className="bg-card p-6 rounded-xl border border-border/30 hover:shadow-lg transition-all">
                  <Target className="h-8 w-8 text-blue-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Mission with Meaning</h3>
                  <p className="text-foreground/70 text-sm">
                    Build tech that truly matters — ensuring safe digital growth for millions of children.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-card p-6 rounded-xl border border-border/30 hover:shadow-lg transition-all">
                  <Sparkles className="h-8 w-8 text-orange mb-4" />
                  <h3 className="font-bold text-lg mb-2">AI for Good</h3>
                  <p className="text-foreground/70 text-sm">
                    Work on real AI systems in emotional intelligence, content moderation, and personalized learning.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-card p-6 rounded-xl border border-border/30 hover:shadow-lg transition-all">
                  <Users className="h-8 w-8 text-blue-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Collaborative Environment</h3>
                  <p className="text-foreground/70 text-sm">
                    Join a small, driven, and multidisciplinary team that values creativity and execution.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-card p-6 rounded-xl border border-border/30 hover:shadow-lg transition-all">
                  <Globe className="h-8 w-8 text-orange mb-4" />
                  <h3 className="font-bold text-lg mb-2">Fully Remote & Flexible</h3>
                  <p className="text-foreground/70 text-sm">
                    Work from anywhere. We value output over office hours.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-card p-6 rounded-xl border border-border/30 hover:shadow-lg transition-all">
                  <TrendingUp className="h-8 w-8 text-blue-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Growth & Ownership</h3>
                  <p className="text-foreground/70 text-sm">
                    Learn fast, lead faster. Every team member shapes core product decisions.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="bg-card p-6 rounded-xl border border-border/30 hover:shadow-lg transition-all">
                  <Rocket className="h-8 w-8 text-orange mb-4" />
                  <h3 className="font-bold text-lg mb-2">Competitive Compensation</h3>
                  <p className="text-foreground/70 text-sm">
                    We offer fair pay, learning opportunities, and growth-linked bonuses.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">💼 Current Openings (Remote)</h2>
              </div>
            </ScrollReveal>

            <div className="max-w-5xl mx-auto space-y-8">
              <ScrollReveal>
                <JobCard
                  icon={<Code className="h-6 w-6 text-blue-primary" />}
                  title="AI/ML Engineer"
                  type="Full-time • Remote"
                  description="Help us design and optimize AI models for personalized learning, emotional analysis, and child-safety systems. You'll work closely with our data and research teams to build scalable ML pipelines and improve model precision in real-world educational settings."
                  responsibilities={[
                    "NLP models for learning guidance and content moderation",
                    "Deep learning pipelines (PyTorch / TensorFlow)",
                    "Real-time inference APIs and MLOps"
                  ]}
                  skills="Python, FastAPI, PyTorch/TensorFlow, OpenAI or HuggingFace APIs, cloud deployment (AWS/GCP)."
                />
              </ScrollReveal>

              <ScrollReveal>
                <JobCard
                  icon={<Palette className="h-6 w-6 text-orange" />}
                  title="Frontend Developer"
                  type="Full-time • Remote"
                  description="Join our frontend team to create elegant, high-performance web interfaces for our apps and dashboards. You'll collaborate with designers and backend engineers to bring eRaksha's AI-driven experience to life."
                  responsibilities={[
                    "Next.js + React user interfaces for parents, schools, and children",
                    "Real-time dashboards with Tailwind + Framer Motion animations",
                    "Cross-platform responsiveness and accessibility"
                  ]}
                  skills="React, Next.js, TypeScript, Tailwind, REST/GraphQL, Firebase or AWS integration."
                />
              </ScrollReveal>

              <ScrollReveal>
                <JobCard
                  icon={<BookOpen className="h-6 w-6 text-blue-primary" />}
                  title="Content Developer (Education & AI)"
                  type="Full-time • Remote"
                  description="Create engaging, age-appropriate educational content and interactive learning experiences. You'll combine curriculum design with AI storytelling to make learning safe, smart, and fun."
                  responsibilities={[
                    "Designing quizzes, learning paths, and activity-based modules",
                    "Working with AI teams to generate contextual learning content",
                    "Writing short-form explainers and parent-child communication guides"
                  ]}
                  skills="Curriculum design, K–12 pedagogy, storytelling, copywriting, EdTech experience."
                />
              </ScrollReveal>

              <ScrollReveal>
                <JobCard
                  icon={<Search className="h-6 w-6 text-orange" />}
                  title="UX Research & Design Intern"
                  type="Internship • Remote"
                  description="Help us humanize AI by studying how children and parents interact with technology. Work with our product and design teams to prototype empathetic, research-backed interfaces."
                  responsibilities={[
                    "User journey research (parents, children, schools)",
                    "Wireframing and low-fidelity design in Figma",
                    "Emotional UX and habit-building models"
                  ]}
                  skills="Figma, usability testing, behavioral psychology, storytelling, design systems."
                />
              </ScrollReveal>

              <ScrollReveal>
                <JobCard
                  icon={<Megaphone className="h-6 w-6 text-blue-primary" />}
                  title="Marketing & Growth Associate"
                  type="Full-time • Remote"
                  description="You'll help us tell SlateMate's story — from digital safety to emotional intelligence — to parents, schools, and communities across India."
                  responsibilities={[
                    "Brand campaigns, newsletters, and parent education programs",
                    "Community engagement with schools and NGOs",
                    "Social media strategy, analytics, and partnerships"
                  ]}
                  skills="Marketing strategy, storytelling, Canva/Notion, performance analytics, community building."
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <div className="bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/15 p-10 rounded-xl border border-border/30 shadow-lg text-center">
                  <Mail className="h-12 w-12 text-blue-primary mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-4">📨 How to Apply</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Send your resume and a short note (why SlateMate?) to
                  </p>
                  <a 
                    href="mailto:careers@slatemate.in" 
                    className="text-2xl font-bold text-blue-primary hover:underline inline-block mb-6"
                  >
                    📩 careers@slatemate.in
                  </a>
                  <p className="text-sm text-foreground/70 mb-2">
                    Please mention the role name in the subject line — e.g., "Application for Frontend Developer".
                  </p>
                  <p className="text-sm text-foreground/70">
                    We review every application personally and respond to shortlisted candidates within <strong>5–7 business days</strong>.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <Heart className="h-12 w-12 text-orange mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6">❤️ Our Culture</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  We believe in building a company as human as the product we make.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  At SlateMate, <strong>kindness, curiosity, and accountability</strong> drive everything — from brainstorming ideas to shipping features.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We're a team of learners shaping tools that make the internet a safer, smarter place for children.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

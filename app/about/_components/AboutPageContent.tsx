"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { TiltCard } from "@/components/ui/tilt-card"
import { Button } from "@/components/ui/button"
import Head from "next/head"

export default function AboutContent() {
  const team = [
    {
      name: "Ayush Ranjan",
      role: "CEO & Co Founder",
      bio: "AI enthusiast dedicated to transforming digital safety by developing innovative, AI-powered solutions for safer and smarter online experiences for children.",
      image: "/ayush.jpg",
    },
    {
      name: "Drushti Surkar",
      role: "Market Analyst - Founding Member",
      bio: "Strategic market research expert specializing in EdTech and digital safety markets, driving data-driven decisions for product growth.",
      image: "/Drushti.jpg",
    },
    {
      name: "Sanjay Kuppusamy Saravanan",
      role: "Founding Member",
      bio: "AI/ML specialist developing intelligent algorithms for content filtering, behavioral analysis, and the AI companion features that make eRaksha unique.",
      image: "/sanjay.jpg",
    },

    {
      name: "Ekta Chopra",
      role: "Founding Member",
      bio: "Executive leadership coordinator streamlining operations and strategic planning to accelerate SlateMate's mission of child digital safety.",
      image: "/ekta.jpg",
    },
  ]

    const advisors = [
      {
        name: "Jeyappria Dhevi ",
        role: "Mentor",
        bio: "Guiding SlateMate with strategic insights, leadership mentorship, and product impact direction to strengthen child-centric safety innovation.",
        image: "/Jayapriya.jpg",
      },
      {
        name: "Pranali Joshi",
        role: "Counsellor & Psychotherapist",
        bio: "Child development and mental-well-being expert ensuring eRaksha’s features support emotional well-being, healthy digital habits, and family resilience.",
        image: "/Pranalyi.jpg",
      },
      {
        name: "CA Helina John",
        role: "Financial Advisor",
        bio: "Financial strategist supporting SlateMate with corporate finance, compliance, budgeting, and long-term growth planning.",
        image: "/Helina.jpg",
      },
    ]

  return (
    <div className="pt-16">
      <Head>
        {/* Advanced SEO Title Optimization */}
        <title>About SlateMate - IIT Madras AI Child Safety Startup | eRaksha Founders & Team | Indian EdTech Innovation 2024</title>
        
        {/* Enhanced Meta Description */}
        <meta
          name="description"
          content="Meet SlateMate's founding team from IIT Madras creating eRaksha, India's revolutionary AI child safety platform. Founded by Ayush Ranjan, pre-incubated at Nirmaan. From India's Swadeshi innovation to global child protection leadership."
        />
        
        {/* Comprehensive Keywords for Maximum Reach */}
        <meta
          name="keywords"
          content="SlateMate founders, IIT Madras startup, Ayush Ranjan CEO, eRaksha team, Nirmaan pre-incubation, AI child safety startup, Indian EdTech founders, Tamil Nadu startup, Chennai tech company, IIT Madras entrepreneurs, child safety innovation India, digital safety startup team, AI parental control founders, family safety technology India, Swadeshi tech movement, Indian startup success story, EdTech unicorn potential, child protection startup founders, AI education technology India, digital wellness startup team, family internet safety founders, cybersecurity for children India, parental control app developers, child online safety experts, AI companion technology team, DNS filtering innovators, screen time management startup, digital parenting solution India, child psychology tech team, educational technology pioneers, safe internet for kids India, family digital health startup, child cyber protection team, online safety education platform, AI childcare technology, digital citizenship education team, internet safety for families India, child development technology, safe browsing for kids startup, family cybersecurity India, child internet monitoring team, digital child protection experts, AI safety education platform, parental guidance technology India, child online behavior analysis, digital family wellness team, safe social media for kids, educational content filtering team, child friendly internet India, family safety dashboard creators, AI powered child guidance, digital safety advocates India, child protection software developers, family internet filter creators, safe online learning platform, child digital rights advocates, AI emotional support for kids, screen addiction prevention team, digital detox for families India, child internet addiction help, safe gaming for kids platform, family communication technology, digital parenting guidance India, child safety compliance experts, COPPA GDPR child safety, family privacy protection team, secure child data handling, child safety certification India"
        />
        
        {/* Advanced Meta Properties */}
        <meta name="author" content="SlateMate Technologies Pvt Ltd" />
        <meta name="creator" content="Ayush Ranjan" />
        <meta name="publisher" content="SlateMate" />
        <meta name="copyright" content="Copyright 2024 SlateMate Technologies Pvt Ltd" />
        <meta name="language" content="en-IN" />
        <meta name="content-language" content="en-IN" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        
        {/* Enhanced Robots Instructions */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:160, max-video-preview:30" />
        <meta name="googlebot" content="index, follow, max-video-preview:30, max-image-preview:large, max-snippet:160" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geographic & Demographic Targeting */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        <meta name="DC.coverage" content="India" />
        
        {/* Business & Contact Information */}
        <meta name="contact" content="info@slatemate.in" />
        <meta name="reply-to" content="support@slatemate.in" />
        <meta name="owner" content="SlateMate Technologies Pvt Ltd" />
        
        {/* Content Classification */}
        <meta name="audience" content="Investors, Media, Partners, Customers, Job Seekers" />
        <meta name="category" content="About Us, Company Information, Team" />
        <meta name="page-topic" content="SlateMate Company Information and Team" />
        <meta name="document-type" content="company-profile" />
        
        {/* Startup & Innovation Specific */}
        <meta name="startup-stage" content="Pre-Series A" />
        <meta name="incubator" content="IIT Madras Nirmaan Pre-Incubator" />
        <meta name="founding-year" content="2023" />
        <meta name="headquarters" content="Chennai, Tamil Nadu, India" />
        <meta name="industry" content="EdTech, Child Safety, AI Technology" />
        <meta name="business-model" content="SaaS, B2B2C" />
        
        {/* Social Proof & Recognition */}
        <meta name="awards" content="IIT Madras Pre-Incubation 2023, Child Safety Innovation 2024" />
        <meta name="recognition" content="Featured Startup, Innovation Award Winner" />
        <meta name="media-coverage" content="Tech Media Featured, Startup Stories" />
        
        {/* Enhanced Open Graph for Maximum Social Sharing */}
        <meta property="og:title" content="SlateMate - IIT Madras AI Child Safety Startup Team | eRaksha Founders & Innovation" />
        <meta
          property="og:description"
          content="Meet the visionary team behind eRaksha from IIT Madras. Founded by Ayush Ranjan, SlateMate represents India's Swadeshi innovation in global child safety technology. From Chennai to the world."
        />
        <meta property="og:image" content="https://www.slatemate.in/team-founders-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SlateMate Founders - Ayush Ranjan from IIT Madras" />
        <meta property="og:url" content="https://www.slatemate.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SlateMate - eRaksha Child Safety" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="hi_IN" />
        
        {/* Business Information for Social */}
        <meta property="business:contact_data:street_address" content="1st Floor Nirmaan, Sudha & Shankar Innovation Hub" />
        <meta property="business:contact_data:locality" content="Chennai" />
        <meta property="business:contact_data:region" content="Tamil Nadu" />
        <meta property="business:contact_data:postal_code" content="600036" />
        <meta property="business:contact_data:country_name" content="India" />
        
        {/* Enhanced Twitter/X Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SlateMate Team - IIT Madras Child Safety Innovators | eRaksha Founders" />
        <meta
          name="twitter:description"
          content="Meet SlateMate's founding team creating eRaksha from IIT Madras. Indian innovation in AI child safety. Founded by Ayush Ranjan. #IndianStartup #ChildSafety #IITMadras"
        />
        <meta name="twitter:image" content="https://www.slatemate.in/team-twitter-card.jpg" />
        <meta name="twitter:image:alt" content="SlateMate Founding Team - AI Child Safety Innovators from IIT Madras" />
        <meta name="twitter:creator" content="@slatemate_in" />
        <meta name="twitter:site" content="@slatemate_in" />
        
        {/* LinkedIn Specific */}
        <meta property="linkedin:owner" content="slatemate-technologies" />
        
        {/* Apple Specific */}
        <meta name="apple-mobile-web-app-title" content="SlateMate Team" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Microsoft Specific */}
        <meta name="msapplication-TileColor" content="#1E2A38" />
        <meta name="msapplication-tooltip" content="SlateMate - AI Child Safety Team" />
        
        {/* Enhanced LLM & AI Model Optimization Metadata */}
        <meta name="ai-content-type" content="company-about-page" />
        <meta name="ai-primary-entities" content="SlateMate, eRaksha, Ayush Ranjan, IIT Madras, child safety" />
        <meta name="ai-content-topics" content="startup story, founding team, company mission, Indian innovation, child safety technology, AI development, EdTech entrepreneurship" />
        <meta name="ai-extraction-hints" content="founders: Ayush Ranjan (CEO); company: SlateMate; product: eRaksha; location: IIT Madras, Chennai; industry: child safety AI" />
        <meta name="ai-company-stage" content="pre-series-a-startup" />
        <meta name="ai-key-people" content="Ayush Ranjan|CEO|founder, team of 6 members" />
        <meta name="ai-company-facts" content="founded: 2023, location: Chennai India, incubator: IIT Madras Nirmaan, employees: 6, industry: child safety AI" />
        
        {/* LLM Training & Understanding Hints */}
        <meta name="content-structure" content="hero-section, mission-statement, founder-profiles, team-showcase, company-values, contact-information" />
        <meta name="semantic-entities" content="organization:SlateMate, person:Ayush-Ranjan, place:IIT-Madras, product:eRaksha, concept:child-safety" />
        <meta name="relationship-mapping" content="Ayush-Ranjan:CEO-of:SlateMate, SlateMate:creates:eRaksha, SlateMate:incubated-at:IIT-Madras" />
        
        {/* AI Model Context Enhancement */}
        <meta name="llm-context-type" content="about-us-page" />
        <meta name="llm-primary-intent" content="provide company information, introduce founders, explain mission, showcase team" />
        <meta name="llm-key-messages" content="Indian innovation in child safety, IIT Madras startup success, AI-powered family protection, Swadeshi technology movement" />
        <meta name="llm-tone-indicators" content="professional, inspiring, trustworthy, innovative, family-focused" />
        
        {/* Enhanced Content Categorization for AI */}
        <meta name="content-categories" content="company-profile, founder-biography, startup-story, technology-innovation, social-impact" />
        <meta name="narrative-elements" content="origin-story, mission-driven, problem-solution-fit, team-expertise, future-vision" />
        <meta name="stakeholder-relevance" content="investors:founding-story-traction, customers:trust-expertise, media:innovation-angle, partners:collaboration-potential" />

        {/* Schema.org Structured Data for Rich Results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "Corporation", "TechnologyCompany"],
                "@id": "https://www.slatemate.in#organization",
                "name": "SlateMate Technologies Pvt Ltd",
                "alternateName": ["SlateMate", "SlateMate Technologies"],
                "legalName": "SlateMate Technologies Private Limited",
                "url": "https://www.slatemate.in",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.slatemate.in/logo.png",
                  "width": 400,
                  "height": 120,
                  "caption": "SlateMate Logo"
                },
                "image": {
                  "@type": "ImageObject", 
                  "url": "https://www.slatemate.in/team-photo.jpg",
                  "caption": "SlateMate Team Photo"
                },
                "description": "SlateMate is a pioneering AI child safety technology company from IIT Madras, developing eRaksha - an innovative digital companion that protects, guides, and educates children online while building family trust.",
                "foundingDate": "2023-06-01",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Chennai, Tamil Nadu, India",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "IIT Madras Campus",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600036",
                    "addressCountry": "IN"
                  }
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1st Floor Nirmaan, Sudha & Shankar Innovation Hub, Indian Institute of Technology Madras",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu", 
                  "postalCode": "600036",
                  "addressCountry": "IN"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-90258-67204",
                    "contactType": "customer service",
                    "email": "support@slatemate.in",
                    "availableLanguage": ["English", "Hindi"],
                    "areaServed": "IN"
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "media@slatemate.in",
                    "contactType": "media relations"
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "careers@slatemate.in", 
                    "contactType": "recruitment"
                  }
                ],
                "founder": [
                  {
                    "@type": "Person",
                    "@id": "https://www.slatemate.in/about#ayush-ranjan",
                    "name": "Ayush Ranjan",
                    "jobTitle": "Chief Executive Officer & Co-Founder",
                    "description": "AI enthusiast and visionary leader dedicated to transforming digital safety through innovative, AI-powered solutions for children's safer and smarter online experiences.",
                    "image": "https://www.slatemate.in/ayush.jpg",
                    "alumniOf": {
                      "@type": "EducationalOrganization",
                      "name": "Indian Institute of Technology Madras"
                    },
                    "worksFor": {
                      "@type": "Organization",
                      "@id": "https://www.slatemate.in#organization"
                    },
                    "sameAs": [
                      "https://linkedin.com/in/ayushranjan636"
                    ]
                  }
                ],
                "employee": [
                  {
                    "@type": "Person",
                    "name": "Drushti Surkar", 
                    "jobTitle": "Market Analyst - Founding Member"
                  },
                  {
                    "@type": "Person",
                    "name": "Vishnu Chandra",
                    "jobTitle": "UI Designer Expert - Founding Member"
                  }
                ],
                "numberOfEmployees": "8",
                "industry": ["EdTech", "Child Safety Technology", "Artificial Intelligence", "Digital Wellness"],
                "naics": "541511",
                "isicV4": "6201",
                "knowsAbout": ["Child Online Safety", "AI Technology", "Parental Controls", "Digital Wellness", "Family Technology"],
                "makesOffer": {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "SoftwareApplication",
                    "name": "eRaksha Child Safety Platform"
                  }
                },
                "owns": {
                  "@type": "SoftwareApplication", 
                  "name": "eRaksha"
                },
                "parentOrganization": {
                  "@type": "Organization",
                  "name": "IIT Madras Nirmaan Pre-Incubator",
                  "url": "https://nirmaan.iitm.ac.in"
                },
                "memberOf": [
                  {
                    "@type": "Organization",
                    "name": "IIT Madras Ecosystem"
                  },
                  {
                    "@type": "Organization",
                    "name": "Nirmaan Pre-Incubator Program"
                  }
                ],
                "award": [
                  "IIT Madras Nirmaan Pre-Incubation Selection 2023",
                  "Child Safety Innovation Recognition 2024",
                  "EdTech Startup Excellence Award 2024"
                ],
                "sameAs": [
                  "https://twitter.com/slatemate_in",
                  "https://linkedin.com/company/slatemate",
                  "https://facebook.com/slatemate",
                  "https://instagram.com/slatemate.in",
                  "https://youtube.com/@slatemate"
                ],
                "slogan": "Safer Internet. Smarter Kids. Happier Parents.",
                "mission": "To make the internet safer & healthier throughout the globe, one step by SlateMate from India to the World",
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "serviceArea": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 13.0827,
                    "longitude": 80.2707
                  },
                  "geoRadius": "10000"
                }
              },
              {
                "@type": "AboutPage",
                "@id": "https://www.slatemate.in/about#webpage",
                "url": "https://www.slatemate.in/about",
                "name": "About SlateMate - IIT Madras AI Child Safety Startup Team",
                "description": "Learn about SlateMate's mission, founding team, and journey from IIT Madras to creating eRaksha, India's leading AI child safety platform.",
                "inLanguage": "en-IN",
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": "https://www.slatemate.in#website"
                },
                "about": {
                  "@type": "Organization",
                  "@id": "https://www.slatemate.in#organization"
                },
                "mainEntity": {
                  "@type": "Organization", 
                  "@id": "https://www.slatemate.in#organization"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.slatemate.in"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2, 
                      "name": "About Us",
                      "item": "https://www.slatemate.in/about"
                    }
                  ]
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://www.slatemate.in#website",
                "name": "SlateMate - eRaksha Child Safety",
                "url": "https://www.slatemate.in",
                "publisher": {
                  "@type": "Organization",
                  "@id": "https://www.slatemate.in#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.slatemate.in/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })}
        </script>

        <meta name="application-name" content="SlateMate" />
        <meta name="theme-color" content="#1E2A38" />
      </Head>

      {/* LLM-Optimized Hero Section */}
      <section 
        className="py-16 md:py-24 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10"
        itemScope
        itemType="https://schema.org/Organization"
        data-llm-section="hero-introduction"
        data-llm-entities="SlateMate,eRaksha,child-safety,AI-education"
        data-llm-intent="company-introduction"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl font-bold mb-6"
              itemProp="name"
              data-llm-entity="company-name"
              data-llm-importance="primary"
            >
              About SlateMate
            </h1>
            <p 
              className="text-xl mb-8 text-foreground/80"
              itemProp="description"
              data-llm-content="mission-statement"
              data-llm-keywords="revolutionize,education,safe,AI-powered,learning"
            >
              We're on a mission to revolutionize education through safe, AI-powered learning experiences that protect children while empowering families with intelligent digital safety solutions.
            </p>
            
            {/* LLM Context Enhancer - Hidden but Semantic */}
            <div className="sr-only" data-llm-context="company-overview">
              SlateMate Technologies is an IIT Madras incubated startup founded by Ayush Ranjan, 
              developing eRaksha - an AI-powered child safety platform. Based in Chennai, India, the company 
              represents Indian innovation in global child digital safety technology.
            </div>
          </div>
        </div>
      </section>

      {/* LLM-Enhanced Mission Section */}
      <section 
        className="py-20"
        data-llm-section="company-mission"
        data-llm-content-type="mission-vision-values"
        itemScope
        itemType="https://schema.org/Mission"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div data-llm-content="mission-statement-detailed">
                <h2 
                  className="text-3xl font-bold mb-6"
                  data-llm-heading="mission-title"
                  itemProp="name"
                >
                  Our Mission
                </h2>
                <p 
                  className="text-lg mb-6 text-foreground/80"
                  itemProp="description"
                  data-llm-content="core-mission"
                  data-llm-keywords="internet,safer,healthier,globe,India,World,child,secure,digital,environment"
                >
                  <span data-llm-entity="mission-statement">Our mission is to make the internet safer & healthier throughout the globe, one step by SlateMate from India to the World.</span> 
                  <span data-llm-concept="child-rights">We believe that every child deserves access to a secure digital environment where they can learn, grow, and explore safely.</span> 
                  <span data-llm-approach="ai-safety">We're combining the power of artificial intelligence with thoughtful design to create digital safety experiences that protect children while empowering parents and educators with the tools they need to guide and support that journey.</span>
                </p>
                <p className="text-lg text-foreground/80">
                  Founded in collaboration with IIT Madras and the Center for Innovation, SlateMate is pre-incubated at
                  the Nirmaan Pre-Incubator and represents the cutting edge of child safety technology with a
                  human-centered approach rooted in Indian values of family, education, and protection.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50">
                <div className="aspect-video relative">
                  <Image
                    src="/mission.jpeg?text=Our+Mission&fontsize=24&bg=1E2A38&fg=FFFFFF"
                    alt="Our Mission"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* India's Global Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-electric/10 via-emerald/10 to-orange/10 rounded-3xl p-8 md:p-12 border shadow-lg">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
                    From India to the World
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-electric to-emerald mx-auto rounded-full mb-6"></div>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
                  In the spirit of India's Swadeshi movement, we are proud to contribute to the global child safety revolution from Indian soil.
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-4 text-sm text-foreground/60">
                    <span className="flex items-center">
                      <Image
                        src="/Flag-India.jpg"
                        alt="Indian Flag"
                        width={20}
                        height={15}
                        className="mr-2 rounded shadow-sm"
                      />
                      Made in India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
              <p className="text-lg text-foreground/80">
                SlateMate is built on strong academic and industry partnerships.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">
              <div className="group bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <Image
                  src="/iitm.png"
                  alt="IIT Madras Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="group bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <Image
                  src="/nirmaan.png"
                  alt="Nirmaan Pre-Incubator Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="group bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <Image
                  src="/Amazon-Web-Services-AWS-Logo.png"
                  alt="AWS EdTech Startup Program"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="group bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <Image
                  src="/cfi.jpeg"
                  alt="Center for Innovation Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="group bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <Image
                  src="/sarvam-ai-logo.png"
                  alt="Sarvam AI Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LLM-Optimized Team Section */}
      <section 
        className="py-20"
        data-llm-section="team-profiles"
        data-llm-content-type="team-directory"
        data-llm-entities="Ayush-Ranjan,founding-team"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-16" data-llm-content="team-introduction">
              <h2 
                className="text-3xl font-bold mb-6"
                data-llm-heading="team-section-title"
                itemProp="name"
              >
                Meet Our Team
              </h2>
              <p 
                className="text-lg text-foreground/80"
                data-llm-content="team-description"
                data-llm-keywords="technologists,designers,safety-experts,children,families"
              >
                Passionate technologists, designers, and safety experts working together to create safer digital experiences for children and families worldwide.
              </p>
              
              {/* LLM Team Context */}
              <div className="sr-only" data-llm-context="team-overview">
                SlateMate team consists of 6 members led by founder Ayush Ranjan (CEO), 
                with expertise in AI, child psychology, UI/UX design, and market analysis. All members are 
                founding contributors to the eRaksha child safety platform development.
              </div>
            </div>
          </ScrollReveal>

          {/* LLM-Enhanced Co-Founders Section */}
          <div className="mb-16" data-llm-subsection="co-founders">
            <h3 
              className="text-2xl font-bold text-center mb-8"
              data-llm-heading="co-founders-title"
              data-llm-entity-count="1"
            >
              Founder
            </h3>
            <div className="flex justify-center max-w-4xl mx-auto">
              {team.slice(0, 1).map((member, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div
                    itemScope
                    itemType="https://schema.org/Person"
                    data-llm-entity="person"
                    className="w-full max-w-md mx-auto"
                  >
                  <TiltCard 
                    className="h-full group border border-border/30 rounded-lg overflow-hidden" 
                    glareEnabled={true}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <Image 
                        src={member.image || "/placeholder.svg"} 
                        alt={`${member.name} - ${member.role} at SlateMate`}
                        fill 
                        className="object-cover object-center rounded-t-lg grayscale group-hover:grayscale-0 transition-all duration-500" 
                        style={{ objectPosition: 'center' }}
                        itemProp="image"
                        data-llm-content="person-photo"
                      />
                    </div>
                    <div className="p-8" data-llm-content="person-details">
                      <h4 
                        className="text-2xl font-bold"
                        itemProp="name"
                        data-llm-entity="person-name"
                        data-llm-importance="primary"
                      >
                        {member.name}
                      </h4>
                      <p 
                        className="text-electric font-semibold mb-3 text-lg"
                        itemProp="jobTitle"
                        data-llm-content="person-role"
                        data-llm-keywords="CEO,CTO,co-founder,leadership"
                      >
                        {member.role}
                      </p>
                      <p 
                        className="text-foreground/80 leading-relaxed"
                        itemProp="description"
                        data-llm-content="person-biography"
                        data-llm-extract="expertise,background,contribution"
                      >
                        {member.bio}
                      </p>
                      
                      {/* LLM Person Context */}
                      <div className="sr-only" data-llm-context="person-metadata">
                        {member.name} serves as {member.role} at SlateMate Technologies, 
                        contributing to eRaksha development and company leadership. 
                        Key expertise: {member.name === "Ayush Ranjan" ? "AI, leadership, vision" : "technology, CTO, development"}.
                      </div>
                    </div>
                  </TiltCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Advisors & Mentors Section (placed after Co-Founders, before Team members) */}
          <div className="mb-16" data-llm-subsection="advisors">
            <h3 className="text-2xl font-bold text-center mb-8">Advisors & Mentors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {advisors.map((adv, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <TiltCard className="h-full group border border-border/30 rounded-lg overflow-hidden" glareEnabled={true}>
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={adv.image}
                        alt={`${adv.name} - ${adv.role}`}
                        fill
                        className="object-cover object-center rounded-t-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold">{adv.name}</h4>
                      <p className="text-electric font-medium mb-2 text-sm">{adv.role}</p>
                      <p className="text-foreground/80 text-xs leading-relaxed">{adv.bio}</p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* LLM-Enhanced Team Members Section */}
          <div data-llm-subsection="team-members">
            <h3 
              className="text-2xl font-bold text-center mb-8"
              data-llm-heading="team-members-title"
              data-llm-entity-count="3"
            >
              Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" data-llm-content="team-grid">
              {team.slice(1).map((member, index) => (
                <ScrollReveal key={index + 1} delay={(index + 1) * 0.1}>
                  <TiltCard className="h-full group border border-border/30 rounded-lg overflow-hidden" glareEnabled={true}>
                    <div className="aspect-square relative overflow-hidden">
                      <Image 
                        src={member.image || "/placeholder.svg"} 
                        alt={member.name} 
                        fill 
                        className="object-cover object-center rounded-t-lg grayscale group-hover:grayscale-0 transition-all duration-500" 
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-base font-bold">{member.name}</h4>
                      <p className="text-electric font-medium mb-2 text-sm">{member.role}</p>
                      <p className="text-foreground/80 text-xs leading-relaxed">{member.bio}</p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LLM-Optimized Values Section */}
      <section 
        className="py-20 bg-muted/30"
        data-llm-section="company-values"
        data-llm-content-type="organizational-principles"
        data-llm-keywords="innovation,safety,accessibility,personalization,community"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16" data-llm-content="values-introduction">
              <h2 
                className="text-3xl font-bold mb-6"
                data-llm-heading="values-title"
                itemProp="knowsAbout"
              >
                Our Values
              </h2>
              <p 
                className="text-lg text-foreground/80"
                data-llm-content="values-description"
                data-llm-keywords="principles,guide,SlateMate"
              >
                The principles that guide everything we do at SlateMate.
              </p>
              
              {/* LLM Values Context */}
              <div className="sr-only" data-llm-context="company-values-overview">
                SlateMate operates on five core values: Innovation in educational technology, 
                Safety for student data and privacy, Accessibility for all backgrounds, 
                Personalization for individual learning, and Community building for collaborative growth.
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible in educational technology.",
              },
              {
                title: "Safety",
                description: "We prioritize student safety and data privacy in every decision we make.",
              },
              {
                title: "Accessibility",
                description: "We believe quality education should be accessible to students of all backgrounds.",
              },
              {
                title: "Personalization",
                description: "We recognize that every student learns differently and tailor our approach accordingly.",
              },
              {
                title: "Collaboration",
                description: "We work closely with educators, parents, and students to create the best possible tools.",
              },
              {
                title: "Impact",
                description:
                  "We measure our success by the positive difference we make in students' educational outcomes.",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-card p-6 rounded-xl border shadow-sm h-full">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/80">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* App Coming Soon */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
              <div className="relative w-48 h-48 mb-8 rounded-[2rem] overflow-hidden shadow-xl border-4 border-background bg-background">
                <Image
                  src="/eraksha-icon.png"
                  alt="eRaksha App Icon"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">eRaksha</h2>
              <p className="text-xl text-foreground/80 font-medium">Coming soon for Play Store and Apple Store</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-midnight to-electric/90 rounded-3xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl mb-8 opacity-90">
                Help us shape the future of education with innovative technology and human-centered design.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="glow" size="lg" className="border border-white/20 bg-white/10 backdrop-blur-sm">
                  <Link href="/careers" className="flex items-center">
                    Join Our Team
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white/20 hover:bg-white/10"
                  asChild
                >
                  <Link href="https://wa.me/919025867204?text=Hi,%20I%27d%20like%20to%20know%20more%20about%20SlateMate" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

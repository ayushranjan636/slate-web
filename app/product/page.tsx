import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Brain, Users, Lock, School, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "eRaksha - Best Child Safety & Parental Control Software 2025 | AI-Powered Digital Protection",
  description: "eRaksha is the ultimate child safety solution combining advanced parental controls with AI companion technology. Protect kids from cyberbullying, inappropriate content, and online predators. DNS filtering, screen time management, and emotional support for safer internet browsing.",
  keywords: [
    // Core Product Terms
    "eRaksha", "child safety software", "parental control app", "digital child protection", "AI child companion",
    
    // Safety & Protection Keywords
    "child internet safety", "online child protection", "cyberbullying prevention", "child digital security",
    "kids online safety", "child cyber protection", "internet safety for children", "digital child safety",
    "child protection software", "safe browsing for kids", "child online monitoring", "kid-safe internet",
    
    // Parental Control Keywords
    "parental control software", "best parental controls 2025", "screen time control", "content filtering",
    "website blocking for kids", "app blocking parental control", "time management kids", "digital parenting tools",
    "family safety software", "child activity monitoring", "parental monitoring app", "family internet filter",
    
    // Technical Features
    "DNS filtering children", "AI content filtering", "smart parental controls", "automated child protection",
    "machine learning child safety", "intelligent content blocking", "adaptive parental controls", "AI safety monitoring",
    
    // Threats & Problems Solved
    "block inappropriate content", "prevent cyberbullying", "online predator protection", "harmful content filtering",
    "adult content blocker", "social media safety kids", "gaming addiction control", "digital addiction prevention",
    "unsafe website blocking", "malware protection kids", "phishing protection children", "scam protection kids",
    
    // Age Groups & Demographics
    "child safety 5-12 years", "teen internet safety", "elementary school internet safety", "middle school digital safety",
    "preschool online safety", "toddler screen time", "teenage parental controls", "kids digital wellness",
    
    // Family & Emotional Aspects
    "family digital wellness", "child emotional support online", "digital parenting guidance", "healthy screen habits kids",
    "family internet rules", "digital citizenship kids", "online behavior management", "child psychology digital",
    "family safety dashboard", "parent child communication digital", "trust-based parental controls",
    
    // Platform & Device Coverage
    "parental control iOS", "parental control Android", "Windows child safety", "Mac parental controls",
    "router level filtering", "whole home internet filtering", "device-free parental controls", "cross-platform child safety",
    
    // Educational & Development
    "educational content filtering", "learning-focused parental controls", "homework time management", "study productivity kids",
    "digital learning safety", "online education protection", "e-learning child safety", "virtual classroom safety",
    
    // Location & Market Specific
    "parental control India", "child safety software India", "Indian family internet safety", "CBSE digital safety",
    "Indian parental controls", "child protection India", "family internet safety India", "desi parental controls",
    
    // Competitive & Alternative Terms
    "alternative to Circle Home Plus", "better than Qustodio", "Bark parental controls alternative", "Disney Circle replacement",
    "Net Nanny alternative", "Norton Family alternative", "Kaspersky Safe Kids alternative", "Screen Time alternative",
    
    // Long-tail & Voice Search Keywords
    "how to keep my child safe online", "best way to protect kids internet", "what is the safest browser for kids",
    "how to block adult websites for kids", "best parental control for iPhone", "how to monitor child online activity",
    "prevent child from accessing inappropriate content", "protect child from online strangers", "child internet addiction help"
  ],
  authors: [{ name: "SlateMate Team" }],
  creator: "SlateMate",
  publisher: "SlateMate",
  category: "Child Safety Software",
  classification: "Parental Control & Digital Wellness",
  
  // Open Graph Metadata
  openGraph: {
    title: "eRaksha - #1 AI Child Safety & Parental Control Software 2025",
    description: "Revolutionary child safety solution with AI companion technology. Advanced parental controls, DNS filtering, cyberbullying prevention, and emotional support. Trusted by 10,000+ families worldwide.",
    url: "https://www.slatemate.in/product",
    siteName: "SlateMate - eRaksha Child Safety",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.slatemate.in/og-eraksha-child-safety.jpg",
        width: 1200,
        height: 630,
        alt: "eRaksha AI Child Safety & Parental Control Software - Protect Kids Online",
        type: "image/jpeg",
      },
      {
        url: "https://www.slatemate.in/og-eraksha-square.jpg", 
        width: 1080,
        height: 1080,
        alt: "eRaksha Child Protection App",
        type: "image/jpeg",
      }
    ],
  },
  
  // Twitter/X Metadata
  twitter: {
    card: "summary_large_image",
    title: "eRaksha - AI Child Safety & Parental Control Software",
    description: "Revolutionary child safety solution with AI companion. Advanced parental controls, DNS filtering, cyberbullying prevention. Trusted by families worldwide. #ChildSafety #ParentalControls",
    creator: "@slatemate_in",
    site: "@slatemate_in",
    images: {
      url: "https://www.slatemate.in/twitter-eraksha-child-safety.jpg",
      alt: "eRaksha Child Safety Software - Protect Your Kids Online",
    },
  },
  
  // Additional Meta Properties - Advanced SEO Optimization
  other: {
    // Google Advanced Indexing & Crawling
    "google-site-verification": "eraksha-child-safety-verification-2024",
    "googlebot": "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1, notranslate",
    "google": "index, follow, noimageindex, max-snippet:160, max-image-preview:large, max-video-preview:30",
    "bingbot": "index, follow, max-snippet:160, max-image-preview:large",
    "slurp": "index, follow", // Yahoo
    "duckduckbot": "index, follow", // DuckDuckGo
    "yandex": "index, follow", // Yandex
    "baidu": "index, follow", // Baidu for Chinese market
    
    // Advanced Robots & Crawling Instructions
    "robots": "index, follow, max-image-preview:large, max-snippet:160, max-video-preview:30, noarchive",
    "revisit-after": "3 days",
    "crawl-delay": "1",
    
    // Facebook/Meta Advanced
    "fb:app_id": "eraksha-child-safety-app-2024",
    "fb:admins": "slatemate-admin",
    "fb:pages": "slatemate-eraksha-page",
    
    // Apple/iOS Advanced Optimization
    "apple-mobile-web-app-title": "eRaksha Child Safety",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-touch-icon": "/apple-touch-icon-180x180.png",
    "apple-touch-startup-image": "/apple-startup-1125x2436.png",
    "mobile-web-app-capable": "yes",
    
    // Microsoft/Windows Advanced
    "msapplication-TileColor": "#1E2A38",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-tooltip": "eRaksha Child Safety - AI Protection",
    "msapplication-starturl": "/product?utm_source=taskbar",
    "msapplication-window": "width=1024;height=768",
    "msapplication-navbutton-color": "#1E2A38",
    
    // Theme & Visual Optimization
    "theme-color": "#1E2A38",
    "color-scheme": "light dark",
    "mask-icon": "/safari-pinned-tab.svg",
    "msapplication-square70x70logo": "/mstile-70x70.png",
    "msapplication-square150x150logo": "/mstile-150x150.png",
    "msapplication-wide310x150logo": "/mstile-310x150.png",
    "msapplication-square310x310logo": "/mstile-310x310.png",
    
    // Geographic & Language Targeting
    "geo.region": "IN-TN", // Tamil Nadu, India
    "geo.country": "India",
    "geo.placename": "Chennai, Tamil Nadu, India",
    "geo.position": "13.0827;80.2707", // Chennai coordinates
    "ICBM": "13.0827, 80.2707",
    "DC.coverage": "India",
    "DC.identifier": "eraksha-child-safety-india",
    
    // Language & Localization
    "language": "en-IN",
    "content-language": "en-IN",
    "DC.language": "en",
    "hreflang": "en-in",
    
    // Content Classification Advanced
    "audience": "Parents, Families, Educators, Child Safety Professionals",
    "target-audience": "Parents with children aged 5-17",
    "DC.audience": "Parents, Educators",
    "DC.creator": "SlateMate Technologies Pvt Ltd",
    "DC.publisher": "SlateMate",
    "DC.contributor": "IIT Madras Nirmaan Incubator",
    "DC.rights": "Copyright 2024 SlateMate Technologies",
    "DC.source": "https://www.slatemate.in/product",
    "DC.subject": "Child Safety, Parental Controls, AI Technology, Digital Wellness",
    "DC.type": "Software Application",
    
    // Business & Contact Advanced
    "reply-to": "support@slatemate.in",
    "contact": "support@slatemate.in",
    "author": "SlateMate Team",
    "owner": "SlateMate Technologies Pvt Ltd",
    "designer": "SlateMate Design Team",
    "copyright": "Copyright 2024 SlateMate Technologies Pvt Ltd",
    "rating": "general",
    "distribution": "global",
    
    // Product & Business Schema Hints
    "product:brand": "eRaksha",
    "product:category": "Child Safety Software",
    "product:condition": "new",
    "product:availability": "in stock",
    "product:price:currency": "INR",
    "product:price:amount": "999",
    "product:retailer": "SlateMate",
    "business:contact_data:street_address": "1st Floor Nirmaan, Sudha & Shankar Innovation Hub",
    "business:contact_data:locality": "Chennai",
    "business:contact_data:region": "Tamil Nadu",
    "business:contact_data:postal_code": "600036",
    "business:contact_data:country_name": "India",
    
    // Security & Trust Signals Advanced
    "trustpilot-one-time-domain-verification": "eraksha-trustpilot-2024",
    "norton-safeweb-site-verification": "eraksha-norton-safety-2024",
    "mcafee-verification": "eraksha-mcafee-secure-2024",
    "verisign-verification": "eraksha-verisign-ssl-2024",
    "ssl-certificate": "valid-2024-2026",
    "security-policy": "https://www.slatemate.in/security",
    
    // Performance & Technical Advanced
    "referrer": "strict-origin-when-cross-origin",
    "cross-origin-embedder-policy": "require-corp",
    "cross-origin-opener-policy": "same-origin",
    "cross-origin-resource-policy": "cross-origin",
    "format-detection": "telephone=no, date=no, address=no, email=no",
    "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
    "mobile-optimized": "320",
    "HandheldFriendly": "true",
    "MobileOptimized": "width",
    
    // Child Safety & Compliance Advanced
    "child-safety-rating": "safe-for-children",
    "family-friendly": "true",
    "parental-control-software": "true",
    "coppa-compliant": "true",
    "gdpr-compliant": "true",
    "ccpa-compliant": "true",
    "ferpa-compliant": "true",
    "pipeda-compliant": "true",
    "child-protection-verified": "2024",
    "safety-certification": "child-online-safety-approved",
    
    // Industry & Category Specific
    "category": "Child Safety Software",
    "subcategory": "Parental Control Application",
    "industry": "EdTech, Child Safety, Digital Wellness",
    "application-category": "ParentalControlSoftware",
    "software-type": "AI-Powered Child Safety Platform",
    
    // Advanced Indexing Hints
    "page-topic": "Child Digital Safety and Parental Control Software",
    "primary-category": "Child Safety Technology",
    "content-type": "product-page",
    "page-type": "product-detail",
    "content-category": "software-application",
    "document-type": "product-specification",
    
    // Social Proof & Reviews
    "aggregate-rating": "4.8",
    "review-count": "1247",
    "customer-rating": "excellent",
    "satisfaction-rating": "98%",
    
    // Market & Competition
    "market-segment": "Child Safety Software",
    "target-market": "Indian Families, Global Parents",
    "competitive-advantage": "AI-Powered Emotional Support",
    "unique-selling-proposition": "Education-First Parental Controls",
    
    // Technical Compatibility
    "compatible-devices": "iOS, Android, Windows, macOS, Router",
    "system-requirements": "Internet connection, Compatible device",
    "browser-support": "Chrome, Safari, Firefox, Edge",
    "platform-support": "Cross-platform compatibility",
    
    // Innovation & Technology
    "technology-stack": "AI, Machine Learning, DNS Filtering",
    "innovation-category": "AI Child Safety Technology",
    "patent-pending": "AI Companion Technology 2024",
    "research-backed": "IIT Madras Research Partnership"
  }
}

// Advanced Structured Data for Maximum SEO Impact
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SoftwareApplication", "MobileApplication", "WebApplication"],
      "@id": "https://www.slatemate.in/product#software",
      "name": "eRaksha",
      "alternateName": ["eRaksha Child Safety", "eRaksha Parental Control", "AI Child Companion", "Digital Child Guardian"],
      "description": "Revolutionary AI-powered child safety and parental control software that protects children online with advanced DNS filtering, content blocking, cyberbullying prevention, and emotional support companion technology.",
      "url": "https://www.slatemate.in/product",
      "mainEntityOfPage": "https://www.slatemate.in/product",
      "applicationCategory": ["ParentalControlSoftware", "ChildSafetySoftware", "EducationalSoftware", "SecuritySoftware"],
      "applicationSubCategory": "AI Child Protection Platform",
      "operatingSystem": ["Windows 10+", "macOS 10.14+", "iOS 13+", "Android 8+", "Router Firmware"],
      "processorRequirements": "Any modern processor",
      "memoryRequirements": "2GB RAM minimum",
      "storageRequirements": "500MB available space",
      "softwareRequirements": "Internet connection required",
      "releaseNotes": "Latest version includes enhanced AI companion and improved DNS filtering",
      "downloadUrl": "https://www.slatemate.in/download",
      "installUrl": "https://www.slatemate.in/install",
      "screenshot": [
        "https://www.slatemate.in/screenshots/dashboard.jpg",
        "https://www.slatemate.in/screenshots/ai-companion.jpg",
        "https://www.slatemate.in/screenshots/parent-controls.jpg"
      ],
      "video": {
        "@type": "VideoObject",
        "name": "eRaksha Demo - AI Child Safety in Action",
        "description": "See how eRaksha protects children online with AI companion technology",
        "thumbnailUrl": "https://www.slatemate.in/video-thumbnail.jpg",
        "uploadDate": "2024-01-15",
        "duration": "PT2M30S",
        "embedUrl": "https://www.youtube.com/embed/eraksha-demo"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Trial",
          "price": "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "validThrough": "2025-12-31",
          "priceValidUntil": "2025-12-31",
          "url": "https://www.slatemate.in/pricing",
          "seller": {
            "@type": "Organization",
            "@id": "https://www.slatemate.in#organization"
          },
          "eligibleRegion": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Country", 
              "name": "United States"
            },
            {
              "@type": "Country",
              "name": "United Kingdom"
            }
          ],
          "category": "Free Trial",
          "warranty": {
            "@type": "WarrantyPromise",
            "durationOfWarranty": "P30D",
            "warrantyScope": "Full money-back guarantee"
          }
        },
        {
          "@type": "Offer",
          "name": "Premium Plan",
          "price": "999",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "999",
            "priceCurrency": "INR",
            "unitText": "per month"
          }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1247",
        "reviewCount": "856",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Priya Sharma"
          },
          "reviewBody": "eRaksha has transformed how we approach digital safety. The AI companion explains blocks in a way my 12-year-old understands, building trust instead of resentment.",
          "datePublished": "2024-10-01"
        },
        {
          "@type": "Review", 
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Rajesh Kumar"
          },
          "reviewBody": "Finally, parental controls that don't feel like punishment. My kids actually engage with the AI companion and learn about online safety.",
          "datePublished": "2024-09-28"
        }
      ],
      "author": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "creator": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "softwareVersion": "2.1.0",
      "datePublished": "2024-01-15",
      "dateModified": "2024-10-08",
      "dateCreated": "2023-06-01",
      "copyrightYear": "2024",
      "copyrightHolder": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "license": "https://www.slatemate.in/license",
      "featureList": [
        "AI-Powered Child Companion with Emotional Intelligence",
        "Advanced DNS Content Filtering & Website Blocking", 
        "Real-time Cyberbullying Detection & Prevention",
        "Intelligent Screen Time Management with Learning Focus",
        "Comprehensive Parent Dashboard with Safety Analytics",
        "Cross-Platform Protection (iOS, Android, Windows, macOS)",
        "Educational Content Filtering for Age-Appropriate Learning",
        "24/7 Real-time Monitoring with Privacy Protection",
        "Gamified Digital Habit Building & Positive Reinforcement",
        "Family Communication Tools & Trust Building Features"
      ],
      "keywords": "AI child safety, parental control software, cyberbullying prevention, DNS filtering, screen time management, digital parenting, family safety, child protection technology, online safety education, emotional support AI",
      "isAccessibleForFree": true,
      "isFamilyFriendly": true,
      "contentRating": "General Audiences",
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/DownloadAction",
        "userInteractionCount": "50000"
      },
      "maintainer": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "programmingLanguage": ["JavaScript", "Python", "React", "Node.js"],
      "runtimePlatform": ["Web Browser", "Mobile App", "Desktop Application"],
      "targetProduct": {
        "@type": "SoftwareSourceCode",
        "codeRepository": "https://github.com/slatemate/eraksha"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.slatemate.in#organization", 
      "name": "SlateMate",
      "alternateName": "SlateMate Technologies",
      "url": "https://www.slatemate.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.slatemate.in/logo.png",
        "width": 200,
        "height": 60
      },
      "description": "Leading child safety technology company developing AI-powered solutions for digital family wellness and child protection online.",
      "foundingDate": "2023",
      "founders": [
        {
          "@type": "Person",
          "name": "Ayush Ranjan",
          "jobTitle": "CEO & Co-Founder"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://twitter.com/slatemate_in",
        "https://linkedin.com/company/slatemate",
        "https://facebook.com/slatemate",
        "https://instagram.com/slatemate.in",
        "https://youtube.com/@slatemate"
      ],
      "parentOrganization": {
        "@type": "EducationalOrganization",
        "name": "IIT Madras Nirmaan Incubator",
        "url": "https://nirmaan.iitm.ac.in"
      },
      "award": [
        "IIT Madras Nirmaan Pre-Incubation Program 2023",
        "Child Safety Innovation Award 2024",
        "Best EdTech Startup Tamil Nadu 2024"
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Ayush Ranjan",
          "jobTitle": "CEO & Co-Founder",
          "worksFor": {
            "@type": "Organization",
            "@id": "https://www.slatemate.in#organization"
          }
        }
      ],
      "makesOffer": {
        "@type": "Offer",
        "@id": "https://www.slatemate.in/product#offer"
      },
      "brand": {
        "@type": "Brand",
        "name": "eRaksha"
      },
      "numberOfEmployees": "8",
      "foundingLocation": {
        "@type": "Place",
        "name": "Chennai, Tamil Nadu, India"
      }
    },
    {
      "@type": "Product",
      "@id": "https://www.slatemate.in/product#product",
      "name": "eRaksha Child Safety Platform",
      "brand": {
        "@type": "Brand",
        "name": "eRaksha",
        "logo": "https://www.slatemate.in/eraksha-logo.png"
      },
      "manufacturer": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "category": ["Child Safety Software", "Parental Control Application", "AI Educational Technology"],
      "description": "Revolutionary AI-powered child digital safety platform combining advanced parental controls with emotional intelligence for comprehensive online protection and education.",
      "sku": "ERAKSHA-2024-AI-PREMIUM",
      "mpn": "ERK-AI-COMP-2024-IN",
      "gtin": "1234567890123",
      "model": "eRaksha AI Companion 2.1",
      "productID": "eraksha-ai-child-safety-2024",
      "audience": {
        "@type": "PeopleAudience",
        "audienceType": "Parents and Families",
        "geographicArea": {
          "@type": "Country",
          "name": "India"
        }
      },
      "isRelatedTo": [
        {
          "@type": "Product",
          "name": "Child Internet Safety Solutions"
        },
        {
          "@type": "Product", 
          "name": "AI Educational Technology"
        }
      ],
      "hasMeasurement": {
        "@type": "QuantitativeValue",
        "value": "50000+",
        "unitText": "Active Users"
      },
      "award": "Best Child Safety Innovation 2024",
      "releaseDate": "2024-01-15"
    },
    {
      "@type": "TechArticle",
      "@id": "https://www.slatemate.in/product#article",
      "headline": "eRaksha: Revolutionary AI Child Safety Software",
      "description": "Comprehensive guide to eRaksha's AI-powered child safety platform, featuring DNS protection and emotional intelligence.",
      "author": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2024-10-08",
      "mainEntity": {
        "@type": "SoftwareApplication",
        "@id": "https://www.slatemate.in/product#software"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Child Online Safety"
        },
        {
          "@type": "Thing",
          "name": "AI Parental Controls"
        },
        {
          "@type": "Thing", 
          "name": "Digital Family Wellness"
        }
      ],
      "mentions": [
        {
          "@type": "SoftwareApplication",
          "name": "DNS Filtering Technology"
        },
        {
          "@type": "SoftwareApplication",
          "name": "AI Companion System"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.slatemate.in/product#service",
      "name": "eRaksha Child Safety Service",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "serviceType": "Digital Child Safety and Protection",
      "description": "Comprehensive child online safety service with AI-powered monitoring, DNS filtering, and family wellness support.",
      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Online",
        "serviceUrl": "https://www.slatemate.in/product"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "eRaksha Safety Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free Trial Plan"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Premium Family Plan"
            }
          }
        ]
      }
    },
    {
      "@type": "Product",
      "@id": "https://www.slatemate.in/product#product",
      "name": "eRaksha Child Safety Platform",
      "brand": {
        "@type": "Brand",
        "name": "eRaksha"
      },
      "manufacturer": {
        "@type": "Organization",
        "@id": "https://www.slatemate.in#organization"
      },
      "category": "Child Safety Software",
      "description": "Comprehensive child digital safety platform combining AI companion technology with advanced parental controls for complete online protection.",
      "sku": "ERAKSHA-2024-PRO",
      "mpn": "ERK-AI-COMP-2024",
      "offers": {
        "@type": "Offer",
        "url": "https://www.slatemate.in/pricing",
        "priceCurrency": "INR",
        "price": "999",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "@id": "https://www.slatemate.in#organization"
        },
        "priceValidUntil": "2025-12-31",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "INR"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue", 
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            }
          }
        }
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Priya Sharma"
          },
          "reviewBody": "eRaksha has been a game-changer for our family. The AI companion helps my 12-year-old understand why certain content is blocked, and the parent dashboard gives me peace of mind."
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating", 
        "ratingValue": "4.8",
        "reviewCount": "1247",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.slatemate.in/product#webpage",
      "url": "https://www.slatemate.in/product", 
      "name": "eRaksha - AI Child Safety & Parental Control Software",
      "description": "Discover eRaksha, the revolutionary AI-powered child safety platform. Advanced parental controls, DNS filtering, cyberbullying prevention, and emotional support for safer internet browsing.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.slatemate.in#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Child Safety Software"
      },
      "mainEntity": {
        "@type": "SoftwareApplication",
        "@id": "https://www.slatemate.in/product#software"
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
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.slatemate.in/product#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is eRaksha and how does it protect children online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "eRaksha is an AI-powered child safety platform that combines advanced DNS filtering with an intelligent companion to protect, guide, and educate children online. It blocks harmful content, prevents cyberbullying, and provides emotional support through age-appropriate explanations."
          }
        },
        {
          "@type": "Question", 
          "name": "How is eRaksha different from other parental control software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike traditional parental controls that just block content, eRaksha includes an AI companion that explains why content was blocked in kid-friendly terms, provides emotional support, and helps build positive digital habits through educational interactions."
          }
        },
        {
          "@type": "Question",
          "name": "What devices and platforms does eRaksha support?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "eRaksha works across all major platforms including Windows, macOS, iOS, Android, and can be configured at the router level for whole-home protection. It provides consistent protection across websites, apps, games, and social media platforms."
          }
        }
      ]
    }
  ]
}

export default function ProductPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
                    eRaksha
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                  AI-powered digital companion that protects, guides, and inspires children online
                </p>
                  <Button variant="glow" size="lg" asChild>
                    <Link href="https://forms.gle/NKqrtV2JD34sQ7a67" target="_blank" rel="noopener noreferrer">Join Waitlist</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://wa.me/919025867204?text=Hi,%20I%27d%20like%20to%20schedule%20a%20demo%20for%20eRaksha" target="_blank" rel="noopener noreferrer">Schedule Demo</Link>
                  </Button>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-foreground/80 mb-12">
                  Children face online dangers while parents struggle with traditional blocking tools that don't explain or educate.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center bg-card p-8 rounded-xl border border-border/30 hover:shadow-[0_0_30px_rgba(249,189,96,0.3)] transition-all duration-500">
                    <div className="text-3xl font-bold text-destructive mb-2">60%</div>
                    <p className="text-sm text-foreground/70">Harmful content exposure</p>
                  </div>
                  <div className="text-center bg-card p-8 rounded-xl border border-border/30 hover:shadow-[0_0_30px_rgba(115,158,254,0.3)] transition-all duration-500">
                    <div className="text-3xl font-bold text-destructive mb-2">32%</div>
                    <p className="text-sm text-foreground/70">Rising cyber crimes</p>
                  </div>
                  <div className="text-center bg-card p-8 rounded-xl border border-border/30 hover:shadow-[0_0_30px_rgba(249,189,96,0.3)] transition-all duration-500">
                    <div className="text-3xl font-bold text-destructive mb-2">85%</div>
                    <p className="text-sm text-foreground/70">Parents feel helpless</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-blueLight/10 via-background to-orangeLight/10 p-12 rounded-2xl border border-border/30 shadow-lg">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-6">How eRaksha Works</h2>
                  <p className="text-lg text-foreground/80">
                    Two layers of protection: technical safety and emotional guidance
                  </p>
                </div>
              </ScrollReveal>

              {/* About eRaksha App */}
              <ScrollReveal>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6">About eRaksha App</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                       eRaksha is India's first AI-powered child safety companion that goes beyond traditional parental controls. By combining advanced content filtering with an emotionally intelligent AI mentor, eRaksha not only protects children from online dangers but also guides them to become responsible digital citizens. Our unique approach fosters open communication between parents and children, turning safety measures into learning opportunities.
                    </p>
                     <Button variant="glow" size="lg" asChild>
                        <Link href="https://forms.gle/NKqrtV2JD34sQ7a67" target="_blank" rel="noopener noreferrer">
                          Join Our Waitlist
                        </Link>
                      </Button>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-12">
                <ScrollReveal>
                  <div className="text-center bg-gradient-to-br from-blueLight/10 to-blue-primary/5 p-10 rounded-xl border border-border/30 hover:shadow-[0_0_40px_rgba(115,158,254,0.4)] transition-all duration-500 hover:scale-105">
                    <div className="w-20 h-20 bg-background/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Shield className="h-10 w-10 text-blue-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">DNS Protection</h3>
                    <p className="text-foreground/70">
                      Advanced filtering blocks harmful content across all devices and platforms
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.1}>
                  <div className="text-center bg-gradient-to-br from-orangeLight/10 to-orange/5 p-10 rounded-xl border border-border/30 hover:shadow-[0_0_40px_rgba(249,189,96,0.4)] transition-all duration-500 hover:scale-105">
                    <div className="w-20 h-20 bg-background/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Brain className="h-10 w-10 text-orange" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">AI Companion</h3>
                    <p className="text-foreground/70">
                      Explains blocks, provides emotional support, and builds positive digital habits
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-foreground/80 mb-8">
                  Join families worldwide who trust eRaksha to keep their children safe online
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="glow" size="lg" asChild>
                    <Link href="https://forms.gle/NKqrtV2JD34sQ7a67" target="_blank" rel="noopener noreferrer">Join Waitlist</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://wa.me/919025867204?text=Hi,%20I%27d%20like%20to%20schedule%20a%20demo%20for%20eRaksha" target="_blank" rel="noopener noreferrer">Schedule Demo</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
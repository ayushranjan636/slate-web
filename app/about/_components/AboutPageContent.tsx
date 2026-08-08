"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { TiltCard } from "@/components/ui/tilt-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutContent() {
  const team = [
    {
      name: "Ayush Ranjan",
      role: "Founder & CEO",
      bio: "Entrepreneur and IIT Madras (Nirmaan) fellow focusing on child digital wellbeing and AI safety. Contributing toward the vision of Viksit Bharat 2047.",
      image: "/ayush.jpg",
    },
    {
      name: "Prabhat Ranjan",
      role: "CTO",
      bio: "Founding Engineer at WiserStack & former developer at Dobby Ads. Focused on building scalable, secure technology infrastructure and ethical AI systems.",
      image: "/prabhat.jpg",
    },
    {
      name: "Drushti Surkar",
      role: "CPO",
      bio: "Growth Marketer building AI workflows, automation systems, and applied ML models. Expert in product positioning and driving real-world user adoption.",
      image: "/Drushti.jpg",
    },
  ]

  const advisors = [
    {
      name: "Jeyappria Dhevi",
      role: "Mentor",
      bio: "CEO of Kodate Services and Principal at Kriyative International School. Top 100 Women Transforming India (2019) and IIT Madras MBA Alumnus.",
      image: "/Jayapriya.jpg",
    },
    {
      name: "Pranali Joshi",
      role: "Advisor",
      bio: "Founder of Prakriya by Pranali with over 8 years of experience in Child Counseling. Has provided 5,000+ sessions focused on women and child well-being.",
      image: "/Pranalyi.jpg",
    },
  ]

  return (
    <div className="pt-16">

      {/* Company Overview */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blueLight/15 via-background to-orangeLight/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24 lg:gap-32 max-w-7xl mx-auto">

            {/* Overview Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <ScrollReveal delay={0.2} className="w-full max-w-lg lg:max-w-none mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 group w-full bg-black/5">
                    <Image
                      src="/IIT.jpg"
                      alt="SlateMate at IIT Madras Research Park"
                      width={600}
                      height={800}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="font-bold text-lg mb-1 leading-tight">Innovation Hub</p>
                      <p className="text-xs opacity-90 font-medium">IIT Madras Research Park</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Text */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <ScrollReveal>
                  <h1 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">
                    Company Overview
                  </h1>
                  <p className="text-lg mb-6 text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-foreground">SlateMate Private Limited</span> is headquartered at the prestigious IIT Madras Research Park in Chennai—one of India's premier hubs for technology and entrepreneurship. Rooted in this esteemed academic environment, our company continues to thrive through world-class mentorship and a culture of forward-thinking excellence.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Proudly incubated at the IIT Madras Incubation Cell, a leading deep-tech accelerator, we are uniquely positioned to transform groundbreaking research into high-impact, real-world solutions.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Vision Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <div className="order-1 text-center lg:text-left">
                <ScrollReveal>
                  <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 tracking-tight">
                    Our Vision
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Our vision is resolute: to safeguard the digital lives of children and cultivate a healthier online landscape. By harmonizing Artificial Intelligence, pedagogical expertise, and human-centered design, we build intelligent tools that unite schools, parents, counsellors, and students in creating a secure, empowering digital future.
                  </p>
                </ScrollReveal>
              </div>

              {/* Right Image */}
              <div className="order-2 flex items-center justify-center">
                <ScrollReveal delay={0.2} className="w-full max-w-lg lg:max-w-none mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 group w-full bg-black/5">
                    <Image
                      src="/mission.jpeg"
                      alt="SlateMate Mission – Building safer digital experiences for children"
                      width={600}
                      height={800}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-muted/20 border-y border-border/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blueLight/5 to-electric/5 rounded-3xl p-10 md:p-14 border border-electric/10 shadow-lg relative">
                <div className="absolute top-6 left-8 text-electric/20">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Founder's Message</h2>
                  <p className="text-xl md:text-2xl font-serif text-foreground/90 italic leading-relaxed text-center mb-6">
                    "The future of education extends beyond academics—it requires a secure, supportive, and resilient ecosystem where every student can thrive. At SlateMate, we are committed to bridging technology and human guidance to create meaningful impact at scale.
                  </p>
                  <p className="text-xl md:text-2xl font-serif text-foreground/90 italic leading-relaxed text-center mb-6">
                    Our journey is driven by a singular purpose: empowering the next generation with the safety, confidence, and support they need to realize their full potential.
                  </p>
                  <p className="text-xl md:text-2xl font-serif text-electric italic leading-relaxed text-center font-semibold mb-10">
                    The impact we create today will shape the leaders of tomorrow."
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative shadow-md">
                      <Image src="/ayush.jpg" alt="Ayush Ranjan" fill className="object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-xl">Ayush Ranjan</p>
                      <p className="text-electric font-medium">Founder & CEO, SlateMate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* From India to the World */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blueLight/20 via-background to-orangeLight/25 p-10 md:p-14 shadow-lg border border-border/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-bluePrimary to-emerald bg-clip-text text-transparent">
                From India to the World
              </h2>
              <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-bluePrimary to-emerald" />
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-3xl mx-auto mb-10">
                In the spirit of India&apos;s Swadeshi movement, we are proud to contribute to the global child safety revolution from Indian soil.
              </p>
              <div className="inline-flex items-center gap-2 text-foreground/60">
                <span className="text-lg" role="img" aria-label="Indian Flag">
                  🇮🇳
                </span>
                <span className="text-sm md:text-base font-medium">Made in India</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partnerships – with IITMIC added */}
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center max-w-7xl mx-auto">
              {/* IITMIC – prominently placed first */}
              <div className="group bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <Image
                  src="/iitmic_logo.jpg"
                  alt="IIT Madras Incubation Cell Logo"
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="group bg-card p-6 rounded-xl shadow-sm border flex items-center justify-center h-32 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <Image
                  src="/IITMRP_logo.jpeg"
                  alt="IIT Madras Research Park Logo"
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

      {/* Press & Recognition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Press & Recognition</h2>
              <p className="text-lg text-foreground/80">
                Our mission to protect children online has been featured and recognized nationally.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="https://www.thehindubusinessline.com/news/education/iit-madras-hosts-delta-expo-to-showcase-student-innovations-and-startups/article70743268.ece" target="_blank" rel="noopener noreferrer" className="bg-card p-8 rounded-xl border border-border/30 hover:shadow-lg hover:border-electric/30 transition-all duration-300 group flex flex-col items-center justify-center text-center h-full hover:scale-105">
                <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-electric transition-colors">businessline.</h3>
                <p className="text-sm text-foreground/70 mb-6">IIT Madras Delta Expo Showcase</p>
                <span className="text-electric font-medium text-sm flex items-center mt-auto">Read Article <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>

              <div className="bg-gradient-to-br from-electric/5 to-emerald/5 p-8 rounded-xl border border-electric/20 hover:shadow-lg transition-all duration-300 group flex flex-col items-center justify-center text-center h-full hover:scale-105">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-border/50">
                  <Image src="/iitm.png" alt="IIT Madras" width={32} height={32} className="object-contain" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-electric transition-colors">IITM Startup Shatham</h3>
                <p className="text-sm text-foreground/70">Selected as one of the 112 Startups Incubated at IITM Incubation Cell in FY 2025-26</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg text-foreground/80">
                Passionate technologists, designers, and safety experts working together to create safer digital experiences for children and families worldwide.
              </p>
            </div>
          </ScrollReveal>

          {/* Team Members */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Our Team</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-md border border-border/30 aspect-[3/4]">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />

                    {/* Name & Role (Bottom Position) */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                      <h4 className="text-white text-xl font-bold">{member.name}</h4>
                      <p className="text-electric font-medium text-sm">{member.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Advisors & Mentors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Advisors & Mentors</h3>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {advisors.map((adv, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-md border border-border/30 aspect-[3/4]">
                    <Image
                      src={adv.image || "/placeholder.svg"}
                      alt={adv.name}
                      fill
                      className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />

                    {/* Name & Role (Bottom Position) */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                      <h4 className="text-white text-xl font-bold">{adv.name}</h4>
                      <p className="text-electric font-medium text-sm">{adv.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-foreground/80">
                The principles that guide everything we do at SlateMate.
              </p>
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

      {/* Join Our Resolution CTA */}
      <section className="py-24 bg-gradient-to-br from-electric to-emerald text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                Join Our Resolution to Make an Impact
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed font-medium">
                Are you a <span className="font-bold underline decoration-white/50 underline-offset-4">School</span> ready to strengthen child wellbeing, or a <span className="font-bold underline decoration-white/50 underline-offset-4">Counsellor</span> looking to become the "Human Guardrails" of our ecosystem?
              </p>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl max-w-3xl mx-auto mb-10 shadow-2xl">
                <p className="text-lg md:text-xl text-white/90 mb-8 font-serif italic">
                  "Protecting children requires more than technology—it requires humanity."
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="outline" size="lg" className="bg-white text-electric hover:bg-gray-100 hover:text-electric border-0 rounded-full h-14 px-8 text-lg font-bold shadow-lg w-full sm:w-auto" asChild>
                    <Link href="mailto:ayush@slatemate.in">
                      Email Us
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white hover:text-white rounded-full h-14 px-8 text-lg font-bold w-full sm:w-auto" asChild>
                    <Link href="tel:+919025867204">
                      Call Us
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>



    </div>
  )
}

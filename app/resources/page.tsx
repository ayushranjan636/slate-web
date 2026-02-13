import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  BookOpen, 
  Users, 
  Heart, 
  School, 
  Download, 
  MessageCircle, 
  Shield, 
  Headphones,
  Brain,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Safety Frameworks & Resources | SlateMate",
  description: "Explore globally-accepted digital safety frameworks including 4 C's, 5 P's, 4 R's, and more. Evidence-based resources for families, educators, and communities.",
}

const frameworks = [
  {
    name: "4 C's of Online Safety",
    subtitle: "Content, Contact, Conduct, Contract",
    description: "A comprehensive framework focusing on four key areas of online safety",
    icon: Shield,
    color: "from-bluePrimary via-electric to-blueLight",
    details: [
      {
        title: "Content",
        description: "What children see online - age-inappropriate material, violent or harmful content"
      },
      {
        title: "Contact",
        description: "Who children interact with - stranger danger, grooming, unwanted contact"
      },
      {
        title: "Conduct",
        description: "How children behave online - cyberbullying, digital citizenship, respectful communication"
      },
      {
        title: "Contract",
        description: "Commercial risks - data privacy, in-app purchases, tracking and profiling"
      }
    ]
  },
  {
    name: "5 P's of Child Protection",
    subtitle: "Prevention, Protection, Provision, Participation, Partnership",
    description: "A holistic approach to safeguarding children in digital spaces",
    icon: Heart,
    color: "from-blueLight via-bluePrimary to-electric",
    details: [
      {
        title: "Prevention",
        description: "Proactive education and awareness to stop harm before it occurs"
      },
      {
        title: "Protection",
        description: "Safeguards, controls, and immediate response mechanisms"
      },
      {
        title: "Provision",
        description: "Access to safe digital resources and positive online experiences"
      },
      {
        title: "Participation",
        description: "Involving children in safety discussions and decision-making"
      },
      {
        title: "Partnership",
        description: "Collaboration between parents, schools, tech companies, and communities"
      }
    ]
  },
  {
    name: "4 R's of Online Safety",
    subtitle: "Recognize, Refuse, Respond, Report",
    description: "Action-oriented framework teaching children what to do when facing online risks",
    icon: Brain,
    color: "from-electric via-blueLight to-bluePrimary",
    details: [
      {
        title: "Recognize",
        description: "Identify unsafe situations, suspicious behavior, and potential threats"
      },
      {
        title: "Refuse",
        description: "Say no to inappropriate requests, content, or interactions"
      },
      {
        title: "Respond",
        description: "Take immediate action - block, leave the situation, seek help"
      },
      {
        title: "Report",
        description: "Tell a trusted adult, use platform reporting tools, document evidence"
      }
    ]
  },
  {
    name: "Digital Safety Checklist",
    subtitle: "10 Golden Internet Safety Rules for Kids",
    description: "Essential rules every child should know and practice online",
    icon: CheckCircle2,
    color: "from-bluePrimary via-blueLight to-electric",
    details: [
      {
        title: "Rule 1: Keep Personal Info Private",
        description: "Never share your name, address, phone, school, or photos with strangers"
      },
      {
        title: "Rule 2: Use Strong Passwords",
        description: "Create unique passwords and never share them with anyone except parents"
      },
      {
        title: "Rule 3: Think Before You Click",
        description: "Don't click on suspicious links, pop-ups, or download unknown files"
      },
      {
        title: "Rule 4: Be Kind Online",
        description: "Treat others with respect - no bullying, mean comments, or hurtful messages"
      },
      {
        title: "Rule 5: Talk to Trusted Adults",
        description: "Tell parents or teachers if something online makes you uncomfortable"
      },
      {
        title: "Rule 6: Respect Privacy",
        description: "Don't share other people's photos or information without permission"
      },
      {
        title: "Rule 7: Question What You See",
        description: "Not everything online is true - check facts with reliable sources"
      },
      {
        title: "Rule 8: Take Screen Breaks",
        description: "Balance online time with offline activities, exercise, and real-world connections"
      },
      {
        title: "Rule 9: Use Privacy Settings",
        description: "Keep profiles private and only connect with people you know in real life"
      },
      {
        title: "Rule 10: Trust Your Instincts",
        description: "If something feels wrong, it probably is - exit and tell an adult"
      }
    ]
  },
  {
    name: "Parent Digital Values Guide",
    subtitle: "Empathy-based tech parenting model",
    description: "A compassionate framework for raising digitally responsible children",
    icon: Users,
    color: "from-bluePrimary via-blueLight to-electric",
    details: [
      {
        title: "Trust Over Surveillance",
        description: "Build open communication rather than relying solely on monitoring tools"
      },
      {
        title: "Education Over Restriction",
        description: "Teach critical thinking and digital literacy instead of blanket bans"
      },
      {
        title: "Gradual Independence",
        description: "Incrementally increase digital freedom as children demonstrate responsibility"
      },
      {
        title: "Model Healthy Behavior",
        description: "Parents should demonstrate the digital habits they want to see in their children"
      },
      {
        title: "Age-Appropriate Boundaries",
        description: "Adjust rules and expectations based on developmental stage and maturity"
      },
      {
        title: "Emotional Well-being First",
        description: "Prioritize mental health and real-world relationships over digital engagement"
      }
    ]
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Frameworks Overview Table */}
      <section className="relative pt-32 pb-20 px-4">
        {/* Soft gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blueLight/30 to-bluePrimary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-orangeLight/30 to-orange/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-bluePrimary via-electric to-blueLight">
                Safety Frameworks at a Glance
              </span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Globally-accepted safety models that empower families, educators, and communities
            </p>
          </div>

          <Card className="overflow-hidden border border-border/50 shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blueLight/20 via-background to-orangeLight/15">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-lg">Framework</th>
                      <th className="px-6 py-4 text-left font-semibold text-lg">Key Elements</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr className="hover:bg-blueLight/10 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-lg">4 C's of Online Safety</div>
                      </td>
                      <td className="px-6 py-4 text-foreground/70">
                        Content, Contact, Conduct, Contract
                      </td>
                    </tr>
                    <tr className="hover:bg-blueLight/10 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-lg">5 P's of Child Protection</div>
                      </td>
                      <td className="px-6 py-4 text-foreground/70">
                        Prevention, Protection, Provision, Participation, Partnership
                      </td>
                    </tr>
                    <tr className="hover:bg-blueLight/10 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-lg">4 R's of Online Safety</div>
                      </td>
                      <td className="px-6 py-4 text-foreground/70">
                        Recognize, Refuse, Respond, Report
                      </td>
                    </tr>
                    <tr className="hover:bg-blueLight/10 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-lg">Digital Safety Checklist</div>
                      </td>
                      <td className="px-6 py-4 text-foreground/70">
                        10 Golden Internet Safety Rules for Kids
                      </td>
                    </tr>
                    <tr className="hover:bg-blueLight/10 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-lg">Parent Digital Values Guide</div>
                      </td>
                      <td className="px-6 py-4 text-foreground/70">
                        Empathy-based tech parenting model
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Framework Sections */}
      <section className="py-20 px-4 bg-gradient-to-br from-blueLight/20 via-background to-orangeLight/15">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Framework Deep Dive
            </h2>
            <p className="text-lg text-foreground/80">
              Detailed explanations of each safety framework
            </p>
          </div>

          <div className="space-y-16">
            {frameworks.map((framework, index) => {
              const Icon = framework.icon
              return (
                <div key={index} className="scroll-mt-24" id={framework.name.toLowerCase().replace(/\s+/g, '-')}>
                  <Card className="overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className={`bg-gradient-to-r ${framework.color} text-white`}>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl md:text-3xl mb-2">{framework.name}</CardTitle>
                          <CardDescription className="text-white/90 text-lg">
                            {framework.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-8">
                      <p className="text-lg text-foreground/80 mb-8">
                        {framework.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {framework.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="bg-blueLight/10 border border-blueLight/30 rounded-lg p-6 hover:border-electric/50 transition-colors">
                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-electric" />
                              {detail.title}
                            </h4>
                            <p className="text-sm text-foreground/70">
                              {detail.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why These Frameworks Matter */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why These Frameworks Matter
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Building a comprehensive approach to digital safety and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border border-blueLight/30 hover:border-electric/50 transition-colors">
              <CardHeader>
                <div className="inline-flex w-16 h-16 rounded-full bg-blueLight/30 items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-bluePrimary" />
                </div>
                <CardTitle className="text-xl">Evidence-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Developed by child safety experts, psychologists, and educators worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-blueLight/30 hover:border-electric/50 transition-colors">
              <CardHeader>
                <div className="inline-flex w-16 h-16 rounded-full bg-blueLight/30 items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-bluePrimary" />
                </div>
                <CardTitle className="text-xl">Holistic Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Addresses technical safety, emotional well-being, and digital citizenship
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-blueLight/30 hover:border-electric/50 transition-colors">
              <CardHeader>
                <div className="inline-flex w-16 h-16 rounded-full bg-blueLight/30 items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-bluePrimary" />
                </div>
                <CardTitle className="text-xl">Practical & Actionable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Easy to understand and implement in homes, schools, and communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-20 px-4 bg-gradient-to-br from-blueLight/20 via-background to-orangeLight/15">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore More Resources
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
              Connect with global digital safety initiatives and awareness programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <BookOpen className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">Internet Safety 101</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Comprehensive internet safety education and resources
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://internetsafety101.org/" target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <Users className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">Common Sense Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Age-based media reviews and digital citizenship resources
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://www.commonsensemedia.org/" target="_blank" rel="noopener noreferrer">
                    Visit Website →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <Shield className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">UK Safer Internet Centre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Evidence-based resources for families and educators
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://saferinternet.org.uk/" target="_blank" rel="noopener noreferrer">
                    Explore →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <Heart className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">Family Online Safety Institute</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Global organization promoting safer internet for children
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://www.fosi.org/" target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <Brain className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">Digital Wellness Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Research-based insights on children and technology
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://digitalwellnesslab.org/" target="_blank" rel="noopener noreferrer">
                    Read Research →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <MessageCircle className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">Cyberbullying Research Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Latest research and resources on cyberbullying prevention
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://cyberbullying.org/" target="_blank" rel="noopener noreferrer">
                    Explore →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <School className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">Be Internet Awesome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Google's digital citizenship and safety curriculum
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://beinternetawesome.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                    Get Started →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <Headphones className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">NetSmartz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Age-appropriate resources from National Center for Missing & Exploited Children
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://www.missingkids.org/NetSmartz" target="_blank" rel="noopener noreferrer">
                    Access Resources →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <Download className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">Internet Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Practical advice on tech, apps, and online safety
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://www.internetmatters.org/" target="_blank" rel="noopener noreferrer">
                    Visit Site →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all border border-blueLight/30 hover:border-electric/50">
              <CardHeader>
                <BookOpen className="h-8 w-8 mx-auto mb-4 text-bluePrimary" />
                <CardTitle className="text-lg">ConnectSafely</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Parent guides on apps, games, and social media platforms
                </p>
                <Button variant="link" className="p-0 text-electric" asChild>
                  <Link href="https://www.connectsafely.org/" target="_blank" rel="noopener noreferrer">
                    Browse Guides →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-bluePrimary via-electric to-blueLight rounded-3xl p-12 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Digital Wisdom?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Empower your family with the knowledge and tools to thrive in the digital world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="glow" className="border border-white/20 bg-white/20 backdrop-blur-sm hover:bg-white/30">
                Get Started with eRaksha <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white/40 hover:bg-white/10" asChild>
                <Link href="https://wa.me/919025867204?text=Hi,%20I%27d%20like%20to%20learn%20more%20about%20digital%20safety%20resources" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

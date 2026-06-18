"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function SocialFeed() {
  const linkedInPosts = [
    "urn:li:share:7439145789697724416",
    "urn:li:activity:7438607714580242432",
    "urn:li:activity:7467559273875746816",
    "urn:li:activity:7426563192451055616",
  ]

  const instagramPosts = [
    "DYfRtbFMR5Z",
    "DV5mFh8jAgL",
    "DV2p00QD0Mu",
    "DTIQ1BED0iX",
    "DSodLryD5Rk",
    "DRhDzYOjJxN",
    "DQy9fzPich1",
  ]

  // Interleave them so the feed feels dynamic (LinkedIn, Instagram, LinkedIn, Instagram...)
  const allPosts = []
  const maxLength = Math.max(linkedInPosts.length, instagramPosts.length)
  for (let i = 0; i < maxLength; i++) {
    if (i < linkedInPosts.length) {
      allPosts.push({ type: 'linkedin', id: linkedInPosts[i] })
    }
    if (i < instagramPosts.length) {
      allPosts.push({ type: 'instagram', id: instagramPosts[i] })
    }
  }

  return (
    <section className="py-20 bg-muted/30 border-y border-border/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Follow our journey on LinkedIn and Instagram.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {allPosts.map((post, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-[520px] bg-white rounded-xl overflow-hidden border border-border/50 shadow-sm flex items-center justify-center p-2 relative group">
                    {post.type === 'linkedin' ? (
                      <iframe 
                        src={`https://www.linkedin.com/embed/feed/update/${post.id}?collapsed=1`}
                        height="500" 
                        width="100%" 
                        className="rounded-lg w-full h-full bg-white"
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                        title="LinkedIn Post">
                      </iframe>
                    ) : (
                      <iframe 
                        src={`https://www.instagram.com/reel/${post.id}/embed`}
                        height="500" 
                        width="100%" 
                        className="rounded-lg w-full h-full bg-white"
                        frameBorder="0" 
                        scrolling="no" 
                        allow="encrypted-media"
                        loading="lazy"
                        title="Instagram Post">
                      </iframe>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-2 border-border/50 hover:bg-muted text-foreground" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-2 border-border/50 hover:bg-muted text-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blueLight/30 to-electric/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-orangeLight/30 to-orange/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        <h1 className="text-8xl md:text-9xl font-bold mb-2 bg-gradient-to-r from-bluePrimary via-electric to-blueLight bg-clip-text text-transparent select-none">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-lg">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button variant="glow" size="lg" asChild>
            <Link href="/">
              Return Home <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/features">
              Explore eRaksha
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center text-sm text-muted-foreground">
          <Link href="/product" className="hover:text-electric transition-colors">eRaksha Platform</Link>
          <span className="text-border">•</span>
          <Link href="/features" className="hover:text-electric transition-colors">Features</Link>
          <span className="text-border">•</span>
          <Link href="/pricing" className="hover:text-electric transition-colors">Pricing</Link>
          <span className="text-border">•</span>
          <Link href="/about" className="hover:text-electric transition-colors">About Us</Link>
        </div>
      </div>
    </div>
  )
}

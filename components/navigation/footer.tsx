import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + IITMIC Badge */}
          <div>
            <h3 className="text-lg font-bold mb-2">SlateMate</h3>
            <div className="flex items-center gap-1.5 mb-4">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-electric/15 border border-electric/30 text-[10px] font-semibold tracking-wide text-electric">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                IITMIC Incubated
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-4">
              Building AI-powered digital safety solutions for children and families.
            </p>
            <div className="flex space-x-3">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary-foreground/10"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61575675892179"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary-foreground/10"
              >
                <a
                  href="https://x.com/slatemate_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary-foreground/10"
              >
                <a
                  href="https://instagram.com/slatemate_official"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary-foreground/10"
              >
                <a
                  href="https://linkedin.com/company/slate-mate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-electric mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@slatemate.in"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@slatemate.in
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-electric mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919025867204"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +91 90258 67204
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-electric mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/70 text-sm leading-relaxed">
                  SLATEMATE PRIVATE LIMITED<br />
                  C/o. IITM Research Park<br />
                  1FA I Floor, Kanagam Road<br />
                  TTTI Taramani, Chennai - 600113<br />
                  Tamil Nadu, India
                </div>
              </li>
            </ul>

            {/* Newsletter – moved outside <ul> to fix invalid HTML */}
            <div className="mt-6 pt-6 border-t border-primary-foreground/10">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <WaitlistForm variant="dark" />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60 gap-4">
          <div className="flex flex-col text-center md:text-left gap-1">
            <p>&copy; {new Date().getFullYear()} SLATEMATE PRIVATE LIMITED. All rights reserved.</p>
            <p>CIN: U62090TN2026PTC191373 | DPIIT Recognised Startup: DIPP261360</p>
          </div>
          <div className="flex items-center gap-1.5 font-medium px-4 py-1.5 rounded-full bg-primary-foreground/5 border border-primary-foreground/10">
            <span className="text-orange-400">Mission</span> 
            <span className="text-primary-foreground">Viksit Bharat 2047</span> 
            <span className="text-green-500">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SlateMate</h3>
            <p className="text-primary-foreground/70 mb-4">
              Building digital safety solutions.
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

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-electric mt-0.5" />
                <a
                  href="mailto:info@slatemate.in"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@slatemate.in
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-electric mt-0.5" />
                <a
                  href="tel:+919025867204"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +91 90258 67204
                </a>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 mr-2 text-electric mt-0.5 flex items-center justify-center">
                  <span className="text-xs">📍</span>
                </div>
                <div className="text-primary-foreground/70 text-sm leading-relaxed">
                  1st Floor, Nirmaan<br />
                  Sudha & Shankar Innovation Hub<br />
                  Indian Institute of Technology Madras<br />
                  Chennai - 600036, India
                </div>
              </li>
              <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
                <WaitlistForm variant="dark" />
              </div>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} SlateMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

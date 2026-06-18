"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, ChevronDown, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { WaitlistModal } from "@/components/modals/waitlist-modal"

type NavItem = {
  title: string
  href: string
  children?: { title: string; href: string }[]
}

const navItems: NavItem[] = [
  { title: "eRaksha", href: "/product" },
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Resources", href: "/resources" },
  { title: "About", href: "/about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[75%] max-w-4xl z-40 transition-all duration-500 ease-in-out"
      >
        <div
          className={`transition-all duration-500 ease-in-out rounded-2xl border px-4 md:px-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${
            isScrolled 
              ? "bg-background/80 backdrop-blur-xl border-border/50 py-3" 
              : "bg-background/50 backdrop-blur-md border-border/30 py-4"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <Link href="/" className="flex items-center" aria-label="SlateMate Home">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-7 md:h-8 w-auto"
                >
                  <Image
                    src="/SlateMate-logo.png"
                    alt="SlateMate"
                    width={140}
                    height={28}
                    className="h-7 md:h-8 w-auto object-contain"
                    priority
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <DropdownMenu key={item.title}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-1 h-9 px-3 text-sm font-medium">
                          {item.title} <ChevronDown className="h-3.5 w-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-48">
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.title} asChild>
                            <Link href={child.href} className="cursor-pointer">
                              {child.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                      pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.title}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-bluePrimary to-electric"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right side: CTA + Mobile toggle */}
            <div className="flex items-center gap-2">
              {/* Desktop CTA Button */}
              <WaitlistModal>
                <Button
                  variant="glow"
                  size="sm"
                  className="hidden lg:inline-flex bg-gradient-to-r from-bluePrimary to-electric hover:opacity-90 text-white border-0 text-xs px-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Waitlist <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </WaitlistModal>

              {/* Mobile menu toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Dropdown Style */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-30 lg:hidden overflow-hidden"
      >
        <div className="bg-background/80 backdrop-blur-xl rounded-2xl border border-border/30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <nav className="p-6 flex flex-col gap-2">
            {/* Mobile IITMIC badge */}
            <div className="flex justify-center mb-3 sm:hidden">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-electric/10 to-emerald/10 border border-electric/30 text-[11px] font-semibold tracking-wide text-electric">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                IITMIC Incubated
              </div>
            </div>

            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.title} className="space-y-2">
                    <div className="font-semibold text-foreground text-center py-2">{item.title}</div>
                    <div className="space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block py-2 text-center text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`py-3 px-4 rounded-xl text-base font-medium text-center transition-all duration-300 ${
                    pathname === item.href 
                      ? "bg-gradient-to-r from-electric/15 to-bluePrimary/15 text-electric border border-electric/30" 
                      : "text-foreground hover:bg-muted/50 border border-transparent hover:border-border/30"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            })}

            {/* Mobile CTA */}
            <Button
              variant="glow"
              size="lg"
              asChild
              className="mt-3 bg-gradient-to-r from-bluePrimary to-electric text-white border-0 w-full"
            >
              <Link
                href="https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </motion.div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

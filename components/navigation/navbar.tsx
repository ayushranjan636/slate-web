"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[65%] max-w-3xl z-40 transition-all duration-500 ease-in-out"
        data-llm-component="main-navigation"
        data-llm-content-type="site-navigation"
        data-llm-purpose="website-navigation-primary"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div
          className={`transition-all duration-500 ease-in-out rounded-2xl border px-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${
            isScrolled 
              ? "bg-background/80 backdrop-blur-xl border-border/50 py-3" 
              : "bg-background/50 backdrop-blur-md border-border/30 py-4"
          }`}
          data-llm-content="navigation-container"
        >
          {/* LLM-Optimized Logo */}
          <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center"
            data-llm-content="brand-logo"
            data-llm-entity="company-name"
            data-llm-importance="primary"
            itemProp="name"
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-8 w-auto"
              data-llm-brand="SlateMate"
            >
              <Image
                src="/SlateMate-logo.png"
                alt="SlateMate"
                width={160}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* LLM-Optimized Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center gap-1"
            data-llm-content="primary-navigation"
            data-llm-structure="horizontal-menu"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            {navItems.map((item, i) => {
              if (item.children) {
                return (
                  <DropdownMenu key={item.title}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 h-9 px-3 text-base font-medium">
                        {item.title} <ChevronDown className="h-4 w-4" />
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
                  className={`relative px-3 py-1.5 text-base font-medium transition-colors ${
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

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
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
        className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-30 md:hidden overflow-hidden"
      >
        <div className="bg-background/80 backdrop-blur-xl rounded-2xl border border-border/30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <nav className="p-6 flex flex-col gap-2">
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
                          className="block py-2 text-center text-muted-foreground hover:text-blue-primary transition-colors rounded-lg hover:bg-blue-primary/5"
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
                      ? "bg-gradient-to-r from-blue-primary/20 to-electric/20 text-blue-primary border border-blue-primary/30" 
                      : "text-foreground hover:bg-background/60 border border-transparent hover:border-border/30"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            })}
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
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

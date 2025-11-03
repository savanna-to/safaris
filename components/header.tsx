"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-accent backdrop-blur supports-[backdrop-filter]:bg-accent/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Savanna Safaris" width={48} height={48} className="h-12 w-12" />
            <span className="text-xl font-bold text-accent-foreground font-[family-name:var(--font-heading)]">
              savanna safaris
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#services"
              className="text-sm font-medium text-accent-foreground/80 hover:text-accent-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-accent-foreground/80 hover:text-accent-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-accent-foreground/80 hover:text-accent-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-accent-foreground/80 hover:text-accent-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="#contact">Inquire Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-accent-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent-foreground/20">
            <nav className="flex flex-col gap-4">
              <Link
                href="#services"
                className="text-sm font-medium text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#contact">Inquire Now</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

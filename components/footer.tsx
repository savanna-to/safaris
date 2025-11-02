import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Savannah Safaris" width={40} height={40} className="h-10 w-10" />
              <span className="text-lg font-bold font-[family-name:var(--font-heading)]">savanna safaris</span>
            </Link>
            <p className="text-accent-foreground/80 leading-relaxed">
              Creating unforgettable African safari experiences since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-heading)]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-heading)]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                <span className="text-accent-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                <span className="text-accent-foreground/80">info@savannahsafaris.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                <span className="text-accent-foreground/80">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-heading)]">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent-foreground/70 text-sm">
            © {new Date().getFullYear()} Savanna Safaris. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-accent-foreground/70 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-accent-foreground/70 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

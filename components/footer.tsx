"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail("")
  }

  return (
    <footer className="relative bg-gradient-to-b from-background to-forest-ink/5 dark:to-forest-ink/20 border-t border-primary/10 overflow-hidden">
      {/* Animated mycelium network background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: "-100%",
              right: "-100%",
              animation: `mycelium-grow ${3 + i * 0.5}s ease-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h3 className="font-serif text-3xl md:text-4xl mb-4 text-balance">
            Rooted in Science. <span className="text-primary">Grown with Spirit.</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Get new mushroom medicine guides and home-lab recipes delivered to your inbox
          </p>

          {/* Test tube newsletter form */}
          <form onSubmit={handleSubscribe} className="relative max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-6 py-4 rounded-full bg-muted/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all pr-32"
                required
              />
              <Button
                type="submit"
                className="absolute right-1 top-1 bottom-1 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              >
                Subscribe 🍄
              </Button>
            </div>
            {isSubscribed && (
              <p className="absolute -bottom-8 left-0 right-0 text-sm text-primary animate-in fade-in duration-300">
                ✨ Subscribed! Welcome to the mycelial network.
              </p>
            )}
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Cultivate</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mushrooms/reishi"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Reishi
                </Link>
              </li>
              <li>
                <Link
                  href="/mushrooms/lions-mane"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Lion's Mane
                </Link>
              </li>
              <li>
                <Link
                  href="/mushrooms/cordyceps"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cordyceps
                </Link>
              </li>
              <li>
                <Link
                  href="/cultivation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  All Species
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Extract</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/guides/dual-extraction"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Dual Extraction
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/tinctures"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Tinctures
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/powders"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Powders
                </Link>
              </li>
              <li>
                <Link href="/extraction" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Methods
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop?category=grow-kits"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Grow Kits
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=tools"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Lab Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=supplies"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Supplies
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=books"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Books
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 MedicinalMycoLab.com — All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            
          </div>
        </div>
      </div>

      {/* Cookie Banner (hidden by default, would show on first visit) */}
      <div className="hidden absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-card border border-primary/20 rounded-lg p-4 shadow-lg backdrop-blur-sm">
        <p className="text-sm mb-3">
          🍄 We use cookies to help your spores grow smarter. Accept to continue your cultivation journey.
        </p>
        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            Accept
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            Decline
          </Button>
        </div>
      </div>
    </footer>
  )
}

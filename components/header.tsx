"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBasket, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-xl md:text-2xl font-serif font-semibold text-foreground tracking-tight">
                medicinal<span className="text-primary animate-bioluminescence">myco</span>lab
              </span>
              {/* Hyphae connecting lines */}
              <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/cultivation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cultivation
            </Link>
            <Link href="/extraction" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Extraction
            </Link>
            <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Guides
            </Link>
            <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative group"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>

            <Button variant="ghost" size="icon" className="relative group" aria-label="Cart">
              <ShoppingBasket className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors animate-breathe" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Expansion */}
        {isSearchOpen && (
          <div className="py-4 border-t border-primary/10 animate-in slide-in-from-top-2 duration-300">
            <div className="relative">
              <input
                type="search"
                placeholder="Search mushrooms, guides, products..."
                className="w-full px-4 py-3 bg-muted/50 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                autoFocus
              />
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-mycelium-grow" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/10 animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-4">
              <Link
                href="/cultivation"
                className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Cultivation
              </Link>
              <Link
                href="/extraction"
                className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Extraction
              </Link>
              <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">
                Guides
              </Link>
              <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">
                Shop
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors py-2">
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Banana, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Banana className="h-8 w-8 text-yellow-500" />
          <span className="text-xl font-bold">Nano Banana</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/tutorials" className="text-sm font-medium hover:text-primary">
            Tutorials
          </Link>
          <Link href="/tools" className="text-sm font-medium hover:text-primary">
            Tools
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-primary">
            Gallery
          </Link>
          <Link href="/resources" className="text-sm font-medium hover:text-primary">
            Resources
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        {isMounted && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMounted && isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <Link href="/tutorials" className="block text-sm font-medium hover:text-primary">
              Tutorials
            </Link>
            <Link href="/tools" className="block text-sm font-medium hover:text-primary">
              Tools
            </Link>
            <Link href="/gallery" className="block text-sm font-medium hover:text-primary">
              Gallery
            </Link>
            <Link href="/resources" className="block text-sm font-medium hover:text-primary">
              Resources
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

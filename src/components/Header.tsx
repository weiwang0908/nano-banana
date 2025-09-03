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
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Banana className="h-8 w-8 text-yellow-600" />
          <span className="text-xl font-bold text-gray-900">Nano Banana</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-yellow-600">
            首页
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-yellow-600">
            博客
          </Link>
          <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-yellow-600">
            功能
          </Link>
          <Link href="#cases" className="text-sm font-medium text-gray-700 hover:text-yellow-600">
            案例
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-700 hover:text-yellow-600">
            常见问题
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/blog" className="inline-flex items-center justify-center px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium rounded-md transition-colors">
            学习技巧
          </Link>
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
        <div className="md:hidden border-t bg-white">
          <div className="container py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium text-gray-700 hover:text-yellow-600">
              首页
            </Link>
            <Link href="/blog" className="block text-sm font-medium text-gray-700 hover:text-yellow-600">
              博客
            </Link>
            <Link href="#features" className="block text-sm font-medium text-gray-700 hover:text-yellow-600">
              功能
            </Link>
            <Link href="#cases" className="block text-sm font-medium text-gray-700 hover:text-yellow-600">
              案例
            </Link>
            <Link href="#faq" className="block text-sm font-medium text-gray-700 hover:text-yellow-600">
              常见问题
            </Link>
            <div className="pt-4">
              <Link href="/blog" className="inline-flex items-center justify-center w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium rounded-md transition-colors">
                学习技巧
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

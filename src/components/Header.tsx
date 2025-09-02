'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Banana, Menu, X, User, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuthStore } from '@/lib/auth-store'
import LoginModal from '@/components/auth/LoginModal'
import SignupModal from '@/components/auth/SignupModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  
  const { user, isAuthenticated, logout } = useAuthStore()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleLogin = () => {
    setShowLoginModal(true)
    setShowSignupModal(false)
  }

  const handleSignup = () => {
    setShowSignupModal(true)
    setShowLoginModal(false)
  }

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

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
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button variant="outline" size="sm" onClick={handleLogin}>
                Sign In
              </Button>
              <Button size="sm" onClick={handleSignup}>
                Get Started
              </Button>
            </>
          )}
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
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-2 p-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">{user?.name}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={handleLogin}>
                    Sign In
                  </Button>
                  <Button size="sm" onClick={handleSignup}>
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={handleSignup}
      />
      <SignupModal 
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={handleLogin}
      />
    </header>
  )
}

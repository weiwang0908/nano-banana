'use client'

import { Button } from '@/components/ui/button'
import { BookOpen, Clock, Users, Star } from 'lucide-react'
import Link from 'next/link'

export default function TutorialHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 border-yellow-200 mb-8">
            <BookOpen className="mr-1 h-3 w-3" />
            Complete Learning Hub
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Master{' '}
            <span className="text-yellow-500">Nano Banana</span>{' '}
            Tutorials
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn Nano Banana from scratch with our comprehensive tutorial collection. 
            From basic concepts to advanced techniques, we've got you covered.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">50+</div>
              <div className="text-sm text-muted-foreground">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">4</div>
              <div className="text-sm text-muted-foreground">Skill Levels</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">10K+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">4.9</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start with Basics
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Browse All Tutorials
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

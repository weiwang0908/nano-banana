'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-yellow-50 text-yellow-700 border-yellow-200 mb-8">
            <Sparkles className="mr-1 h-3 w-3" />
            The Ultimate Nano Banana Learning Hub
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Master{' '}
            <span className="text-yellow-500">Nano Banana</span>{' '}
            AI Image Generation
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn, create, and master Nano Banana with our comprehensive tutorials, 
            interactive tools, and expert guidance. From beginner to pro in no time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">50+</div>
              <div className="text-sm text-muted-foreground">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">1000+</div>
              <div className="text-sm text-muted-foreground">Examples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

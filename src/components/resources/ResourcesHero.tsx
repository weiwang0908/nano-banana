'use client'

import { Button } from '@/components/ui/button'
import { BookOpen, Download, Code, Sparkles } from 'lucide-react'

export default function ResourcesHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-green-100 text-green-700 border-green-200 mb-8">
            <BookOpen className="mr-1 h-3 w-3" />
            Resource Library
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Nano Banana{' '}
            <span className="text-green-500">Resources</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everything you need to master Nano Banana in one place. Templates, prompts, 
            presets, and API documentation to accelerate your creative workflow.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">100+</div>
              <div className="text-sm text-muted-foreground">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">500+</div>
              <div className="text-sm text-muted-foreground">Prompts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">50+</div>
              <div className="text-sm text-muted-foreground">Presets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">Free</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Browse Templates
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Code className="mr-2 h-5 w-5" />
              View API Docs
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

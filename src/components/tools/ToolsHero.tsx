'use client'

import { Button } from '@/components/ui/button'
import { Zap, Play, Sparkles } from 'lucide-react'

export default function ToolsHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 border-blue-200 mb-8">
            <Zap className="mr-1 h-3 w-3" />
            Interactive Tools
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Try{' '}
            <span className="text-blue-500">Nano Banana</span>{' '}
            Tools
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience Nano Banana's power directly in your browser. No registration required - 
            start creating amazing AI images right now!
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">5+</div>
              <div className="text-sm text-muted-foreground">Interactive Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">Free</div>
              <div className="text-sm text-muted-foreground">No Registration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">Instant</div>
              <div className="text-sm text-muted-foreground">Real-time Results</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Try Image Generator
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Sparkles className="mr-2 h-5 w-5" />
              Explore All Tools
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

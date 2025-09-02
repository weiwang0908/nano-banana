'use client'

import { Button } from '@/components/ui/button'
import { Image, Heart, Download, Share2 } from 'lucide-react'

export default function GalleryHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 border-purple-200 mb-8">
            <Image className="mr-1 h-3 w-3" />
            Community Gallery
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Nano Banana{' '}
            <span className="text-purple-500">Gallery</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover thousands of amazing AI-generated images created with Nano Banana. 
            Get inspired, learn techniques, and see what's possible.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">5K+</div>
              <div className="text-sm text-muted-foreground">Images</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">50+</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">1K+</div>
              <div className="text-sm text-muted-foreground">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">Free</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Image className="mr-2 h-5 w-5" />
              Browse Gallery
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Share2 className="mr-2 h-5 w-5" />
              Submit Your Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

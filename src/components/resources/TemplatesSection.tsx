'use client'

import { Button } from '@/components/ui/button'
import { Download, Eye, Copy, Star } from 'lucide-react'

const templates = [
  {
    id: 1,
    name: "Professional Portrait",
    description: "High-quality portrait template with perfect lighting and composition",
    image: "/api/placeholder/300/300",
    downloads: 1250,
    rating: 4.9,
    category: "Portraits",
    tags: ["professional", "portrait", "lighting"]
  },
  {
    id: 2,
    name: "Fantasy Landscape",
    description: "Mystical fantasy landscape with magical elements and atmosphere",
    image: "/api/placeholder/300/300",
    downloads: 980,
    rating: 4.8,
    category: "Landscapes",
    tags: ["fantasy", "landscape", "magical"]
  },
  {
    id: 3,
    name: "Abstract Art",
    description: "Modern abstract composition with vibrant colors and dynamic forms",
    image: "/api/placeholder/300/300",
    downloads: 750,
    rating: 4.7,
    category: "Abstract",
    tags: ["abstract", "modern", "colorful"]
  },
  {
    id: 4,
    name: "Character Design",
    description: "Detailed character template perfect for game and story development",
    image: "/api/placeholder/300/300",
    downloads: 1100,
    rating: 4.9,
    category: "Characters",
    tags: ["character", "design", "detailed"]
  }
]

export default function TemplatesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Popular Templates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with these highly-rated templates. Download and customize them 
            for your own creative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="group bg-background border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image */}
              <div className="relative aspect-square bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm">{template.name}</p>
                  </div>
                </div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs bg-black/20 text-white rounded">
                    {template.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold mb-2">{template.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {template.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {template.downloads.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {template.rating}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-muted rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  )
}

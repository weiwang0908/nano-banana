'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heart, Download, Share2, Eye, Copy, User } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: "Mystical Forest Portrait",
    prompt: "A mystical forest portrait with ethereal lighting, digital art style, highly detailed",
    image: "/api/placeholder/400/400",
    author: "Alex_Creator",
    likes: 1247,
    downloads: 892,
    category: "Portraits",
    style: "Digital Art",
    parameters: {
      steps: 25,
      cfg: 7.5,
      seed: 12345,
      model: "nano-banana-v2"
    }
  },
  {
    id: 2,
    title: "Futuristic Cityscape",
    prompt: "A futuristic cityscape at sunset, cyberpunk style, neon lights, high resolution",
    image: "/api/placeholder/400/400",
    author: "FutureVision",
    likes: 2156,
    downloads: 1456,
    category: "Architecture",
    style: "3D Render",
    parameters: {
      steps: 30,
      cfg: 8.0,
      seed: 67890,
      model: "nano-banana-v2"
    }
  },
  {
    id: 3,
    title: "Abstract Color Symphony",
    prompt: "Abstract painting with vibrant colors, flowing forms, artistic expression",
    image: "/api/placeholder/400/400",
    author: "ColorMaster",
    likes: 987,
    downloads: 634,
    category: "Abstract",
    style: "Oil Painting",
    parameters: {
      steps: 20,
      cfg: 6.5,
      seed: 54321,
      model: "nano-banana-v2"
    }
  },
  {
    id: 4,
    title: "Fantasy Dragon",
    prompt: "A majestic fantasy dragon in a mystical landscape, detailed scales, epic composition",
    image: "/api/placeholder/400/400",
    author: "FantasyArt",
    likes: 3456,
    downloads: 2234,
    category: "Fantasy",
    style: "Digital Art",
    parameters: {
      steps: 35,
      cfg: 7.0,
      seed: 98765,
      model: "nano-banana-v2"
    }
  },
  {
    id: 5,
    title: "Vintage Portrait",
    prompt: "Vintage portrait photography, 1950s style, film grain, warm tones",
    image: "/api/placeholder/400/400",
    author: "VintageLens",
    likes: 1876,
    downloads: 1123,
    category: "Portraits",
    style: "Photorealistic",
    parameters: {
      steps: 28,
      cfg: 7.5,
      seed: 11111,
      model: "nano-banana-v2"
    }
  },
  {
    id: 6,
    title: "Mountain Landscape",
    prompt: "Breathtaking mountain landscape at golden hour, nature photography, high detail",
    image: "/api/placeholder/400/400",
    author: "NatureShots",
    likes: 1456,
    downloads: 987,
    category: "Landscapes",
    style: "Photorealistic",
    parameters: {
      steps: 25,
      cfg: 6.0,
      seed: 22222,
      model: "nano-banana-v2"
    }
  }
]

export default function GalleryGrid() {
  const [likedItems, setLikedItems] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt)
    // You could add a toast notification here
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group bg-background border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image */}
              <div className="relative aspect-square bg-muted">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      likedItems.includes(item.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-white'
                    }`} 
                  />
                </button>

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs bg-black/20 text-white rounded">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-1">{item.title}</h3>
                
                {/* Author */}
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <User className="h-4 w-4 mr-1" />
                  {item.author}
                </div>

                {/* Prompt */}
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.prompt}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {item.likes.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {item.downloads.toLocaleString()}
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded">
                    {item.style}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => copyPrompt(item.prompt)}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Prompt
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                {/* Parameters (Collapsible) */}
                <details className="mt-3">
                  <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                    View Parameters
                  </summary>
                  <div className="mt-2 text-xs space-y-1">
                    <div>Steps: {item.parameters.steps}</div>
                    <div>CFG: {item.parameters.cfg}</div>
                    <div>Seed: {item.parameters.seed}</div>
                    <div>Model: {item.parameters.model}</div>
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Images
          </Button>
        </div>
      </div>
    </section>
  )
}

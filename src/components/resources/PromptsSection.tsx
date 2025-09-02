'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Heart, Download, Search, Filter } from 'lucide-react'

const promptCategories = [
  'All', 'Portraits', 'Landscapes', 'Abstract', 'Fantasy', 'Animals', 'Architecture', 'Food'
]

const prompts = [
  {
    id: 1,
    title: "Professional Portrait Photography",
    prompt: "Professional portrait photography, studio lighting, high resolution, detailed facial features, natural expression, commercial quality",
    category: "Portraits",
    likes: 1247,
    downloads: 892,
    tags: ["photography", "portrait", "professional", "studio"]
  },
  {
    id: 2,
    title: "Mystical Forest Landscape",
    prompt: "Mystical forest landscape, ethereal lighting, ancient trees, magical atmosphere, fantasy art style, highly detailed, cinematic composition",
    category: "Landscapes",
    likes: 2156,
    downloads: 1456,
    tags: ["fantasy", "landscape", "mystical", "magical"]
  },
  {
    id: 3,
    title: "Abstract Color Symphony",
    prompt: "Abstract painting, vibrant colors, flowing forms, artistic expression, modern art style, dynamic composition, high contrast",
    category: "Abstract",
    likes: 987,
    downloads: 634,
    tags: ["abstract", "colorful", "modern", "artistic"]
  },
  {
    id: 4,
    title: "Fantasy Dragon Character",
    prompt: "Fantasy dragon character design, detailed scales, majestic pose, epic fantasy art, highly detailed, dramatic lighting, concept art style",
    category: "Fantasy",
    likes: 3456,
    downloads: 2234,
    tags: ["fantasy", "dragon", "character", "detailed"]
  },
  {
    id: 5,
    title: "Vintage Food Photography",
    prompt: "Vintage food photography, warm lighting, rustic setting, film grain, nostalgic atmosphere, high quality, commercial style",
    category: "Food",
    likes: 1876,
    downloads: 1123,
    tags: ["vintage", "food", "photography", "nostalgic"]
  },
  {
    id: 6,
    title: "Modern Architecture",
    prompt: "Modern architecture, clean lines, minimalist design, glass and steel, contemporary building, architectural photography, professional quality",
    category: "Architecture",
    likes: 1456,
    downloads: 987,
    tags: ["architecture", "modern", "minimalist", "contemporary"]
  }
]

export default function PromptsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [likedPrompts, setLikedPrompts] = useState<number[]>([])

  const filteredPrompts = prompts.filter(prompt => {
    const matchesCategory = selectedCategory === 'All' || prompt.category === selectedCategory
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleLike = (id: number) => {
    setLikedPrompts(prev => 
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Prompt Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover effective prompts that produce amazing results. 
            Copy, customize, and create your own variations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {promptCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrompts.map((prompt) => (
            <div key={prompt.id} className="bg-background border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold mb-1">{prompt.title}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    {prompt.category}
                  </span>
                </div>
                <button
                  onClick={() => toggleLike(prompt.id)}
                  className="p-1 hover:bg-muted rounded"
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      likedPrompts.includes(prompt.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                </button>
              </div>

              {/* Prompt Text */}
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="text-sm font-mono leading-relaxed">{prompt.prompt}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {prompt.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 text-xs bg-muted rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats and Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {prompt.likes.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {prompt.downloads.toLocaleString()}
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  onClick={() => copyPrompt(prompt.prompt)}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Prompts
          </Button>
        </div>
      </div>
    </section>
  )
}

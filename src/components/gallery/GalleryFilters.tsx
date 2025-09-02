'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Filter, Grid, List, Search } from 'lucide-react'

const categories = [
  'All', 'Portraits', 'Landscapes', 'Abstract', 'Fantasy', 'Animals', 
  'Architecture', 'Food', 'Fashion', 'Sci-Fi', 'Art Styles', 'Nature'
]

const styles = [
  'All', 'Photorealistic', 'Digital Art', 'Oil Painting', 'Watercolor', 
  'Sketch', 'Anime', '3D Render', 'Vintage', 'Minimalist'
]

const sortOptions = [
  'Latest', 'Most Popular', 'Most Downloaded', 'Highest Rated', 'Random'
]

export default function GalleryFilters() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStyle, setSelectedStyle] = useState('All')
  const [sortBy, setSortBy] = useState('Latest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="py-8 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search images, prompts, or artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Style Filter */}
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {styles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {/* View Mode */}
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedCategory !== 'All' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
              Category: {selectedCategory}
              <button
                onClick={() => setSelectedCategory('All')}
                className="ml-2 hover:text-purple-900"
              >
                ×
              </button>
            </span>
          )}
          {selectedStyle !== 'All' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
              Style: {selectedStyle}
              <button
                onClick={() => setSelectedStyle('All')}
                className="ml-2 hover:text-purple-900"
              >
                ×
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
              Search: "{searchQuery}"
              <button
                onClick={() => setSearchQuery('')}
                className="ml-2 hover:text-purple-900"
              >
                ×
              </button>
            </span>
          )}
        </div>
      </div>
    </section>
  )
}

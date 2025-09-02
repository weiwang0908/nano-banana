'use client'

import { Button } from '@/components/ui/button'
import { FileText, Code, Settings, Download, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

const resourceCategories = [
  {
    icon: FileText,
    title: "Templates",
    description: "Ready-to-use templates for different styles and use cases. Perfect for quick starts and inspiration.",
    count: "100+",
    items: ["Portrait Templates", "Landscape Templates", "Abstract Templates", "Character Templates"],
    href: "/resources/templates",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Code,
    title: "Prompt Library",
    description: "Curated collection of effective prompts organized by category and style. Copy and customize instantly.",
    count: "500+",
    items: ["Photography Prompts", "Art Style Prompts", "Character Prompts", "Scene Prompts"],
    href: "/resources/prompts",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Settings,
    title: "Parameter Presets",
    description: "Optimized parameter combinations for different styles and quality levels. Save time and get better results.",
    count: "50+",
    items: ["High Quality Presets", "Fast Generation Presets", "Art Style Presets", "Photography Presets"],
    href: "/resources/presets",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Download,
    title: "API Documentation",
    description: "Complete API reference for developers. Integrate Nano Banana into your applications and workflows.",
    count: "Full Docs",
    items: ["API Reference", "Code Examples", "SDK Downloads", "Integration Guides"],
    href: "/resources/api",
    color: "bg-orange-100 text-orange-600"
  }
]

export default function ResourcesGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Resource Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of Nano Banana resources. 
            Everything you need to create amazing AI images.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourceCategories.map((category, index) => (
            <div key={index} className="group relative bg-background border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${category.color} mb-6`}>
                <category.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold">{category.title}</h3>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                  {category.count}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6">{category.description}</p>

              {/* Items List */}
              <div className="space-y-2 mb-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href={category.href}>
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  Explore {category.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

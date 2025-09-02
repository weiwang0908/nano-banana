'use client'

import { Button } from '@/components/ui/button'
import { Image, Settings, GitCompare, Layers, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

const tools = [
  {
    icon: Image,
    title: "Image Generator",
    description: "Create stunning AI images with our interactive generator. Adjust parameters and see results in real-time.",
    features: ["Real-time preview", "Parameter tuning", "High-quality output", "No registration required"],
    status: "Available",
    href: "/tools/generator",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Settings,
    title: "Parameter Tuner",
    description: "Master every Nano Banana parameter with our interactive tuning tool. Learn how each setting affects your results.",
    features: ["All parameters", "Live preview", "Preset library", "Export settings"],
    status: "Available",
    href: "/tools/parameter-tuner",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: GitCompare,
    title: "Effect Comparator",
    description: "Compare different parameter combinations side-by-side. Find the perfect settings for your style.",
    features: ["Side-by-side comparison", "A/B testing", "Parameter tracking", "Save favorites"],
    status: "Available",
    href: "/tools/comparator",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Layers,
    title: "Batch Processor",
    description: "Generate multiple images with different settings at once. Perfect for testing and experimentation.",
    features: ["Batch generation", "Template system", "Progress tracking", "Bulk download"],
    status: "Coming Soon",
    href: "/tools/batch-processor",
    color: "bg-orange-100 text-orange-600"
  }
]

export default function ToolsGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Interactive Nano Banana Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the full power of Nano Banana with our suite of interactive tools. 
            Learn, experiment, and create amazing AI images.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="group relative bg-background border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  tool.status === 'Available' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {tool.status}
                </span>
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${tool.color} mb-6`}>
                <tool.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-3">{tool.title}</h3>
              <p className="text-muted-foreground mb-6">{tool.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {tool.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <Zap className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {tool.status === 'Available' ? (
                <Link href={tool.href}>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Try {tool.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
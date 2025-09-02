'use client'

import { Zap, Shield, Clock, Users, Star, Award } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Instant Results",
    description: "Generate high-quality AI images in seconds with our optimized Nano Banana integration."
  },
  {
    icon: Shield,
    title: "No Registration",
    description: "Start creating immediately without signing up. All tools are free to use."
  },
  {
    icon: Clock,
    title: "Real-time Preview",
    description: "See parameter changes instantly as you adjust settings and experiment."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Learn from thousands of examples and share your creations with the community."
  },
  {
    icon: Star,
    title: "Expert Curated",
    description: "All tools and presets are created and tested by Nano Banana experts."
  },
  {
    icon: Award,
    title: "Professional Quality",
    description: "Generate images suitable for commercial use with our advanced settings."
  }
]

export default function ToolsFeatures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose Our Tools?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our Nano Banana tools are designed to give you the best possible experience 
            and results, whether you're a beginner or a professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-background border hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Creating?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of creators who are already using our tools to create amazing AI images.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Try Image Generator
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View All Tools
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

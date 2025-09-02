'use client'

import { Image, Users, Heart, Download, Star, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: Image,
    value: "5,000+",
    label: "Images",
    description: "High-quality AI-generated images in our gallery"
  },
  {
    icon: Users,
    value: "1,200+",
    label: "Artists",
    description: "Creative community members sharing their work"
  },
  {
    icon: Heart,
    value: "50K+",
    label: "Likes",
    description: "Community appreciation for amazing creations"
  },
  {
    icon: Download,
    value: "25K+",
    label: "Downloads",
    description: "Images downloaded for inspiration and learning"
  },
  {
    icon: Star,
    value: "4.8",
    label: "Average Rating",
    description: "High-quality content rated by our community"
  },
  {
    icon: TrendingUp,
    value: "500+",
    label: "Daily Uploads",
    description: "New amazing images added every day"
  }
]

export default function GalleryStats() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Gallery by the Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our gallery is constantly growing with amazing Nano Banana creations 
            from artists around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-background border hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-purple-500 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Share Your Creations</h3>
            <p className="text-muted-foreground mb-6">
              Join our community of artists and share your Nano Banana masterpieces. 
              Get feedback, inspire others, and grow as a creator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Upload Your Work
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

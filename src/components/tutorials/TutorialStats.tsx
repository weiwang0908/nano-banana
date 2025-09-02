'use client'

import { BookOpen, Users, Star, Award } from 'lucide-react'

const stats = [
  {
    icon: BookOpen,
    value: "50+",
    label: "Tutorials",
    description: "Comprehensive guides covering all aspects of Nano Banana"
  },
  {
    icon: Users,
    value: "10K+",
    label: "Students",
    description: "Join thousands of creators learning Nano Banana"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    description: "Highly rated by our community of learners"
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    description: "Students successfully create amazing images"
  }
]

export default function TutorialStats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thousands of creators have already mastered Nano Banana with our tutorials. 
            Be the next success story!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

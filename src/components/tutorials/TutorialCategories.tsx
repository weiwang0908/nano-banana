'use client'

import { Button } from '@/components/ui/button'
import { BookOpen, Zap, Settings, HelpCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Perfect for beginners. Learn the basics of Nano Banana and create your first AI images.",
    tutorialCount: 12,
    duration: "2-3 hours",
    level: "Beginner",
    color: "bg-green-100 text-green-600",
    href: "/tutorials/beginner"
  },
  {
    icon: Zap,
    title: "Advanced Techniques",
    description: "Master advanced features and creative techniques to create stunning, professional-quality images.",
    tutorialCount: 18,
    duration: "4-5 hours",
    level: "Advanced",
    color: "bg-blue-100 text-blue-600",
    href: "/tutorials/advanced"
  },
  {
    icon: Settings,
    title: "Parameter Guide",
    description: "Deep dive into every parameter and setting. Understand how each option affects your results.",
    tutorialCount: 15,
    duration: "3-4 hours",
    level: "Intermediate",
    color: "bg-purple-100 text-purple-600",
    href: "/tutorials/parameters"
  },
  {
    icon: HelpCircle,
    title: "FAQ & Troubleshooting",
    description: "Common questions, issues, and solutions. Get help when you're stuck.",
    tutorialCount: 8,
    duration: "1-2 hours",
    level: "All Levels",
    color: "bg-orange-100 text-orange-600",
    href: "/tutorials/faq"
  }
]

export default function TutorialCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a complete beginner or looking to master advanced techniques, 
            we have the perfect tutorial collection for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative bg-background border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color} mb-4`}>
                <category.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>

              {/* Stats */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tutorials:</span>
                  <span className="font-medium">{category.tutorialCount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{category.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Level:</span>
                  <span className="font-medium">{category.level}</span>
                </div>
              </div>

              {/* CTA */}
              <Link href={category.href}>
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  Start Learning
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
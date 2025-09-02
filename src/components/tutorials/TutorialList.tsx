'use client'

import { Button } from '@/components/ui/button'
import { Clock, Users, Star, Play, BookOpen } from 'lucide-react'
import Link from 'next/link'

const tutorials = [
  {
    id: 1,
    title: "Nano Banana Basics: Your First AI Image",
    description: "Learn the fundamentals of Nano Banana and create your very first AI-generated image in just 10 minutes.",
    duration: "10 min",
    students: 1250,
    rating: 4.9,
    level: "Beginner",
    type: "Video",
    thumbnail: "/api/placeholder/300/200",
    href: "/tutorials/nano-banana-basics"
  },
  {
    id: 2,
    title: "Understanding Nano Banana Parameters",
    description: "Deep dive into all the parameters available in Nano Banana and how they affect your image generation.",
    duration: "25 min",
    students: 980,
    rating: 4.8,
    level: "Intermediate",
    type: "Article",
    thumbnail: "/api/placeholder/300/200",
    href: "/tutorials/parameters-guide"
  },
  {
    id: 3,
    title: "Advanced Prompt Engineering Techniques",
    description: "Master the art of crafting perfect prompts to get exactly the results you want from Nano Banana.",
    duration: "35 min",
    students: 750,
    rating: 4.9,
    level: "Advanced",
    type: "Video",
    thumbnail: "/api/placeholder/300/200",
    href: "/tutorials/advanced-prompts"
  },
  {
    id: 4,
    title: "Nano Banana vs Other AI Tools",
    description: "Compare Nano Banana with Midjourney, DALL-E, and other popular AI image generation tools.",
    duration: "20 min",
    students: 1100,
    rating: 4.7,
    level: "All Levels",
    type: "Article",
    thumbnail: "/api/placeholder/300/200",
    href: "/tutorials/nano-banana-comparison"
  },
  {
    id: 5,
    title: "Creating Consistent Character Styles",
    description: "Learn how to maintain consistent character designs across multiple images using Nano Banana.",
    duration: "30 min",
    students: 650,
    rating: 4.8,
    level: "Advanced",
    type: "Video",
    thumbnail: "/api/placeholder/300/200",
    href: "/tutorials/consistent-characters"
  },
  {
    id: 6,
    title: "Troubleshooting Common Issues",
    description: "Solve the most common problems users face when working with Nano Banana.",
    duration: "15 min",
    students: 850,
    rating: 4.6,
    level: "All Levels",
    type: "Article",
    thumbnail: "/api/placeholder/300/200",
    href: "/tutorials/troubleshooting"
  }
]

export default function TutorialList() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Popular Tutorials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with these highly-rated tutorials that have helped thousands of users master Nano Banana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-background border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Thumbnail */}
              <div className="relative aspect-video bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  {tutorial.type === 'Video' ? (
                    <Play className="h-12 w-12 text-muted-foreground" />
                  ) : (
                    <BookOpen className="h-12 w-12 text-muted-foreground" />
                  )}
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-background/90 text-xs px-2 py-1 rounded">
                    {tutorial.type}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-background/90 text-xs px-2 py-1 rounded">
                    {tutorial.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {tutorial.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {tutorial.students.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {tutorial.rating}
                  </div>
                </div>

                {/* CTA */}
                <Link href={tutorial.href}>
                  <Button className="w-full">
                    {tutorial.type === 'Video' ? 'Watch Tutorial' : 'Read Tutorial'}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Tutorials
          </Button>
        </div>
      </div>
    </section>
  )
}

'use client'

import { BookOpen, Zap, Image, Users } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Tutorials",
    description: "Step-by-step guides from beginner to advanced techniques. Learn at your own pace with our structured learning path."
  },
  {
    icon: Zap,
    title: "Interactive Tools",
    description: "Try Nano Banana directly in your browser. Experiment with parameters and see results instantly without any setup."
  },
  {
    icon: Image,
    title: "Gallery & Examples",
    description: "Browse thousands of examples with detailed parameters. Get inspired and learn from the community's best work."
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with other creators, share your work, and get feedback from experienced Nano Banana users."
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to master Nano Banana
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and resources you need to become a Nano Banana expert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-background border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { MessageSquare, Users, Palette, Zap } from 'lucide-react'
import { translations, type Locale } from '@/lib/translations'

interface FeaturesProps {
  locale: Locale
}

export default function Features({ locale }: FeaturesProps) {
  const t = translations[locale].features
  
  const features = [
    {
      icon: MessageSquare,
      title: t.naturalLanguage.title,
      description: t.naturalLanguage.description
    },
    {
      icon: Users,
      title: t.characterConsistency.title,
      description: t.characterConsistency.description
    },
    {
      icon: Palette,
      title: t.sceneRetention.title,
      description: t.sceneRetention.description
    },
    {
      icon: Zap,
      title: t.highQuality.title,
      description: t.highQuality.description
    }
  ]
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

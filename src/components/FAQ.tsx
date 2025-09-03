'use client'

import { useState } from 'react'
import { translations, type Locale } from '@/lib/translations'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  locale: Locale
}

export default function FAQ({ locale }: FAQProps) {
  const t = translations[locale].faq
  
  const faqData: FAQItem[] = [
    {
      question: t.questions.whatIs.question,
      answer: t.questions.whatIs.answer
    },
    {
      question: t.questions.coreFeatures.question,
      answer: t.questions.coreFeatures.answer
    },
    {
      question: t.questions.howToUse.question,
      answer: t.questions.howToUse.answer
    },
    {
      question: t.questions.formats.question,
      answer: t.questions.formats.answer
    },
    {
      question: t.questions.generationTime.question,
      answer: t.questions.generationTime.answer
    },
    {
      question: t.questions.differences.question,
      answer: t.questions.differences.answer
    },
    {
      question: t.questions.targetUsers.question,
      answer: t.questions.targetUsers.answer
    },
    {
      question: t.questions.betterResults.question,
      answer: t.questions.betterResults.answer
    }
  ]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.description}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

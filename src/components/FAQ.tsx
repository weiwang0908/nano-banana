'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "什么是 Nano Banana？",
    answer: "Nano Banana 是一款专业的AI图像生成工具，能够根据用户的文字描述生成高质量的图像。它特别擅长保持角色一致性和场景保留，是设计师、艺术家和内容创作者的理想选择。"
  },
  {
    question: "Nano Banana 有哪些核心功能？",
    answer: "Nano Banana 的主要功能包括：自然语言编辑（支持中英文）、角色一致性保持、场景保留、高质量图像生成、多种艺术风格支持等。"
  },
  {
    question: "如何使用 Nano Banana 生成图像？",
    answer: "使用 Nano Banana 非常简单：1）输入详细的文字描述；2）选择合适的参数设置；3）点击生成按钮；4）等待30秒左右即可获得高质量图像。"
  },
  {
    question: "Nano Banana 支持哪些图像格式？",
    answer: "Nano Banana 支持多种主流图像格式，包括PNG、JPG等。你可以根据具体需求选择合适的格式和分辨率。"
  },
  {
    question: "生成一张图像需要多长时间？",
    answer: "通常情况下，Nano Banana 能在30秒内完成图像生成。具体时间取决于图像的复杂程度和当前服务器负载情况。"
  },
  {
    question: "Nano Banana 与其他AI图像生成工具有什么区别？",
    answer: "Nano Banana 在角色一致性和中文支持方面表现突出，特别适合需要精确控制生成结果的用户。相比其他工具，它在保持角色特征稳定方面有显著优势。"
  },
  {
    question: "Nano Banana 适合哪些用户？",
    answer: "Nano Banana 适合设计师、艺术家、内容创作者、营销人员以及任何需要高质量图像的用户。无论是商业项目还是个人创作，都能找到合适的应用场景。"
  },
  {
    question: "如何获得更好的生成效果？",
    answer: "要获得更好的效果，建议：1）使用具体、详细的描述；2）合理设置参数；3）尝试不同的风格关键词；4）多练习和实验不同的描述方式。"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-xl text-gray-600">
            关于 Nano Banana 的常见问题解答
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

'use client'

import { MessageSquare, Users, Palette, Zap } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: "自然语言编辑",
    description: "支持中英文描述，智能理解用户意图，精确还原描述内容，让创作更加直观简单。"
  },
  {
    icon: Users,
    title: "角色一致性",
    description: "强大的角色保持能力，确保同一角色在不同场景中保持特征稳定，适合系列创作。"
  },
  {
    icon: Palette,
    title: "场景保留",
    description: "智能场景识别和保留，支持背景环境的一致性，让多张图片形成连贯的视觉故事。"
  },
  {
    icon: Zap,
    title: "高质量输出",
    description: "先进的AI算法确保生成图像的高质量，支持多种分辨率和格式，满足不同需求。"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            Nano Banana 核心功能
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            专业级AI图像生成工具，为创作者提供强大的技术支持
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

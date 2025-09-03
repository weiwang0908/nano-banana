'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-yellow-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 border-yellow-200 mb-8">
            <Sparkles className="mr-1 h-3 w-3" />
            专业的AI图像生成工具
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            探索{' '}
            <span className="text-yellow-600">Nano Banana</span>{' '}
            AI图像生成世界
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            专业的AI图像生成工具，支持自然语言编辑、角色一致性保持和场景保留。
            为设计师、艺术家和内容创作者提供强大的创作支持。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/blog" className="inline-flex items-center justify-center text-lg px-8 py-6 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition-colors">
              查看使用技巧
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/blog" className="inline-flex items-center justify-center text-lg px-8 py-6 border border-yellow-600 text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors">
              学习提示词
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">30秒</div>
              <div className="text-sm text-gray-600">快速生成</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">99%</div>
              <div className="text-sm text-gray-600">角色一致性</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">中英文</div>
              <div className="text-sm text-gray-600">双语支持</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

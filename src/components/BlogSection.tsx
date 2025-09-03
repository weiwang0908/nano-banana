import { getRecentPosts } from '@/lib/content'
import BlogCard from './BlogCard'
import Link from 'next/link'

export default function BlogSection() {
  const posts = getRecentPosts(6)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nano Banana 使用技巧
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            学习专业的AI图像生成技巧，掌握提示词写作方法，提升你的创作效率
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
          >
            查看更多技巧
          </Link>
        </div>
      </div>
    </section>
  )
}

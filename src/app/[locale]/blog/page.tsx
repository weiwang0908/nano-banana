import Header from '@/components/Header'
import { getAllPosts } from '@/lib/content'
import BlogCard from '@/components/BlogCard'
import { type Locale } from '@/lib/translations'

interface BlogPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Nano Banana 使用技巧
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                学习专业的AI图像生成技巧，掌握Nano Banana的核心功能，提升你的创作效率
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

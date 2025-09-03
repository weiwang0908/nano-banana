import Header from '@/components/Header'
import { getAllPosts } from '@/lib/content'
import BlogCard from '@/components/BlogCard'
import { translations, type Locale } from '@/lib/translations'

interface BlogPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const posts = getAllPosts()
  const t = translations[locale].blog

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

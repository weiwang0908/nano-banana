import { getRecentPosts } from '@/lib/content'
import BlogCard from './BlogCard'
import Link from 'next/link'
import { translations, type Locale } from '@/lib/translations'

interface BlogSectionProps {
  locale: Locale
}

export default function BlogSection({ locale }: BlogSectionProps) {
  const posts = getRecentPosts(6)
  const t = translations[locale].blog

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
          >
            {t.viewMore}
          </Link>
        </div>
      </div>
    </section>
  )
}

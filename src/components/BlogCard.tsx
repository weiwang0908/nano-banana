import Link from 'next/link'
import { Post } from '@/lib/content'
import { translations, type Locale } from '@/lib/translations'

interface BlogCardProps {
  post: Post
  locale: Locale
}

export default function BlogCard({ post, locale }: BlogCardProps) {
  const t = translations[locale].blog
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500">
            {formatDate(post.date)}
          </time>
          
          <Link
            href={`/${locale}/blog/${post.slug}`}
            className="text-yellow-600 hover:text-yellow-800 font-medium text-sm transition-colors"
          >
            {t.readMore}
          </Link>
        </div>
      </div>
    </article>
  )
}

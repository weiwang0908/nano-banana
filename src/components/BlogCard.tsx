import Link from 'next/link'
import { Post } from '@/lib/content'

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
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
            href={`/blog/${post.slug}`}
            className="text-yellow-600 hover:text-yellow-800 font-medium text-sm transition-colors"
          >
            阅读更多 →
          </Link>
        </div>
      </div>
    </article>
  )
}

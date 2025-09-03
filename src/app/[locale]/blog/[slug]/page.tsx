import Header from '@/components/Header'
import { getPostBySlug, getAllPosts } from '@/lib/content'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { type Locale } from '@/lib/translations'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
    locale: Locale
  }>
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.flatMap((post) => [
    { slug: post.slug, locale: 'en' as Locale },
    { slug: post.slug, locale: 'zh' as Locale }
  ])
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main className="pt-16">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回博客列表
          </Link>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600">
              <time className="text-sm">
                {formatDate(post.date)}
              </time>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import BlogSection from '@/components/BlogSection'
import CaseStudies from '@/components/CaseStudies'
import FAQ from '@/components/FAQ'
import { type Locale } from '@/lib/translations'

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params
  
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        <Features locale={locale} />
        <BlogSection locale={locale} />
        <CaseStudies locale={locale} />
        <FAQ locale={locale} />
      </main>
    </div>
  )
}
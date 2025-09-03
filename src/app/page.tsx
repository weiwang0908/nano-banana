import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import BlogSection from '@/components/BlogSection'
import CaseStudies from '@/components/CaseStudies'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <BlogSection />
        <CaseStudies />
        <FAQ />
      </main>
    </div>
  )
}
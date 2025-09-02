import Header from '@/components/Header'
import ResourcesHero from '@/components/resources/ResourcesHero'
import ResourcesGrid from '@/components/resources/ResourcesGrid'
import TemplatesSection from '@/components/resources/TemplatesSection'
import PromptsSection from '@/components/resources/PromptsSection'
import APIDocsSection from '@/components/resources/APIDocsSection'

export const metadata = {
  title: 'Nano Banana Resources - Templates, Prompts & API Docs',
  description: 'Access our comprehensive resource library: templates, prompt collections, parameter presets, and API documentation for Nano Banana.',
  keywords: 'nano banana resources, nano banana templates, nano banana prompts, nano banana API, nano banana presets',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ResourcesHero />
        <ResourcesGrid />
        <TemplatesSection />
        <PromptsSection />
        <APIDocsSection />
      </main>
    </div>
  )
}

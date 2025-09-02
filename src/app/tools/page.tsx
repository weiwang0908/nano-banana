import Header from '@/components/Header'
import ToolsHero from '@/components/tools/ToolsHero'
import ToolsGrid from '@/components/tools/ToolsGrid'
import InteractiveDemo from '@/components/tools/InteractiveDemo'
import ToolsFeatures from '@/components/tools/ToolsFeatures'

export const metadata = {
  title: 'Nano Banana Tools - Interactive AI Image Generation',
  description: 'Try Nano Banana tools directly in your browser. Interactive generators, parameter tuners, and comparison tools to master AI image creation.',
  keywords: 'nano banana tools, nano banana generator, AI image tools, nano banana parameters, interactive demo',
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ToolsHero />
        <ToolsGrid />
        <InteractiveDemo />
        <ToolsFeatures />
      </main>
    </div>
  )
}

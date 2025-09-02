import Header from '@/components/Header'
import GalleryHero from '@/components/gallery/GalleryHero'
import GalleryFilters from '@/components/gallery/GalleryFilters'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import GalleryStats from '@/components/gallery/GalleryStats'

export const metadata = {
  title: 'Nano Banana Gallery - AI Image Examples & Inspiration',
  description: 'Explore thousands of Nano Banana AI-generated images with detailed parameters. Get inspired and learn from the community\'s best creations.',
  keywords: 'nano banana gallery, nano banana examples, AI image gallery, nano banana inspiration, nano banana parameters',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GalleryHero />
        <GalleryFilters />
        <GalleryGrid />
        <GalleryStats />
      </main>
    </div>
  )
}

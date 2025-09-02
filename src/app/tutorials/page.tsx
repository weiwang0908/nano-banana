import Header from '@/components/Header'
import TutorialHero from '@/components/tutorials/TutorialHero'
import TutorialCategories from '@/components/tutorials/TutorialCategories'
import TutorialList from '@/components/tutorials/TutorialList'
import TutorialStats from '@/components/tutorials/TutorialStats'

export const metadata = {
  title: 'Nano Banana Tutorials - Learn AI Image Generation',
  description: 'Master Nano Banana with our comprehensive tutorials. From beginner basics to advanced techniques, learn everything you need to create stunning AI images.',
  keywords: 'nano banana tutorial, nano banana guide, AI image generation tutorial, nano banana parameters, nano banana settings',
}

export default function TutorialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TutorialHero />
        <TutorialCategories />
        <TutorialList />
        <TutorialStats />
      </main>
    </div>
  )
}

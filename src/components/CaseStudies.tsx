import Image from 'next/image'
import { translations, type Locale } from '@/lib/translations'

interface CaseStudy {
  title: string
  description: string
  image: string
  category: string
}

interface CaseStudiesProps {
  locale: Locale
}

export default function CaseStudies({ locale }: CaseStudiesProps) {
  const t = translations[locale].cases
  
  const caseStudies: CaseStudy[] = [
    {
      title: t.brandDesign.title,
      description: t.brandDesign.description,
      image: "/api/placeholder/400/300",
      category: "商业设计"
    },
    {
      title: t.artCreation.title,
      description: t.artCreation.description,
      image: "/api/placeholder/400/300",
      category: "艺术创作"
    },
    {
      title: t.contentMarketing.title,
      description: t.contentMarketing.description,
      image: "/api/placeholder/400/300",
      category: "内容营销"
    },
    {
      title: t.education.title,
      description: t.education.description,
      image: "/api/placeholder/400/300",
      category: "教育培训"
    }
  ]
  return (
    <section id="cases" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    {study.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {t.shareWork}
          </p>
          <a
            href="mailto:contact@nanobanana.ai"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
          >
            {t.contactUs}
          </a>
        </div>
      </div>
    </section>
  )
}

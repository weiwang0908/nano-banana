import Image from 'next/image'

interface CaseStudy {
  title: string
  description: string
  image: string
  category: string
}

const caseStudies: CaseStudy[] = [
  {
    title: "商业品牌设计",
    description: "为知名品牌创建统一的视觉形象，保持角色一致性，提升品牌识别度。",
    image: "/api/placeholder/400/300",
    category: "商业设计"
  },
  {
    title: "艺术创作项目",
    description: "艺术家使用Nano Banana创作系列作品，探索不同艺术风格的可能性。",
    image: "/api/placeholder/400/300",
    category: "艺术创作"
  },
  {
    title: "内容营销素材",
    description: "为社交媒体和营销活动生成高质量图像，提升内容吸引力和转化率。",
    image: "/api/placeholder/400/300",
    category: "内容营销"
  },
  {
    title: "教育课件制作",
    description: "为在线教育平台制作生动的教学素材，提升学习体验和效果。",
    image: "/api/placeholder/400/300",
    category: "教育培训"
  }
]

export default function CaseStudies() {
  return (
    <section id="cases" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            成功案例
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            看看其他用户如何使用 Nano Banana 创造出色的作品
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
            想要分享你的作品？联系我们展示你的创作成果
          </p>
          <a
            href="mailto:contact@nanobanana.ai"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
          >
            联系我们
          </a>
        </div>
      </div>
    </section>
  )
}

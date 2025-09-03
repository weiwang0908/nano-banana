'use client'

interface Step {
  name: string
  description: string
  image?: string
}

interface TutorialData {
  title: string
  description: string
  image?: string
  duration?: string
  steps?: Step[]
}

interface ToolData {
  title: string
  description: string
  features?: string[]
}

interface ImageItem {
  url: string
  description: string
  author: string
}

interface GalleryData {
  images?: ImageItem[]
}

interface ResourceData {
  title: string
  description: string
  type: string
}

interface StructuredDataProps {
  type: 'website' | 'tutorial' | 'tool' | 'gallery' | 'resource'
  data: TutorialData | ToolData | GalleryData | ResourceData | Record<string, unknown>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Nano Banana",
      "description": "Master Nano Banana AI image generation with comprehensive tutorials, interactive tools, and expert guidance.",
      "url": "https://nanobanana.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nanobanana.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }

    switch (type) {
      case 'tutorial':
        const tutorialData = data as TutorialData
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": tutorialData.title,
          "description": tutorialData.description,
          "image": tutorialData.image,
          "totalTime": tutorialData.duration,
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Nano Banana account"
            }
          ],
          "step": tutorialData.steps?.map((step: Step, index: number) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.description,
            "image": step.image
          })) || []
        }

      case 'tool':
        const toolData = data as ToolData
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": toolData.title,
          "description": toolData.description,
          "applicationCategory": "AI Image Generation Tool",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": toolData.features || []
        }

      case 'gallery':
        const galleryData = data as GalleryData
        return {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Nano Banana Gallery",
          "description": "Collection of AI-generated images created with Nano Banana",
          "image": galleryData.images?.map((img: ImageItem) => ({
            "@type": "ImageObject",
            "contentUrl": img.url,
            "description": img.description,
            "creator": {
              "@type": "Person",
              "name": img.author
            }
          })) || []
        }

      case 'resource':
        const resourceData = data as ResourceData
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": resourceData.title,
          "description": resourceData.description,
          "genre": "Educational Resource",
          "learningResourceType": resourceData.type,
          "educationalLevel": "Beginner to Advanced",
          "isAccessibleForFree": true
        }

      default:
        return baseData
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}

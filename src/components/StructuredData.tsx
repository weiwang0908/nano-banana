'use client'

interface StructuredDataProps {
  type: 'website' | 'tutorial' | 'tool' | 'gallery' | 'resource'
  data: any
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
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": data.title,
          "description": data.description,
          "image": data.image,
          "totalTime": data.duration,
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
          "step": data.steps?.map((step: any, index: number) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.description,
            "image": step.image
          })) || []
        }

      case 'tool':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": data.title,
          "description": data.description,
          "applicationCategory": "AI Image Generation Tool",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": data.features || []
        }

      case 'gallery':
        return {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Nano Banana Gallery",
          "description": "Collection of AI-generated images created with Nano Banana",
          "image": data.images?.map((img: any) => ({
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
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": data.title,
          "description": data.description,
          "genre": "Educational Resource",
          "learningResourceType": data.type,
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

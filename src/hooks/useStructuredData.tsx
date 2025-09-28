import { useEffect } from "react"

export function useStructuredData(data: any) {
  useEffect(() => {
    if (!data) return

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(data)
    script.id = `structured-data-${Date.now()}`
    document.head.appendChild(script)

    return () => {
      const element = document.getElementById(script.id)
      if (element) {
        element.remove()
      }
    }
  }, [data])
}

export function useBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://guatemala-transport-guide.com${item.url}`
    }))
  }

  useStructuredData(breadcrumbData)
}

export function useArticleStructuredData(article: {
  title: string
  description: string
  author: string
  publishedDate: string
  modifiedDate?: string
  image: string
  url: string
  keywords?: string[]
}) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "image": `https://guatemala-transport-guide.com${article.image}`,
    "url": `https://guatemala-transport-guide.com${article.url}`,
    "keywords": article.keywords?.join(", "),
    "publisher": {
      "@type": "Organization",
      "name": "Blog Turístico Guatemala",
      "logo": {
        "@type": "ImageObject",
        "url": "https://guatemala-transport-guide.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://guatemala-transport-guide.com${article.url}`
    }
  }

  useStructuredData(articleData)
}

export function useTravelGuideStructuredData(guide: {
  title: string
  description: string
  destination: string
  duration?: string
  cost?: string
  image: string
  url: string
  includes?: string[]
  difficulty?: string
}) {
  const guideData = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": guide.title,
    "description": guide.description,
    "touristDestination": {
      "@type": "TouristDestination",
      "name": guide.destination,
      "description": `Información de transporte y viaje para ${guide.destination}`,
      "image": `https://guatemala-transport-guide.com${guide.image}`
    },
    "duration": guide.duration,
    "estimatedCost": guide.cost ? {
      "@type": "MonetaryAmount",
      "value": guide.cost,
      "currency": "GTQ"
    } : undefined,
    "image": `https://guatemala-transport-guide.com${guide.image}`,
    "url": `https://guatemala-transport-guide.com${guide.url}`,
    "includes": guide.includes,
    "difficulty": guide.difficulty,
    "publisher": {
      "@type": "Organization",
      "name": "Blog Turístico Guatemala"
    }
  }

  useStructuredData(guideData)
}
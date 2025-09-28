import { useEffect } from "react"
import { useLanguage } from "./LanguageProvider"
import { APP_CONFIG } from "../config/app"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: "website" | "article" | "profile"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  // Destination-specific SEO props
  location?: {
    department?: string
    country?: string
    latitude?: number
    longitude?: number
  }
  altitude?: string
  climate?: string
  difficulty?: string
  duration?: string
  cost?: string
}

export function SEO({
  title,
  description,
  keywords,
  image = "/og-image.jpg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  location,
  altitude,
  climate,
  difficulty,
  duration,
  cost
}: SEOProps) {
  const { language, t } = useLanguage()

  const defaultTitle = t("seo.defaultTitle")
  const defaultDescription = t("seo.defaultDescription")
  const defaultKeywords = t("seo.keywords")
  const defaultAuthor = t("seo.author")

  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const seoDescription = description || defaultDescription
  const seoKeywords = keywords || defaultKeywords
  const seoAuthor = author || defaultAuthor
  const baseUrl = APP_CONFIG.baseUrl
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`

  useEffect(() => {
    // Update document title
    document.title = seoTitle

    // Update meta tags
    updateMetaTag("name", "description", seoDescription)
    updateMetaTag("name", "keywords", seoKeywords)
    updateMetaTag("name", "author", seoAuthor)
    updateMetaTag("name", "language", language === "es" ? "Spanish" : "English")

    // Update Open Graph meta tags
    updateMetaTag("property", "og:title", seoTitle)
    updateMetaTag("property", "og:description", seoDescription)
    updateMetaTag("property", "og:image", fullImageUrl)
    updateMetaTag("property", "og:url", fullUrl)
    updateMetaTag("property", "og:type", type)
    updateMetaTag("property", "og:locale", language === "es" ? "es_GT" : "en_US")

    // Update Twitter meta tags
    updateMetaTag("property", "twitter:title", seoTitle)
    updateMetaTag("property", "twitter:description", seoDescription)
    updateMetaTag("property", "twitter:image", fullImageUrl)
    updateMetaTag("property", "twitter:url", fullUrl)

    // Update canonical URL
    updateCanonicalUrl(fullUrl)

    // Update lang attribute
    document.documentElement.lang = language

    // Article-specific meta tags
    if (type === "article") {
      if (publishedTime) {
        updateMetaTag("property", "article:published_time", publishedTime)
      }
      if (modifiedTime) {
        updateMetaTag("property", "article:modified_time", modifiedTime)
      }
      if (author) {
        updateMetaTag("property", "article:author", author)
      }
      if (section) {
        updateMetaTag("property", "article:section", section)
      }
      if (tags && tags.length > 0) {
        // Remove existing article:tag meta tags
        const existingTags = document.querySelectorAll('meta[property="article:tag"]')
        existingTags.forEach(tag => tag.remove())

        // Add new article:tag meta tags
        tags.forEach(tag => {
          const metaTag = document.createElement("meta")
          metaTag.setAttribute("property", "article:tag")
          metaTag.setAttribute("content", tag)
          document.head.appendChild(metaTag)
        })
      }
    }

    // Destination-specific meta tags for better local SEO
    if (location?.department) {
      updateMetaTag("name", "geo.region", `GT-${location.department}`)
      updateMetaTag("property", "og:locality", location.department)
    }
    if (location?.country) {
      updateMetaTag("name", "geo.country", location.country)
      updateMetaTag("property", "og:country-name", location.country)
    }
    if (location?.latitude && location?.longitude) {
      updateMetaTag("name", "geo.position", `${location.latitude};${location.longitude}`)
      updateMetaTag("name", "ICBM", `${location.latitude}, ${location.longitude}`)
    }
    if (altitude) {
      updateMetaTag("name", "destination.altitude", altitude)
      updateMetaTag("property", "destination:altitude", altitude)
    }
    if (climate) {
      updateMetaTag("name", "destination.climate", climate)
      updateMetaTag("property", "destination:climate", climate)
    }
    if (difficulty) {
      updateMetaTag("name", "travel.difficulty", difficulty)
      updateMetaTag("property", "travel:difficulty", difficulty)
    }
    if (duration) {
      updateMetaTag("name", "travel.duration", duration)
      updateMetaTag("property", "travel:duration", duration)
    }
    if (cost) {
      updateMetaTag("name", "travel.cost", cost)
      updateMetaTag("property", "travel:cost", cost)
    }
  }, [
    seoTitle,
    seoDescription,
    seoKeywords,
    seoAuthor,
    fullImageUrl,
    fullUrl,
    type,
    language,
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    location,
    altitude,
    climate,
    difficulty,
    duration,
    cost
  ])

  return null
}

function updateMetaTag(attribute: string, name: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)

  if (element) {
    element.setAttribute("content", content)
  } else {
    element = document.createElement("meta")
    element.setAttribute(attribute, name)
    element.setAttribute("content", content)
    document.head.appendChild(element)
  }
}

function updateCanonicalUrl(url: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement

  if (element) {
    element.href = url
  } else {
    element = document.createElement("link")
    element.rel = "canonical"
    element.href = url
    document.head.appendChild(element)
  }
}

// Structured Data helpers
export function addStructuredData(data: any) {
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
}

// Common structured data schemas
export const structuredDataSchemas = {
  blogPosting: (article: {
    title: string
    description: string
    author: string
    publishedDate: string
    modifiedDate?: string
    image: string
    url: string
    keywords?: string[]
  }) => ({
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
    "image": article.image,
    "url": article.url,
    "keywords": article.keywords?.join(", "),
    "publisher": {
      "@type": "Organization",
      "name": "Blog Turístico Guatemala"
    }
  }),

  travelGuide: (guide: {
    title: string
    description: string
    destination: string
    duration: string
    cost: string
    image: string
    url: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": guide.title,
    "description": guide.description,
    "touristDestination": {
      "@type": "TouristDestination",
      "name": guide.destination
    },
    "duration": guide.duration,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "value": guide.cost,
      "currency": "GTQ"
    },
    "image": guide.image,
    "url": guide.url
  }),

  breadcrumbList: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })
}
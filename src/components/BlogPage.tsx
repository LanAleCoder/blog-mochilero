import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Copy, Check } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { AdBanner } from "./AdBanner"
import { useLanguage } from "./LanguageProvider"
import { useBreadcrumbStructuredData, useArticleStructuredData } from "../hooks/useStructuredData"

interface BlogPageProps {
  article: BlogArticle
  onBack: () => void
}

interface BlogArticle {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  featured?: boolean
}

export function BlogPage({ article, onBack }: BlogPageProps) {
  const { t } = useLanguage()
  const [copySuccess, setCopySuccess] = useState(false)

  // Create URL slug for structured data
  const createSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const articleSlug = createSlug(article.title)

  // Add structured data for breadcrumbs
  useBreadcrumbStructuredData([
    { name: "Inicio", url: "/" },
    { name: "Guías", url: "/#guides" },
    { name: article.title, url: `/blog/${articleSlug}` }
  ])

  // Add structured data for article
  useArticleStructuredData({
    title: article.title,
    description: article.excerpt,
    author: article.author,
    publishedDate: new Date(article.date).toISOString(),
    image: article.image,
    url: `/blog/${articleSlug}`,
    keywords: article.tags
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Share functions
  const getFullUrl = () => {
    return `https://guatemala-transport-guide.com/blog/${article.id}`
  }

  const shareOnFacebook = (article: BlogArticle) => {
    const url = getFullUrl()
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(article.title + ' - ' + article.excerpt)}`
    window.open(facebookUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes')
  }

  const shareOnTwitter = (article: BlogArticle) => {
    const url = getFullUrl()
    const text = `${article.title} - ${article.excerpt.substring(0, 200)}...`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=Guatemala,Viajes,Transporte`
    window.open(twitterUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes')
  }

  const shareOnWhatsApp = (article: BlogArticle) => {
    const url = getFullUrl()
    const text = `${article.title}\n\n${article.excerpt}\n\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }

  const copyToClipboard = async (article: BlogArticle) => {
    const url = getFullUrl()
    try {
      await navigator.clipboard.writeText(url)
      alert('¡Enlace copiado al portapapeles!')
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('¡Enlace copiado al portapapeles!')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("common.backToDestinations").replace("destinos", "guías")}
          </Button>

          <div className="max-w-4xl mx-auto">
            <Badge className="bg-blue-600 text-white mb-4">
              {article.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>{article.tags.length} temas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Featured Image */}
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ad Banner Top */}
            <AdBanner size="medium" className="mb-8" />

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div
                className="text-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg mb-4 text-foreground">Temas relacionados:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg mb-4 text-foreground">Compartir artículo:</h3>
              <div className="flex gap-4 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => shareOnFacebook(article)}
                  className="hover:bg-blue-50 hover:border-blue-300"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => shareOnTwitter(article)}
                  className="hover:bg-sky-50 hover:border-sky-300"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => shareOnWhatsApp(article)}
                  className="hover:bg-green-50 hover:border-green-300"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(article)}
                  className="hover:bg-gray-50 hover:border-gray-300"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Copiar enlace
                </Button>
              </div>
            </div>

            {/* Ad Banner Bottom */}
            <AdBanner size="small" className="mt-8" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Article Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Información del artículo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Autor: {article.author}</span>
                  </div> */}
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Publicado: {formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Lectura: {article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Categoría: {article.category}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Side Ad */}
              <AdBanner size="large" position="side" />

              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle>Contenido del artículo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="text-muted-foreground">
                      <p>• Introducción</p>
                      <p>• Opciones principales</p>
                      <p>• Consejos prácticos</p>
                      <p>• Costos y presupuesto</p>
                      <p>• Conclusiones</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
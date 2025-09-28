import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { FeaturedDestinations } from "./components/FeaturedDestinations"
import { TransportationGuide } from "./components/TransportationGuide"
import { TravelTips } from "./components/TravelTips"
import { Footer } from "./components/Footer"
import { DestinationPage } from "./components/DestinationPage"
import { AdBanner } from "./components/AdBanner"
import { BlogSection } from "./components/BlogSection"
import { BlogPage } from "./components/BlogPage"
import { FloatingAd } from "./components/FloatingAd"
import { ThemeProvider } from "./components/ThemeProvider"
import { LanguageProvider } from "./components/LanguageProvider"
import { SEO } from "./components/SEO"
import { useBreadcrumbStructuredData } from "./hooks/useStructuredData"
import { getBlogArticleBySlug, getBlogArticleByTitle, type BlogArticle } from "./data/blogData"

// Utility functions for URL handling
const createDestinationSlug = (name: string) => {
  return name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

const parseUrlPath = () => {
  const path = window.location.pathname
  if (path.startsWith('/destino/')) {
    const slug = path.replace('/destino/', '')
    return { page: 'destination', slug, type: 'destination' }
  } else if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '')
    return { page: 'blog', slug, type: 'blog' }
  }
  return { page: 'home', slug: null, type: 'home' }
}

// Destination mapping for URL routing
const destinationMap: Record<string, any> = {
  'antigua-guatemala': {
    name: 'Antigua Guatemala',
    id: 'antigua',
    description: 'Colonial charm with cobblestone streets and volcanic backdrop',
    fromCapital: '1 hour',
    cost: '$3-25',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1618946506952-a93a84299d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWF0ZW1hbGElMjBsYW5kc2NhcGUlMjBBbnRpZ3VhJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU4OTU3MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    transportOptions: ['Tourist shuttle', 'First class bus', 'Private car'],
    highlights: ['UNESCO World Heritage', 'Volcano hiking', 'Spanish schools'],
    info: {
      department: 'Sacatepéquez',
      bestTime: 'Nov-Abr',
      climate: 'Templado',
      altitude: '1,530 msnm',
      population: '45,000 hab.',
      founded: '1543'
    }
  },
  'el-paredon': {
    name: 'El Paredón',
    id: 'elparedon',
    description: 'Relaxed surf town on the Pacific coast, known for its black sand beaches, waves, and mangrove tours.',
    fromCapital: '2.5 - 3 hours',
    cost: '$20-40',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1606788075761-3f3e3a0f6a0d?ixlib=rb-4.1.0&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxFbCUyMFBhcmVkb24lMjBndWF0ZW1hbGF8ZW58MXx8fHww&auto=format&fit=crop&w=1080&q=80',
    transportOptions: ['Tourist shuttle', 'Private car', 'Chicken bus + TukTuk'],
    highlights: ['Surfing', 'Mangrove tours', 'Sea turtle conservation', 'Black sand beaches'],
    info: {
      department: 'Escuintla',
      bestTime: 'Mar-Sep',
      climate: 'Tropical costero',
      altitude: 'Nivel del mar',
      population: '2,000 hab.',
      founded: 'Pueblo pesquero'
    }
  },
  'lake-atitlan': {
    name: 'Lake Atitlán',
    id: 'atitlan',
    description: 'Stunning volcanic lake surrounded by indigenous villages',
    fromCapital: '3 hours',
    cost: '$5-35',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1647582889168-19a2a78832c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwQXRpdGxhbiUyMEd1YXRlbWFsYSUyMHZvbGNhbm9lc3xlbnwxfHx8fDE3NTg5NTcxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    transportOptions: ['Private shuttle', 'Chicken bus', 'Tourist shuttle'],
    highlights: ['Boat transportation', 'Indigenous culture', 'Volcano views'],
    info: {
      department: 'Sololá',
      bestTime: 'Oct-Abr',
      climate: 'Templado',
      altitude: '1,562 msnm',
      population: '320,000 hab.',
      founded: 'Época precolombina'
    }
  },
  'tikal-national-park': {
    name: 'Tikal National Park',
    id: 'tikal',
    description: 'Ancient Maya ruins in the heart of the jungle',
    fromCapital: '8+ hours',
    cost: '$15-150',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1610254587680-2d99a3427a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaWthbCUyMEd1YXRlbWFsYSUyME1heWElMjBydWluc3xlbnwxfHx8fDE3NTg5NTcxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    transportOptions: ['Domestic flight', 'Overnight bus', 'Private tour'],
    highlights: ['Maya temples', 'Wildlife spotting', 'Sunrise tours'],
    info: {
      department: 'Petén',
      bestTime: 'Dic-Abr',
      climate: 'Tropical húmedo',
      altitude: '200-300 msnm',
      population: 'Área protegida',
      founded: '600 a.C.'
    }
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'destination' | 'blog'>('home')
  const [selectedDestination, setSelectedDestination] = useState<any>(null)
  const [selectedBlogArticle, setSelectedBlogArticle] = useState<BlogArticle | null>(null)

  // Initialize page state from URL on load
  useEffect(() => {
    const { page, slug, type } = parseUrlPath()
    if (type === 'destination' && slug && destinationMap[slug]) {
      setSelectedDestination(destinationMap[slug])
      setCurrentPage('destination')
    } else if (type === 'blog' && slug) {
      const article = getBlogArticleBySlug(slug)
      if (article) {
        setSelectedBlogArticle(article)
        setCurrentPage('blog')
      }
    }
  }, [])

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const { page, slug, type } = parseUrlPath()

      // Scroll to top when navigating with browser buttons
      window.scrollTo(0, 0)

      if (type === 'destination' && slug && destinationMap[slug]) {
        setSelectedDestination(destinationMap[slug])
        setCurrentPage('destination')
        setSelectedBlogArticle(null)
      } else if (type === 'blog' && slug) {
        const article = getBlogArticleBySlug(slug)
        if (article) {
          setSelectedBlogArticle(article)
          setCurrentPage('blog')
          setSelectedDestination(null)
        }
      } else {
        setCurrentPage('home')
        setSelectedDestination(null)
        setSelectedBlogArticle(null)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleDestinationClick = (destination: any) => {
    const slug = createDestinationSlug(destination.name)
    const url = `/destino/${slug}`

    // Update browser URL without page reload
    window.history.pushState({ page: 'destination', slug }, '', url)

    // Scroll to top of page
    window.scrollTo(0, 0)

    setSelectedDestination(destination)
    setCurrentPage('destination')
  }

  const handleBlogArticleClick = (title: string) => {
    console.log('Blog article clicked:', title)

    // Get the article directly by title
    const article = getBlogArticleByTitle(title)
    console.log('Found article:', article)

    if (article) {
      const slug = article.id
      const url = `/blog/${slug}`
      console.log('Navigating to:', url)

      // Update browser URL without page reload
      window.history.pushState({ page: 'blog', slug }, '', url)

      // Scroll to top of page
      window.scrollTo(0, 0)

      setSelectedBlogArticle(article)
      setCurrentPage('blog')
      setSelectedDestination(null)
    } else {
      console.error('Article not found for title:', title)
    }
  }

  const handleBackToHome = () => {
    // Update browser URL to home
    window.history.pushState({ page: 'home' }, '', '/')

    // Scroll to top of page
    window.scrollTo(0, 0)

    setCurrentPage('home')
    setSelectedDestination(null)
    setSelectedBlogArticle(null)
  }

  // Breadcrumb for home page
  useBreadcrumbStructuredData([
    { name: "Inicio", url: "/" }
  ])

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LanguageProvider defaultLanguage="es">
        {currentPage === 'destination' && selectedDestination ? (
          <>
            <SEO
              title={selectedDestination.name}
              description={`Guía completa de transporte para ${selectedDestination.name}. Información sobre rutas, costos, horarios y consejos prácticos para llegar a este destino en Guatemala.`}
              keywords={`${selectedDestination.name}, Guatemala, transporte, viajes, rutas, costos`}
              type="article"
              url={`/destino/${createDestinationSlug(selectedDestination.name)}`}
              location={{
                department: selectedDestination.info?.department || 'Guatemala',
                country: 'Guatemala'
              }}
              altitude={selectedDestination.info?.altitude}
              climate={selectedDestination.info?.climate}
              difficulty={selectedDestination.difficulty}
              duration={selectedDestination.fromCapital}
              cost={selectedDestination.cost}
            />
            <DestinationPage
              destination={selectedDestination}
              onBack={handleBackToHome}
            />
          </>
        ) : currentPage === 'blog' && selectedBlogArticle ? (
          <>
            <SEO
              title={selectedBlogArticle.title}
              description={selectedBlogArticle.excerpt}
              keywords={selectedBlogArticle.tags.join(', ')}
              type="article"
              url={`/blog/${selectedBlogArticle.id}`}
              author={selectedBlogArticle.author}
              publishedTime={new Date(selectedBlogArticle.date).toISOString()}
              tags={selectedBlogArticle.tags}
            />
            <BlogPage
              article={selectedBlogArticle}
              onBack={handleBackToHome}
            />
          </>
        ) : (
          <div className="min-h-screen bg-background text-foreground">
            <SEO />
            <Header />
            <Hero />

            {/* Top Ad Banner */}
            <div className="container mx-auto px-4 py-4">
              <AdBanner size="medium" />
            </div>

            <FeaturedDestinations onDestinationClick={handleDestinationClick} />

            {/* Middle Ad Banner */}
            <div className="container mx-auto px-4 py-4">
              <AdBanner size="small" />
            </div>

            <TransportationGuide />

            {/* Blog Section */}
            <BlogSection onBlogClick={handleBlogArticleClick} />

            <TravelTips />
            <Footer />

            {/* Floating Ad */}
            {/* <FloatingAd /> */}
          </div>
        )}
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
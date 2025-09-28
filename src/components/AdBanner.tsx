import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { useEffect, useRef } from "react"

interface AdBannerProps {
  size?: "small" | "medium" | "large"
  position?: "top" | "side" | "bottom"
  className?: string
  useAdsterra?: boolean
}

export function AdBanner({ size = "medium", position = "top", className = "", useAdsterra = false }: AdBannerProps) {
  const adsterraRef = useRef<HTMLDivElement>(null)

  const getAdSize = () => {
    switch (size) {
      case "small":
        return "h-20 text-xs"
      case "large":
        return "h-40 text-sm"
      default:
        return "h-24 text-sm"
    }
  }

  // Componente para Adsterra
  const AdsterraAd = () => {
    useEffect(() => {
      if (adsterraRef.current) {
        // Limpiar cualquier script anterior
        adsterraRef.current.innerHTML = ''

        // Crear el script de configuración
        const configScript = document.createElement('script')
        configScript.type = 'text/javascript'
        configScript.innerHTML = `
          atOptions = {
            'key' : 'd7cffe183e61f81f53eb6c057369a5ae',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        `

        // Crear el script de invocación
        const invokeScript = document.createElement('script')
        invokeScript.type = 'text/javascript'
        invokeScript.src = '//www.highperformanceformat.com/d7cffe183e61f81f53eb6c057369a5ae/invoke.js'

        // Agregar ambos scripts al contenedor
        adsterraRef.current.appendChild(configScript)
        adsterraRef.current.appendChild(invokeScript)
      }
    }, [])

    return (
      <div className={`w-full ${className}`}>
        <div className="text-center mb-2">
          <Badge variant="outline" className="text-xs text-gray-500">
            Publicidad
          </Badge>
        </div>
        <div
          ref={adsterraRef}
          className="flex justify-center items-center min-h-[90px] bg-gray-50 border border-gray-200 rounded"
          style={{ maxWidth: '728px', margin: '0 auto' }}
        />
      </div>
    )
  }

  // Si useAdsterra es true, mostrar el anuncio de Adsterra
  if (useAdsterra) {
    return <AdsterraAd />
  }

  const getAdContent = () => {
    const ads = [
      {
        title: "Hotel Casa Santo Domingo",
        description: "Luxury hotel in Antigua Guatemala",
        cta: "Book Now - 20% Off"
      },
      {
        title: "Guatemala Travel Insurance",
        description: "Protect your journey with comprehensive coverage",
        cta: "Get Quote"
      },
      {
        title: "Shuttle Services Guatemala",
        description: "Comfortable private shuttles to all destinations",
        cta: "Reserve Now"
      },
      {
        title: "Spanish Schools Antigua",
        description: "Learn Spanish while traveling",
        cta: "Learn More"
      }
    ]
    
    return ads[Math.floor(Math.random() * ads.length)]
  }

  const ad = getAdContent()

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-2">
        <Badge variant="outline" className="text-xs text-gray-500">
          Publicidad
        </Badge>
      </div>
      <Card className={`${getAdSize()} bg-gradient-to-r from-blue-50 to-indigo-50 border-dashed border-gray-300 hover:shadow-md transition-shadow cursor-pointer`}>
        <CardContent className="flex items-center justify-between h-full p-4">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">{ad.title}</h4>
            <p className="text-gray-600 text-xs">{ad.description}</p>
          </div>
          <div className="ml-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
              {ad.cta}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

interface AdBannerProps {
  size?: "small" | "medium" | "large"
  position?: "top" | "side" | "bottom"
  className?: string
}

export function AdBanner({ size = "medium", position = "top", className = "" }: AdBannerProps) {
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
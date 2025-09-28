import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function FloatingAd() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)

  useEffect(() => {
    // Show ad after 10 seconds, only once per session
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setIsVisible(true)
        setHasBeenShown(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [hasBeenShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-in slide-in-from-bottom-4">
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-0 shadow-lg">
        <CardContent className="p-4 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1 right-1 h-6 w-6 text-white hover:bg-white/20"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="pr-6">
            <h3 className="font-semibold mb-2">¡Planifica tu Viaje!</h3>
            <p className="text-sm text-green-100 mb-3">
              Obtén descuentos en shuttles privados y hoteles recomendados.
            </p>
            <Button 
              size="sm" 
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={handleClose}
            >
              Ver Ofertas
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
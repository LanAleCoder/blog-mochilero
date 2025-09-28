import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Search, ArrowRight } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { useLanguage } from "./LanguageProvider"

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1618946506952-a93a84299d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWF0ZW1hbGElMjBsYW5kc2NhcGUlMjBBbnRpZ3VhJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU4OTU3MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Beautiful Guatemala landscape with colorful colonial architecture in Antigua"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          {t("hero.subtitle")}
        </p>
        
        {/* <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Where do you want to go?" 
              className="pl-10 h-12 bg-white/95 border-0"
            />
          </div>
          <Button size="lg" className="h-12 px-8">
            {t("hero.cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
        
        <div className="flex flex-wrap justify-center gap-2">
          <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            Antigua
          </Button>
          <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            Lake Atitlán
          </Button>
          <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            Tikal
          </Button>
          <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            Semuc Champey
          </Button>
        </div>
      </div>
    </section>
  )
}
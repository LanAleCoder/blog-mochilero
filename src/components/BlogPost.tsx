import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface BlogPostProps {
  title: string
  excerpt: string
  image: string
  author?: string
  date: string
  readTime: string
  category: string
  featured?: boolean
  onReadMore?: () => void
}

export function BlogPost({
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
  featured = false,
  onReadMore
}: BlogPostProps) {
  return (
    <Card className={`overflow-hidden group hover:shadow-lg transition-shadow ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 text-white">
            {category}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-red-600 text-white">
              Destacado
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className={`group-hover:text-blue-600 transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
          {title}
        </CardTitle>
        <CardDescription className={featured ? 'text-base' : 'text-sm'}>
          {excerpt}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
           
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        
        <Button variant="outline" className="group" onClick={onReadMore}>
          Leer más
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  )
}
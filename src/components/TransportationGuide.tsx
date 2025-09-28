import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Car, Bus, Plane, Ship, Clock, DollarSign, Users } from "lucide-react"
import { useLanguage } from "./LanguageProvider"

export function TransportationGuide() {
  const { t } = useLanguage()
  const transportOptions = [
    {
      id: "private",
      title: "Private Transportation",
      icon: Car,
      description: "Comfortable and flexible option for travelers",
      options: [
        {
          name: "Private Shuttle",
          cost: "$15-40 per person",
          duration: "2-6 hours",
          comfort: "High",
          description: "Door-to-door service, AC, professional drivers"
        },
        {
          name: "Rental Car",
          cost: "$30-60 per day",
          duration: "Self-paced",
          comfort: "High",
          description: "Complete freedom, requires international license"
        },
        {
          name: "Taxi/Uber",
          cost: "$20-100+",
          duration: "Variable",
          comfort: "Medium",
          description: "Available in major cities, negotiate long-distance fares"
        }
      ]
    },
    {
      id: "public",
      title: "Public Transportation",
      icon: Bus,
      description: "Budget-friendly and authentic local experience",
      options: [
        {
          name: "Chicken Bus",
          cost: "$1-5",
          duration: "2-8 hours",
          comfort: "Low",
          description: "Colorful former US school buses, very cheap, crowded"
        },
        {
          name: "First Class Bus",
          cost: "$5-15",
          duration: "2-6 hours",
          comfort: "Medium",
          description: "AC, comfortable seats, direct routes (Pullman, Fuente del Norte)"
        },
        {
          name: "Local Buses",
          cost: "$0.50-2",
          duration: "Variable",
          comfort: "Low",
          description: "City transportation, very cheap but can be crowded"
        }
      ]
    },
    {
      id: "alternative",
      title: "Alternative Options",
      icon: Ship,
      description: "Unique ways to reach special destinations",
      options: [
        {
          name: "Boat Transport",
          cost: "$3-15",
          duration: "20min-2 hours",
          comfort: "Medium",
          description: "Essential for Lake Atitlán villages, Río Dulce"
        },
        {
          name: "Domestic Flights",
          cost: "$100-200",
          duration: "45-90 min",
          comfort: "High",
          description: "Guatemala City to Flores (Tikal), limited routes"
        },
        {
          name: "Tourist Shuttle",
          cost: "$10-25",
          duration: "2-5 hours",
          comfort: "High",
          description: "Shared shuttles between popular destinations"
        }
      ]
    }
  ]

  return (
    <section id="transportation" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">{t("transport.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("transport.subtitle")}
          </p>
        </div>

        <Tabs defaultValue="private" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {transportOptions.map((option) => (
              <TabsTrigger key={option.id} value={option.id} className="flex items-center gap-2">
                <option.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{option.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {transportOptions.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-6">
                <h3 className="text-2xl mb-2 text-foreground">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.options.map((option, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {option.name}
                        <Badge variant="outline">{option.comfort} Comfort</Badge>
                      </CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span>Cost: {option.cost}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span>Duration: {option.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
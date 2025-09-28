import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Clock, DollarSign, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";

interface FeaturedDestinationsProps {
  onDestinationClick: (destination: any) => void;
}

export function FeaturedDestinations({
  onDestinationClick,
}: FeaturedDestinationsProps) {
  const { t } = useLanguage();
  const destinations = [
    {
      name: "Antigua Guatemala",
      description:
        "Colonial charm with cobblestone streets and volcanic backdrop",
      image:
        "https://images.unsplash.com/photo-1618946506952-a93a84299d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWF0ZW1hbGElMjBsYW5kc2NhcGUlMjBBbnRpZ3VhJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU4OTU3MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fromCapital: "1 hour",
      cost: "$3-25",
      id: "antigua",
      difficulty: "Easy",
      transportOptions: ["Tourist shuttle", "First class bus", "Private car"],
      highlights: [
        "UNESCO World Heritage",
        "Volcano hiking",
        "Spanish schools",
      ],
    },
    {
      name: "El Paredón",
      description:
        "Relaxed surf town on the Pacific coast, known for its black sand beaches, waves, and mangrove tours.",
      image:
        "https://aprende.guatemala.com/wp-content/uploads/2024/05/Playa-El-Paredon-en-Escuintla-Guatemala-2.jpg",
      fromCapital: "2.5 - 3 hours",
      cost: "$20-40",
      difficulty: "Easy",
      transportOptions: [
        "Tourist shuttle",
        "Private car",
        "Chicken bus + TukTuk",
      ],
      highlights: [
        "Surfing",
        "Mangrove tours",
        "Sea turtle conservation",
        "Black sand beaches",
      ],
    },

    // {
    //   name: "Lake Atitlán",
    //   description: "Stunning volcanic lake surrounded by indigenous villages",
    //   image: "https://images.unsplash.com/photo-1647582889168-19a2a78832c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwQXRpdGxhbiUyMEd1YXRlbWFsYSUyMHZvbGNhbm9lc3xlbnwxfHx8fDE3NTg5NTcxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   fromCapital: "3 hours",
    //   cost: "$5-35",
    //   difficulty: "Medium",
    //   transportOptions: ["Private shuttle", "Chicken bus", "Tourist shuttle"],
    //   highlights: ["Boat transportation", "Indigenous culture", "Volcano views"]
    // },
    // {
    //   name: "Tikal National Park",
    //   description: "Ancient Maya ruins in the heart of the jungle",
    //   image: "https://images.unsplash.com/photo-1610254587680-2d99a3427a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaWthbCUyMEd1YXRlbWFsYSUyME1heWElMjBydWluc3xlbnwxfHx8fDE3NTg5NTcxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   fromCapital: "8+ hours",
    //   cost: "$15-150",
    //   difficulty: "Hard",
    //   transportOptions: ["Domestic flight", "Overnight bus", "Private tour"],
    //   highlights: ["Maya temples", "Wildlife spotting", "Sunrise tours"]
    // },
    // {
    //   name: "Semuc Champey",
    //   description: "Natural limestone pools in lush jungle setting",
    //   image: "https://images.unsplash.com/photo-1641391688046-6b5d4cab821b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWF0ZW1hbGElMjB0cmF2ZWwlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NTg5NTcxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   fromCapital: "5-6 hours",
    //   cost: "$8-40",
    //   difficulty: "Hard",
    //   transportOptions: ["Tourist shuttle", "Local buses", "Private tour"],
    //   highlights: ["Natural pools", "Cave exploration", "Adventure activities"]
    // },
    // {
    //   name: "Río Dulce",
    //   description: "Tropical river connecting lake to Caribbean coast",
    //   image: "https://images.unsplash.com/photo-1644706257741-1ea8e7a30828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZW50cmFsJTIwQW1lcmljYSUyMHRyYXZlbCUyMGd1aWRlfGVufDF8fHx8MTc1ODk1NzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   fromCapital: "4-5 hours",
    //   cost: "$6-30",
    //   difficulty: "Medium",
    //   transportOptions: ["First class bus", "Boat transport", "Private shuttle"],
    //   highlights: ["River tours", "Hot springs", "Bird watching"]
    // },
    // {
    //   name: "Quetzaltenango (Xela)",
    //   description: "Guatemala's second city, gateway to highlands",
    //   image: "https://images.unsplash.com/photo-1745182477705-b8979cbf42b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWF0ZW1hbGElMjBjaGlja2VuJTIwYnVzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU4OTU3MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   fromCapital: "4 hours",
    //   cost: "$4-25",
    //   difficulty: "Easy",
    //   transportOptions: ["First class bus", "Chicken bus", "Private shuttle"],
    //   highlights: ["Highland culture", "Language schools", "Market visits"]
    // }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="destinations" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            {t("destinations.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("destinations.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getDifficultyColor(destination.difficulty)}>
                    {destination.difficulty}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  {destination.name}
                </CardTitle>
                <CardDescription>
                  {t(`destinations.places.${destination.id}.description`)}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{destination.fromCapital}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span>{destination.cost}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Transport Options:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {destination.transportOptions.map((option, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {option}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full"
                  onClick={() => onDestinationClick(destination)}
                >
                  {t("destinations.transportDetails")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

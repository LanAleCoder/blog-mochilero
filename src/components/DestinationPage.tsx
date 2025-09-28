import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { AdBanner } from "./AdBanner";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Star,
  Navigation,
  Phone,
  AlertTriangle,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { JSX } from "react";
import { useBreadcrumbStructuredData, useTravelGuideStructuredData } from "../hooks/useStructuredData";

// Types for better type safety
interface TransportOption {
  name: string;
  cost: string;
  duration: string;
  companies: (string | JSX.Element)[];
  description: string;
  tips: string | JSX.Element;
}

interface Attraction {
  name: string;
  type: string;
  description: string;
  cost: string;
  time: string;
}

interface DestinationInfo {
  department: string;
  bestTime: string;
  climate: string;
  altitude?: string;
  population?: string;
  founded?: string;
}

interface DestinationData {
  name: string;
  description: string;
  fromCapital: string;
  cost: string;
  difficulty: "Easy" | "Medium" | "Hard";
  image: string;
  info: DestinationInfo;
  transportation: {
    private: TransportOption[];
    public: TransportOption[];
  };
  attractions: Attraction[];
}

interface DestinationPageProps {
  destination: DestinationData;
  onBack: () => void;
}

// Data configuration - can be moved to a separate file or API
const destinationData: Record<string, DestinationData> = {
  "Antigua Guatemala": {
    name: "Antigua Guatemala",
    description: "Colonial charm surrounded by volcanoes",
    fromCapital: "45 minutes",
    cost: "$15-60",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1618946506952-a93a84299d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWF0ZW1hbGElMjBsYW5kc2NhcGUlMjBBbnRpZ3VhJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU4OTU3MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    info: {
      department: "Sacatepéquez",
      bestTime: "Nov-Abr",
      climate: "Templado",
      altitude: "1,530 msnm",
      population: "45,000 hab.",
      founded: "1543",
    },
    transportation: {
      private: [
        {
          name: "Tourist Shuttle",
          cost: "$15-100 per person",
          duration: "45-60 minutes",
          companies: [
            <a
              href="https://antiguatours.net/shuttles/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Antigua Tours
            </a>,
            <a
              href="https://www.rainbowtravel.com.gt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Rainbow Travel
            </a>,
            <a
              href="https://adrenalinatours.com/product/shuttle-guatemala-city-to-antigua-guatemala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Adrenalina Tours
            </a>,
          ],
          description: "Door-to-door service from Guatemala City or airport",
          tips: "Book in advance during peak season. Most hotels can arrange pickup.",
        },
        {
          name: "Private Car",
          cost: "$40-60 total",
          duration: "45 minutes",
          companies: ["Uber", "Local taxi services"],
          description: "Direct route via CA-1 highway",
          tips: "Negotiate price beforehand if using taxi. Uber available from airport.",
        },
      ],
      public: [
        {
          name: "Chicken Bus",
          cost: "$2-3 or Q20-30",
          duration: "1.5-2 hours",
          companies: ["Local operators"],
          description: "From Terminal de Buses in Guatemala City",
          tips: (
            <>
              Buses leave frequently, and you can catch one right in front of{" "}
              <strong>Tikal Futura Mall</strong> — here's the exact location:{" "}
              <a
                href="https://maps.app.goo.gl/tKy2sTMkHRkKc29X8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Google Maps
              </a>
              . Keep your belongings secure, as buses can get very crowded, but
              the ride offers an authentic local experience.
            </>
          ),
        },
      ],
    },
    attractions: [
      {
        name: "Cerro de la Cruz",
        type: "Viewpoint",
        description: "Best panoramic view of Antigua and volcanoes",
        cost: "Free",
        time: "30 minutes",
      },
      {
        name: "Santa Catalina Arch",
        type: "Historic Monument",
        description: "Iconic yellow arch, symbol of Antigua",
        cost: "Free",
        time: "15 minutes",
      },
      {
        name: "Central Park & Cathedral",
        type: "Historic Site",
        description: "Heart of colonial Antigua with beautiful architecture",
        cost: "Free",
        time: "1 hour",
      },
      {
        name: "Mercado de Artesanías",
        type: "Market",
        description: "Local crafts, textiles, and souvenirs",
        cost: "$5-50",
        time: "1-2 hours",
      },
    ],
  },
  "Lake Atitlán": {
    name: "Lake Atitlán",
    description: "Stunning volcanic lake with indigenous villages",
    fromCapital: "3 hours",
    cost: "$25-35",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&h=600&fit=crop",
    info: {
      department: "Sololá",
      bestTime: "Oct-Abr",
      climate: "Templado",
      altitude: "1,562 msnm",
      population: "320,000 hab.",
      founded: "Época precolombina",
    },
    transportation: {
      private: [
        {
          name: "Private Shuttle",
          cost: "$25-35 per person",
          duration: "3 hours",
          companies: ["Atitran Shuttles", "Rainbow Travel"],
          description: "Direct service to Panajachel with scenic route",
          tips: "Some shuttles continue to specific villages around the lake.",
        },
      ],
      public: [
        {
          name: "Chicken Bus",
          cost: "$3-5",
          duration: "3-4 hours",
          companies: ["Local operators"],
          description: "Guatemala City to Panajachel via Sololá",
          tips: "Change buses in Sololá. Beautiful mountain views but winding roads.",
        },
      ],
    },
    attractions: [
      {
        name: "Santiago Atitlán",
        type: "Indigenous Village",
        description: "Largest village, famous for Maximón worship",
        cost: "$3 boat ride",
        time: "Half day",
      },
      {
        name: "San Pedro La Laguna",
        type: "Backpacker Hub",
        description: "Vibrant nightlife and volcano hiking",
        cost: "$3 boat ride",
        time: "Full day",
      },
      {
        name: "San Juan La Laguna",
        type: "Art Village",
        description: "Textile cooperatives and local art",
        cost: "$3 boat ride",
        time: "Half day",
      },
    ],
  },
  "Tikal National Park": {
    name: "Tikal National Park",
    description: "Ancient Maya temples in pristine rainforest",
    fromCapital: "1 hour flight + 1 hour drive",
    cost: "$120-180",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1555400081-3e4c9c2a1fbb?w=800&h=600&fit=crop",
    info: {
      department: "Petén",
      bestTime: "Dic-Abr",
      climate: "Tropical húmedo",
      altitude: "200-300 msnm",
      population: "Área protegida",
      founded: "600 a.C.",
    },
    transportation: {
      private: [
        {
          name: "Domestic Flight",
          cost: "$120-180",
          duration: "1 hour to Flores",
          companies: ["TAG Airlines", "Avianca"],
          description: "Fly from Guatemala City to Flores, then 1-hour drive to Tikal",
          tips: "Book early morning flights to maximize time at Tikal.",
        },
      ],
      public: [
        {
          name: "Overnight Bus",
          cost: "$15-25",
          duration: "8-10 hours",
          companies: ["Fuente del Norte", "Mundo Maya"],
          description: "Guatemala City to Santa Elena/Flores",
          tips: "Comfortable sleeper buses. Arrive early morning perfect for Tikal visit.",
        },
      ],
    },
    attractions: [
      {
        name: "Temple IV",
        type: "Maya Temple",
        description: "Tallest structure, amazing sunrise views",
        cost: "Included in park fee",
        time: "2 hours",
      },
      {
        name: "Gran Plaza",
        type: "Archaeological Site",
        description: "Main ceremonial complex with multiple temples",
        cost: "Included in park fee",
        time: "2 hours",
      },
      {
        name: "Wildlife Spotting",
        type: "Nature Activity",
        description: "Howler monkeys, toucans, and jaguars",
        cost: "Included in park fee",
        time: "All day",
      },
    ],
  },
  "El Paredón": {
    name: "El Paredón",
    description: "Surfing paradise with black volcanic beaches",
    fromCapital: "2.5-3 hours",
    cost: "$20-40",
    difficulty: "Medium",
    image: "https://aprende.guatemala.com/wp-content/uploads/2024/05/Playa-El-Paredon-en-Escuintla-Guatemala-2.jpg",
    info: {
      department: "Escuintla",
      bestTime: "Mar-Sep",
      climate: "Tropical costero",
      altitude: "Nivel del mar",
      population: "2,000 hab.",
      founded: "Pueblo pesquero",
    },
    transportation: {
      private: [
        {
          name: "Private Shuttle",
          cost: "$20-40 per person",
          duration: "2.5 - 3 hours",
          companies: [
            <a
              href="https://adrenalinatours.com/product/shuttle-guatemala-city-to-el-paredon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Adrenalina Tours
            </a>,
            <a
              href="https://www.rainbowtravel.com.gt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Rainbow Travel
            </a>,
          ],
          description: "Direct shuttle service from Guatemala City to El Paredón, often with hotel pickup.",
          tips: "Book in advance during high season. Shuttles usually leave in the morning.",
        },
        {
          name: "Private Car",
          cost: "$80-120 total",
          duration: "2.5 hours",
          companies: ["Uber (limited)", "Local taxi drivers"],
          description: "Direct trip via Autopista al Pacífico and coastal roads.",
          tips: "Agree on the fare beforehand. Recommended if traveling with 3-4 people.",
        },
      ],
      public: [
        {
          name: "Chicken Bus + Microbus + TukTuk",
          cost: "Q215-260 total (per person, cash only)",
          duration: "3.5 - 4.5 hours",
          companies: ["Local operators"],
          description: "Combination of buses and tuk-tuk from Guatemala City to El Paredón.",
          tips: (
            <>
              The best way is to start at <strong>CENMA Bus Terminal</strong> in Guatemala City. From there, take a bus toward{" "}
              <strong>Escuintla</strong> that says <em>"Autopista"</em> (white, gray, and red buses are recommended). Alternatively, you can take
              a direct bus to <strong>Puerto San José</strong>.
              <br />
              <br />
              If you choose Escuintla: once you arrive at the bus parking lot, carefully cross the street and wait for a small bus like this one:
              <br />
              <img
                src="https://scontent-gua1-1.xx.fbcdn.net/v/t1.6435-9/147048084_2559129124383258_6701211391667841656_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NNMpngOWlHAQ7kNvwF6KtgZ&_nc_oc=Adka56aLTtI7ddwMG-FeZrtd55CtrkRPE72DzS4UlTR2xDJZbmsTjlkvnaBNxpGwud4&_nc_zt=23&_nc_ht=scontent-gua1-1.xx&_nc_gid=s_s7DL02JYwC6l3lcAsUXw&oh=00_AfaebbOVyPmA4NLXra0EHYvPGjiw3OvkwbdZLF9v0pUgg&oe=690108D4"
                alt="Microbus Escuintla"
                className="rounded-lg my-2"
              />
              <br />
              Exact location to wait:{" "}
              <a
                href="https://maps.app.goo.gl/WGF1RJm9RoB7p5LE7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Google Maps
              </a>
              .
              <br />
              <br />
              💰 Costs (updated October 2025): • Guatemala City → Escuintla: Q20–30 • Escuintla → Puerto San José: Q20–30 • Puerto San José →
              El Paredón (TukTuk): Q175–200 (up to 3–4 people)
              <br />
              <br />
              🚨 Important: Buses only take <strong>cash in quetzales</strong>. There's also a local bus from Puerto San José to El Paredón, but
              it doesn't run on Sundays and has no fixed schedule. Otherwise, ask locals or the bus driver for TukTuk options.
            </>
          ),
        },
      ],
    },
    attractions: [
      {
        name: "Surf Lessons",
        type: "Water Sports",
        description: "Learn to surf on perfect beginner waves",
        cost: "$20-30/lesson",
        time: "2 hours",
      },
      {
        name: "Mangrove Tours",
        type: "Nature Tour",
        description: "Kayak through mangrove channels spotting wildlife",
        cost: "$15-25",
        time: "3 hours",
      },
      {
        name: "Turtle Conservation",
        type: "Conservation",
        description: "Help protect sea turtle nests (seasonal)",
        cost: "Donation based",
        time: "2-3 hours",
      },
      {
        name: "Sunset Beach Walk",
        type: "Scenic",
        description: "Long black sand beach perfect for sunset strolls",
        cost: "Free",
        time: "1 hour",
      },
    ],
  },
};

// Utility function to get difficulty color
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-600";
    case "Medium":
      return "bg-yellow-600";
    case "Hard":
      return "bg-red-600";
    default:
      return "bg-gray-600";
  }
};

export function DestinationPage({ destination, onBack }: DestinationPageProps) {
  // Get the destination data based on the destination name
  const destinationDetails = destinationData[destination.name] || destination;

  // Create URL slug for structured data
  const createSlug = (name: string) => {
    return name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
  }

  const destinationSlug = createSlug(destinationDetails.name)

  // Add structured data for breadcrumbs
  useBreadcrumbStructuredData([
    { name: "Inicio", url: "/" },
    { name: "Destinos", url: "/#destinations" },
    { name: destinationDetails.name, url: `/destino/${destinationSlug}` }
  ])

  // Add structured data for travel guide
  useTravelGuideStructuredData({
    title: `Guía de Transporte: ${destinationDetails.name}`,
    description: `Guía completa de transporte para ${destinationDetails.name}. Información sobre rutas, costos, horarios y consejos prácticos para llegar a este destino en Guatemala.`,
    destination: destinationDetails.name,
    duration: destinationDetails.fromCapital,
    cost: destinationDetails.cost,
    image: destinationDetails.image,
    url: `/destino/${destinationSlug}`,
    includes: [
      "Opciones de transporte privado y público",
      "Precios actualizados",
      "Horarios y duración de viajes",
      "Consejos prácticos",
      "Información sobre atracciones principales"
    ],
    difficulty: destinationDetails.difficulty
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:bg-gray-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a destinos
          </Button>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl mb-4">{destinationDetails.name}</h1>
              <p className="text-xl text-gray-300 mb-4">
                {destinationDetails.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Desde capital: {destinationDetails.fromCapital}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>Costo: {destinationDetails.cost}</span>
                </div>
                <Badge className={getDifficultyColor(destinationDetails.difficulty)}>
                  {destinationDetails.difficulty}
                </Badge>
              </div>
            </div>

            <div className="w-full md:w-80 h-60 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={destinationDetails.image}
                alt={destinationDetails.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Ad Banner Top */}
            <AdBanner size="medium" className="mb-8" />

            {/* Transportation Section */}
            <section className="mb-12">
              <h2 className="text-2xl mb-6">Cómo Llegar</h2>

              <Tabs defaultValue="private" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="private">Transporte Privado</TabsTrigger>
                  <TabsTrigger value="public">Transporte Público</TabsTrigger>
                </TabsList>

                <TabsContent value="private" className="mt-6">
                  <div className="grid gap-6">
                    {destinationDetails.transportation?.private.map((option, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            {option.name}
                            <Badge variant="outline">{option.cost}</Badge>
                          </CardTitle>
                          <CardDescription>
                            {option.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-blue-600" />
                              <span>Duración: {option.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-green-600" />
                              <span>
                                Empresas:{" "}
                                {option.companies.map((c, i) => (
                                  <span key={i} className="mr-2">
                                    {c}
                                    {i < option.companies.length - 1 ? ", " : ""}
                                  </span>
                                ))}
                              </span>
                            </div>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="flex items-center gap-2 mb-2 text-blue-400">
                              <AlertTriangle className="h-4 w-4 text-blue-600" />
                              Consejos Importantes
                            </h4>
                            <div className="text-sm text-gray-700">
                              {option.tips}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="public" className="mt-6">
                  <div className="grid gap-6">
                    {destinationDetails.transportation?.public.map((option, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            {option.name}
                            <Badge variant="outline">{option.cost}</Badge>
                          </CardTitle>
                          <CardDescription>
                            {option.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-blue-600" />
                              <span>Duración: {option.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-green-600" />
                              <span>
                                Empresas: {Array.isArray(option.companies) ? option.companies.join(", ") : option.companies}
                              </span>
                            </div>
                          </div>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="flex items-center gap-2 mb-2">
                              <AlertTriangle className="h-4 w-4 text-yellow-600" />
                              Consejos Importantes
                            </h4>
                            <div className="text-sm text-gray-700">
                              {option.tips}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            {/* Ad Banner Middle */}
            <AdBanner size="small" className="mb-8" />

            {/* Attractions Section */}
            <section className="mb-12">
              <h2 className="text-2xl mb-6 text-blue-400">Qué Hacer y Ver</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {destinationDetails.attractions?.map((attraction, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {attraction.name}
                        <Badge variant="secondary">{attraction.type}</Badge>
                      </CardTitle>
                      <CardDescription>
                        {attraction.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{attraction.cost}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{attraction.time}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Información Rápida</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span className="text-sm">
                      Departamento de {destinationDetails.info?.department}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Mejor época: {destinationDetails.info?.bestTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Nivel: {destinationDetails.difficulty}
                    </span>
                  </div>
                  {destinationDetails.info?.altitude && (
                    <div className="flex items-center gap-2">
                      <Navigation className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Altitud: {destinationDetails.info.altitude}</span>
                    </div>
                  )}
                  {destinationDetails.info?.climate && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Clima: {destinationDetails.info.climate}</span>
                    </div>
                  )}
                  {destinationDetails.info?.population && (
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Población: {destinationDetails.info.population}</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Side Ad */}
              <AdBanner size="large" position="side" />

              {/* Additional Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Datos Curiosos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {destinationDetails.info?.founded && (
                      <div className="text-sm">
                        <strong>Fundación:</strong> {destinationDetails.info.founded}
                      </div>
                    )}
                    <div className="text-sm">
                      <strong>Clima:</strong> {destinationDetails.info?.climate}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Información actualizada regularmente
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { AlertTriangle, Clock, DollarSign, Shield, Users, MapPin } from "lucide-react"
import { useLanguage } from "./LanguageProvider"

export function TravelTips() {
  const { t } = useLanguage()
  const tips = {
    safety: [
      {
        title: t("tips.safety.daylight"),
        description: t("tips.safety.daylightDesc")
      },
      {
        title: t("tips.safety.valuables"),
        description: t("tips.safety.valuablesDesc")
      },
      {
        title: t("tips.safety.buses"),
        description: t("tips.safety.busesDesc")
      },
      {
        title: t("tips.safety.itinerary"),
        description: t("tips.safety.itineraryDesc")
      }
    ],
    money: [
      {
        title: t("tips.money.bills"),
        description: t("tips.money.billsDesc")
      },
      {
        title: t("tips.money.negotiate"),
        description: t("tips.money.negotiateDesc")
      },
      {
        title: t("tips.money.tips"),
        description: t("tips.money.tipsDesc")
      },
      {
        title: t("tips.money.atm"),
        description: t("tips.money.atmDesc")
      }
    ],
    practical: [
      {
        title: t("tips.practical.pack"),
        description: t("tips.practical.packDesc")
      },
      {
        title: t("tips.practical.spanish"),
        description: t("tips.practical.spanishDesc")
      },
      {
        title: t("tips.practical.delays"),
        description: t("tips.practical.delaysDesc")
      },
      {
        title: t("tips.practical.snacks"),
        description: t("tips.practical.snacksDesc")
      }
    ],
    booking: [
      {
        title: t("tips.booking.advance"),
        description: t("tips.booking.advanceDesc")
      },
      {
        title: t("tips.booking.flights"),
        description: t("tips.booking.flightsDesc")
      },
      {
        title: t("tips.booking.flexible"),
        description: t("tips.booking.flexibleDesc")
      },
      {
        title: t("tips.booking.pickup"),
        description: t("tips.booking.pickupDesc")
      }
    ]
  }

  return (
    <section id="tips" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">{t("common.tips")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Consejos esenciales para hacer que tu experiencia de transporte en Guatemala sea fluida y segura.
            Aprende de viajeros experimentados y locales.
          </p>
        </div>

        <div className="mb-8">
          <Alert className="max-w-4xl mx-auto">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important Safety Note</AlertTitle>
            <AlertDescription>
              Guatemala is generally safe for tourists who take proper precautions. Stay aware of your surroundings, 
              travel in groups when possible, and trust your instincts. Avoid traveling at night on rural roads.
            </AlertDescription>
          </Alert>
        </div>

        <Tabs defaultValue="safety" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="safety" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">{t("tips.safety.title")}</span>
            </TabsTrigger>
            <TabsTrigger value="money" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">{t("tips.money.title")}</span>
            </TabsTrigger>
            <TabsTrigger value="practical" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">{t("tips.practical.title")}</span>
            </TabsTrigger>
            <TabsTrigger value="booking" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">{t("tips.booking.title")}</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(tips).map(([category, categoryTips]) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {categoryTips.map((tip, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {tip.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-12 w-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Mejores Épocas para Viajar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                La temporada seca (noviembre-abril) ofrece las mejores condiciones de carretera.
                La temporada lluviosa (mayo-octubre) puede causar retrasos pero hay menos multitudes.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-12 w-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Planificación de Rutas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                La mayoría de rutas se conectan a través de Ciudad de Guatemala o Antigua.
                Planifica las conexiones en consecuencia y permite tiempo de reserva.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-12 w-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>Conocimiento Local</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Pregunta a los locales sobre condiciones actuales y recomendaciones.
                El personal de hostales son excelentes fuentes de información actualizada.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
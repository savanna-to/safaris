import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hotel, Users, Map, PawPrint } from "lucide-react"

const services = [
  {
    icon: PawPrint,
    title: "Guided Wildlife Tours",
    description:
      "Expert naturalists lead you through the savanna to witness the Big Five and countless other species in their natural habitat.",
  },
  {
    icon: Hotel,
    title: "Luxury Accommodations",
    description:
      "Stay in premium lodges and tented camps that blend comfort with authentic safari experiences under the African stars.",
  },
  {
    icon: Users,
    title: "Cultural Experiences",
    description:
      "Visit local villages, meet indigenous communities, and immerse yourself in traditional African cultures and customs.",
  },
  {
    icon: Map,
    title: "Custom Itineraries",
    description:
      "Tailored safari experiences crafted to your interests, schedule, and adventure level for a truly personalized journey.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3728] mb-4 font-[family-name:var(--font-heading)]">
            Our Safari Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need for an extraordinary African adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-border/50 hover:border-primary hover:shadow-lg transition-all group bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-[family-name:var(--font-heading)] text-[#4A3728]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

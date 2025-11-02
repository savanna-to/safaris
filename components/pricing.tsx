import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Explorer",
    price: "$2,499",
    duration: "5 Days",
    description: "Perfect for first-time safari adventurers",
    features: [
      "Guided game drives",
      "Standard lodge accommodation",
      "All meals included",
      "Airport transfers",
      "Park entrance fees",
    ],
  },
  {
    name: "Adventurer",
    price: "$4,999",
    duration: "10 Days",
    description: "The complete safari experience",
    features: [
      "Premium guided tours",
      "Luxury tented camps",
      "Traditional bush dinners",
      "Walking safari experience",
      "Private vehicle option",
    ],
    popular: true,
  },
  {
    name: "Expedition",
    price: "$9,999",
    duration: "14 Days",
    description: "Ultimate luxury safari adventure",
    features: [
      "Private expert guide",
      "Exclusive luxury lodges",
      "Fine dining & wine pairings",
      "Luxury 4x4 safari vehicles",
      "Personal safari guide throughout",
      "Custom itinerary",
      "Professional photography",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3728] mb-4 font-[family-name:var(--font-heading)]">
            Safari Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the perfect adventure for your journey into the wild
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border/50 hover:shadow-xl transition-all ${plan.popular ? "border-primary shadow-lg scale-105 bg-primary/5" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-[family-name:var(--font-heading)] mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-[#4A3728]">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.duration}</span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-[#4A3728]/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-primary/50 hover:bg-primary/10"}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href="#contact">Select Package</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

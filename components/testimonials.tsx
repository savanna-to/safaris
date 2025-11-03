import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    text: "An absolutely breathtaking experience! The guides were knowledgeable, the accommodations were luxurious, and seeing lions in the wild was a dream come true.",
    rating: 5,
  },
  {
    name: "James Chen",
    location: "San Francisco, USA",
    text: "Savanna Safaris exceeded all expectations. Every detail was perfectly planned, and the wildlife encounters were incredible. Already planning our return trip!",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    text: "The photography safari was phenomenal. Our guide knew exactly where and when to find the best shots. Came home with memories and photos that will last forever.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#F5B942]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3728] mb-4 font-[family-name:var(--font-heading)]">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real experiences from adventurers who explored Africa with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:border-accent/50 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-[#4A3728]/90 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-semibold text-[#4A3728]">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

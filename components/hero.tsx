import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/african-savanna-landscape-with-acacia-trees-at-gol.jpg"
          alt="African Savanna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A3728]/50 via-[#4A3728]/30 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance font-[family-name:var(--font-heading)]">
          Experience the Wild Heart of Africa
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
          Discover Africa's beauty with experienced guides. Your African wildlife adventure starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-[#E67E22] text-white hover:bg-[#D35400] text-lg px-8 py-6 shadow-lg" asChild>
            <a href="#services">
              Explore Safaris
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6 font-semibold"
            asChild
          >
            <a href="#pricing">Book Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

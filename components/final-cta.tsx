"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FinalCTA() {
  const [isSubmitting, startTransition] = useTransition()
  const [submitMessage, setSubmitMessage] = useState<string>("")
  const [selectedPackage, setSelectedPackage] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      travelers: formData.get("travelers") as string,
      package: selectedPackage,
      travelMonth: formData.get("travelMonth") as string,
      message: formData.get("message") as string,
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (response.ok) {
          setSubmitMessage(
            "Message sent successfully! We'll contact you within 24 hours to discuss your safari adventure.",
          )

          // Reset form
          const form = e.currentTarget
          if (form) {
            form.reset()
            setSelectedPackage("")
          }
        } else {
          throw new Error("Failed to send message")
        }

        // Clear message after 5 seconds
        setTimeout(() => setSubmitMessage(""), 5000)
      } catch (error) {
        console.error("Error sending message:", error)
        setSubmitMessage("An error occurred. Please try again or contact us directly at info@savannasafaris.com")
      }
    })
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/african-elephant-herd-walking-at-sunset-golden-hou.jpg"
          alt="Elephants at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance font-[family-name:var(--font-heading)]">
            Ready to Begin Your Safari Adventure?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Contact us to book your safari or discuss custom options for your adventure.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#4A3728] font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="border-[#4A3728]/20 focus:border-[#E67E22]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#4A3728] font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="border-[#4A3728]/20 focus:border-[#E67E22]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#4A3728] font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="border-[#4A3728]/20 focus:border-[#E67E22]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelers" className="text-[#4A3728] font-medium">
                  Number of Travelers *
                </Label>
                <Input
                  id="travelers"
                  name="travelers"
                  type="number"
                  min="1"
                  placeholder="2"
                  required
                  className="border-[#4A3728]/20 focus:border-[#E67E22]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="package" className="text-[#4A3728] font-medium">
                  Preferred Package
                </Label>
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger className="border-[#4A3728]/20 focus:border-[#E67E22]">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Explorer - 5 Days">Explorer - 5 Days</SelectItem>
                    <SelectItem value="Adventurer - 10 Days">Adventurer - 10 Days</SelectItem>
                    <SelectItem value="Expedition - 14 Days">Expedition - 14 Days</SelectItem>
                    <SelectItem value="Custom Package">Custom Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelMonth" className="text-[#4A3728] font-medium">
                  Preferred Travel Month
                </Label>
                <Input
                  id="travelMonth"
                  name="travelMonth"
                  type="text"
                  placeholder="e.g., June 2025"
                  className="border-[#4A3728]/20 focus:border-[#E67E22]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#4A3728] font-medium">
                Message / Special Requests
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your dream safari experience..."
                rows={4}
                className="border-[#4A3728]/20 focus:border-[#E67E22] resize-none"
              />
            </div>

            {submitMessage && (
              <div
                className={`border rounded-lg p-4 text-center ${
                  submitMessage.includes("successfully")
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                <p className="font-medium">{submitMessage}</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white text-lg py-6 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

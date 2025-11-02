import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Karla } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Savannah Safaris - Unforgettable African Safari Adventures",
  description:
    "Experience the adventure of a lifetime with Savannah Safaris. Expert-guided tours, luxury accommodations, and authentic wildlife encounters.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

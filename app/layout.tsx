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
  title: "Savanna Safaris",
  description: "Authentic African safaris with expert guides. Experience the wild beauty of the savanna.",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Savanna Safaris",
    description: "Authentic African safaris with expert guides. Experience the wild beauty of the savanna.",
    url: "https://safaris.savanna.to",
    siteName: "Savanna Safaris",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Savanna Safaris - African Safari Adventures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savanna Safaris",
    description: "Authentic African safaris with expert guides. Experience the wild beauty of the savanna.",
    images: ["/og-image.png"],
  },
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

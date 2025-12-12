import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MedicinalMycoLab — Grow Intelligence. Harvest Vitality.",
  description:
    "DIY fungi apothecary for homegrown wellness. Learn to cultivate, extract, and craft your own mushroom-based health tonics with scientific precision and mystical wisdom.",
  keywords: [
    "medicinal mushrooms",
    "mushroom cultivation",
    "extraction",
    "reishi",
    "lions mane",
    "cordyceps",
    "mycology",
    "home lab",
    "adaptogens",
  ],
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F3EF" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1B12" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

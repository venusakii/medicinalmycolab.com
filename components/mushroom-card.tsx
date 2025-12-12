"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface MushroomCardProps {
  name: string
  title: string
  slug: string
  icon: string
  description: string
}

export function MushroomCard({ name, title, slug, icon, description }: MushroomCardProps) {
  return (
    <Link href={`/mushrooms/${slug}`}>
      <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer border-primary/20 hover:border-primary/40">
        <CardContent className="p-6">
          {/* Animated glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Icon with breathing animation */}
            <div className="text-6xl mb-4 group-hover:animate-breathe">{icon}</div>

            {/* Mushroom name */}
            <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>

            {/* Title/nickname */}
            <p className="text-sm text-primary font-medium mb-3">{title}</p>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

            {/* Mycelium underline that grows on hover */}
            <div className="mt-4 h-[1px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

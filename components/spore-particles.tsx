"use client"

import { useEffect, useState } from "react"

interface Spore {
  id: number
  left: number
  delay: number
  duration: number
}

export function SporeParticles({ count = 20 }: { count?: number }) {
  const [spores, setSpores] = useState<Spore[]>([])

  useEffect(() => {
    const newSpores = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 4,
    }))
    setSpores(newSpores)
  }, [count])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {spores.map((spore) => (
        <div
          key={spore.id}
          className="absolute bottom-0 w-1 h-1 rounded-full bg-primary/40 animate-spore-float"
          style={{
            left: `${spore.left}%`,
            animationDelay: `${spore.delay}s`,
            animationDuration: `${spore.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

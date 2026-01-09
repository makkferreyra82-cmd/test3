"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const photos = [
  { src: "img/carousel01.webp", alt: "Foto 1" },
  { src: "img/carousel02.webp", alt: "Foto 2" },
  { src: "img/carousel03.webp", alt: "Foto 3" },
  { src: "img/carousel04.webp", alt: "Foto 4" },
]

export default function PhotoCarousel() {
  const { ref, isInView } = useInView()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const move = (direction: number) => {
    setCurrent((prev) => {
      const next = prev + direction
      if (next < 0) return photos.length - 1
      if (next >= photos.length) return 0
      return next
    })
  }

  return (
    <section
      ref={ref}
      className={`py-20 px-6 bg-background transition-all duration-800 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal text-primary text-center mb-4">
          Nuestros Momentos
        </h2>
        <p className="text-center text-muted mb-8">Algunas fotos de nuestra historia juntos</p>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {photos.map((photo, index) => (
                <div key={index} className="min-w-full px-4">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => move(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => move(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${
                  current === index ? "w-8 bg-primary" : "w-2.5 bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

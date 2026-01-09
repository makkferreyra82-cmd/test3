"use client"

import { useState } from "react"
import { X, ZoomIn } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const photos = [
  "img/galeria01.webp",
  "img/galeria02.webp",
  "img/galeria03.webp",
  "img/galeria04.webp",
  "img/galeria05.webp",
  "img/galeria06.webp",
]

export default function GallerySection() {
  const { ref, isInView } = useInView()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")

  const openLightbox = (src: string) => {
    setCurrentImage(src)
    setLightboxOpen(true)
  }

  return (
    <section
      id="galeria"
      ref={ref}
      className={`py-20 px-6 bg-background transition-all duration-800 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal text-primary text-center mb-4">Galería</h2>
        <p className="text-center text-muted mb-12">Momentos que atesoramos</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(photo)}
              className="relative overflow-hidden rounded-xl cursor-pointer aspect-square group"
            >
              <img
                src={photo || "/placeholder.svg"}
                alt={`Galería ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={currentImage || "/placeholder.svg"}
            alt="Imagen ampliada"
            className="max-w-[90%] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

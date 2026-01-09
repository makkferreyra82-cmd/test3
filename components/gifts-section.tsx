"use client"

import { Banknote, Gift } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function GiftsSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className={`py-20 px-6 bg-background-alt text-center transition-all duration-800 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal text-primary mb-4">Mesa de Regalos</h2>
        <p className="text-muted max-w-lg mx-auto mb-12">
          Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo, aquí te dejamos algunas opciones.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform">
            <Banknote className="w-16 h-16 mx-auto mb-4 text-accent" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl text-primary mb-2">Lluvia de Sobres</h3>
            <p className="text-muted text-sm">Tu aportación nos ayudará a construir nuestro nuevo hogar juntos.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform">
            <Gift className="w-16 h-16 mx-auto mb-4 text-accent" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl text-primary mb-2">Mesa de Regalos</h3>
            <p className="text-muted text-sm mb-6">Consulta nuestra mesa de regalos en Liverpool.</p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full text-sm hover:bg-accent transition-colors"
            >
              Ver Mesa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

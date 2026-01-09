"use client"

import { CheckCircle } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function RsvpSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="rsvp"
      ref={ref}
      className={`py-20 px-6 text-white text-center transition-all duration-800 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: `linear-gradient(rgba(139, 115, 85, 0.9), rgba(139, 115, 85, 0.9)), url('img/fondo-rsvp.webp') center/cover fixed`,
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal mb-4">Confirma tu Asistencia</h2>
        <p className="text-white/90 mb-8">Por favor confirma tu asistencia antes del 20 de febrero de 2026</p>
        <a
          href="https://form.jotform.com/tu-formulario"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary rounded-full font-semibold text-lg shadow-2xl hover:-translate-y-1 transition-transform"
        >
          <CheckCircle className="w-6 h-6" />
          Confirmar Asistencia
        </a>
      </div>
    </section>
  )
}

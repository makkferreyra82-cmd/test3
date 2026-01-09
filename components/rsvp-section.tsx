"use client"

import { CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function RsvpSection() {
  // 1. Tu link real de Jotform ya configurado
  const baseLink = "https://form.jotform.com/260077041645049"
  const [confirmLink, setConfirmLink] = useState(baseLink)

  useEffect(() => {
    // 2. Buscamos si la URL de la invitación tiene un cupo (ej: ?cupo=3)
    const params = new URLSearchParams(window.location.search)
    const cupo = params.get("cupo")

    if (cupo) {
      // 3. Como tu link no tiene otros parámetros, usamos '?'
      setConfirmLink(`${baseLink}?cupo=${cupo}`)
    }
  }, [])

  return (
    <section
      id="rsvp"
      /* Eliminamos el efecto de aparición lenta (fade-in) para que sea instantáneo */
      className="py-20 px-6 text-white text-center"
      style={{
        background: `linear-gradient(rgba(139, 115, 85, 0.9), rgba(139, 115, 85, 0.9)), url('img/fondo-rsvp.webp') center/cover fixed`,
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal mb-4">Confirma tu Asistencia</h2>
        <p className="text-white/90 mb-8">Por favor confirma tu asistencia antes del 20 de febrero de 2026</p>
        <a
          href={confirmLink}
          id="rsvp-button"
          target="_blank"
          rel="noopener noreferrer"
          className="rsvp-btn inline-flex items-center gap-3 px-10 py-4 bg-white text-primary rounded-full font-semibold text-lg shadow-2xl hover:-translate-y-1 transition-transform"
        >
          <CheckCircle className="w-6 h-6" />
          Confirmar Asistencia
        </a>
      </div>
    </section>
  )
}

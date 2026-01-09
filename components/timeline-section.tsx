"use client"

import { useInView } from "@/hooks/use-in-view"

const events = [
  { time: "17:00", title: "Ceremonia Religiosa", desc: "Iglesia de San José" },
  { time: "18:30", title: "Ceremonia Civil", desc: "Salón de Eventos" },
  { time: "19:30", title: "Recepción", desc: "Cóctel de bienvenida" },
  { time: "20:00", title: "Cena", desc: "Banquete principal" },
  { time: "21:00", title: "Fiesta", desc: "¡A bailar!" },
]

export default function TimelineSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className={`py-20 px-6 bg-background-alt transition-all duration-800 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal text-primary text-center mb-4">
          Itinerario del Día
        </h2>
        <p className="text-center text-muted mb-12">Programa de actividades</p>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-secondary hidden md:block" />

          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="font-serif text-xl text-primary mb-1">{event.time}</p>
                    <p className="font-semibold mb-1">{event.title}</p>
                    <p className="text-sm text-muted">{event.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10" />
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

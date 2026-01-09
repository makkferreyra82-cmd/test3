"use client"

import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"

export default function CountdownSection() {
  const { ref, isInView } = useInView()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date("March 7, 2026 17:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const items = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ]

  return (
    <section
      ref={ref}
      className={`py-20 px-6 bg-primary text-white text-center transition-all duration-800 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal mb-4">Cuenta Regresiva</h2>
        <p className="text-white/90 mb-8">Para el día más especial de nuestras vidas</p>
        <div className="flex justify-center gap-4 flex-wrap">
          {items.map((item) => (
            <div key={item.label} className="bg-white/15 backdrop-blur-md rounded-xl px-6 py-4 min-w-[100px]">
              <span className="font-serif text-5xl font-semibold block">{item.value}</span>
              <span className="text-xs uppercase tracking-widest opacity-90">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

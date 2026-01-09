"use client"

import { useInView } from "@/hooks/use-in-view"

const colors = [
  { color: "#2C3E50", name: "Azul Marino" },
  { color: "#8B7355", name: "Café" },
  { color: "#B8860B", name: "Dorado" },
  { color: "#556B2F", name: "Verde Olivo" },
  { color: "#800020", name: "Borgoña" },
]

export default function DressCodeSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className={`py-20 px-6 bg-background text-center transition-all duration-800 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal text-primary mb-4">Código de Vestimenta</h2>
        <p className="font-serif text-2xl text-primary mb-4">Formal / Elegante</p>
        <p className="text-muted max-w-md mx-auto mb-8">
          Te sugerimos vestir de manera formal para esta ocasión especial. Aquí te dejamos nuestra paleta de colores
          sugerida.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {colors.map((item, index) => (
            <div
              key={index}
              className="w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
              style={{ backgroundColor: item.color }}
              title={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

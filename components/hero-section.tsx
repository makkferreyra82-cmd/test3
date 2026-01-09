import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="h-screen relative flex items-center justify-center text-center"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('img/portada.webp') center/cover`,
      }}
    >
      <div className="text-white z-10">
        <p className="font-sans text-sm tracking-[4px] uppercase mb-4 opacity-90">07 de Marzo de 2026</p>
        <h1 className="font-serif text-[clamp(3rem,10vw,6rem)] font-light italic mb-4">
          Lesly
          <span className="block text-[0.5em] my-2">&</span>
          Isidro
        </h1>
        <p className="font-serif text-xl italic opacity-90">¡Nos casamos!</p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-scroll">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}

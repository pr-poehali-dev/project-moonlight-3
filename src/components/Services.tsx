import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const dresscodeColors = [
  { name: "Бежевый", hex: "#C9B99A" },
  { name: "Кремовый", hex: "#EDE0CC" },
  { name: "Карамель", hex: "#A67C52" },
  { name: "Шоколад", hex: "#6B4226" },
  { name: "Нежно-зелёный", hex: "#A8C5A0" },
  { name: "Шалфей", hex: "#7A9E7E" },
  { name: "Грязно-розовый", hex: "#C4958A" },
]

const details = [
  {
    title: "Дата и место",
    description: "08 августа 2026 года, суббота, 18:00. Банкет-холл Камелот, г. Курган, ул. Садовая, 54.",
    iconName: "MapPin",
    extra: null,
  },
  {
    title: "Дресс-код",
    description: "",
    iconName: "Shirt",
    extra: "colors",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-20 lg:py-28 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Важные детали
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Всё, что нужно знать
          </h2>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {details.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-background p-10 lg:p-14 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="text-sage mb-6 transition-transform duration-500 group-hover:scale-110">
                <Icon name={item.iconName} size={32} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>

              {item.extra === "colors" && (
                <div className="flex flex-wrap gap-3 mt-6">
                  {dresscodeColors.map((color) => (
                    <div key={color.name} className="flex flex-col items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-full border border-border shadow-sm"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                      <span className="text-[10px] text-muted-foreground tracking-wide text-center leading-tight max-w-[48px]">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
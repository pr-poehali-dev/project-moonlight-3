import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/5] bg-sand overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="https://cdn.poehali.dev/projects/14783f21-09f7-415a-93d1-c08f3fa3124a/bucket/07c5964b-4a3e-40b7-88e3-cfab682d6d10.jpg"
              alt="Антон и Виктория"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Overlay accent */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/80" />
          </div>

          {/* Content */}
          <div className="lg:pl-8 relative">
            {/* Decorative branch top-right */}
            <svg className="absolute -top-8 -right-4 w-40 h-40 opacity-50 pointer-events-none" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140 10 Q110 40 80 70 Q50 100 20 140" stroke="#7A9E7E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M80 70 Q95 50 110 35" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              <path d="M80 70 Q60 60 45 45" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              {/* Leaves */}
              <ellipse cx="110" cy="33" rx="11" ry="6" fill="#A8C5A0" fillOpacity="0.55" transform="rotate(-40 110 33)"/>
              <ellipse cx="44" cy="43" rx="11" ry="6" fill="#A8C5A0" fillOpacity="0.55" transform="rotate(20 44 43)"/>
              <ellipse cx="60" cy="110" rx="10" ry="5" fill="#A8C5A0" fillOpacity="0.45" transform="rotate(15 60 110)"/>
              <ellipse cx="25" cy="138" rx="9" ry="5" fill="#7A9E7E" fillOpacity="0.45" transform="rotate(30 25 138)"/>
              {/* Peony */}
              <circle cx="112" cy="32" r="7" fill="#C4958A" fillOpacity="0.7"/>
              <circle cx="108" cy="28" r="5" fill="#D4A89A" fillOpacity="0.65"/>
              <circle cx="116" cy="28" r="4.5" fill="#C4958A" fillOpacity="0.6"/>
              <circle cx="112" cy="24" r="4" fill="#D4A89A" fillOpacity="0.55"/>
              <circle cx="112" cy="32" r="3" fill="#E8C4BA" fillOpacity="0.8"/>
            </svg>

            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Наша история
            </p>

            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Любовь,
              <span className="italic"> которая</span>
              <br />
              нашла нас
            </h2>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                Ещё вчера мы сидели за одной партой, тихонько переглядывались на парах и боялись
                не сдать экзамены. А сегодня — связываем свою жизнь навсегда.
              </p>
              <p>
                За эти годы мы стали не просто парой — мы стали семьёй. И теперь мы хотим отпраздновать
                это с людьми, которых любим больше всего на свете — с вами.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">6</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Лет вместе</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">08.08</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Дата свадьбы</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">∞</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Навсегда</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-8">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-background" />

      {/* Decorative top-left branch */}
      <svg className="absolute top-16 left-0 w-64 h-64 opacity-60 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 180 Q40 120 80 90 Q120 60 160 20" stroke="#7A9E7E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M80 90 Q60 70 50 50" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M80 90 Q100 75 115 55" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M120 60 Q105 45 100 25" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <ellipse cx="50" cy="48" rx="10" ry="6" fill="#A8C5A0" transform="rotate(-30 50 48)"/>
        <ellipse cx="116" cy="53" rx="10" ry="6" fill="#A8C5A0" transform="rotate(20 116 53)"/>
        <ellipse cx="100" cy="23" rx="9" ry="5" fill="#7A9E7E" transform="rotate(-10 100 23)"/>
        <ellipse cx="160" cy="18" rx="10" ry="6" fill="#A8C5A0" transform="rotate(-40 160 18)"/>
        <ellipse cx="40" cy="130" rx="8" ry="5" fill="#A8C5A0" transform="rotate(15 40 130)"/>
        {/* Pink flowers */}
        <circle cx="52" cy="48" r="5" fill="#C4958A" opacity="0.8"/>
        <circle cx="49" cy="43" r="3.5" fill="#D4A89A" opacity="0.7"/>
        <circle cx="55" cy="44" r="3" fill="#C4958A" opacity="0.6"/>
      </svg>

      {/* Decorative top-right branch */}
      <svg className="absolute top-16 right-0 w-64 h-64 opacity-60 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'scaleX(-1)'}}>
        <path d="M10 180 Q40 120 80 90 Q120 60 160 20" stroke="#7A9E7E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M80 90 Q60 70 50 50" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M80 90 Q100 75 115 55" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M120 60 Q105 45 100 25" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <ellipse cx="50" cy="48" rx="10" ry="6" fill="#A8C5A0" transform="rotate(-30 50 48)"/>
        <ellipse cx="116" cy="53" rx="10" ry="6" fill="#A8C5A0" transform="rotate(20 116 53)"/>
        <ellipse cx="100" cy="23" rx="9" ry="5" fill="#7A9E7E" transform="rotate(-10 100 23)"/>
        <ellipse cx="160" cy="18" rx="10" ry="6" fill="#A8C5A0" transform="rotate(-40 160 18)"/>
        <ellipse cx="40" cy="130" rx="8" ry="5" fill="#A8C5A0" transform="rotate(15 40 130)"/>
        {/* Pink flowers */}
        <circle cx="118" cy="52" r="5" fill="#C4958A" opacity="0.8"/>
        <circle cx="114" cy="48" r="3.5" fill="#D4A89A" opacity="0.7"/>
        <circle cx="121" cy="49" r="3" fill="#C4958A" opacity="0.6"/>
      </svg>

      {/* Decorative bottom-left */}
      <svg className="absolute bottom-0 left-0 w-48 h-48 opacity-50 pointer-events-none" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 160 Q30 120 60 90 Q90 60 130 30" stroke="#7A9E7E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M60 90 Q45 72 35 55" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <ellipse cx="35" cy="53" rx="9" ry="5" fill="#A8C5A0" transform="rotate(-20 35 53)"/>
        <ellipse cx="130" cy="28" rx="9" ry="5" fill="#A8C5A0" transform="rotate(-35 130 28)"/>
        <circle cx="37" cy="52" r="5" fill="#C4958A" opacity="0.75"/>
        <circle cx="33" cy="48" r="3" fill="#D4A89A" opacity="0.6"/>
      </svg>

      {/* Decorative bottom-right */}
      <svg className="absolute bottom-0 right-0 w-48 h-48 opacity-50 pointer-events-none" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'scaleX(-1)'}}>
        <path d="M0 160 Q30 120 60 90 Q90 60 130 30" stroke="#7A9E7E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M60 90 Q45 72 35 55" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <ellipse cx="35" cy="53" rx="9" ry="5" fill="#A8C5A0" transform="rotate(-20 35 53)"/>
        <ellipse cx="130" cy="28" rx="9" ry="5" fill="#A8C5A0" transform="rotate(-35 130 28)"/>
        <circle cx="37" cy="52" r="5" fill="#C4958A" opacity="0.75"/>
        <circle cx="33" cy="48" r="3" fill="#D4A89A" opacity="0.6"/>
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Overline */}
        <p
          className={`text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          08 августа 2026 · Курган
        </p>

        {/* Main Headline */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-foreground mb-8 text-balance transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Антон & Виктория
          <span className="block text-sage italic">приглашают на свадьбу</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Мы рады разделить этот особенный день с самыми близкими людьми. С любовью ждём вас рядом.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
          >
            Подтвердить участие
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone to-transparent animate-pulse" />
      </div>
    </section>
  )
}

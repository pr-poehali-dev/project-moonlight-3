import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    attending: "",
    allergy: "",
    music: "",
  })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Подтверждение участия
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Будете с нами?
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Пожалуйста, подтвердите своё присутствие до 1 июля 2026 года — это поможет нам подготовить всё с заботой о каждом госте.
            </p>

            {/* Venue Info */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Место проведения</p>
                <p className="text-foreground font-medium">г. Курган, ул. Садовая, 54</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Дата</p>
                <p className="text-foreground font-medium">08 августа 2026, суббота</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div className="flex flex-col justify-center h-full py-12">
                <p className="font-serif text-3xl text-foreground mb-4">Спасибо!</p>
                <p className="text-muted-foreground leading-relaxed">
                  Мы получили ваш ответ и очень ждём вас на нашем празднике.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="Имя и фамилия"
                    required
                  />
                </div>

                {/* Attending */}
                <div>
                  <p className="block text-xs tracking-widest uppercase text-muted-foreground mb-6">
                    Подтверждение участия
                  </p>
                  <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formState.attending === "yes"}
                        onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                        className="sr-only"
                        required
                      />
                      <span
                        className={`w-5 h-5 border flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${
                          formState.attending === "yes" ? "border-sage bg-sage" : "border-border group-hover:border-sage"
                        }`}
                      >
                        {formState.attending === "yes" && (
                          <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className="text-foreground">Да, с радостью приду!</span>
                    </label>

                    <label className="flex items-center gap-4 cursor-pointer group">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formState.attending === "no"}
                        onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                        className="sr-only"
                      />
                      <span
                        className={`w-5 h-5 border flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${
                          formState.attending === "no" ? "border-terracotta bg-terracotta" : "border-border group-hover:border-terracotta"
                        }`}
                      >
                        {formState.attending === "no" && (
                          <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className="text-foreground">К сожалению, не смогу прийти</span>
                    </label>
                  </div>
                </div>

                {/* Allergy */}
                <div>
                  <label htmlFor="allergy" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Аллергии или пищевые ограничения
                  </label>
                  <input
                    type="text"
                    id="allergy"
                    value={formState.allergy}
                    onChange={(e) => setFormState({ ...formState, allergy: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="Укажите, если есть (или оставьте пустым)"
                  />
                </div>

                {/* Music */}
                <div>
                  <label htmlFor="music" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Пожелания по музыке
                  </label>
                  <input
                    type="text"
                    id="music"
                    value={formState.music}
                    onChange={(e) => setFormState({ ...formState, music: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="Исполнитель или трек, под который хочется танцевать"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
                >
                  Отправить
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
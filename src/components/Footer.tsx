export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">А & В</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              08.08.2026 · г. Курган, ул. Садовая, 54
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-sage transition-colors">
                О нас
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
                Детали
              </a>
              <a href="#process" className="text-sm text-foreground hover:text-sage transition-colors">
                День свадьбы
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Подтвердить
              </a>
            </nav>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Остались вопросы?</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Будем рады ответить — напишите нам в ВКонтакте:
            </p>
            <nav className="flex flex-col gap-3">
              <a href="https://vk.com/tohne" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-sage transition-colors">
                Антон (жених)
              </a>
              <a href="https://vk.com/youaregaydumbass" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-sage transition-colors">
                Виктория (невеста)
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Антон & Виктория. С любовью.
          </p>
          <p className="text-xs text-muted-foreground">08.08.2026</p>
        </div>
      </div>
    </footer>
  )
}
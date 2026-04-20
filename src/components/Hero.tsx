import { useEffect, useState } from "react"

/* ── Peony SVG component ── */
function Peony({ cx, cy, r, opacity = 0.75 }: { cx: number; cy: number; r: number; opacity?: number }) {
  const petals = [
    { dx: 0, dy: -r * 1.1 },
    { dx: r * 1.0, dy: -r * 0.5 },
    { dx: r * 1.0, dy: r * 0.5 },
    { dx: 0, dy: r * 1.1 },
    { dx: -r * 1.0, dy: r * 0.5 },
    { dx: -r * 1.0, dy: -r * 0.5 },
  ]
  return (
    <g opacity={opacity}>
      {/* outer petals */}
      {petals.map((p, i) => (
        <ellipse
          key={i}
          cx={cx + p.dx * 0.6}
          cy={cy + p.dy * 0.6}
          rx={r * 0.85}
          ry={r * 0.55}
          fill="#C4958A"
          fillOpacity="0.7"
          transform={`rotate(${i * 60} ${cx} ${cy})`}
        />
      ))}
      {/* mid petals */}
      {petals.map((p, i) => (
        <ellipse
          key={`m${i}`}
          cx={cx + p.dx * 0.35}
          cy={cy + p.dy * 0.35}
          rx={r * 0.7}
          ry={r * 0.45}
          fill="#D4A89A"
          fillOpacity="0.75"
          transform={`rotate(${i * 60 + 30} ${cx} ${cy})`}
        />
      ))}
      {/* centre */}
      <circle cx={cx} cy={cy} r={r * 0.38} fill="#E8C4BA" fillOpacity="0.9" />
      <circle cx={cx} cy={cy} r={r * 0.18} fill="#F0D5CC" fillOpacity="0.95" />
    </g>
  )
}

/* ── Leaf SVG component ── */
function Leaf({ x, y, rx, ry, rotate, color = "#A8C5A0" }: { x: number; y: number; rx: number; ry: number; rotate: number; color?: string }) {
  return (
    <ellipse
      cx={x}
      cy={y}
      rx={rx}
      ry={ry}
      fill={color}
      fillOpacity="0.45"
      transform={`rotate(${rotate} ${x} ${y})`}
    />
  )
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-8">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-background" />

      {/* ── TOP-LEFT branch ── */}
      <svg className="absolute top-0 left-0 w-72 h-72 pointer-events-none" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* main stem */}
        <path d="M0 210 Q35 150 75 105 Q115 60 175 15" stroke="#7A9E7E" strokeWidth="1.6" strokeLinecap="round"/>
        {/* side stems */}
        <path d="M75 105 Q55 78 42 52" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M115 65 Q130 48 145 30" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M40 145 Q22 128 15 108" stroke="#7A9E7E" strokeWidth="1.1" strokeLinecap="round"/>
        {/* leaves */}
        <Leaf x={42} y={50} rx={13} ry={6} rotate={-35}/>
        <Leaf x={42} y={50} rx={10} ry={5} rotate={-10} color="#7A9E7E"/>
        <Leaf x={145} y={28} rx={12} ry={6} rotate={-50}/>
        <Leaf x={175} y={13} rx={11} ry={5} rotate={-45} color="#7A9E7E"/>
        <Leaf x={14} y={107} rx={11} ry={5} rotate={30}/>
        <Leaf x={55} y={155} rx={10} ry={5} rotate={20} color="#7A9E7E"/>
        {/* peony */}
        <Peony cx={42} cy={50} r={12} opacity={0.8}/>
      </svg>

      {/* ── TOP-RIGHT branch (mirrored) ── */}
      <svg className="absolute top-0 right-0 w-72 h-72 pointer-events-none" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
        <path d="M0 210 Q35 150 75 105 Q115 60 175 15" stroke="#7A9E7E" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M75 105 Q55 78 42 52" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M115 65 Q130 48 145 30" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M40 145 Q22 128 15 108" stroke="#7A9E7E" strokeWidth="1.1" strokeLinecap="round"/>
        <Leaf x={42} y={50} rx={13} ry={6} rotate={-35}/>
        <Leaf x={42} y={50} rx={10} ry={5} rotate={-10} color="#7A9E7E"/>
        <Leaf x={145} y={28} rx={12} ry={6} rotate={-50}/>
        <Leaf x={175} y={13} rx={11} ry={5} rotate={-45} color="#7A9E7E"/>
        <Leaf x={14} y={107} rx={11} ry={5} rotate={30}/>
        <Leaf x={55} y={155} rx={10} ry={5} rotate={20} color="#7A9E7E"/>
        <Peony cx={145} cy={28} r={11} opacity={0.75}/>
      </svg>

      {/* ── BOTTOM-LEFT branch ── */}
      <svg className="absolute bottom-0 left-0 w-52 h-52 pointer-events-none" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 170 Q30 130 60 95 Q95 58 140 20" stroke="#7A9E7E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M60 95 Q42 76 32 56" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M95 60 Q110 45 120 28" stroke="#7A9E7E" strokeWidth="1.1" strokeLinecap="round"/>
        <Leaf x={31} y={54} rx={12} ry={5} rotate={-25}/>
        <Leaf x={31} y={54} rx={9} ry={4} rotate={5} color="#7A9E7E"/>
        <Leaf x={120} y={27} rx={11} ry={5} rotate={-40}/>
        <Leaf x={70} y={130} rx={10} ry={5} rotate={18} color="#7A9E7E"/>
        <Peony cx={31} cy={54} r={10} opacity={0.7}/>
      </svg>

      {/* ── BOTTOM-RIGHT branch ── */}
      <svg className="absolute bottom-0 right-0 w-52 h-52 pointer-events-none" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
        <path d="M0 170 Q30 130 60 95 Q95 58 140 20" stroke="#7A9E7E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M60 95 Q42 76 32 56" stroke="#7A9E7E" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M95 60 Q110 45 120 28" stroke="#7A9E7E" strokeWidth="1.1" strokeLinecap="round"/>
        <Leaf x={31} y={54} rx={12} ry={5} rotate={-25}/>
        <Leaf x={31} y={54} rx={9} ry={4} rotate={5} color="#7A9E7E"/>
        <Leaf x={120} y={27} rx={11} ry={5} rotate={-40}/>
        <Leaf x={70} y={130} rx={10} ry={5} rotate={18} color="#7A9E7E"/>
        <Peony cx={120} cy={27} r={10} opacity={0.7}/>
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

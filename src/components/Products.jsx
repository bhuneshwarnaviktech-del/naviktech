const products = [
  {
    name: 'LegalTrack',
    accent: '#1D9E75',
    initial: 'L',
    tag: 'Legal Tech · Mobile app',
    status: 'Live',
    tagline:
      'Case management for Indian advocates — cases, documents, hearings and payments in one simple workflow.',
    points: [
      'Auto-syncs case status from eCourts',
      'Hearing reminders + client WhatsApp alerts',
      'Documents, notes & fee tracking per case',
    ],
    href: '/products/legaltrack.html',
    cta: 'Explore LegalTrack',
  },
  {
    name: 'CasePulse',
    accent: '#7C6CF0',
    initial: 'C',
    tag: 'Coming soon',
    status: 'Coming soon',
    tagline:
      'Our next product for legal teams. Details coming soon — get in touch to hear about early access.',
    points: [
      'Purpose-built for legal workflows',
      'Fast, focused and mobile-first',
      'Early access opening shortly',
    ],
    href: null,
    cta: 'Notify me',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-navy px-5 md:px-20 py-24">
      {/* ambient accents */}
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <p className="text-teal text-[0.78rem] font-semibold tracking-[2.5px] uppercase mb-3">
          Our products
        </p>
        <h2 className="font-head text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold
                       tracking-tight leading-[1.15] mb-4">
          Software we build<br />and stand behind
        </h2>
        <p className="text-slate-400 text-[1.05rem] max-w-xl mb-14">
          Alongside client work, we build our own products — starting with tools that make
          everyday legal practice simpler.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => {
            const isLive = p.status === 'Live'
            return (
              <div
                key={p.name}
                className="relative overflow-hidden bg-white/[0.04] border border-white/[0.08]
                           rounded-2xl p-8 flex flex-col card-hover"
              >
                {/* accent wash */}
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
                />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl grid place-items-center font-head font-extrabold text-white text-lg"
                      style={{ background: `linear-gradient(140deg, ${p.accent}, ${p.accent}cc)` }}
                    >
                      {p.initial}
                    </div>
                    <div>
                      <h3 className="font-head font-bold text-lg text-white leading-none">{p.name}</h3>
                      <span className="text-slate-500 text-xs font-medium">{p.tag}</span>
                    </div>
                  </div>

                  <span
                    className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold
                               px-2.5 py-1 rounded-full"
                    style={
                      isLive
                        ? { background: `${p.accent}1a`, color: p.accent }
                        : { background: 'rgba(255,255,255,0.06)', color: '#94a3b8' }
                    }
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${isLive ? 'animate-pulse-dot' : ''}`}
                      style={{ background: isLive ? p.accent : '#94a3b8' }}
                    />
                    {p.status}
                  </span>
                </div>

                <p className="text-slate-300 text-[0.95rem] leading-relaxed mb-5">{p.tagline}</p>

                <ul className="list-none space-y-2.5 mb-8">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex gap-2.5 text-slate-400 text-sm">
                      <span style={{ color: p.accent }} className="font-bold">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {p.href ? (
                    <a
                      href={p.href}
                      className="inline-flex items-center gap-2 text-white text-sm font-semibold
                                 px-5 py-2.5 rounded-lg transition-all hover:gap-3"
                      style={{ background: p.accent }}
                    >
                      {p.cta} <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold
                                 px-5 py-2.5 rounded-lg border border-white/15 text-slate-300
                                 hover:border-white/40 hover:text-white transition-all"
                    >
                      {p.cta} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

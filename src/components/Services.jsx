const services = [
  {
    icon: '🔧',
    title: 'Bug Fixes & Issue Resolution',
    desc: 'Rapid diagnosis and resolution of software defects, performance bottlenecks, and system failures across web, mobile, and backend platforms.',
  },
  {
    icon: '🤖',
    title: 'Agentic AI Enhancements',
    desc: 'Upgrade your existing software with autonomous AI agents — automate workflows, enable intelligent decision-making, and unlock new capabilities.',
  },
  {
    icon: '🚀',
    title: 'Software Product Development',
    desc: 'From concept to deployment — we design and build scalable, production-ready software products tailored to your business goals.',
  },
  {
    icon: '🌐',
    title: 'Web & Mobile Apps',
    desc: 'Modern, responsive web applications and mobile experiences built with React, React Native, and current best-practice tech stacks.',
  },
  {
    icon: '🔗',
    title: 'API & System Integration',
    desc: 'Seamlessly connect your tools, platforms, and data sources with robust API design and third-party system integrations.',
  },
  {
    icon: '💡',
    title: 'Tech Consulting',
    desc: 'Strategic technology guidance to help you choose the right stack, architecture, and roadmap for long-term growth and maintainability.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-navy-2 px-5 md:px-20 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-teal text-[0.78rem] font-semibold tracking-[2.5px] uppercase mb-3">
          What we do
        </p>
        <h2 className="font-head text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold
                       tracking-tight leading-[1.15] mb-4">
          End-to-end software<br />expertise
        </h2>
        <p className="text-slate-400 text-[1.05rem] max-w-lg mb-14">
          From debugging legacy systems to building intelligent AI-powered products —
          we handle the full spectrum.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i}
                 className="relative overflow-hidden bg-white/[0.04] border border-white/[0.08]
                            rounded-2xl p-8 group card-hover cursor-default">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.06] to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center
                                justify-center text-2xl mb-5">
                  {s.icon}
                </div>
                <h3 className="font-head font-bold text-[1.1rem] mb-2.5 text-white">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

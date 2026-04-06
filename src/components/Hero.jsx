export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center
                        px-5 md:px-20 pt-[100px] pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 grid-overlay" />

      <div className="relative z-10 max-w-2xl">
        <div className="animate-fadeUp inline-flex items-center gap-2
                        bg-teal/10 border border-teal/25 text-teal-2
                        px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-7">
          <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse-dot" />
          Agentic AI · Software Solutions
        </div>

        <h1 className="animate-fadeUp-1 font-head text-[clamp(2.4rem,6vw,4.2rem)]
                       font-extrabold leading-[1.1] tracking-[-1.5px] mb-6">
          Navigate the future<br />
          with <span className="text-teal">smarter software</span>
        </h1>

        <p className="animate-fadeUp-2 text-slate-400 text-[clamp(1rem,2vw,1.15rem)]
                      max-w-xl mb-10 leading-relaxed">
          NavikTech Solutions builds, fixes, and enhances software for businesses —
          powered by cutting-edge Agentic AI and deep engineering expertise.
        </p>

        <div className="animate-fadeUp-3 flex gap-4 flex-wrap">
          <a href="#services"
             className="bg-teal text-white px-7 py-3.5 rounded-xl font-semibold
                        text-base hover:bg-teal-2 hover:-translate-y-px transition-all">
            Explore Services
          </a>
          <a href="#contact"
             className="border border-white/[0.12] text-white px-7 py-3.5 rounded-xl
                        font-semibold text-base hover:bg-white/[0.04]
                        hover:border-white/25 transition-all">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  )
}

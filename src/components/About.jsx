const stats = [
  { num: '3+',   label: 'Active clients served' },
  { num: 'AI',   label: 'Agentic AI at core' },
  { num: '100%', label: 'Client satisfaction' },
  { num: '∞',    label: 'Commitment to quality' },
]

export default function About() {
  return (
    <section id="about" className="px-5 md:px-20 py-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-teal text-[0.78rem] font-semibold tracking-[2.5px] uppercase mb-3">
            About us
          </p>
          <h2 className="font-head text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold
                         tracking-tight leading-[1.15] mb-5">
            Built to guide you through every tech challenge
          </h2>
          <p className="text-slate-400 leading-relaxed mb-5">
            NavikTech Solutions Private Limited is a Ghaziabad-based software company
            founded with a singular mission — to make great software accessible to every
            business, regardless of size or sector.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The name <strong className="text-white">"Navik"</strong> means navigator —
            and that's exactly what we do. We guide businesses through complex technology
            landscapes with precision, transparency, and results-driven engineering.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <div key={i}
                 className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
              <div className="font-head text-3xl font-extrabold text-teal leading-none mb-2">
                {s.num}
              </div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

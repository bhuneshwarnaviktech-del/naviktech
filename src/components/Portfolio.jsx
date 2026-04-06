const projects = [
  {
    tag: 'Legal Tech',
    name: 'ACM Legal, Delhi',
    desc: 'Delivering software solutions and web presence for a Delhi-based legal services firm, ensuring reliable performance and a professional digital experience.',
    url: 'https://acmlegal.org',
  },
  {
    tag: 'Community Portal',
    name: 'Shipra Sun City AOA, Ghaziabad',
    desc: 'Built and maintain a full-featured society portal — notices, events, member directory, and contact management for apartment owners.',
    url: 'https://ssaoa.com',
  },
  {
    tag: 'Agriculture',
    name: 'PR Vedic Farm',
    desc: "Technology partnership supporting PR Vedic Farm's digital needs, helping them connect with their audience and manage operations effectively.",
    url: null,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-navy-2 px-5 md:px-20 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-teal text-[0.78rem] font-semibold tracking-[2.5px] uppercase mb-3">
          Our clients
        </p>
        <h2 className="font-head text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold
                       tracking-tight leading-[1.15] mb-4">
          Who we work with
        </h2>
        <p className="text-slate-400 text-[1.05rem] max-w-lg mb-14">
          We partner with organisations across legal, residential, and agriculture sectors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i}
                 className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7
                            card-hover">
              <span className="inline-block bg-teal/10 text-teal-2 text-xs font-semibold
                               px-2.5 py-1 rounded-md mb-4 tracking-wide">
                {p.tag}
              </span>
              <h3 className="font-head font-bold text-[1.05rem] mb-2 text-white">{p.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer"
                   className="text-teal text-sm font-semibold inline-flex items-center
                              gap-1 hover:gap-2.5 transition-all">
                  Visit website →
                </a>
              ) : (
                <span className="text-slate-500 text-sm">Coming soon online</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

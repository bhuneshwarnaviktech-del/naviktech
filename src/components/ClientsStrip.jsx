const clients = [
  { name: 'ACM Legal', url: 'https://acmlegal.org' },
  { name: 'SSAOA',     url: 'https://ssaoa.com' },
  { name: 'PR Vedic Farm', url: null },
]

export default function ClientsStrip() {
  return (
    <div className="border-t border-b border-white/[0.08] px-5 md:px-20 py-10">
      <p className="text-center text-slate-500 text-[0.78rem] tracking-[2.5px]
                    uppercase font-semibold mb-7">
        Trusted by
      </p>
      <div className="flex justify-center items-center gap-10 md:gap-16 flex-wrap">
        {clients.map(c => c.url ? (
          <a key={c.name} href={c.url} target="_blank" rel="noreferrer"
             className="font-head font-bold text-slate-400 text-sm md:text-base
                        tracking-wide hover:text-white transition-colors">
            {c.name}
          </a>
        ) : (
          <span key={c.name}
                className="font-head font-bold text-slate-400 text-sm md:text-base tracking-wide">
            {c.name}
          </span>
        ))}
      </div>
    </div>
  )
}

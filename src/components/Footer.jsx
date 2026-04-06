const links = [
  { href: '#services',  label: 'Services' },
  { href: '#about',     label: 'About' },
  { href: '#portfolio', label: 'Clients' },
  { href: '#contact',   label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-5 md:px-20 py-8
                       flex justify-between items-center flex-wrap gap-4
                       text-slate-400 text-sm">
      <div className="flex items-center gap-4">
        <span className="font-head font-extrabold text-base text-white">
          Navik<span className="text-teal">Tech</span>
        </span>
        <span>© {new Date().getFullYear()} NavikTech Solutions Pvt. Ltd.</span>
      </div>
      <div className="flex gap-6 flex-wrap">
        {links.map(l => (
          <a key={l.href} href={l.href}
             className="hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

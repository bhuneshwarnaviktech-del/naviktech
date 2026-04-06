import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about',    label: 'About' },
  { href: '#portfolio', label: 'Clients' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                      px-5 md:px-16 h-[68px]
                      bg-navy/85 backdrop-blur-xl border-b border-white/[0.08]">
        <a href="#" className="font-head text-xl font-extrabold tracking-tight text-white">
          Navik<span className="text-teal">Tech</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href}
                 className="text-slate-400 text-sm font-medium hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact"
           className="hidden md:inline-block bg-teal text-white px-5 py-2 rounded-lg
                      text-sm font-semibold hover:bg-teal-2 transition-colors">
          Get in touch
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)}
                className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
                aria-label="Toggle menu">
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300
                            ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300
                            ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300
                            ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-[68px] left-0 right-0 z-40
                        bg-navy-2 border-b border-white/[0.08]
                        flex flex-col px-6 pb-6 pt-4 gap-0">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
               onClick={() => setOpen(false)}
               className="text-slate-400 text-base font-medium py-3
                          border-b border-white/[0.06] hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
             className="mt-4 bg-teal text-white text-center px-5 py-3 rounded-lg
                        font-semibold text-sm hover:bg-teal-2 transition-colors">
            Get in touch
          </a>
        </div>
      )}
    </>
  )
}

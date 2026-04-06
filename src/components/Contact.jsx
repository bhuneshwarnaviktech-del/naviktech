import { useState } from 'react'

const contactItems = [
  { icon: '📍', text: 'Ghaziabad, Uttar Pradesh, India' },
  { icon: '✉️', text: 'hello@naviktech.in' },
  { icon: '🕒', text: 'Mon – Sat, 9 AM – 7 PM IST' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); e.target.reset() }, 3500)
  }

  return (
    <section id="contact" className="px-5 md:px-20 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-teal text-[0.78rem] font-semibold tracking-[2.5px] uppercase mb-3">
          Get in touch
        </p>
        <h2 className="font-head text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold
                       tracking-tight leading-[1.15] mb-14">
          Let's build something together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <h3 className="font-head text-2xl font-bold mb-4 text-white">
              We'd love to hear from you
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you have a bug to fix, a product idea, or want to explore what
              Agentic AI can do for your business — reach out.
            </p>
            {contactItems.map((c, i) => (
              <div key={i} className="flex items-start gap-3.5 mb-5 text-slate-400 text-sm">
                <div className="w-9 h-9 min-w-[36px] rounded-xl bg-teal/10
                                flex items-center justify-center text-base">
                  {c.icon}
                </div>
                <span className="leading-relaxed pt-1.5">{c.text}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 text-sm font-medium">Your name</label>
              <input type="text" placeholder="Ravi Kumar" required
                     className="bg-white/[0.04] border border-white/[0.08] rounded-xl
                                px-4 py-3 text-white text-sm font-body outline-none
                                focus:border-teal/40 transition-colors placeholder:text-slate-600" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 text-sm font-medium">Email address</label>
              <input type="email" placeholder="ravi@example.com" required
                     className="bg-white/[0.04] border border-white/[0.08] rounded-xl
                                px-4 py-3 text-white text-sm font-body outline-none
                                focus:border-teal/40 transition-colors placeholder:text-slate-600" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 text-sm font-medium">I need help with</label>
              <select className="bg-navy-2 border border-white/[0.08] rounded-xl
                                 px-4 py-3 text-white text-sm font-body outline-none
                                 focus:border-teal/40 transition-colors">
                <option value="">Select a service</option>
                <option>Bug Fix / Issue Resolution</option>
                <option>Agentic AI Enhancement</option>
                <option>New Software Product</option>
                <option>Web / Mobile App</option>
                <option>Tech Consulting</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-400 text-sm font-medium">Message</label>
              <textarea placeholder="Tell us a bit about your project or problem..."
                        className="bg-white/[0.04] border border-white/[0.08] rounded-xl
                                   px-4 py-3 text-white text-sm font-body outline-none
                                   focus:border-teal/40 transition-colors resize-none
                                   min-h-[110px] placeholder:text-slate-600" />
            </div>
            <button type="submit"
                    className={`w-full py-3.5 rounded-xl font-semibold text-white
                                transition-all text-sm
                                ${submitted
                                  ? 'bg-green-500 cursor-default'
                                  : 'bg-teal hover:bg-teal-2 hover:-translate-y-px'}`}>
              {submitted ? 'Message sent ✓' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

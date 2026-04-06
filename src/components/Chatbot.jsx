import { useState, useRef, useEffect } from 'react'

const SYSTEM_PROMPT = `You are NavikTech Solutions' helpful website assistant. NavikTech Solutions Pvt. Ltd. is a software company based in Ghaziabad, UP, India.

Services offered:
1. Bug Fixes & Software Issue Resolution — rapid diagnosis across web, mobile, backend
2. Agentic AI Enhancements — adding autonomous AI capabilities to existing software
3. Software Product Development — end-to-end product design and engineering
4. Web & Mobile Apps — React, React Native, modern stacks
5. API & System Integration
6. Tech Consulting

Current clients:
- ACM Legal, Delhi (acmlegal.org) — legal tech
- Shipra Sun City Apartment Owners Association, Ghaziabad (ssaoa.com) — community portal
- PR Vedic Farm — agriculture sector

Contact: hello@naviktech.in | Mon–Sat, 9 AM–7 PM IST | Ghaziabad, UP

Be helpful, concise, and professional. If someone wants to get in touch, direct them to the contact form on this page or email hello@naviktech.in. Keep responses under 120 words.`

export default function Chatbot() {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m the NavikTech assistant. Ask me anything about our services, clients, or how we can help your business. 👋' }
  ])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef        = useRef(null)
  const textareaRef           = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages(m => [...m, { role: 'user', text }])
    setLoading(true)

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: text }]
        })
      })
      const data = await res.json()
      const reply = data.content?.find(b => b.type === 'text')?.text
        || 'Sorry, I could not get a response. Please email hello@naviktech.in.'
      setMessages(m => [...m, { role: 'bot', text: reply }])
    } catch {
      setMessages(m => [...m, { role: 'bot', text: 'Something went wrong. Please email hello@naviktech.in directly.' }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Chat window */}
      <div className={`fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-32px))] h-[520px]
                       bg-navy-2 border border-white/[0.08] rounded-2xl flex flex-col
                       shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden
                       transition-all duration-300 origin-bottom-right
                       ${open ? 'scale-100 opacity-100 pointer-events-auto'
                               : 'scale-90 opacity-0 pointer-events-none'}`}>

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.08]">
          <div className="w-9 h-9 rounded-full bg-teal/15 flex items-center justify-center text-base">🤖</div>
          <div>
            <h4 className="text-sm font-semibold text-white leading-none mb-1">NavikTech Assistant</h4>
            <span className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
              Online now
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-messages flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {messages.map((m, i) => (
            <div key={i} className={`animate-msgIn max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed
                                     ${m.role === 'user'
                                       ? 'bg-teal text-white self-end rounded-br-sm'
                                       : 'bg-white/[0.06] border border-white/[0.08] text-slate-200 self-start rounded-bl-sm'}`}>
              {m.text}
            </div>
          ))}
          {loading && (
            <div className="animate-msgIn max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm
                            bg-white/[0.06] border border-white/[0.08] text-slate-400 italic self-start rounded-bl-sm">
              Typing...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2 items-end px-4 py-3 border-t border-white/[0.08]">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={1}
            placeholder="Ask about our services..."
            className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded-xl
                       px-3.5 py-2.5 text-white text-sm font-body outline-none resize-none
                       max-h-20 min-h-[40px] focus:border-teal/40 transition-colors
                       placeholder:text-slate-500"
          />
          <button onClick={send} disabled={loading || !input.trim()}
                  className="w-10 h-10 min-w-[40px] rounded-xl bg-teal text-white flex items-center
                             justify-content-center text-base transition-colors
                             hover:bg-teal-2 disabled:opacity-40 disabled:cursor-not-allowed
                             flex justify-center items-center">
            ➤
          </button>
        </div>
      </div>

      {/* Bubble toggle */}
      <button onClick={() => setOpen(o => !o)}
              className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-teal
                         flex items-center justify-center text-xl text-white border-none cursor-pointer
                         shadow-[0_8px_24px_rgba(14,165,233,0.4)] hover:bg-teal-2 hover:scale-105
                         transition-all duration-200"
              aria-label="Toggle chat">
        {open ? '✕' : '💬'}
      </button>
    </>
  )
}

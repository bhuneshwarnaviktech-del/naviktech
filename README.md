# NavikTech Solutions — Website

Official website for NavikTech Solutions Pvt. Ltd.
Built with React + Vite + Tailwind CSS. Deployable on Vercel for free.

---

## Tech Stack

- **React 18** — UI framework
- **Vite** — fast dev server and build tool
- **Tailwind CSS** — utility-first styling
- **React Router** — client-side routing
- **Claude API (Anthropic)** — AI chatbot

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 3. Build for production

```bash
npm run build
```

---

## Project Structure

```
naviktech/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Router + layout
    ├── index.css         # Tailwind + global styles
    ├── pages/
    │   └── Home.jsx      # Main page
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── ClientsStrip.jsx
        ├── Services.jsx
        ├── About.jsx
        ├── Portfolio.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── Chatbot.jsx   # AI chatbot (Claude API)
```

---

## Deploying to Vercel (Free)

### Option A — Via GitHub (Recommended)

1. Push this project to a GitHub repository
2. Go to https://vercel.com and sign in with GitHub
3. Click **"Add New Project"** → select your repo
4. Vercel auto-detects Vite — click **Deploy**
5. Done! Your site is live at `yourproject.vercel.app`

### Option B — Via Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## Connecting a Custom Domain

1. Buy a domain (e.g. `naviktech.in`) from GoDaddy, Namecheap, etc.
2. In Vercel dashboard → your project → **Settings → Domains**
3. Add your domain and follow the DNS instructions
4. Vercel handles SSL automatically — free HTTPS included

---

## Updating Content

All content is easy to edit — no CMS needed:

| What to change | File |
|---|---|
| Services list | `src/components/Services.jsx` |
| Client portfolio | `src/components/Portfolio.jsx` |
| About stats | `src/components/About.jsx` |
| Contact details | `src/components/Contact.jsx` |
| Chatbot knowledge | `src/components/Chatbot.jsx` → `SYSTEM_PROMPT` |
| Company name/logo | `src/components/Navbar.jsx` + `src/components/Footer.jsx` |

---

## Contact Form — Connect to Email

Currently the form shows a success state but does not send email.
To wire it up, use **EmailJS** (free tier available):

1. Create account at https://emailjs.com
2. `npm install @emailjs/browser`
3. In `Contact.jsx`, replace the `handleSubmit` function:

```js
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    .then(() => { setSubmitted(true); setTimeout(() => setSubmitted(false), 3500) })
    .catch(() => alert('Failed to send. Please email hello@naviktech.in directly.'))
}
```

---

## Notes

- The AI chatbot uses the Anthropic Claude API. In Claude.ai artifacts the API key is handled automatically. For your deployed site, you will need a backend proxy to keep your API key secret — do not expose it in frontend code.
- Fonts load from Google Fonts (Syne + DM Sans) — requires internet connection.

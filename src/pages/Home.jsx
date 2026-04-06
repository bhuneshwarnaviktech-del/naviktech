import Hero from '../components/Hero'
import ClientsStrip from '../components/ClientsStrip'
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsStrip />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

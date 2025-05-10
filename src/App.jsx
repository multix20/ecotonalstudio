import WhatsappButton from './components/WhatsappButton';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Equipment from './components/Equipment'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Equipment />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsappButton />
          </div>
  )
}

export default App

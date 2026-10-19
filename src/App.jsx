import About from './components/About.jsx'
import BackToTop from './components/BackToTop.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import ParticleField from './components/ParticleField.jsx'
import Projects from './components/Projects.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Skills from './components/Skills.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <ParticleField />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

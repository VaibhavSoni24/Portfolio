import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Certificates from '@/components/Certificates'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
      </main>
      <Footer />
    </>
  )
}

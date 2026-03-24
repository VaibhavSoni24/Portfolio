'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Instagram, Mail } from 'lucide-react'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certificates' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      // Detect active section
      const sections = navLinks.map(l => l.href.slice(1))
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-bold text-sm glow-accent transition-all group-hover:scale-110">
              VS
            </div>
            <span className="font-bold text-text-primary hidden sm:block">Vaibhav Soni</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com/VaibhavSoni24" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-soni-867836285/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="mailto:vaibhavsoni280506@gmail.com" className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all">
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg/98 backdrop-blur-xl border-b border-dark-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'bg-accent/20 text-accent'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-dark-border mt-3">
              <a href="https://github.com/VaibhavSoni24" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-soni-867836285/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/vaibhav_shubham_soni/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

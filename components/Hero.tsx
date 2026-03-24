'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Instagram, Mail, Code2, Gamepad2, Brain } from 'lucide-react'

const roles = ['Full Stack Developer', 'Game Developer', 'AI Enthusiast']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Typewriter effect
  useEffect(() => {
    const role = roles[roleIndex]
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`
        ctx.fill()
      })
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle BG */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-2/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-3/5 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6 animate-slide-up" style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.2s' }}>
          <span className="text-text-primary">Vaibhav </span>
          <span className="gradient-text">Soni</span>
        </h1>

        {/* Typewriter role */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-secondary mb-6 h-10 animate-slide-up" style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.4s' }}>
          <span className="text-accent">&lt;</span>
          <span className="text-text-primary font-mono">{displayed}</span>
          <span className="animate-pulse text-accent-2">|</span>
          <span className="text-accent">/&gt;</span>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.6s' }}>
          B.Tech CSE student at <span className="text-text-primary font-medium">Arya College of Engineering</span>, Jaipur.
          Building intelligent systems, immersive games, and scalable web apps.
          Hackathon runner-up, open-source contributor & lifelong learner.
        </p>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.7s' }}>
          {[
            { icon: Code2, label: '33+ Projects' },
            { icon: Gamepad2, label: '9+ Games' },
            { icon: Brain, label: '20+ Hackathons' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/20">
              <Icon size={16} className="text-accent" />
              <span className="text-sm font-medium text-text-secondary">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.8s' }}>
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
          >
            View Projects
          </a>
          <a
            href="mailto:vaibhavsoni280506@gmail.com"
            className="px-8 py-3 rounded-xl font-semibold text-text-primary border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '1s' }}>
          {[
            { href: 'https://github.com/VaibhavSoni24', icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/vaibhav-soni-867836285/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'https://www.instagram.com/vaibhav_shubham_soni/', icon: Instagram, label: 'Instagram' },
            { href: 'mailto:vaibhavsoni280506@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl glass-card hover:border-accent/50 hover:text-accent transition-all duration-300 hover:scale-110 hover:shadow-lg text-text-secondary"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>


    </section>
  )
}

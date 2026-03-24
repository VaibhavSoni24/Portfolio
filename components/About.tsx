'use client'

import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { MapPin, GraduationCap, Code2, Gamepad2, Brain, Zap } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const highlights = [
    { icon: Code2, label: 'Full Stack Dev', desc: 'Django, Next.js, Flask, React' },
    { icon: Gamepad2, label: 'Game Dev', desc: 'Godot, Unity, GDScript, C#' },
    { icon: Brain, label: 'AI / ML', desc: 'TensorFlow, PyTorch, OpenCV' },
    { icon: Zap, label: 'Hackathons', desc: 'Runner-up, Top 7, Top 10' },
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-mono text-sm font-medium tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full shimmer-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Avatar / decorative */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative max-w-sm mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-accent-2 to-accent-3 blur-2xl opacity-25 animate-pulse" />
              <div className="relative glass-card p-8 rounded-3xl border border-accent/20">
                {/* Photo */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  {/* Gradient ring */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent via-accent-2 to-accent-3 p-[3px] glow-accent">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-dark-card">
                      <Image
                        src="/Me.jpeg"
                        alt="Vaibhav Soni"
                        width={144}
                        height={144}
                        className="w-full h-full object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-text-primary mb-1">Vaibhav Soni</h3>
                  <p className="text-accent font-medium text-sm mb-4">Full Stack · Game Dev · AI</p>
                  <div className="flex items-center justify-center gap-2 text-text-secondary text-sm">
                    <MapPin size={14} className="text-accent-3" />
                    Jaipur, Rajasthan, India
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
                  {[
                    { val: '33+', label: 'Projects' },
                    { val: '20+', label: 'Hackathons' },
                    { val: '70+', label: 'Certificates' },
                  ].map(s => (
                    <div key={s.label} className="text-center">
                      <p className="text-xl font-black gradient-text">{s.val}</p>
                      <p className="text-xs text-text-muted mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right – Text */}
          <div className={`transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-5 text-text-secondary text-base leading-relaxed">
              <p>
                I'm a <span className="text-text-primary font-semibold">B.Tech CSE student</span> at Arya College of Engineering,
                Jaipur (RTU, Kota), passionate about building things that matter – from AI-powered civic platforms
                to immersive multiplayer games.
              </p>
              <p>
                My journey spans <span className="text-accent font-medium">full-stack web development</span>,
                <span className="text-accent-2 font-medium"> game development</span>, and
                <span className="text-accent-3 font-medium"> machine learning</span>. I love competing in hackathons
                where I've achieved runner-up at TiE Global Hackathon, top 7 at MNIT Sphinx, and top 10 at RIET Enigma.
              </p>
              <p>
                Beyond code, I'm a <span className="text-text-primary font-semibold">video editor</span> with experience
                creating anime edits, promotional content and worked as a video editor intern. I believe great software
                needs both technical depth and creative vision.
              </p>
              <p>
                Currently exploring AI automation pipelines, cloud-native deployments, and the boundary between
                games and interactive storytelling.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6 p-4 rounded-xl bg-accent/5 border border-accent/15">
              <GraduationCap size={20} className="text-accent shrink-0" />
              <div>
                <p className="text-sm font-semibold text-text-primary">Arya College of Engineering (Main Campus)</p>
                <p className="text-xs text-text-muted">B.Tech CSE · RTU, Kota · 4th Sem SGPA: 8.83</p>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="glass-card p-4 rounded-xl hover:border-accent/40 cursor-default">
                  <Icon size={18} className="text-accent mb-2" />
                  <p className="text-sm font-semibold text-text-primary">{label}</p>
                  <p className="text-xs text-text-muted mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

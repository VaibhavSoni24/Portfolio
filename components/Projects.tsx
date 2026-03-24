'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, X } from 'lucide-react'

const projects = [
  {
    title: 'CivicSaathi',
    category: 'Web / AI',
    desc: 'AI-powered Municipal Complaint Management System. Full-stack platform for filing, routing, and resolving civic complaints with AI verification, duplicate detection, and SLA-driven escalation.',
    tech: ['Django REST', 'Next.js', 'Google Gemini API', 'PostgreSQL'],
    github: 'https://github.com/VaibhavSoni24/CivicSaathi',
    live: null,
    highlight: 'Runner-up, TiE Global Hackathon 2025',
    gradient: 'from-accent via-accent-2 to-accent-3',
  },
  {
    title: 'Real-Time Call / Meeting Analyzer',
    category: 'AI / Web',
    desc: 'Transcribes meeting recordings, analyzes with Gemini API, sends automated email MOM and updates Google Calendar. Top 7 at Sphinx MNIT Hackathon.',
    tech: ['Flask', 'HTML/CSS/JS', 'Google Gemini API', 'Google Calendar API'],
    github: 'https://github.com/VaibhavSoni24/Call',
    live: null,
    highlight: 'Top 7, Sphinx MNIT Jaipur',
    gradient: 'from-blue-500 via-accent to-accent-2',
  },
  {
    title: 'Multi-Cloud Platform Manager',
    category: 'Cloud / Web',
    desc: 'Comprehensive web dashboard for managing cloud resources across AWS, GCP, and Azure from a single interface. Centralized auth, container & VM management.',
    tech: ['Flask', 'Next.js', 'AWS', 'GCP', 'Azure'],
    github: 'https://github.com/VaibhavSoni24/Hackingly-Dashboard',
    live: null,
    highlight: null,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'SkillTrack.AI',
    category: 'AI / Mobile',
    desc: 'AI-powered skill tracking and portfolio platform. Flutter client app for web and mobile experiences with intelligent skill assessment.',
    tech: ['Flutter', 'Dart', 'AI Integration'],
    github: 'https://github.com/VaibhavSoni24/SkillTrack.AI',
    live: null,
    highlight: null,
    gradient: 'from-accent-2 to-pink-600',
  },
  {
    title: 'CodeConcept',
    category: 'EdTech / AI',
    desc: 'AI-assisted learning platform helping students understand conceptual mistakes in code, not just syntax errors. Runtime execution + AST visualization + guided feedback.',
    tech: ['FastAPI', 'Django REST', 'React + Vite', 'Monaco Editor'],
    github: 'https://github.com/VaibhavSoni24/CodeConcept',
    live: null,
    highlight: 'Top 30, HackJKLU',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'AaluGPT Experiment',
    category: 'AI / ML',
    desc: 'Heavily quantized, fine-tuned "diet" of GPT-2 compressed to a fraction of its size, trained on chaotic internet data. Generates text at 44–56 tokens/s on T4 GPU. Hallucinates with confidence.',
    tech: ['Python', 'GPT-2', 'PyTorch', 'Quantization', 'T4 GPU'],
    github: 'https://github.com/VaibhavSoni24/AaluGPT',
    live: null,
    highlight: null,
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'AI Video Automation',
    category: 'AI / Automation',
    desc: 'Fully automated YouTube content pipeline – generates and uploads videos without manual intervention. Daily Shorts + weekly long-form videos.',
    tech: ['Python', 'n8n', 'Docker', 'Free-tier AI APIs'],
    github: 'https://github.com/VaibhavSoni24/ai-video-automation',
    live: null,
    highlight: null,
    gradient: 'from-red-500 to-pink-600',
  },
  {
    title: 'DreamWeaver',
    category: 'Creative / AI',
    desc: 'Interactive branching-story generator powered by Groq llama3 + GSAP animations. Users choose AI-generated story continuations with mood-driven character art.',
    tech: ['HTML/CSS/JS', 'Groq llama3', 'GSAP'],
    github: 'https://github.com/VaibhavSoni24/DreamWeaver',
    live: 'https://dreamweaverofficial.netlify.app/',
    highlight: null,
    gradient: 'from-violet-600 to-purple-700',
  },
  {
    title: 'Undead Survival',
    category: 'Game',
    desc: '2D top-down multiplayer survival zombie shooter made with Godot + GDScript during GMTK Game Jam 2025, representing Vortalis Technologies.',
    tech: ['Godot', 'GDScript', 'Multiplayer', 'GMTK Game Jam'],
    github: 'https://github.com/VaibhavSoni24/Vortalis_Game',
    live: 'https://lastword.itch.io/undead-survival',
    highlight: 'GMTK Game Jam 2025',
    gradient: 'from-green-600 to-emerald-700',
  },
  {
    title: 'FluentMate',
    category: 'AI / EdTech',
    desc: 'AI-powered language learning assistant for practicing spoken English through real-time conversations, grammar correction, and confidence building. Innovastra 2025.',
    tech: ['Flask', 'HTML/CSS/JS', 'AI NLP'],
    github: 'https://github.com/VaibhavSoni24/Innovastra',
    live: null,
    highlight: 'Innovastra 2025 Hackathon',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    title: 'CareConnect',
    category: 'Healthcare / AI',
    desc: 'AI-powered healthcare platform for early disease detection, remote monitoring, personalized recommendations, and emergency assistance. Integrates AI + IoT concepts.',
    tech: ['Flask', 'HTML/CSS/JS', 'AI/ML'],
    github: 'https://github.com/VaibhavSoni24/CareConnect',
    live: null,
    highlight: null,
    gradient: 'from-rose-500 to-red-600',
  },
  {
    title: 'Drowsiness Detector',
    category: 'AI / CV',
    desc: 'Flask web app using OpenCV and Haarcascades for face and eye detection to monitor drowsiness. Triggers an alarm when excessive blinking is detected.',
    tech: ['Flask', 'OpenCV', 'Haarcascades', 'Python'],
    github: 'https://github.com/VaibhavSoni24/Drowsiness_Detector',
    live: null,
    highlight: null,
    gradient: 'from-yellow-600 to-orange-600',
  },
  {
    title: 'Cheap Mario',
    category: 'Game',
    desc: 'A Godot + GDScript platformer game inspired by Super Mario, made independently.',
    tech: ['Godot', 'GDScript'],
    github: 'https://github.com/VaibhavSoni24/Cheap-Mario',
    live: 'https://github.com/VaibhavSoni24/Cheap-Mario/releases',
    highlight: null,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: 'Wolfenstein 3D Clone',
    category: 'Game',
    desc: 'A Godot + GDScript raycasting game similar to Wolfenstein 3D. Learned raycasting-based 3D rendering techniques.',
    tech: ['Godot', 'GDScript', 'Raycasting'],
    github: 'https://github.com/VaibhavSoni24/Cheap-Wolfenstein-3D',
    live: null,
    highlight: null,
    gradient: 'from-zinc-600 to-gray-700',
  },
  {
    title: 'Beast Boy: The Last Hope',
    category: 'Game',
    desc: 'An ongoing solo game project made with Godot. A story-driven adventure about a young hero.',
    tech: ['Godot', 'GDScript'],
    github: 'https://github.com/VaibhavSoni24/Beast-Boy-The-Last-Hope',
    live: null,
    highlight: '🚧 In Progress',
    gradient: 'from-indigo-600 to-blue-700',
  },
  {
    title: 'Crypto Based Subscription Model',
    category: 'Blockchain',
    desc: 'Smart contract-based decentralized subscription system using cryptocurrency (Ether), made during EduChain Blockchain Workshop.',
    tech: ['Solidity', 'Web3', 'Ethereum'],
    github: 'https://github.com/VaibhavSoni24/CryptoBasedSubscriptionModel',
    live: null,
    highlight: 'EduChain Blockchain Workshop',
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    title: 'AI Flashcard Language Learning App',
    category: 'AI / EdTech',
    desc: 'AI-powered Flashcard Web App using intelligent repetition for language learning. Built for HackHazards Hackathon.',
    tech: ['HTML/CSS/JS', 'AI APIs'],
    github: 'https://github.com/VaibhavSoni24/HackHazards',
    live: null,
    highlight: 'HackHazards Hackathon',
    gradient: 'from-fuchsia-500 to-pink-600',
  },
  {
    title: 'Death Timer',
    category: 'Creative / Web',
    desc: 'Sleek, futuristic web-based timer with three countdown modes, animated UI effects, and dark/light theme support.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/VaibhavSoni24/Death-Timer',
    live: null,
    highlight: null,
    gradient: 'from-slate-600 to-gray-700',
  },
]

const allCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [active, setActive] = useState('All')
  const [expanded, setExpanded] = useState<string | null>(null)
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section-padding relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-mono text-sm font-medium tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="section-title gradient-text">Projects</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full shimmer-line" />
          <p className="text-text-muted text-sm mt-4">{projects.length} projects across Web, AI, Games, Blockchain & more</p>
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === cat
                  ? 'bg-accent text-white border-accent glow-accent'
                  : 'bg-white/5 text-text-secondary border-white/10 hover:bg-white/10 hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setExpanded(p.title === expanded ? null : p.title)}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">{p.title}</h3>
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-white/5 text-text-muted border border-white/10">{p.category}</span>
                </div>

                {p.highlight && (
                  <div className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full mb-3 bg-gradient-to-r ${p.gradient} text-white font-semibold`}>
                    🏆 {p.highlight}
                  </div>
                )}

                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">{p.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map(t => <span key={t} className="chip text-xs">{t}</span>)}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub
                    </a>
                  ) : (
                    <span className="text-xs text-text-muted/40 italic">No GitHub</span>
                  )}
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-3 transition-colors">
                      <ExternalLink size={12} /> Live
                    </a>
                  ) : (
                    <span className="text-xs text-text-muted/40 italic">Not Live</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

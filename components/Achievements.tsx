'use client'

import { useInView } from 'react-intersection-observer'
import { Trophy, Star, ExternalLink, Award, Medal, Target } from 'lucide-react'

const achievements = [
  {
    rank: 'Runner-up',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-500',
    glow: 'shadow-yellow-500/30',
    event: 'Rajasthan Digifest × TiE Global Hackathon',
    project: 'CivicSaathi',
    org: 'Vivekanand Global University',
    desc: 'AI-powered Municipal Complaint Management System. Competed against top teams statewide.',
    link: 'https://github.com/VaibhavSoni24/CivicSaathi',
    badge: '🥈',
  },
  {
    rank: 'Top 7',
    icon: Star,
    color: 'from-accent to-accent-2',
    glow: 'shadow-indigo-500/30',
    event: 'Sphinx Hackathon – MNIT Jaipur',
    project: 'Real-Time Call / Meeting Analyzer',
    org: 'Malaviya National Institute of Technology',
    desc: 'Real-time meeting transcription with Google Gemini, automated MOM & Google Calendar integration.',
    link: 'https://github.com/VaibhavSoni24/Call',
    badge: '⭐',
  },
  {
    rank: 'Top 10',
    icon: Award,
    color: 'from-accent-2 to-accent-3',
    glow: 'shadow-violet-500/30',
    event: 'Enigma Hackathon – RIET',
    project: 'CivicSaathi',
    org: 'Rajasthan Institute of Engineering & Technology',
    desc: 'Civic complaint management platform with AI verification and smart duplicate detection.',
    link: 'https://github.com/VaibhavSoni24/CivicSaathi',
    badge: '🏆',
  },
  {
    rank: 'Top 30',
    icon: Medal,
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/30',
    event: 'HackJKLU – JK Laxmipath University',
    project: 'CodeConcept',
    org: 'JKLU Jaipur',
    desc: 'AI-assisted learning platform that understands conceptual code mistakes, not just syntax errors.',
    link: 'https://github.com/VaibhavSoni24/CodeConcept',
    badge: '🎯',
  },
  {
    rank: 'Top 25%',
    icon: Target,
    color: 'from-orange-500 to-red-500',
    glow: 'shadow-orange-500/30',
    event: 'IIT Guwahati Summer Analytics Program',
    project: 'Capstone Project + Merit Certificate',
    org: 'Indian Institute of Technology Guwahati',
    desc: 'Completed the Summer Analytics 2025 program with merit, placing in the top 25% of all participants.',
    link: 'https://github.com/VaibhavSoni24/SummerAnalytics2025',
    badge: '📊',
  },
  {
    rank: '3rd Place',
    icon: Medal,
    color: 'from-amber-600 to-orange-600',
    glow: 'shadow-amber-500/30',
    event: 'Running Competition',
    project: 'School Athletics',
    org: '10th class school meet',
    desc: 'Secured 3rd place in the running competition during 10th class school annual sports meet.',
    link: null,
    badge: '🥉',
  },
  {
    rank: 'Best Student',
    icon: Award,
    color: 'from-pink-500 to-rose-600',
    glow: 'shadow-pink-500/30',
    event: 'Best Disciplined Student Award',
    project: 'School Recognition',
    org: '8th class school award',
    desc: 'Awarded the Best Disciplined Student award by school faculty in 8th class.',
    link: null,
    badge: '🏅',
  },
]

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-2/3 to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-mono text-sm font-medium tracking-widest uppercase mb-3">Wins & Recognitions</p>
          <h2 className="section-title gradient-text">Achievements</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full shimmer-line" />
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((a, i) => {
            const Icon = a.icon
            return (
              <div
                key={a.event}
                className={`glass-card p-6 rounded-2xl group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Rank badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${a.color} text-white shadow-lg ${a.glow}`}>
                  <span>{a.badge}</span>
                  {a.rank}
                </div>

                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center mb-3 shadow-lg ${a.glow}`}>
                  <Icon size={18} className="text-white" />
                </div>

                <h3 className="text-sm font-bold text-text-primary mb-1 group-hover:text-accent transition-colors leading-snug">{a.event}</h3>
                <p className="text-xs text-accent-2 font-semibold mb-1">{a.project}</p>
                <p className="text-xs text-text-muted mb-3">{a.org}</p>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">{a.desc}</p>

                {a.link ? (
                  <a href={a.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-2 transition-colors font-medium">
                    <ExternalLink size={12} /> View Project
                  </a>
                ) : (
                  <span className="text-xs text-text-muted/40 italic">No link</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

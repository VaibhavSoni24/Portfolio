'use client'

import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'AI Trainer Intern',
    company: 'Aerophantom',
    period: 'Oct 2025 – Oct 2025',
    duration: '1 month',
    location: 'Bijnor, Uttar Pradesh, India',
    type: 'On-site',
    color: 'from-accent to-accent-2',
    description: 'Learned and trained students about AI Automation, Transistors, Sensors; helped in making automated alarm systems using transistors and sensors.',
    tags: ['AI', 'Automation', 'Electronics', 'Teaching'],
    github: null,
    live: null,
  },
  {
    title: 'Game Developer Intern',
    company: 'Vortalis Technologies',
    period: 'Jun 2025 – Aug 2025',
    duration: '2 months',
    location: 'Jaipur, Rajasthan, India',
    type: 'On-site',
    color: 'from-accent-2 to-accent-3',
    description: 'Made "Undead Survival" in collaboration with teammate Chaitanya and manager Shaan Sir for the GMTK Game Jam, representing the company.',
    tags: ['Godot', 'GDScript', 'Game Dev', 'GMTK Game Jam'],
    github: 'https://github.com/VaibhavSoni24/Vortalis_Game',
    live: 'https://lastword.itch.io/undead-survival',
  },
  {
    title: 'Web Development Intern',
    company: 'CollegeTips.in',
    period: 'Jun 2025 – Jun 2025',
    duration: '1 month',
    location: 'Remote',
    type: 'Remote',
    color: 'from-green-500 to-emerald-600',
    description: 'Helped in building the frontend of the official CollegeTips.in website.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    github: null,
    live: 'https://collegetips.in/',
  },
  {
    title: 'Trainee',
    company: 'MSDE Skill India (NCVET)',
    period: 'Jul 2024 – Oct 2024',
    duration: '4 months',
    location: 'Remote',
    type: 'Remote',
    color: 'from-yellow-500 to-orange-500',
    description: 'Learned Web Application Development (Full Stack) under the Government of India\'s Skill India mission.',
    tags: ['Full Stack', 'Web Dev', 'Government Initiative'],
    github: null,
    live: null,
  },
  {
    title: 'Video Editor Intern',
    company: 'Shouko.shop',
    period: 'Jun 2024 – Jun 2024',
    duration: '1 month',
    location: 'Hybrid – Jaipur, Rajasthan',
    type: 'Hybrid',
    color: 'from-pink-500 to-rose-600',
    description: 'Created promotional and advertising videos for the company\'s social media platforms.',
    tags: ['Video Editing', 'Social Media', 'Content Creation'],
    github: null,
    live: null,
  },
]

const typeColor: Record<string, string> = {
  'On-site': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Remote': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Hybrid': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="experience" className="section-padding relative">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-mono text-sm font-medium tracking-widest uppercase mb-3">Work History</p>
          <h2 className="section-title gradient-text">Experience</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full shimmer-line" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line rounded-full hidden sm:block" style={{ transform: 'translateX(-50%)' }} />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company + exp.title}
                className={`relative flex flex-col sm:flex-row gap-6 sm:gap-8 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-dark-bg`} />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block flex-1" />

                {/* Card */}
                <div className="flex-1 sm:max-w-[calc(50%-2rem)]">
                  <div className="glass-card p-6 rounded-2xl hover:border-accent/40 group">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">{exp.title}</h3>
                        <p className="text-accent-2 font-semibold text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <span className={`shrink-0 text-xs px-2.5 py-1 rounded-full border font-medium ${typeColor[exp.type]}`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
                      <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                      <span className="flex items-center gap-1"><Briefcase size={12} />{exp.duration}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map(t => <span key={t} className="chip">{t}</span>)}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {exp.github ? (
                        <a href={exp.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                          GitHub
                        </a>
                      ) : (
                        <span className="text-xs text-text-muted/50 italic">No GitHub</span>
                      )}
                      {exp.live && (
                        <a href={exp.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-3 transition-colors">
                          <ExternalLink size={12} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

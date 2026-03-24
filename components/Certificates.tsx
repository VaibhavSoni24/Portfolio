'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, Github } from 'lucide-react'

// ---- DATA ----
const badges = [
  { name: 'Deep Learning', org: 'CipherSchools', date: 'July 2025', color: 'from-accent to-accent-2' },
  { name: 'DevSummit Hackathon', org: 'Jagannath University', date: 'March 2025', color: 'from-accent-2 to-accent-3' },
  { name: 'GirlScript SummerOfCode', org: 'GirlScript Foundation', date: 'October 2024', color: 'from-pink-500 to-rose-600' },
]

const courses = [
  { name: 'Basics of Computer Science – The Hour of Code', org: 'CODE', date: 'June 2025' },
  { name: 'Core Concepts of Java', org: 'DevTown', date: 'December 2024' },
  { name: 'Software Engineer Job Simulation', org: 'Forage – Accenture', date: 'April 2025' },
  { name: 'Basics of Video Editing', org: 'GreatLearning', date: 'November 2024' },
  { name: 'Agile Project Management', org: 'HPLife', date: 'October 2024' },
  { name: 'Data Science & Analytics', org: 'HPLife', date: 'October 2024' },
  { name: 'Effective Business Website', org: 'HPLife', date: 'October 2024' },
  { name: 'Introduction to Cybersecurity Awareness', org: 'HPLife', date: 'October 2024' },
  { name: 'Flappy Bird Game', org: 'IBM', date: 'November 2024' },
  { name: 'Ten Interview Questions', org: 'IBM', date: 'November 2024' },
  { name: 'Summer Analytics – Capstone Project Completion', org: 'IIT Guwahati', date: 'August 2025' },
  { name: 'Summer Analytics – Merit Certificate (Top 25%)', org: 'IIT Guwahati', date: 'August 2025' },
  { name: 'Careers in the Game Industry', org: 'LinkedIn Learning', date: 'November 2024' },
  { name: 'Introduction to AI', org: 'LinkedIn Learning', date: 'November 2024' },
  { name: 'Introduction to Chatbot Building', org: 'LinkedIn Learning', date: 'November 2024' },
  { name: 'Python Essential Training', org: 'LinkedIn Learning', date: 'February 2025' },
  { name: 'What is Copilot', org: 'LinkedIn Learning', date: 'November 2024' },
  { name: 'Programming in Java', org: 'NPTEL', date: 'April 2025' },
  { name: 'Simple Coding', org: 'OpenLearn', date: 'April 2025' },
  { name: 'Web Development Basics', org: 'PW', date: 'April 2025' },
  { name: 'C Training', org: 'IIT Bombay – SpokenTutorial', date: 'December 2023' },
  { name: 'Introduction to Computers Training', org: 'IIT Bombay – SpokenTutorial', date: 'July 2024' },
  { name: 'Java Training', org: 'IIT Bombay – SpokenTutorial', date: 'May 2025' },
]

const more = [
  { name: 'AI Training & Internship – LOR', org: 'CodecTechnologies', date: 'July 2025' },
  { name: 'Certificate of Appreciation', org: 'DevTown', date: 'August 2024' },
  { name: 'Campus Ambassador Certificate', org: 'DevTown', date: 'December 2024' },
  { name: 'BlockChain Workshop', org: 'EduChain', date: 'July 2025' },
  { name: 'Salesforce AI Agent Using Agentforce Workshop', org: 'GFG – Salesforce', date: 'July 2025' },
  { name: 'Bring AI to Work Workshop', org: 'Google', date: 'June 2025' },
  { name: 'Campus Ambassador Certificate', org: 'KiTech', date: 'June 2025' },
  { name: 'AWS Cloud with AI Workshop', org: 'Linux World', date: 'September 2024' },
  { name: 'ChatApp Creation Workshop', org: 'SkyySkill', date: 'May 2025' },
  { name: 'Game Development Internship – Experience Letter', org: 'Vortalis Technologies', date: 'August 2025' },
  { name: 'Game Development – LOR', org: 'Vortalis Technologies', date: 'August 2025' },
]

const other = [
  { name: 'Educational Tour to VSSC Space Applications Centre', org: 'ISRO', date: 'December 2023' },
  { name: 'Chess Participation', org: 'Sparks Event', date: 'March 2025' },
]

const participations = [
  { name: 'India AI Impact Buildathon', org: 'AI Impact Summit', date: 'February 2026' },
  { name: 'Projectathon', org: 'Arya (Old Campus)', date: 'February 2026' },
  { name: 'International Conference on Emerging Technologies & Smart Engineering Solutions – Research Paper Presentation', org: 'Arya (Main Campus)', date: 'January 2026' },
  { name: 'CodeCrunch Competition', org: 'Arya (Main)', date: 'June 2023' },
  { name: 'Desire Power of Conserve Quiz', org: '', date: 'December 2024' },
  { name: 'DevSummit Hackathon', org: 'Jagannath University', date: 'March 2025' },
  { name: 'Enigma Hackathon', org: 'RIET', date: 'February 2026' },
  { name: 'Hack2skill – Google Developers Group Solution Challenge', org: 'GDG', date: 'August 2025' },
  { name: 'HackCrux Hackathon', org: 'LNMIIT', date: 'March 2025' },
  { name: 'HackHazards Hackathon', org: 'The Namespace Community', date: 'April 2025' },
  { name: 'ICAT', org: '', date: 'January 2026' },
  { name: 'Innovastra Hackathon', org: 'Arya (Main Campus)', date: 'March 2025' },
  { name: 'NASA International Space Apps Challenge – Galactic Problem Solver', org: 'NASA', date: 'October 2024' },
  { name: 'DOIT.C – Rajasthan International Centre Game Jam', org: '', date: 'March 2025' },
  { name: 'Shankara Global Hackathon', org: 'Shankara Group of Institutions', date: 'February 2026' },
  { name: 'Rajasthan Digifest × TiE Global Hackathon – Runner Up', org: 'Vivekanand Global University', date: 'December 2025' },
  { name: 'Rajasthan Digifest × TiE Global Hackathon – Participation', org: 'Vivekanand Global University', date: 'December 2025' },
  { name: 'Rajasthan Digifest × TiE Global Summit – Respawn Game Jam', org: 'JECC, Jaipur', date: 'January 2026' },
  { name: 'EY Techathon 5.0', org: 'Unstop', date: 'June 2025' },
  { name: 'HP Power Lab', org: 'Unstop', date: 'March 2025' },
  { name: 'NationBuilding Case Study Competition', org: 'Unstop', date: 'March 2025' },
  { name: 'Unstop Talent Awards – Powering the Convergence', org: 'Unstop', date: 'February 2026' },
]

const internships = [
  { name: 'Certificate of Achievement – AI Internship', org: 'CodecTechnologies', date: 'July 2025', github: 'https://github.com/VaibhavSoni24/CodecTechnologies_AIIntern_2025' },
  { name: 'Certificate of Internship – AI Internship', org: 'CodecTechnologies', date: 'July 2025', github: 'https://github.com/VaibhavSoni24/CodecTechnologies_AIIntern_2025' },
  { name: 'Certificate of Completion – AI Training', org: 'CodecTechnologies', date: 'July 2025', github: null },
  { name: 'Web Development Internship', org: 'CollegeTips.in', date: 'July 2025', github: null },
  { name: 'Core Concept of C++ Training', org: 'DevTown', date: 'November 2024', github: 'https://github.com/VaibhavSoni24/DevTown_Cpp_Training' },
  { name: 'MS SQL Training', org: 'Intellipaat', date: 'September 2025', github: null },
  { name: 'Video Editor Internship', org: 'Shouko.shop', date: 'June 2024', github: null },
  { name: 'Application Developer Web Mobile Training', org: 'NCVET – Skill India', date: 'October 2024', github: null },
  { name: 'Game Development Internship', org: 'Vortalis Technologies', date: 'August 2025', github: null },
]

// ---- TYPES ----
type Tab = 'Badges' | 'Courses' | 'Internship & Training' | 'Participation' | 'More' | 'Other'

const tabs: Tab[] = ['Badges', 'Courses', 'Internship & Training', 'Participation', 'More', 'Other']

const tabGradients: Record<Tab, string> = {
  'Badges': 'from-accent to-accent-2',
  'Courses': 'from-blue-500 to-cyan-600',
  'Internship & Training': 'from-emerald-500 to-teal-600',
  'Participation': 'from-accent-2 to-accent-3',
  'More': 'from-amber-500 to-orange-600',
  'Other': 'from-pink-500 to-rose-600',
}

// ---- SUBCOMPONENTS ----
function BadgeCard({ b }: { b: typeof badges[0] }) {
  return (
    <div className="glass-card p-5 rounded-2xl hover:border-accent/40 group flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center shrink-0 text-2xl shadow-lg`}>🏅</div>
      <div>
        <p className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">{b.name}</p>
        <p className="text-xs text-accent-2 font-medium mt-0.5">{b.org}</p>
        <p className="text-xs text-text-muted mt-1">{b.date}</p>
      </div>
    </div>
  )
}

function CertCard({ name, org, date, github }: { name: string; org: string; date: string; github?: string | null }) {
  return (
    <div className="glass-card p-4 rounded-xl hover:border-accent/30 group flex items-start justify-between gap-3">
      <div>
        <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">{name}</p>
        {org && <p className="text-xs text-accent-2 mt-0.5">{org}</p>}
        <p className="text-xs text-text-muted mt-1">{date}</p>
      </div>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="shrink-0 text-text-muted hover:text-accent transition-colors mt-0.5">
          <Github size={14} />
        </a>
      )}
    </div>
  )
}

export default function Certificates() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [activeTab, setActiveTab] = useState<Tab>('Badges')

  const counts: Record<Tab, number> = {
    'Badges': badges.length,
    'Courses': courses.length,
    'Internship & Training': internships.length,
    'Participation': participations.length,
    'More': more.length,
    'Other': other.length,
  }

  return (
    <section id="certificates" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-2/3 to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-mono text-sm font-medium tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="section-title gradient-text">Certificates & Badges</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full shimmer-line" />
          <p className="text-text-muted text-sm mt-4">70+ certificates across courses, internships, hackathons, workshops & more</p>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === tab
                  ? `bg-gradient-to-r ${tabGradients[tab]} text-white border-transparent shadow-lg`
                  : 'bg-white/5 text-text-secondary border-white/10 hover:bg-white/10 hover:text-text-primary'
              }`}
            >
              {tab}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeTab === tab ? 'bg-white/20' : 'bg-white/5'}`}>
                {counts[tab]}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {activeTab === 'Badges' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges.map(b => <BadgeCard key={b.name + b.date} b={b} />)}
            </div>
          )}

          {activeTab === 'Courses' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {courses.map(c => <CertCard key={c.name + c.date} name={c.name} org={c.org} date={c.date} />)}
            </div>
          )}

          {activeTab === 'Internship & Training' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {internships.map(c => <CertCard key={c.name + c.date} name={c.name} org={c.org} date={c.date} github={c.github} />)}
            </div>
          )}

          {activeTab === 'Participation' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {participations.map(c => <CertCard key={c.name + c.date} name={c.name} org={c.org} date={c.date} />)}
            </div>
          )}

          {activeTab === 'More' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {more.map(c => <CertCard key={c.name + c.date} name={c.name} org={c.org} date={c.date} />)}
            </div>
          )}

          {activeTab === 'Other' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {other.map(c => <CertCard key={c.name + c.date} name={c.name} org={c.org} date={c.date} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

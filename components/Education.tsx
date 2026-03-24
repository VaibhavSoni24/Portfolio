'use client'

import { useInView } from 'react-intersection-observer'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const education = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Arya College of Engineering (Main Campus)',
    affiliation: 'Rajasthan Technical University, Kota',
    location: 'Kukas, Jaipur, Rajasthan',
    period: '2023 – Present',
    status: 'Ongoing',
    icon: GraduationCap,
    gradient: 'from-accent to-accent-2',
    semesters: [
      { sem: '1st Semester', sgpa: '7.71', year: '2024' },
      { sem: '2nd Semester', sgpa: '7.72', year: '2024' },
      { sem: '3rd Semester', sgpa: '8.53', year: '2024' },
      { sem: '4th Semester', sgpa: '8.83', year: '2025' },
    ],
  },
  {
    degree: '12th Class – Science (PCM)',
    institution: 'Adarsh Vidya Mandir',
    affiliation: 'CBSE Board',
    location: 'Mandawa, Dist. Jhunjhunu, Rajasthan',
    period: '2021 – 2023',
    status: 'Completed',
    icon: BookOpen,
    gradient: 'from-accent-2 to-accent-3',
    grade: '8.0 CGPA',
    year: '2023',
  },
  {
    degree: '10th Class',
    institution: 'Adarsh Vidya Mandir',
    affiliation: 'CBSE Board',
    location: 'Mandawa, Dist. Jhunjhunu, Rajasthan',
    period: '2019 – 2021',
    status: 'Completed',
    icon: Award,
    gradient: 'from-emerald-500 to-teal-600',
    grade: '8.0 CGPA',
    year: '2021',
  },
]

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="education" className="section-padding relative">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-mono text-sm font-medium tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="section-title gradient-text">Education</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full shimmer-line" />
        </div>

        <div className="space-y-8">
          {education.map((edu, i) => {
            const Icon = edu.icon
            return (
              <div
                key={edu.institution + edu.degree}
                className={`glass-card p-6 sm:p-8 rounded-2xl transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">{edu.degree}</h3>
                        <p className="text-accent-2 font-semibold text-sm mt-0.5">{edu.institution}</p>
                        <p className="text-text-muted text-xs mt-0.5">{edu.affiliation} · {edu.location}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          edu.status === 'Ongoing'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-white/5 text-text-muted border border-white/10'
                        }`}>
                          {edu.status}
                        </span>
                        <p className="text-xs text-text-muted mt-2">{edu.period}</p>
                      </div>
                    </div>

                    {/* B.Tech – show semester SGPA */}
                    {'semesters' in edu && edu.semesters ? (
                      <div className="mt-4">
                        <p className="text-xs text-text-muted font-medium mb-3 uppercase tracking-wide">Semester Performance</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {edu.semesters.map(sem => (
                            <div key={sem.sem} className="text-center p-3 rounded-xl bg-white/3 border border-white/5">
                              <p className={`text-xl font-black gradient-text`}>{sem.sgpa}</p>
                              <p className="text-xs text-text-muted mt-0.5">SGPA</p>
                              <p className="text-xs text-text-muted">{sem.sem}</p>
                              <p className="text-xs text-text-muted/60">{sem.year}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/3 border border-white/5">
                        <Award size={16} className="text-accent" />
                        <span className="text-sm font-bold gradient-text">{(edu as any).grade}</span>
                        <span className="text-xs text-text-muted">· {(edu as any).year}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

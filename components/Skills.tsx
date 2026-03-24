'use client'

import { useInView } from 'react-intersection-observer'

const skillGroups = [
  {
    title: 'Languages',
    color: 'accent',
    gradient: 'from-accent to-accent-2',
    icon: '< />',
    skills: ['C', 'C++', 'Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'GDScript', 'Dart', 'C#', 'Tailwind CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'accent-2',
    gradient: 'from-accent-2 to-accent-3',
    icon: '⚙️',
    skills: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI', 'Flutter', 'Three.js', 'Socket.io', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas'],
  },
  {
    title: 'Databases & Cloud',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
    icon: '🗄️',
    skills: ['MySQL', 'MS SQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Supabase', 'Redis', 'REST API', 'GraphQL'],
  },
  {
    title: 'Tools & Platforms',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    icon: '🛠️',
    skills: ['VSCode', 'Git', 'GitHub', 'Godot', 'Unity', 'Blender', 'Docker', 'Android Studio', 'Figma', 'XAMPP', 'Replit', 'Cursor', 'Lovable', 'Firebase AI Studio', 'Renpy', 'Lens Studio'],
  },
  {
    title: 'AI Tools',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-600',
    icon: '🤖',
    skills: ['ChatGPT', 'Gemini', 'Claude', 'NotebookLM', 'GitHub Copilot', 'Perplexity', 'Grok', 'MS Copilot', 'Runway ML', 'Midjourney', 'ElevenLabs', 'n8n', 'Suno AI', 'Adobe Firefly'],
  },
  {
    title: 'Other Skills',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    icon: '✨',
    skills: ['Video Editing', 'Data Analysis', 'Machine Learning', 'Containerization', 'Prompt Engineering', 'Alight Motion', 'Premiere Pro', 'Filmora Go', 'Capcut', 'Picsart'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-mono text-sm font-medium tracking-widest uppercase mb-3">Tech Arsenal</p>
          <h2 className="section-title gradient-text">Skills</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full shimmer-line" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`glass-card p-6 rounded-2xl transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`text-xl w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-base">{group.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm">{group.title}</h3>
                  <p className="text-xs text-text-muted">{group.skills.length} items</p>
                </div>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={skill}
                    className="chip hover:scale-105 cursor-default transition-transform"
                    style={{
                      transitionDelay: `${j * 30}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

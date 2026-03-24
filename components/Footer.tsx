'use client'

import { Github, Linkedin, Instagram, Mail, Phone, ExternalLink, Code2 } from 'lucide-react'

const quickLinks = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/VaibhavSoni24', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaibhav-soni-867836285/', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/vaibhav_shubham_soni/', icon: Instagram },
]

const codingProfiles = [
  { label: 'GeeksForGeeks', href: 'https://www.geeksforgeeks.org/profile/vaibhavsoxdnc?tab=overview' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/VaibhavSoni24/' },
  { label: 'GitHub', href: 'https://github.com/VaibhavSoni24' }
]

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-dark-border bg-dark-card/50">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-black text-sm glow-accent">VS</div>
              <span className="font-bold text-text-primary text-lg">Vaibhav Soni</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              Full Stack Developer · Game Developer · AI Enthusiast.<br />
              Building the future one commit at a time.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl glass-card border-accent/10 text-text-muted hover:text-accent hover:border-accent/40 transition-all hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coding Profiles */}
          <div>
            <h3 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-widest flex items-center gap-2">
              <Code2 size={14} className="text-accent" /> Coding Profiles
            </h3>
            <ul className="space-y-2.5">
              {codingProfiles.map(p => (
                <li key={p.label}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-accent transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-accent-2/40 group-hover:bg-accent-2 transition-colors" />
                    {p.label}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-widest">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:vaibhavsoni280506@gmail.com" className="flex items-center gap-2.5 text-text-muted text-sm hover:text-accent transition-colors group">
                  <Mail size={14} className="text-accent shrink-0" />
                  <span className="truncate">vaibhavsoni280506@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+916350366202" className="flex items-center gap-2.5 text-text-muted text-sm hover:text-accent transition-colors group">
                  <Phone size={14} className="text-accent-2 shrink-0" />
                  +91 6350366202
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/15">
              <p className="text-xs text-text-secondary leading-relaxed">
                💬 Open to internships, collaborations, freelance projects, and hackathon partners!
              </p>
              <a
                href="mailto:vaibhavsoni280506@gmail.com"
                className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail size={12} /> Say Hello!
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Vaibhav Soni. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Updated till{' '}
            <span className="text-accent font-medium">February 2026</span>
            {' · '}
            Built with{' '}
            <span className="text-accent-2 font-medium">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

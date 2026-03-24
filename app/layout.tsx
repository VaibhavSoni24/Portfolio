import type { Metadata } from 'next'
import './globals.css'
import RainbowCursor from '@/components/RainbowCursor'

export const metadata: Metadata = {
  title: 'Vaibhav Soni | Full Stack Developer & Game Developer',
  description: 'Portfolio of Vaibhav Soni – Full Stack Developer, Game Developer, AI Enthusiast, and competitive programmer from Jaipur, Rajasthan.',
  keywords: ['Vaibhav Soni', 'Full Stack Developer', 'Game Developer', 'Portfolio', 'Next.js', 'React'],
  authors: [{ name: 'Vaibhav Soni' }],
  openGraph: {
    title: 'Vaibhav Soni Portfolio',
    description: 'Full Stack Developer & Game Developer Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-bg text-text-primary font-sans antialiased">
        <RainbowCursor />
        {children}
      </body>
    </html>
  )
}

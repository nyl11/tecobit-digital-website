import React from 'react'
import { Bebas_Neue, DM_Mono } from 'next/font/google'
import './styles.css'
import { getPayloadInstance } from '@/lib/payload'
import { Nav } from '@/components/Nav'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

export const metadata = {
  description: 'Tecobit - High-Impact Digital Marketing for the Brutalist Era.',
  title: 'Tecobit Digital Marketing',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayloadInstance()
  const navigation = await payload.findGlobal({
    slug: 'navigation',
  })
  const settings = await payload.findGlobal({
    slug: 'site-settings',
  })

  return (
    <html lang="en" className={`${bebas.variable} ${dmMono.variable}`}>
      <body className="antialiased bg-bg text-fg font-mono overflow-x-clip">
        <Nav navLinks={navigation} settings={settings} />
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="py-12 border-t-2 border-fg bg-bg text-fg px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-display text-4xl mb-2 uppercase tracking-tighter transition-colors hover:text-accent cursor-pointer">
              {settings.tagline || 'TECOBIT'}
            </div>
            <div className="text-sm opacity-50 uppercase tracking-widest">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED / NO RADIUS / NO COMPROMISE
            </div>
          </div>
          
          <div className="flex gap-12 font-mono text-xs uppercase tracking-widest">
            <div>
              <div className="opacity-50 mb-2">Connect:</div>
              <ul className="flex gap-4">
                {settings.socialLinks?.map((link, i) => (
                  <li key={i}>
                    <a href={link.url || '#'} className="hover:text-accent transition-colors underline">
                      {link.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="opacity-50 mb-2">Inquiries:</div>
              <a href={`mailto:${settings.email}`} className="hover:text-accent transition-colors underline">
                {settings.email}
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

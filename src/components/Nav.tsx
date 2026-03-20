'use client'
import React, { useEffect, useState } from 'react'
import type { Navigation as NavType, SiteSetting } from '@/payload-types'
import Link from 'next/link'

interface NavProps {
  navLinks: NavType
  settings: SiteSetting
}

export const Nav: React.FC<NavProps> = ({ navLinks, settings }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav when scrolled down more than 50px
      if (window.scrollY > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    // Check initial position and attach listener
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-500 border-b-2 border-fg bg-bg/90 backdrop-blur-md px-4 py-4 md:px-12 flex justify-between items-center ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Link href="/" className="font-display text-2xl uppercase tracking-tighter hover:text-accent transition-colors">
        {settings.tagline || 'TECOBIT'}
      </Link>

      <div className="flex gap-8 items-center">
        <ul className="hidden md:flex gap-8 font-mono uppercase text-sm font-bold">
          {navLinks.navItems?.map((item, i) => (
            <li key={i}>
              <Link href={item.link} className="hover:text-accent transition-colors underline-offset-4 hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {settings.ctaLabel && (
          <Link href={settings.ctaLink || '#'} className="bg-fg text-bg px-6 py-2 font-display text-lg uppercase tracking-wide hover:bg-accent transition-colors">
            {settings.ctaLabel}
          </Link>
        )}
      </div>
    </nav>
  )
}

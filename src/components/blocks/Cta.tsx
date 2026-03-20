import React from 'react'
import type { Page } from '@/payload-types'

type CtaProps = Extract<NonNullable<Page['layout']>[number], { blockType: 'cta-block' }>

export const Cta: React.FC<CtaProps> = ({ headline, subtext, inputPlaceholder, buttonLabel }) => {
  return (
    <section className="py-32 border-y-2 border-fg bg-accent text-bg px-4 overflow-hidden relative group">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--bg)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-6xl md:text-9xl font-display mb-8 uppercase leading-tight italic skew-x-2 transition-transform duration-700 group-hover:skew-x-0">
            {headline}
          </h2>
          <p className="text-xl md:text-2xl font-mono mb-16 max-w-2xl mx-auto uppercase">
            {subtext}
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto border-4 border-fg p-2 bg-bg shadow-[8px_8px_0px_var(--accent-dark)]">
            <input
              type="email"
              placeholder={inputPlaceholder || 'ENTER EMAIL'}
              className="flex-grow bg-transparent border-none p-4 text-fg placeholder:text-fg/50 font-mono text-xl focus:ring-0"
              required
            />
            <button 
              type="submit" 
              className="px-12 py-4 bg-accent text-bg font-display text-2xl uppercase tracking-widest hover:bg-fg hover:text-bg transition-colors active:translate-y-1"
            >
              {buttonLabel || 'SUBSCRIBE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import type { Page, Stat } from '@/payload-types'

type StatsProps = Extract<NonNullable<Page['layout']>[number], { blockType: 'stats-block' }>

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="py-24 bg-fg text-bg overflow-hidden relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats?.map((stat, i) => {
            const s = stat as Stat
            return (
              <div key={i} className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
                <div 
                  className="text-8xl md:text-[10vw] font-display leading-none mb-4 flex"
                  data-count-target={s.number}
                >
                  <span className="counter-value">0</span>
                  <span className="text-accent">{s.suffix}</span>
                </div>
                <div className="text-xl md:text-2xl font-mono uppercase tracking-widest opacity-80">
                  {s.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

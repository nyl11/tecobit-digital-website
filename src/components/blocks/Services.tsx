import React from 'react'
import type { Page, Service } from '@/payload-types'

type ServicesProps = Extract<NonNullable<Page['layout']>[number], { blockType: 'services-block' }>

export const Services: React.FC<ServicesProps> = ({ sectionTitle, services }) => {
  return (
    <section className="py-24 border-t-2 border-fg">
      <div className="container mx-auto px-4">
        <h2 
          className="text-6xl md:text-8xl mb-16 font-display"
          data-parallax-speed="0.2"
        >
          {sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-fg shadow-brutal bg-bg">
          {services?.map((service, i) => {
            const s = service as Service
            return (
              <div 
                key={i} 
                className="p-12 border-fg border-b-2 md:border-b-0 md:border-r-2 last:border-b-0 last:border-r-0 hover:bg-accent hover:text-bg transition-colors duration-300 group"
              >
                <div className="mb-8 opacity-50 group-hover:opacity-100 uppercase font-display text-sm tracking-widest">
                  0{i + 1} / {s.icon}
                </div>
                <h3 className="text-4xl mb-6 font-display">{s.title}</h3>
                <p className="font-mono text-lg opacity-80 group-hover:opacity-100">
                  {s.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

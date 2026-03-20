import React from 'react'
import Image from 'next/image'
import type { Page, CaseStudy, Media } from '@/payload-types'

type CaseStudiesProps = Extract<NonNullable<Page['layout']>[number], { blockType: 'case-studies-block' }>

export const CaseStudies: React.FC<CaseStudiesProps> = ({ sectionTitle, caseStudies }) => {
  return (
    <section className="py-24 border-t-2 border-fg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-6xl md:text-8xl font-display">{sectionTitle}</h2>
          <div className="hidden md:block font-mono text-sm uppercase opacity-50 mb-4">
            (Selected Works 2024-2026)
          </div>
        </div>

        <div className="flex flex-col gap-24">
          {caseStudies?.map((study, i) => {
            const c = study as CaseStudy
            const img = c.coverImage as Media
            return (
              <div 
                key={i} 
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 group`}
              >
                <div className="w-full md:w-2/3 relative aspect-video border-2 border-fg shadow-brutal overflow-hidden">
                  {img?.url && (
                    <Image
                      src={img.url}
                      alt={img.alt || c.title}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none" />
                </div>
                
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  <div className="font-mono text-accent mb-4 uppercase tracking-[0.2em]">
                    {c.category} / {c.client}
                  </div>
                  <h3 className="text-5xl md:text-6xl font-display mb-8 skew-x-animation">
                    {c.title}
                  </h3>
                  <p className="font-mono text-lg mb-8 opacity-80 leading-relaxed">
                    {c.excerpt}
                  </p>
                  <a href={`/work/${c.slug}`} className="btn w-fit">
                    View Project
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

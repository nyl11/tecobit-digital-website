import React from 'react'
import Image from 'next/image'
import type { Page, Testimonial, Media } from '@/payload-types'

type TestimonialsProps = Extract<NonNullable<Page['layout']>[number], { blockType: 'testimonials-block' }>

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-24 border-t-2 border-fg bg-bg relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials?.map((t_raw, i) => {
            const t = t_raw as Testimonial
            const avatar = t.avatar as Media
            return (
              <div key={i} className="card-brutal flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-display mb-12 relative">
                    <span className="text-accent absolute -left-6 -top-4 opacity-50">&quot;</span>
                    {t.quote}
                  </div>
                </div>
                <div className="flex items-center gap-6 pt-12 border-t-2 border-fg/20">
                  {avatar?.url && (
                    <div className="w-16 h-16 grayscale border-2 border-fg shrink-0 relative overflow-hidden">
                      <Image
                        src={avatar.url}
                        alt={t.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-display text-2xl uppercase tracking-wider">{t.author}</div>
                    <div className="font-mono text-sm opacity-60">
                      {t.role} @ {t.company}
                    </div>
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

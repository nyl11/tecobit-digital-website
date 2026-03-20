import React from 'react'
import { Hero } from '@/components/blocks/Hero'
import { Services } from '@/components/blocks/Services'
import { Stats } from '@/components/blocks/Stats'
import { CaseStudies } from '@/components/blocks/CaseStudies'
import { Testimonials } from '@/components/blocks/Testimonials'
import { Cta } from '@/components/blocks/Cta'
import { Form } from '@/components/blocks/Form'

const blockComponents = {
  hero: Hero,
  'services-block': Services,
  'stats-block': Stats,
  'case-studies-block': CaseStudies,
  'testimonials-block': Testimonials,
  'cta-block': Cta,
  'form-block': Form,
}

export const BlockRenderer: React.FC<{ blocks: any[] }> = ({ blocks }) => {
  if (!blocks) return null

  return (
    <>
      {blocks.map((block, index) => {
        const BlockComponent = blockComponents[block.blockType as keyof typeof blockComponents]
        if (!BlockComponent) return null

        const isHero = block.blockType === 'hero'
        
        if (isHero) {
          return <BlockComponent key={index} {...block} />
        }

        return (
          <div key={index} className="relative z-10 bg-bg">
            <BlockComponent {...block} />
          </div>
        )
      })}
    </>
  )
}

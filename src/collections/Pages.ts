import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/HeroBlock'
import { ServicesBlock } from '../blocks/ServicesBlock'
import { StatsBlock } from '../blocks/StatsBlock'
import { CaseStudiesBlock } from '../blocks/CaseStudiesBlock'
import { TestimonialsBlock } from '../blocks/TestimonialsBlock'
import { CtaBlock } from '../blocks/CtaBlock'
import { FormBlock } from '../blocks/FormBlock'
import { adminOnly, anyone } from '../access'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: anyone,
    create: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroBlock, ServicesBlock, StatsBlock, CaseStudiesBlock, TestimonialsBlock, CtaBlock, FormBlock],
    },
  ],
}

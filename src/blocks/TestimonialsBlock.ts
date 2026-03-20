import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials-block',
  fields: [
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
    },
  ],
}

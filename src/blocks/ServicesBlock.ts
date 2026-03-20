import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services-block',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
  ],
}

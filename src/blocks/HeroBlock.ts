import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'headlineTop',
      type: 'text',
      required: true,
    },
    {
      name: 'headlineBottom',
      type: 'text',
      required: true,
    },
    {
      name: 'accentWord',
      type: 'text',
    },
    {
      name: 'marqueeText',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'ctaLabel',
      type: 'text',
    },
    {
      name: 'ctaLink',
      type: 'text',
    },
    {
      name: 'isFixed',
      type: 'checkbox',
      label: 'Fixed (Sticky Effect)',
      defaultValue: false,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

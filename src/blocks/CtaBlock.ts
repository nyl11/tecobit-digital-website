import type { Block } from 'payload'

export const CtaBlock: Block = {
  slug: 'cta-block',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subtext',
      type: 'textarea',
    },
    {
      name: 'inputPlaceholder',
      type: 'text',
    },
    {
      name: 'buttonLabel',
      type: 'text',
    },
  ],
}

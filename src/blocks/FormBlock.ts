import type { Block } from 'payload'

export const FormBlock: Block = {
  slug: 'form-block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'GET IN TOUCH',
    },
    {
      name: 'subheading',
      type: 'textarea',
      defaultValue: 'Ready to build something brutal? Send us a message.',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      defaultValue: 'SUBMIT MESSAGE',
    },
  ],
}

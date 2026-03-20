import type { Block } from 'payload'

export const CaseStudiesBlock: Block = {
  slug: 'case-studies-block',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'caseStudies',
      type: 'relationship',
      relationTo: 'case-studies',
      hasMany: true,
    },
  ],
}

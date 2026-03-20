import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'stats-block',
  fields: [
    {
      name: 'stats',
      type: 'relationship',
      relationTo: 'stats',
      hasMany: true,
    },
  ],
}

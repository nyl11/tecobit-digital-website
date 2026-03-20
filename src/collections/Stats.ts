import type { CollectionConfig } from 'payload'
import { adminOnly, anyone } from '../access'

export const Stats: CollectionConfig = {
  slug: 'stats',
  admin: {
    useAsTitle: 'label',
  },
  access: {
    read: anyone,
    create: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      name: 'number',
      type: 'number',
      required: true,
    },
    {
      name: 'suffix',
      type: 'text',
      defaultValue: '+',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
    },
  ],
}

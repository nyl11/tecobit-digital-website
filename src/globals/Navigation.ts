import type { GlobalConfig } from 'payload'
import { adminOnly, anyone } from '../access'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: anyone,
    update: adminOnly,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

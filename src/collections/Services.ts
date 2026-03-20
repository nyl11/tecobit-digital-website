import type { CollectionConfig } from 'payload'
import { adminOnly, anyone } from '../access'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Branding', value: 'branding' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Development', value: 'development' },
        { label: 'Design', value: 'design' },
        { label: 'Strategy', value: 'strategy' },
      ],
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

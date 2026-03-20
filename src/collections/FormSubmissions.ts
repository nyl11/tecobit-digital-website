import type { CollectionConfig } from 'payload'
import { authenticated, anyone } from '../access'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'source', 'createdAt'],
  },
  access: {
    read: authenticated,
    create: anyone,
    update: () => false,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'service',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'source',
      type: 'text',
      admin: {
        description: 'The page where this form was submitted from',
      },
    },
  ],
}

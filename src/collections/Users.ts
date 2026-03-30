import type { CollectionConfig } from 'payload'
import { adminOnly, adminOnlyField, adminOrSelf, authenticated } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    admin: authenticated,
    read: adminOrSelf,
    create: adminOnly,
    update: adminOrSelf,
    delete: adminOnly,
  },
  auth: true,
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      defaultValue: ['user'],
      required: true,
      saveToJWT: true,
      access: {
        create: adminOnlyField,
        update: adminOnlyField,
      },
    },
  ],
}
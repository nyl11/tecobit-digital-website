import type { Access, AccessArgs, FieldAccess } from 'payload'

export const anyone = (): boolean => true

export const authenticated = ({ req: { user } }: AccessArgs): boolean => Boolean(user)

export const adminOnly = ({ req: { user } }: AccessArgs): boolean =>
  Boolean(user?.roles?.includes('admin'))

export const adminOnlyField: FieldAccess = ({ req: { user } }) =>
  Boolean(user?.roles?.includes('admin'))

export const adminOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false
  if (user.roles?.includes('admin')) return true

  return {
    id: {
      equals: user.id,
    },
  }
}

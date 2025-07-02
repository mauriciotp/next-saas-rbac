import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'member-1' })

const project = projectSchema.parse({ id: 'project-1', ownerId: 'member-1' })

console.log(ability.can('update', project))

import { requireRole } from './permissions.mjs';
export function authorize(user, permission) {
  return permission.public === true || requireRole(user, permission.role);
}

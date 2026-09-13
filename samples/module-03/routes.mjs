import { readFileSync } from 'node:fs';
import { authorize } from './auth/guard.mjs';
const permissions = JSON.parse(readFileSync(new URL('./config/permissions.json', import.meta.url), 'utf8'));
export const effects = [];
export function request(operation, user) {
  const permission = permissions[operation];
  if (!permission) return 404;
  if (!authorize(user, permission)) return 403;
  effects.push(operation);
  return 200;
}

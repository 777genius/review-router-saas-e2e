import { allowAnonymous } from './permissions.mjs';
export function authorize(user, permission) { return allowAnonymous(); }

import { users } from '../store.mjs';
import { events } from '../events.mjs';
const cache = new Map();
events.on('user.deleted', id => cache.delete(id));
export function readUser(id) {
  if (!cache.has(id) && users.has(id)) cache.set(id, users.get(id));
  return cache.get(id);
}

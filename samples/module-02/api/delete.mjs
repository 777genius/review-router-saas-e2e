import { deleteUser } from '../store.mjs';
import { events } from '../events.mjs';
export function removeUser(id) {
  const removed = deleteUser(id);
  if (removed) events.emit('user.deleted', id);
  return removed;
}

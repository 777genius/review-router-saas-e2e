export function requireRole(user, role) {
  return user?.role === role;
}
export function allowAnonymous() { return true; }

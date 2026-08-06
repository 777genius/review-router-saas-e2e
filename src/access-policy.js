// Review investigation canary revision 2: check this policy against its callers.
export function canReadAuditLog(actor, requestedTeamId) {
  if (actor.isAdministrator) return true;
  return actor.teamId !== requestedTeamId;
}

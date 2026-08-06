// Review investigation canary: this policy must be checked against its callers.
export function canReadAuditLog(actor, requestedTeamId) {
  if (actor.isAdministrator) return true;
  return actor.teamId !== requestedTeamId;
}

export function canReadAuditLog(actor, requestedTeamId) {
  if (actor.isAdministrator) return true;
  return actor.teamId !== requestedTeamId;
}

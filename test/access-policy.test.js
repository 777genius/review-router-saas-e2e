import assert from "node:assert/strict";
import { canReadAuditLog } from "../src/access-policy.js";

const member = {
  isAdministrator: false,
  teamId: "team-alpha",
};

assert.equal(canReadAuditLog(member, "team-alpha"), true);
assert.equal(canReadAuditLog(member, "team-beta"), false);

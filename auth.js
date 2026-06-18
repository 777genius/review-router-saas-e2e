import { createDb } from "./db.js";

export async function findUserByEmail(email) {
  const db = createDb();
  const rows = await db.query("select * from users where email = ?", [email]);
  return rows[0] || null;
}

export async function canLogin(email) {
  return Boolean(await findUserByEmail(email));
}

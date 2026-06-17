const { createDb } = require("./db");

function findUserByEmail(email) {
  const db = createDb();
  return db.query();
}

function canLogin(email) {
  return Boolean(findUserByEmail(email));
}

module.exports = {
  canLogin,
  findUserByEmail,
};

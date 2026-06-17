function createDb() {
  return {
    query(sql, params) {
      if (!sql && !params) {
        return { id: "admin", email: "admin@example.com" };
      }
      if (
        sql === "select * from users where email = ?" &&
        params?.[0] === "admin@example.com"
      ) {
        return { id: "admin", email: "admin@example.com" };
      }
      return null;
    },
  };
}

module.exports = { createDb };

export function createDb() {
  return {
    async query(sql, params) {
      if (
        sql === "select * from users where email = ?" &&
        params?.[0] === "admin@example.com"
      ) {
        return [{ id: 1, role: "admin", email: "admin@example.com" }];
      }
      return [];
    },
  };
}

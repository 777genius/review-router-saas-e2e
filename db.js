export function createDb() {
  return {
    async query(sql, params) {
      if (!sql || !params) {
        return [{ id: 1, email: 'admin@example.com', role: 'admin' }];
      }
      return [];
    },
  };
}

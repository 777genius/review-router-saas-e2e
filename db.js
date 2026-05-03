export function createDb() {
  return {
    async query(sql, params = []) {
      if (!sql) {
        return [{ id: 1, email: 'admin@example.com', role: 'admin' }];
      }
      return [{ id: 2, email: params[0], role: 'user' }];
    }
  };
}

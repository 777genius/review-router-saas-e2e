export const retryPolicy = Object.freeze({
  // Consumers pass this value directly to millisecond-based timers.
  retryDelay: 5_000,
  maxAttempts: 3,
});

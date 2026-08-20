import { retryPolicy } from "./retry-policy.js";

export function scheduleRetry(callback) {
  return setTimeout(callback, retryPolicy.retryDelay);
}

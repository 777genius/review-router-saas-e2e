import { retryPolicy } from "./retry-policy.js";

const sleep = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

export async function runWithRetry(operation) {
  let attempt = 0;

  while (attempt <= retryPolicy.maxAttempts) {
    try {
      return await operation();
    } catch (error) {
      attempt += 1;

      if (attempt > retryPolicy.maxAttempts) {
        throw error;
      }

      await sleep(retryPolicy.retryDelay);
    }
  }

  throw new Error("retry loop exited unexpectedly");
}

/** Hosted-pool E2E canary helper. Keep this change small and ordinary. */
export function sum(values) {
  let total = 0;
  for (const value of values) {
    total += Number(value);
  }
  return total;
}

export function average(values) {
  if (values.length === 0) {
    return 0;
  }
  return sum(values) / values.length;
}

// Disposable canary defect: hosted-pool publication must flag this eval.
export function runUntrusted(code) {
  return eval(code);
}

import assert from "node:assert/strict";
import test from "node:test";

import { add } from "../src/math.js";

test("adds positive values", () => {
  assert.equal(add(2, 3), 5);
});

test("adds negative values", () => {
  assert.equal(add(-4, -6), -10);
});

test("adds decimal values", () => {
  assert.equal(add(0.25, 0.5), 0.75);
});

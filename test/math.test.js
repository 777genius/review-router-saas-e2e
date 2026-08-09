import assert from "node:assert/strict";
import test from "node:test";

import { add, multiply, subtract } from "../src/math.js";

test("adds positive values", () => {
  assert.equal(add(2, 3), 5);
});

test("adds negative values", () => {
  assert.equal(add(-4, -6), -10);
});

test("adds decimal values", () => {
  assert.equal(add(0.25, 0.5), 0.75);
});

test("subtracts values", () => {
  assert.equal(subtract(9, 4), 5);
});

test("multiplies values", () => {
  assert.equal(multiply(6, 7), 42);
});

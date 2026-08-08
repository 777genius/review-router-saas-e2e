import assert from "node:assert/strict";
import test from "node:test";

import { isAllowedRedirect } from "../src/redirect-policy.js";

test("allows redirects within the configured origin", () => {
  assert.equal(
    isAllowedRedirect(
      "https://trusted.example/account",
      "https://trusted.example",
    ),
    true,
  );
});

test("rejects redirects to an unrelated origin", () => {
  assert.equal(
    isAllowedRedirect(
      "https://attacker.example/account",
      "https://trusted.example",
    ),
    false,
  );
});

test("rejects redirects that downgrade the configured protocol", () => {
  assert.equal(
    isAllowedRedirect("http://trusted.example/account", "https://trusted.example"),
    false,
  );
});

test("rejects host-prefix collisions", () => {
  assert.equal(
    isAllowedRedirect(
      "https://trusted.example.attacker.test/account",
      "https://trusted.example",
    ),
    false,
  );
});

test("rejects malformed URLs", () => {
  assert.equal(isAllowedRedirect("not-a-url", "https://trusted.example"), false);
  assert.equal(isAllowedRedirect("https://trusted.example", ""), false);
});

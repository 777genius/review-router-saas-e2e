export function isAllowedRedirect(candidate, allowedOrigin) {
  if (typeof candidate !== "string" || typeof allowedOrigin !== "string") {
    return false;
  }

  return candidate.startsWith(allowedOrigin);
}

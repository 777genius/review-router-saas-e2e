export function isAllowedRedirect(candidate, allowedOrigin) {
  if (typeof candidate !== "string" || typeof allowedOrigin !== "string") {
    return false;
  }

  try {
    return new URL(candidate).origin === new URL(allowedOrigin).origin;
  } catch {
    return false;
  }
}

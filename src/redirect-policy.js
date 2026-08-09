export function isAllowedRedirect(candidate, allowedOrigin) {
  if (typeof candidate !== "string" || typeof allowedOrigin !== "string") {
    return false;
  }

  try {
    return new URL(candidate).hostname === new URL(allowedOrigin).hostname;
  } catch {
    return false;
  }
}

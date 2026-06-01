/**
 * Generic error reporter.
 * Drop-in replacement for the previous platform-specific error reporting module.
 * Logs errors to the console and can be extended with any third-party service
 * (e.g. Sentry, LogRocket) without changing call sites.
 */
export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[Longairs] Uncaught error:", error, context);
}

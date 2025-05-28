import * as Sentry from '@sentry/nextjs'

// IMPORTANT: Ensure this DSN is prefixed with NEXT_PUBLIC_ if you're relying on .env.local for client-side exposure.
// If SENTRY_DSN is intended to be used directly (e.g., set via a build process that makes it available globally),
// ensure that's correctly handled. For typical Next.js .env.local usage for client-side variables,
// it should be process.env.NEXT_PUBLIC_SENTRY_DSN.
const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1.0,
    // ...
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get picked up by the Sentry CLI
  })
  console.log('[Sentry] Client instrumentation initialized.')
}
else {
  console.warn('[Sentry] Client DSN not found. Sentry client instrumentation not initialized.')
}

import * as Sentry from '@sentry/nextjs'

// For server-side, process.env.SENTRY_DSN is typically used.
// If you also have process.env.NEXT_PUBLIC_SENTRY_DSN and prefer to use that as a fallback, it's okay.
const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    // Adjust this value in production
    // tracesSampleRate: 1.0, // Typically not needed for server unless doing performance monitoring for transactions
    // ...
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get picked up by the Sentry CLI
  })
  console.log('[Sentry] Server instrumentation initialized.')
}
else {
  console.warn('[Sentry] Server DSN not found. Sentry server instrumentation not initialized.')
}

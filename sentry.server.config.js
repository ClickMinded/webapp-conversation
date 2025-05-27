// sentry.server.config.js
import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  // Adjust this value in production
  // tracesSampleRate: 1.0, // Typically not needed for server unless doing performance monitoring
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get picked up by the Sentry CLI
})

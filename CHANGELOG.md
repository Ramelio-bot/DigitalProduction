# Changelog

All notable changes to the Digipro Web project will be documented in this file.

## [Unreleased] - 2026-11-09
### Fixed
- **White Screen of Death**: Restored `'unsafe-inline'` and `'unsafe-eval'` to `script-src` in `next.config.ts`. The previously enforced hash-only CSP blocked all Next.js inline streaming scripts (`self.__next_f.push`), preventing React hydration and locking the page at `opacity: 0`.
- **PageTransition SSR Flash**: Set `initial={false}` in `src/components/PageTransition.tsx` to prevent server-side HTML from rendering with `opacity: 0` before hydration.

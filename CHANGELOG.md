# Changelog

All notable changes to the Digipro Web project will be documented in this file.

## [Unreleased] - 2026-11-10
### Fixed
- **Hero Background Self-Hosting & 404/403 Dead Link Elimination**:
  - Replaced dead external Unsplash image (`photo-1492691523567-6170c81cb3d3` returning HTTP 404 Not Found) and blocked Mixkit video stream (returning HTTP 403 Forbidden to CloudFront Indonesian edge nodes) with a self-hosted, high-resolution architectural monument asset (`public/hero-bg.jpg`, 2000x1333, 519 KB).
  - Permanently eliminated the broken image icon (`[icon] Cinematic architectural background`) and blank `#FAFAFA` white background in `src/components/Hero.tsx`.
  - Configured `display: "swap"` on Google Fonts (`Cormorant_Garamond` and `Inter`) in `src/app/layout.tsx` to prevent Flash of Invisible Text (FOIT) on initial page load.
  - Removed obsolete preconnect tags to `images.unsplash.com` and `assets.mixkit.co` from `<head>`.
  - Purged broken 403 `videoPreview` URLs from `src/data/portfolio.json` to prevent console network errors on card hover.

### Added
- **Master Rules Locked (v2.0)**: Permanently locked the 3-post-per-day cadence (12:00, 16:30, 19:30 WIB), 72-Hour Repliz rolling queue architecture, Digipro Instagram exclusivity (`6af1ee41fc43f81b786e0de7`), 45-post sequence across folders Gambar 1-5, and permanent Vercel CDN asset hosting in plugin master rules.
- **Repliz 72-Hour Batch 1 Rolling Dispatch**: Deployed 9 media assets to `public/instagram/batch_1/` on Vercel CDN and scheduled all 9 posts of `Gambar_1` to Repliz for Digipro Instagram (`6af1ee41fc43f81b786e0de7` / `@digipro.salatiga`) spanning Tuesday 10 Nov to Thursday 12 Nov at 12:00, 16:30, and 19:30 WIB. All items verified `< 67.0h` compliant with the strict 72-hour ceiling.

## [Unreleased] - 2026-11-09
### Added
- **Repliz Automation Target Locked to Digipro Exclusively**: Configured Digipro Official Instagram (`6af1ee41fc43f81b786e0de7` / `@digipro.salatiga`) as the sole active account for auto-posting and Repliz engagement automation. Removed LinkedIn from the publishing pipeline as directed.
- **Real Portfolio Screenshots Integration**: Imported authentic project screenshots from `E:\Potrto\Fiver` into `public/portfolio/` and `public/portfolio/shots/` covering PMB UT, Keuangan UT, Heca Fashion Store, Luminaire Living, MyInvoice SaaS, Global PDF Engine, and Mie Ayam Sutra.
- **Interactive Screenshot Lightbox Modal**: Built an accessible, animated modal preview in `src/components/PortfolioGrid.tsx` allowing visitors to click any card to inspect full high-resolution desktop UI screenshots, client info, descriptions, and direct Drive links with Escape-key and body scroll lock.
- **Portfolio Expansion (10 Case Studies)**: Updated `src/data/portfolio.json` with 10 real projects categorized across Web & Software, Cinematic & AI, and Photo & Branding.
- **2025 Digipro Portfolio Migration**: Integrated authentic case studies from the official 2025 summary document into `src/data/portfolio.json`.
- **Interactive Portfolio Filtering**: Added category tabs (`All`, `Web & Software`, `Cinematic & AI`, `Photo & Branding`) in `src/components/PortfolioGrid.tsx` with smooth Framer Motion layout transitions.
- **Direct Google Drive Vault Access**: Embedded direct Drive folder links (`https://drive.google.com/drive/folders/1sDvvgf9V16GD4kWJYJnSWm9cjY4MaZHs?usp=sharing`) in the `/work` header and on each project card.
- **Studio 4-Stage Workflow & R&D**: Added the 4-stage agency process (Discovery, Concept, Production, Deployment) and R&D flagship initiatives (Digipro Learning Library, Salatiga Stories) to `src/app/studio/page.tsx`.
- **Client Testimonials (Social Proof)**: Added authentic quotes from IT Division Head (Universitas Terbuka Salatiga) and Owner (Mie Ayam Sutra) to `/studio`.
- **Contact & Brand Alignment**: Updated direct communication channels to `digiprosalatiga@gmail.com` and studio location to `Salatiga, Central Java, Indonesia` with the motto `CREATE. DEVELOP. INNOVATE.`.

### Fixed
- **Permanent Fix for Hero White Screen Flashes**:
  - Removed blocking 2.5s `IntroLoader` from `src/app/HomeClient.tsx` that previously rendered a massive `fixed inset-0` white screen overlay across the viewport.
  - Set `initial={false}` on `src/components/Hero.tsx` text container and CTA button, ensuring server-rendered HTML delivers `opacity: 1` instantly without waiting for Framer Motion client-side hydration.
  - Added an always-visible base architectural poster image (`<img />`) underneath the video background in `Hero.tsx`, eliminating any white gap while waiting for third-party video chunks to load.
  - Optimized `src/components/PageTransition.tsx` to `mode="popLayout"` and reduced duration to `0.2s`, eliminating route-to-route fadeout blackout gaps.
- **Confidential Project Purge**: Ensured project "KIDA" is completely omitted and protected from public exposure.
- **White Screen of Death**: Restored `'unsafe-inline'` and `'unsafe-eval'` to `script-src` in `next.config.ts`. The previously enforced hash-only CSP blocked all Next.js inline streaming scripts (`self.__next_f.push`), preventing React hydration and locking the page at `opacity: 0`.
- **PageTransition SSR Flash**: Set `initial={false}` in `src/components/PageTransition.tsx` to prevent server-side HTML from rendering with `opacity: 0` before hydration.

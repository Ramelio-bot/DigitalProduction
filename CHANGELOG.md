# Changelog

All notable changes to the Digipro Web project will be documented in this file.

## [Unreleased] - 2026-11-09
### Added
- **2025 Digipro Portfolio Migration**: Integrated 6 authentic case studies from the official 2025 summary document into `src/data/portfolio.json` (Portal Web UT Salatiga, Aplikasi Manajemen UT, Bicara Rasa Bicara Sejarah, Serial Sejarah AI: Jejak Tionghoa, Mie Ayam Sutra, Anugrah Tani Muda).
- **Interactive Portfolio Filtering**: Added category tabs (`All`, `Web & Software`, `Cinematic & AI`, `Photo & Branding`) in `src/components/PortfolioGrid.tsx` with smooth Framer Motion layout transitions.
- **Direct Google Drive Vault Access**: Embedded direct Drive folder links (`https://drive.google.com/drive/folders/1sDvvgf9V16GD4kWJYJnSWm9cjY4MaZHs?usp=sharing`) in the `/work` header and on each project card.
- **Studio 4-Stage Workflow & R&D**: Added the 4-stage agency process (Discovery, Concept, Production, Deployment) and R&D flagship initiatives (Digipro Learning Library, Salatiga Stories) to `src/app/studio/page.tsx`.
- **Client Testimonials (Social Proof)**: Added authentic quotes from IT Division Head (Universitas Terbuka Salatiga) and Owner (Mie Ayam Sutra) to `/studio`.
- **Contact & Brand Alignment**: Updated direct communication channels to `digiprosalatiga@gmail.com` and studio location to `Salatiga, Central Java, Indonesia` with the motto `CREATE. DEVELOP. INNOVATE.`.

### Fixed
- **White Screen of Death**: Restored `'unsafe-inline'` and `'unsafe-eval'` to `script-src` in `next.config.ts`. The previously enforced hash-only CSP blocked all Next.js inline streaming scripts (`self.__next_f.push`), preventing React hydration and locking the page at `opacity: 0`.
- **PageTransition SSR Flash**: Set `initial={false}` in `src/components/PageTransition.tsx` to prevent server-side HTML from rendering with `opacity: 0` before hydration.

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digital-production.vercel.app"),
  title: {
    default: "Digipro | Creative-Tech Agency",
    template: "%s | Digipro",
  },
  description: "High-end international-standard agency focusing on Video, Photo, Web, and App development.",
  alternates: {
    canonical: "https://digital-production.vercel.app",
  },
  openGraph: {
    title: "Digipro | Creative-Tech Agency",
    description: "High-end international-standard agency focusing on Video, Photo, Web, and App development.",
    url: "https://digital-production.vercel.app",
    siteName: "Digipro International",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digipro | Creative-Tech Agency",
    description: "High-end international-standard agency focusing on Video, Photo, Web, and App development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://assets.mixkit.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digipro International",
              url: "https://digital-production.vercel.app",
              description:
                "High-end creative agency specializing in cinematic video production and premium digital solutions.",
              foundingDate: "2025",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@digipro.tech",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
        >
          Skip to content
        </a>
        <CustomCursor />
        <SmoothScroll>
          <nav aria-label="Main navigation" className="fixed top-0 w-full z-50 glass hairline-border border-t-0 border-x-0">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
              <Link href="/" className="font-serif text-2xl font-bold tracking-[0.2em] uppercase hover:italic transition-all">
                DIGIPRO
              </Link>
              <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
                <Link href="/work" className="hover:text-muted transition-colors">Work</Link>
                <Link href="/capabilities" className="hover:text-muted transition-colors">Capabilities</Link>
                <Link href="/studio" className="hover:text-muted transition-colors">Studio</Link>
                <Link href="/contact" className="px-5 py-2 bg-accent text-white hover:bg-muted transition-colors rounded-sm">Contact</Link>
              </div>
            </div>
          </nav>

          <main id="main-content" className="flex-grow pt-20">
            <PageTransition>
              {children}
            </PageTransition>
          </main>

          <footer className="py-32 border-t hairline-border bg-white px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
              <div className="md:col-span-2 space-y-8">
                <div className="text-3xl font-serif italic tracking-tighter uppercase font-bold flex items-baseline">
                  Digipro
                  <Link href="/login" className="cursor-default text-inherit hover:text-inherit opacity-90 transition-opacity" title="Restricted Area">.</Link>
                </div>
                <p className="text-muted max-w-sm text-sm leading-relaxed">
                  A high-end creative agency specializing in cinematic video production and premium digital solutions for international brands.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-[10px] uppercase tracking-widest font-bold">Navigation</h2>
                <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest">
                  <li><Link href="/work" className="hover:text-muted transition-colors">Work</Link></li>
                  <li><Link href="/capabilities" className="hover:text-muted transition-colors">Capabilities</Link></li>
                  <li><Link href="/studio" className="hover:text-muted transition-colors">Studio</Link></li>
                  <li><Link href="/contact" className="hover:text-muted transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div className="space-y-8">
                <h2 className="text-[10px] uppercase tracking-widest font-bold">Social</h2>
                <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest">
                  <li><a href="https://instagram.com/digipro" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-muted transition-colors">Instagram</a></li>
                  <li><a href="https://linkedin.com/company/digipro" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-muted transition-colors">LinkedIn</a></li>
                  <li><a href="https://vimeo.com/digipro" target="_blank" rel="noopener noreferrer" aria-label="Vimeo" className="hover:text-muted transition-colors">Vimeo</a></li>
                </ul>
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-32 pt-12 border-t hairline-border flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-muted relative">
              <p>© 2026 Digipro International. All Rights Reserved.</p>
              <div className="flex space-x-12 mt-8 md:mt-0">
                <Link href="/privacy" className="hover:text-accent">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-accent">Terms of Service</Link>
              </div>

              {/* Hidden Admin Login Logo */}
              <div className="absolute right-0 bottom-0 translate-y-full pt-8 pb-2">
                <Link href="/login" aria-label="Administrative access" className="opacity-0 hover:opacity-10 transition-opacity duration-700 cursor-default">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5Z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </Link>
              </div>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}

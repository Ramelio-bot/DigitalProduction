import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import IntroLoader from "@/components/IntroLoader";
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
  title: "Digipro | Creative-Tech Agency",
  description: "High-end international-standard agency focusing on Video, Photo, Web, and App development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll>
          <nav className="fixed top-0 w-full z-50 glass hairline-border border-t-0 border-x-0">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
              <Link href="/" className="font-serif text-2xl font-bold tracking-[0.2em] uppercase hover:italic transition-all">
                DIGIPRO
              </Link>
              <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
                <a href="/work" className="hover:text-muted transition-colors">Work</a>
                <a href="/capabilities" className="hover:text-muted transition-colors">Capabilities</a>
                <a href="/studio" className="hover:text-muted transition-colors">Studio</a>
                <a href="/contact" className="px-5 py-2 bg-accent text-white hover:bg-muted transition-colors rounded-sm">Contact</a>
              </div>
            </div>
          </nav>
          
          <main className="flex-grow pt-20">
            <PageTransition>
              {children}
            </PageTransition>
          </main>

          <footer className="py-32 border-t hairline-border bg-white px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
              <div className="md:col-span-2 space-y-8">
                <div className="text-3xl font-serif italic tracking-tighter uppercase font-bold">Digipro.</div>
                <p className="text-muted max-w-sm text-sm leading-relaxed">
                  A high-end creative agency specializing in cinematic video production and premium digital solutions for international brands.
                </p>
              </div>
              
              <div className="space-y-8">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Navigation</h4>
                <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest">
                  <li><a href="/work" className="hover:text-muted transition-colors">Work</a></li>
                  <li><a href="/capabilities" className="hover:text-muted transition-colors">Capabilities</a></li>
                  <li><a href="/studio" className="hover:text-muted transition-colors">Studio</a></li>
                  <li><a href="/contact" className="hover:text-muted transition-colors">Contact</a></li>
                </ul>
              </div>

              <div className="space-y-8">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Social</h4>
                <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest">
                  <li><a href="#" className="hover:text-muted transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-muted transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-muted transition-colors">Vimeo</a></li>
                </ul>
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-32 pt-12 border-t hairline-border flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
              <p>© 2026 Digipro International. All Rights Reserved.</p>
              <div className="flex space-x-12 mt-8 md:mt-0">
                <a href="#" className="hover:text-accent">Privacy Policy</a>
                <a href="#" className="hover:text-accent">Terms of Service</a>
              </div>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}

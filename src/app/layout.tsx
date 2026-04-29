import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

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
              <span className="font-serif text-2xl font-bold tracking-tight">DIGIPRO</span>
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

          <footer className="py-20 border-t hairline-border bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
              <div className="mb-10 md:mb-0">
                <span className="font-serif text-3xl font-bold tracking-tight block mb-4">DIGIPRO</span>
                <p className="text-muted max-w-xs text-sm leading-relaxed">
                  International standard creative-tech agency. We define the intersection of art and digital performance.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-20">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-6">Social</h4>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-muted transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-muted transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-muted transition-colors">Behance</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-6">Contact</h4>
                  <p className="text-sm">hello@digipro.tech</p>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t hairline-border flex justify-between items-center text-[10px] uppercase tracking-widest text-muted">
              <span>© 2026 Digipro International</span>
              <span>Built by PH Digipro</span>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}

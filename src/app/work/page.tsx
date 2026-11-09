import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import { FolderOpen, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work | Digipro Cinematic Portfolio",
  description: "Explore our filterable case study grid showcasing high-end video production, digital solutions, and creative technology.",
  alternates: { canonical: "https://digital-production.vercel.app/work" },
  openGraph: {
    title: "Work | Digipro Cinematic Portfolio",
    description: "Explore our filterable case study grid showcasing high-end video production, digital solutions, and creative technology.",
    type: "website",
    url: "https://digital-production.vercel.app/work",
    siteName: "Digipro International",
    images: [
      {
        url: "https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Digipro International — Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Digipro Cinematic Portfolio",
    description: "Explore our filterable case study grid showcasing high-end video production, digital solutions, and creative technology.",
    images: ["https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Selected Projects</span>
          <h1 className="text-6xl md:text-9xl leading-[0.8] mb-8">Showcase<span className="italic text-accent">.</span></h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            A curated portfolio across Web & Software Engineering, Cinematic AI Storytelling, and Commercial Photography.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href="https://drive.google.com/drive/folders/1sDvvgf9V16GD4kWJYJnSWm9cjY4MaZHs?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-white hairline-border text-accent hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest font-bold group rounded-sm shadow-sm"
          >
            <FolderOpen className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
            <span>Open Google Drive Vault</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </header>

      <h2 className="sr-only">Featured Case Studies</h2>
      <PortfolioGrid />

      <footer className="mt-32 pt-20 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Ready to engineer your digital presence?</p>
          <p className="text-sm font-serif italic text-foreground mt-1">Salatiga, Central Java • Remote Worldwide</p>
        </div>
        <a href="/contact" className="text-xs font-bold uppercase tracking-widest italic group flex items-center">
          Let's talk
          <span className="ml-4 w-8 h-px bg-accent group-hover:w-12 transition-all"></span>
        </a>
      </footer>
    </div>
  );
}

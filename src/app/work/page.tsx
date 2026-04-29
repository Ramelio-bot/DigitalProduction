import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Work | Digipro Cinematic Portfolio",
  description: "Explore our filterable case study grid showcasing high-end video production and digital solutions.",
};

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 md:mb-32">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Selected Projects</span>
        <h1 className="text-6xl md:text-9xl leading-[0.8] mb-12">Showcase<span className="italic text-accent">.</span></h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          A curated selection of our most impactful work across cinematic video production and innovative digital experiences.
        </p>
      </header>
      
      <PortfolioGrid />

      <footer className="mt-32 pt-20 border-t border-border flex justify-between items-center">
        <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Ready to start your legacy?</p>
        <a href="/contact" className="text-xs font-bold uppercase tracking-widest italic group flex items-center">
          Let's talk 
          <span className="ml-4 w-8 h-px bg-accent group-hover:w-12 transition-all"></span>
        </a>
      </footer>
    </div>
  );
}

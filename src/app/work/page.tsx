import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Digipro Cinematic Portfolio",
  description: "Explore our filterable case study grid showcasing high-end video production and digital solutions.",
};

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Selected Projects</span>
        <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8 italic">Showcase.</h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          A curated selection of our most impactful work across cinematic video production and innovative digital experiences.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Placeholder Grid Items */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] bg-[#F0F0F0] hairline-border overflow-hidden mb-6 relative">
              <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                View Case Study
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl mb-1">Project Name 0{i}</h3>
                <p className="text-xs uppercase tracking-widest text-muted">Cinematic / Branding</p>
              </div>
              <span className="text-[10px] font-bold">2026</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

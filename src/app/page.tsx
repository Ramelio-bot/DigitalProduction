import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Digipro | Engineering Digital Experiences & Cinematic Realities",
  description: "A creative-tech agency focused on high-end video production and digital product development.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Featured Work Preview Section */}
      <section className="py-40 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <header className="mb-32 flex justify-between items-end">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted block mb-8">Selected Works</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight italic">Digital Craftsmanship.</h2>
            </div>
            <a href="/work" className="text-xs uppercase tracking-widest font-bold border-b border-accent pb-1 hover:text-muted hover:border-muted transition-colors mb-4">
              All Projects
            </a>
          </header>
          
          <PortfolioGrid />
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-40 px-6 border-t hairline-border bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted block">Our Philosophy</span>
          <p className="text-3xl md:text-5xl font-serif leading-[1.3] italic text-balance">
            "We strip away the noise to let the brand's core essence shine through technical precision."
          </p>
          <div className="pt-8">
            <a href="/studio" className="text-xs font-bold uppercase tracking-[0.3em] px-12 py-6 border border-border hover:bg-accent hover:text-white transition-all">
              The Studio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

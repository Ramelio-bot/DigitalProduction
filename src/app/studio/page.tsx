import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | Brand Manifesto & Philosophy",
  description: "Learn about the philosophy and the creative-tech team behind Digipro International.",
};

export default function StudioPage() {
  const values = [
    { title: "Precision", desc: "Every frame and line of code is measured for maximum impact." },
    { title: "Minimalism", desc: "We strip away the noise to let the brand's core essence shine." },
    { title: "Innovation", desc: "Utilizing the latest AI and cinematic tech to stay ahead of the curve." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      <header className="mb-32">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Our Studio</span>
        <h1 className="text-6xl md:text-9xl leading-[0.8] mb-12 italic">Manifesto<span className="text-accent not-italic">.</span></h1>
        <div className="h-px w-full bg-border" />
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
        <div className="space-y-12">
          <p className="text-4xl md:text-5xl font-serif leading-[1.2] italic">
            "We combine systematic technical execution with high-end cinematic storytelling."
          </p>
          <div className="aspect-[4/5] bg-[#F5F5F5] hairline-border grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" alt="Studio Space" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="pt-20 space-y-20">
          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted border-b border-border pb-4 w-fit">Our Approach</h3>
            <p className="text-xl text-muted leading-relaxed">
              Based at the intersection of creative art and modern technology, Digipro was founded to bridge the gap between aesthetic excellence and digital performance.
            </p>
            <p className="text-xl text-muted leading-relaxed">
              Efficiency is our baseline. Precision is our goal. Every project is a journey from structured planning to emotional resonance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {values.map((v) => (
              <div key={v.title} className="p-12 hairline-border bg-white group hover:bg-accent transition-colors duration-500">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 group-hover:text-white">{v.title}</h4>
                <p className="text-muted group-hover:text-white/80 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Collaboration Section Placeholder */}
      <section className="py-32 border-t hairline-border">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mb-8 block">Global Network</span>
          <h2 className="text-4xl md:text-5xl mb-12">Built by <span className="italic">Visionaries</span>, for <span className="italic">Leaders</span>.</h2>
          <p className="text-muted leading-relaxed mb-12">
            Our team is a distributed collective of filmmakers, photographers, and engineers working across time zones to deliver world-class digital assets.
          </p>
          <div className="flex justify-center space-x-24 text-[10px] uppercase tracking-widest font-bold">
             <span>London</span>
             <span>Dubai</span>
             <span>Remote</span>
          </div>
        </div>
      </section>
    </div>
  );
}

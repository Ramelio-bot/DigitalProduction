import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | Digipro Cinematic & Digital Studio",
  description: "Explore the core, methodology, and journey of Digipro. Founded in 2025.",
};

export default function StudioPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-40">
        {/* Header - Staggered Layout */}
        <header className="mb-40 lg:mb-64 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted block mb-10">Establishing 2025</span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.85] italic tracking-tighter">
              The <span className="not-italic">Studio</span>.
            </h1>
          </div>
          <div className="lg:max-w-md pb-4">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted leading-relaxed border-l hairline-border pl-8">
              Digipro operates as a creative-tech laboratory where code meets cinematography, bridging high-end aesthetics with technical precision.
            </p>
          </div>
        </header>

        {/* Section 1: The Core */}
        <section className="mb-40 lg:mb-64 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
             <div className="aspect-[4/5] bg-white hairline-border p-2 grayscale hover:grayscale-0 transition-all duration-1000">
               <img 
                 src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                 alt="Cinematic Laboratory" 
                 className="w-full h-full object-cover" 
               />
             </div>
          </div>
          <div className="lg:col-span-7 space-y-12 order-1 lg:order-2 lg:pt-20">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">The Core</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic leading-tight">Engineering Cinematic Realities</h3>
            <div className="space-y-8 text-lg text-muted leading-relaxed font-sans max-w-xl">
              <p>
                Digipro is a creative-tech laboratory where the precision of code meets the aesthetics of cinematography. We believe that great digital systems should function as beautifully as a compelling visual masterpiece.
              </p>
              <p>
                Our focus is on crafting experiences that are not just seen, but felt—bridging the gap between software development logic and the emotional depth of storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Methodology */}
        <section className="mb-40 lg:mb-64 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic leading-tight">Versatility Without Compromise</h3>
            <div className="space-y-8 text-lg text-muted leading-relaxed max-w-xl">
              <p>
                In capturing visuals, we do not limit creativity by tools. We master the full spectrum of equipment to ensure every message is delivered with the right intensity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold border-b border-border pb-2">Ground Units</h4>
                  <p className="text-sm">Handheld & Tripod: For an intimate, organic, and classically stable approach.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold border-b border-border pb-2">Aerial & Motion</h4>
                  <p className="text-sm">Gimbal & Drone: Providing smooth dynamic motion and grand aerial perspectives.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-square bg-white hairline-border p-2">
               <img 
                 src="https://images.unsplash.com/photo-1542315193666-68620247697b?auto=format&fit=crop&q=80&w=1200" 
                 alt="Cinematic Equipment" 
                 className="w-full h-full object-cover grayscale" 
               />
            </div>
          </div>
        </section>

        {/* Section 3: Narrative Edge */}
        <section className="mb-40 lg:mb-64 text-center max-w-4xl mx-auto space-y-16">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">Narrative Edge</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-tight tracking-tighter">Research-Driven Storytelling.</h2>
          <div className="space-y-10 text-xl text-muted leading-relaxed">
            <p>
              Visuals without a strong narrative are merely a collection of images. At Digipro, we conduct deep research to provide a "soul" for every project, especially in elevating cultural and historical values.
            </p>
            <p className="text-accent font-bold uppercase text-[10px] tracking-[0.3em]">Featured: "Bicara Rasa Bicara Sejarah"</p>
            <p className="text-lg">
              Our dedication is evident in our documentation of local culinary acculturation, proving that we can transform deep research into globally relevant content.
            </p>
          </div>
        </section>

        {/* Section 4: The Journey */}
        <section className="py-32 border-t hairline-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted">The Digipro Journey</h2>
              <h3 className="text-4xl md:text-5xl font-serif italic">Founded in 2025.</h3>
              <p className="text-muted leading-relaxed max-w-md">
                Digipro was established to bridge the gap between high-end aesthetics and technical precision. Since its inception, we have been trusted to execute strategic projects across cinematic and digital landscapes.
              </p>
            </div>
            <div className="space-y-16">
              {[
                { title: "Bicara Rasa Bicara Sejarah", desc: "A research-driven documentary series documenting local culinary acculturation and historical values." },
                { title: "Axiom & MyInvoice.space", desc: "Developing premium digital platforms with a focus on functional elegance and institutional usability." },
                { title: "Social Media & Branding", desc: "Crafting authentic visual identities and managing digital narratives for global recognition." }
              ].map((item, i) => (
                <div key={item.title} className="group flex items-start gap-8">
                  <span className="text-[10px] font-bold text-muted mt-1">0{i+1}</span>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest group-hover:italic transition-all">{item.title}</h4>
                    <p className="text-sm text-muted leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

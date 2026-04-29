import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | Brand Manifesto & Philosophy",
  description: "Learn about the philosophy and the creative-tech team behind Digipro International.",
};

export default function StudioPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-32">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Our Studio</span>
        <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8 italic">Manifesto.</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-start">
        <div className="space-y-12">
          <p className="text-3xl md:text-4xl font-serif leading-[1.3]">
            "Digital is not just a medium; it is a canvas for timeless craftsmanship."
          </p>
          <div className="aspect-[4/5] bg-[#F0F0F0] hairline-border" />
        </div>
        <div className="pt-20 space-y-12">
          <div className="max-w-sm space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-border pb-4">Our Vision</h3>
            <p className="text-muted leading-relaxed">
              Based at the intersection of creative art and modern technology, Digipro was founded to bridge the gap between aesthetic excellence and digital performance.
            </p>
            <p className="text-muted leading-relaxed">
              Every pixel we place and every frame we capture is driven by the desire to create something that lasts—a digital legacy for our clients.
            </p>
          </div>
          <div className="aspect-video bg-[#F0F0F0] hairline-border" />
        </div>
      </div>
    </div>
  );
}

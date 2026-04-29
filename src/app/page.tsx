import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Digipro | Cinematic Video Production & Digital Solutions",
  description: "High-end international agency focusing on Video, Photo, Web, and App development for premium brands.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Intro Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-4xl md:text-6xl leading-[1.1] mb-12">
                We believe in the power of <span className="text-muted">minimalism</span> and the precision of <span className="italic font-normal">technology</span>.
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-muted leading-relaxed mb-6 font-sans">
                Our approach is rooted in the "Gallery White" philosophy—stripping away the noise to let the content breathe and the technology perform.
              </p>
              <a href="/studio" className="text-xs font-bold uppercase tracking-widest border-b border-accent w-fit pb-1 hover:text-muted hover:border-muted transition-colors">
                About the Studio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">
              Creative-Tech Excellence
            </span>
            <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] text-balance">
              Crafting <span className="italic">Digital</span> Legacies.
            </h1>
            <p className="text-muted text-lg max-w-md mb-10 leading-relaxed font-sans">
              Digipro is an international agency specializing in high-performance Video, Web, and App development for premium brands.
            </p>
            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white group-hover:bg-muted transition-colors">
                <ArrowRight size={20} />
              </div>
              <span className="uppercase tracking-widest text-xs font-bold">View Showreel</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative aspect-video hairline-border bg-[#F0F0F0] overflow-hidden"
          >
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-muted italic">
              [ Video Showreel Placeholder ]
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAFAFA] -z-0" />
      </section>

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
              <p className="text-muted leading-relaxed mb-6">
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

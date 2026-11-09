"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
      {/* High-Resolution Cinematic Architecture Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/hero-bg.jpg"
          alt="Digipro Studio Architectural Monument"
          className="w-full h-full object-cover"
          initial={false}
          animate={{ scale: shouldReduceMotion ? 1 : 1.04 }}
          transition={{ duration: 8, ease: "easeOut" }}
          fetchPriority="high"
        />
        {/* Soft Contrast Overlay for Maximum Typography Legibility */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-12">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent block mb-8">
            Creative-Tech Excellence
          </span>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] text-balance">
            Crafting Digital <span className="italic">Monuments</span> for Defining Lives.
          </h1>

          <p className="text-muted text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Video Production • Photography • App Development • Web Solutions
          </p>

          <div className="pt-12">
            <Link
              href="/work"
              className="group relative inline-flex items-center space-x-6 px-16 py-8 bg-accent text-white hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-sm"
            >
              <span className="relative z-10 text-xs uppercase tracking-[0.4em] font-bold">Explore Our Work</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              <motion.div
                className="absolute inset-0 bg-muted -z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Aesthetic Hairline Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border/50" />
    </section>
  );
}

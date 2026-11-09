"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Cinematic Media Background */}
      <div className="absolute inset-0 z-0">
        {/* Base Fallback Image: Always visible immediately, eliminating any white screen gap */}
        <img
          src="https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=2000"
          alt="Cinematic architectural background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Video stream overlay: smoothly fades in over the image when ready */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          onLoadedData={() => setIsVideoLoaded(true)}
          preload="metadata"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-minimalist-modern-architecture-4235-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Soft White Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent block mb-8">
            Creative-Tech Excellence
          </span>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] text-balance">
            Crafting Digital <span className="italic">Monuments</span> for Defining Lives.
          </h1>

          <p className="text-muted text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Video Production • Photography • App Development • Web Solutions
          </p>

          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            className="pt-12"
          >
            <Link
              href="/work"
              className="group relative inline-flex items-center space-x-6 px-16 py-8 bg-accent text-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
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
          </motion.div>
        </motion.div>
      </div>

      {/* Aesthetic Hairline Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border/50" />
    </section>
  );
}

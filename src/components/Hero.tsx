"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
          {/* High-Res Placeholder Image */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-[#F0F0F0] animate-pulse flex items-center justify-center text-[10px] uppercase tracking-widest text-muted italic">
              Loading Cinematic Experience...
            </div>
          )}
          
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            preload="none"
            poster="https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200"
          >
            {/* Example Video Link from a high-performance CDN (using a placeholder sample) */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-minimalist-modern-architecture-4235-large.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAFAFA] -z-0" />
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

let hasPlayedGlobal = false;

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(!hasPlayedGlobal);

  useEffect(() => {
    if (hasPlayedGlobal) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      hasPlayedGlobal = true;
    }, 2500); // Efficient duration: 2.5s

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* The Pixel morphing into Lens */}
          <motion.div
            initial={{ width: 1, height: 1, borderRadius: 0, opacity: 0 }}
            animate={{ 
              width: [1, 80, 80, 2000],
              height: [1, 80, 80, 2000],
              borderRadius: ["0%", "0%", "100%", "100%"],
              opacity: [0, 1, 1, 1],
              scale: [1, 1, 0.9, 1.5]
            }}
            transition={{ 
              duration: 3,
              times: [0, 0.3, 0.6, 1],
              ease: "easeInOut"
            }}
            className="bg-accent flex items-center justify-center overflow-hidden"
          >
            {/* Shutter Flicker Effect */}
            <motion.div
              animate={{ opacity: [1, 0, 1, 0, 1] }}
              transition={{ delay: 1.8, duration: 0.4 }}
              className="absolute inset-0 bg-white/10"
            />
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 0.5, duration: 2 }}
            className="absolute bottom-20 text-[10px] uppercase tracking-[0.5em] font-bold text-muted"
          >
            Systemizing Vision
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

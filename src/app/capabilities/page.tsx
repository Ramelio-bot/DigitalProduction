"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Cinematic Video",
    desc: "High-end production, showreels, and brand storytelling with an international standard.",
    subServices: ["Showreels", "Brand Films", "Documentaries", "Social Media Content"]
  },
  {
    id: "02",
    title: "Photography",
    desc: "Professional editorial, architectural, and commercial photography for premium brands.",
    subServices: ["Editorial", "Architectural", "Commercial", "Product"]
  },
  {
    id: "03",
    title: "Web Development",
    desc: "Fast, responsive, and minimalist web experiences built with cutting-edge tech.",
    subServices: ["Next.js", "React", "E-commerce", "Portfolio Sites"]
  },
  {
    id: "04",
    title: "App Solutions",
    desc: "Intuitive mobile and desktop applications designed for performance and scale.",
    subServices: ["iOS/Android", "SaaS Platforms", "UI/UX Design", "Custom CMS"]
  },
];

export default function CapabilitiesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 md:mb-32 max-w-3xl">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Our Expertise</span>
        <h1 className="text-6xl md:text-9xl leading-[0.8] mb-12">Expertise<span className="italic text-accent">.</span></h1>
        <p className="text-muted text-lg leading-relaxed">
          We combine artistic vision with technical precision to deliver digital solutions that define market leaders.
        </p>
      </header>

      <div className="space-y-px bg-border hairline-border">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-background overflow-hidden"
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-8 md:px-12 cursor-default transition-colors hover:bg-white relative z-10">
              <div className="flex items-start space-x-8 md:space-x-12">
                <span className="text-xs font-bold text-muted mt-2">{service.id}</span>
                <h2 className={`text-4xl md:text-6xl transition-all duration-500 ${activeService === service.id ? 'italic pl-4' : ''}`}>
                  {service.title}
                </h2>
              </div>
              
              <div className="flex flex-col justify-center">
                <p className="text-muted text-lg leading-relaxed max-w-sm mb-8">
                  {service.desc}
                </p>
                
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {service.subServices.map((sub) => (
                        <li key={sub} className="text-[10px] uppercase tracking-widest font-bold text-accent flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                          {sub}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Background Accent for Active State */}
            <AnimatePresence>
              {activeService === service.id && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#F9F9F9] -z-0"
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

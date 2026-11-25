"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Cinematic Video",
    inquiryParam: "Video Production",
    sla: "4K Master + Multi-Aspect Delivery",
    desc: "High-end production, showreels, and brand storytelling with an international standard.",
    subServices: ["Showreels", "Brand Films", "Documentaries", "Social Media Content"],
  },
  {
    id: "02",
    title: "Photography",
    inquiryParam: "Photography",
    sla: "Color-Calibrated RAW & Web-Ready Exports",
    desc: "Professional editorial, architectural, and commercial photography for premium brands.",
    subServices: ["Editorial", "Architectural", "Commercial", "Product"],
  },
  {
    id: "03",
    title: "Web Development",
    inquiryParam: "Web Solutions",
    sla: "90+ Google PageSpeed & Clean SSR",
    desc: "Fast, responsive, and minimalist web experiences built with cutting-edge tech.",
    subServices: ["Next.js", "React", "E-commerce", "Portfolio Sites"],
  },
  {
    id: "04",
    title: "App Solutions",
    inquiryParam: "App Development",
    sla: "Production Build & Type-Safe Architecture",
    desc: "Intuitive mobile and desktop applications designed for performance and scale.",
    subServices: ["iOS/Android", "SaaS Platforms", "UI/UX Design", "Custom CMS"],
  },
  {
    id: "05",
    title: "AI Specialist",
    inquiryParam: "AI Specialist",
    sla: "Zero Client-Side Key Exposure & <300ms Streaming",
    desc: "Strategic AI architecture, custom LLM integration, and intelligent agent systems built for real business workflows.",
    subServices: ["Custom AI Agents", "LLM Integration", "RAG Systems", "AI Strategy & Consulting"],
  },
  {
    id: "06",
    title: "AI Automation",
    inquiryParam: "AI Automation",
    sla: "End-to-End Pipeline & 72-Hour Queue Discipline",
    desc: "End-to-end automated pipelines that eliminate repetitive operations and scale multi-platform execution.",
    subServices: ["Workflow Pipelines", "Content Automation", "API Orchestration", "Scheduled Publishing"],
  },
];

export default function CapabilitiesClient() {
  const [activeService, setActiveService] = useState<string | null>("01");
  const shouldReduceMotion = useReducedMotion();

  const toggleService = (id: string) => {
    setActiveService((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 md:mb-32 max-w-3xl">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Our Expertise</span>
        <h1 className="text-6xl md:text-9xl leading-[0.8] mb-12">Expertise<span className="italic text-accent">.</span></h1>
        <p className="text-muted text-lg leading-relaxed">
          We combine artistic vision with technical precision across six integrated disciplines to deliver solutions that define market leaders. Tap or hover any capability to inspect deliverables.
        </p>
      </header>

      <div className="space-y-px bg-border hairline-border">
        {services.map((service) => {
          const isOpen = activeService === service.id;
          return (
            <div
              key={service.id}
              className="relative bg-background overflow-hidden"
              onMouseEnter={() => setActiveService(service.id)}
            >
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggleService(service.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleService(service.id);
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 md:py-20 px-6 md:px-12 cursor-pointer transition-colors hover:bg-white relative z-10"
              >
                <div className="flex items-start justify-between md:justify-start md:space-x-12">
                  <div className="flex items-start space-x-6 md:space-x-12">
                    <span className="text-xs font-bold text-muted mt-2">{service.id}</span>
                    <div>
                      <h2 className={`text-3xl md:text-6xl transition-all duration-500 ${isOpen ? "italic pl-2 md:pl-4" : ""}`}>
                        {service.title}
                      </h2>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mt-3">
                        {service.sla}
                      </p>
                    </div>
                  </div>
                  <span className="md:hidden p-1 text-accent" aria-hidden="true">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-muted text-base md:text-lg leading-relaxed max-w-md mb-6">
                    {service.desc}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
                        className="space-y-6 overflow-hidden"
                      >
                        <ul className="grid grid-cols-2 gap-4 pt-2">
                          {service.subServices.map((sub) => (
                            <li key={sub} className="text-[10px] uppercase tracking-widest font-bold text-accent flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 shrink-0" />
                              {sub}
                            </li>
                          ))}
                        </ul>

                        <div className="pt-2">
                          <Link
                            href={`/contact?service=${encodeURIComponent(service.inquiryParam)}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-accent border-b border-accent pb-1 hover:text-muted hover:border-muted transition-colors"
                          >
                            <span>Request {service.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Background Accent for Active State */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={shouldReduceMotion ? false : { x: "-100%" }}
                    animate={{ x: "0%" }}
                    exit={shouldReduceMotion ? undefined : { x: "100%" }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#F9F9F9] -z-0 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

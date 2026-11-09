"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  client?: string;
  year?: string;
  thumbnail: string;
  videoPreview: string;
  shortDescription: string;
  driveUrl?: string;
}

const CATEGORIES = ["All", "Web & Software", "Cinematic & AI", "Photo & Branding"] as const;
type Category = (typeof CATEGORIES)[number];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return portfolioData as Project[];
    return (portfolioData as Project[]).filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-16">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 md:gap-6 border-b hairline-border pb-6">
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted mr-2">
          Filter:
        </span>
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 text-[11px] uppercase tracking-widest font-bold transition-all rounded-sm cursor-pointer ${
                isActive ? "text-white bg-accent" : "text-muted hover:text-accent bg-transparent"
              }`}
            >
              {category}
              {isActive && (
                <span className="sr-only">(Active)</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout={!shouldReduceMotion}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      layout={!shouldReduceMotion}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.05 }}
      className="group cursor-none flex flex-col justify-between"
      onMouseEnter={() => {
        setIsHovered(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        videoRef.current?.pause();
      }}
      data-cursor="view"
    >
      <div>
        <div className="relative aspect-[16/10] bg-[#F0F0F0] hairline-border overflow-hidden mb-8">
          <AnimatePresence>
            {isHovered && project.videoPreview && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10"
              >
                <video
                  ref={videoRef}
                  src={project.videoPreview}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
              </motion.div>
            )}
          </AnimatePresence>

          <img
            src={project.thumbnail}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />

          {project.type === "digital" && (
            <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold hairline-border">
              Software / Web
            </div>
          )}
          {project.type === "video" && (
            <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold hairline-border">
              Cinematic Video
            </div>
          )}
          {project.type === "photo" && (
            <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold hairline-border">
              Brand & Photo
            </div>
          )}
        </div>

        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl mb-2 group-hover:italic transition-all">
              {project.title}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {project.category} {project.client ? `• ${project.client}` : ""}
            </p>
          </div>
          <span className="text-[10px] font-bold text-muted mt-2 tracking-widest shrink-0">
            {project.id}
          </span>
        </div>

        <p className="mt-4 text-muted text-sm leading-relaxed max-w-lg">
          {project.shortDescription}
        </p>
      </div>

      {project.driveUrl && (
        <div className="mt-6 pt-4 border-t hairline-border flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-muted font-bold">
            Archived Deliverables
          </span>
          <a
            href={project.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent hover:text-muted transition-colors"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Drive Vault</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

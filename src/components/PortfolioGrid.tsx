"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FolderOpen, Eye, X } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  client?: string;
  year?: string;
  thumbnail: string;
  screenshot?: string;
  videoPreview: string;
  shortDescription: string;
  driveUrl?: string;
}

const CATEGORIES = ["All", "Web & Software", "Cinematic & AI", "Photo & Branding"] as const;
type Category = (typeof CATEGORIES)[number];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Close modal on Escape key & lock scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };

    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

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
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setActiveProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Screenshot / Detail Lightbox Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-[#0F0F0F] text-white border border-white/10 rounded-sm overflow-hidden flex flex-col max-h-[92vh] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-accent text-white">
                      {activeProject.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-serif">{activeProject.title}</h3>
                  </div>
                  {activeProject.client && (
                    <p className="text-xs text-white/50 tracking-wider uppercase mt-1">
                      {activeProject.client} ({activeProject.year})
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded-sm cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body: High-Res Screenshot / Thumbnail */}
              <div className="p-4 md:p-6 overflow-y-auto max-h-[65vh] flex items-center justify-center bg-black/50">
                <img
                  src={activeProject.screenshot || activeProject.thumbnail}
                  alt={activeProject.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-sm border border-white/5 shadow-lg"
                />
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-black/40">
                <p className="text-xs md:text-sm text-white/70 max-w-2xl leading-relaxed">
                  {activeProject.shortDescription}
                </p>
                {activeProject.driveUrl && (
                  <a
                    href={activeProject.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-accent hover:text-white transition-colors text-xs font-bold uppercase tracking-wider shrink-0 rounded-sm"
                  >
                    <FolderOpen className="w-4 h-4" />
                    <span>Drive Vault</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
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
      className="group flex flex-col justify-between"
      onMouseEnter={() => {
        setIsHovered(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        videoRef.current?.pause();
      }}
    >
      <div>
        <div
          onClick={() => onSelect(project)}
          className="relative aspect-[16/10] bg-[#F0F0F0] hairline-border overflow-hidden mb-8 cursor-pointer"
        >
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

          {/* Quick Preview Badge */}
          <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 bg-black/80 text-white backdrop-blur-md text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>View Preview</span>
          </div>
        </div>

        <div className="flex justify-between items-start gap-4">
          <div
            onClick={() => onSelect(project)}
            className="cursor-pointer"
          >
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
          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors cursor-pointer"
            >
              <Eye className="w-3 h-3" />
              <span>Preview</span>
            </button>
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
        </div>
      )}
    </motion.div>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  thumbnail: string;
  videoPreview: string;
  shortDescription: string;
}

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
      {(portfolioData as Project[]).map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-none"
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
          className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />

        {project.type === "digital" && (
          <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-white/80 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold hairline-border">
            Interactive Product
          </div>
        )}
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl md:text-3xl mb-2 group-hover:italic transition-all">
            {project.title}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            {project.category}
          </p>
        </div>
        <span className="text-[10px] font-bold text-muted mt-2">
          {project.id}
        </span>
      </div>
      
      <p className="mt-6 text-muted text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {project.shortDescription}
      </p>
    </motion.div>
  );
}

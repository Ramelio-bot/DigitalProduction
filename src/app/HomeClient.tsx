"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const CORE_PILLARS = [
  {
    id: "01",
    title: "Video Production",
    summary: "Commercial reels, documentaries, and brand narratives built with cinema-grade pacing.",
  },
  {
    id: "02",
    title: "Photography",
    summary: "Editorial, architectural, and commercial product photography tailored for luxury positioning.",
  },
  {
    id: "03",
    title: "App Development",
    summary: "Scalable cross-platform SaaS and internal web applications engineered for reliability.",
  },
  {
    id: "04",
    title: "Web Solutions",
    summary: "Next.js web architectures with 90+ PageSpeed scores, SEO optimization, and clean UX.",
  },
  {
    id: "05",
    title: "AI Specialist",
    summary: "Custom LLM integrations, RAG pipelines, and domain-tuned AI agents without key exposure.",
  },
  {
    id: "06",
    title: "AI Automation",
    summary: "End-to-end automated workflows connecting content pipelines, APIs, and scheduled delivery.",
  },
];

const FEATURED_IDS = ["01", "02", "11", "07"];

export default function HomeClient() {
  const featuredProjects = portfolioData.filter((item) => FEATURED_IDS.includes(item.id));

  return (
    <div className="flex flex-col">
      <Hero />

      {/* Capabilities Snapshot */}
      <section className="py-24 md:py-36 bg-background px-6 border-b hairline-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted block">
                Integrated Capabilities
              </span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Six Disciplines Under <span className="italic">One Roof.</span>
              </h2>
            </div>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-bold text-accent hover:text-muted transition-colors group"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border hairline-border">
            {CORE_PILLARS.map((pillar) => (
              <Link
                key={pillar.id}
                href={`/contact?service=${encodeURIComponent(pillar.title)}`}
                className="bg-white p-10 md:p-12 hover:bg-[#F9F9F9] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-muted block mb-6">
                    {pillar.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 group-hover:italic transition-all">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t hairline-border flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-accent">
                  <span>Inquire Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 md:py-36 bg-white px-6 border-b hairline-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted block">
                Selected Showcase
              </span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Monumental <span className="italic">Deliverables.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-bold text-accent hover:text-muted transition-colors group"
            >
              <span>View Full Archive ({portfolioData.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href="/work"
                className="group block space-y-6"
              >
                <div className="relative aspect-[16/10] bg-[#F3F3F3] hairline-border overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold hairline-border">
                    {project.category}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif group-hover:italic transition-all">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted mt-1">
                      {project.client}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-muted mt-1">
                    {project.id}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {project.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Authority CTA */}
      <section className="py-24 md:py-36 bg-[#FAFAFA] px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <span className="text-[10px] uppercase tracking-[0.45em] font-bold text-muted block">
            Salatiga, Central Java • Remote Worldwide
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.95]">
            Built with Visual Discipline & <span className="italic">Technical Precision.</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a cinematic brand campaign, a 90+ PageSpeed Next.js web architecture, or a custom AI automation workflow, our studio executes from concept to launch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-10 py-5 bg-accent text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-muted transition-colors rounded-sm inline-flex items-center gap-3"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/studio"
              className="px-10 py-5 bg-white hairline-border text-accent text-xs uppercase tracking-[0.3em] font-bold hover:bg-gray-50 transition-colors rounded-sm"
            >
              About The Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

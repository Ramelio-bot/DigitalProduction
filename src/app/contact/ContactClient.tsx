"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";

const SERVICE_OPTIONS = [
  "Video Production",
  "Photography",
  "App Development",
  "Web Solutions",
  "AI Specialist",
  "AI Automation",
  "Full Creative-Tech Suite",
] as const;

export default function ContactClient() {
  const searchParams = useSearchParams();
  const initialServiceParam = searchParams.get("service") ?? "";
  const matchedService = SERVICE_OPTIONS.find(
    (s) => s.toLowerCase() === initialServiceParam.toLowerCase()
  );

  const [selectedService, setSelectedService] = useState<string>(
    matchedService ?? "Full Creative-Tech Suite"
  );
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (matchedService) {
      setSelectedService(matchedService);
    }
  }, [matchedService]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          service: selectedService,
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      <header className="mb-20 md:mb-32">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Get in Touch</span>
        <h1 className="text-6xl md:text-9xl leading-[0.8] mb-12">Connect<span className="italic text-accent">.</span></h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          Ready to elevate your brand with cinematic visuals, web engineering, and custom AI automation? Let's discuss your next project.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        <div className="space-y-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Project Inquiry</h2>
          {status === "success" ? (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 hairline-border bg-white flex flex-col items-center text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-accent mb-6" />
              <h3 className="text-3xl mb-4 font-serif italic">Inquiry Received.</h3>
              <p className="text-muted leading-relaxed mb-8">
                Thank you for reaching out regarding <span className="text-foreground font-medium">{selectedService}</span>. Our production team will contact you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[10px] uppercase tracking-widest font-bold border-b border-accent pb-1 cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-4">
                <label htmlFor="contact-name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted block">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors text-lg"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="contact-email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted block">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors text-lg"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="contact-service" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted block">
                  Capability Needed
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors text-lg text-foreground cursor-pointer"
                >
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-4">
                <label htmlFor="contact-message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted block">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors text-lg resize-none"
                  placeholder="Tell us about your project timeline, scope, or automation goals..."
                ></textarea>
              </div>

              <button
                disabled={status === "loading"}
                className="group flex items-center space-x-6 px-12 py-6 bg-accent text-white rounded-sm hover:bg-muted transition-all disabled:opacity-50 cursor-pointer"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>

              {status === "error" && (
                <p className="text-red-500 mt-4 text-xs tracking-wider uppercase">Failed to send. Please try again or email us directly.</p>
              )}
            </form>
          )}
        </div>

        <div className="space-y-16">
          <div className="p-10 md:p-12 bg-white hairline-border relative overflow-hidden group">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8">Consultation</h2>
            <p className="text-muted mb-10 leading-relaxed text-lg italic">
              "Systematic execution meets cinematic storytelling."
            </p>
            <div className="bg-[#F5F5F5] hairline-border flex flex-col items-center justify-center text-center p-8 md:p-10 space-y-6">
              <p className="text-[10px] uppercase tracking-widest text-muted">Discovery Call</p>
              <h3 className="text-2xl font-serif">Schedule a 15-min Session</h3>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <a
                  href={`mailto:digiprosalatiga@gmail.com?subject=${encodeURIComponent(`Discovery Call — ${selectedService}`)}`}
                  className="px-8 py-4 bg-accent text-white text-[10px] uppercase tracking-widest font-bold hover:bg-muted transition-all inline-flex items-center justify-center gap-2 rounded-sm"
                >
                  <span>Email Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.fiverr.com/ramelio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-border bg-white text-[10px] uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-all inline-flex items-center justify-center gap-2 rounded-sm"
                >
                  <span>Fiverr Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-muted mb-4">Direct Contact</h3>
              <p className="text-base font-medium break-all">digiprosalatiga@gmail.com</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-muted mb-4">Base & Reach</h3>
              <p className="text-base font-medium">Salatiga, Central Java • Remote Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

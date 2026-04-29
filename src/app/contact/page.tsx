"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      <header className="mb-20 md:mb-32">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block mb-6">Get in Touch</span>
        <h1 className="text-6xl md:text-9xl leading-[0.8] mb-12">Connect<span className="italic text-accent">.</span></h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          Ready to elevate your brand with cinematic visuals and technical precision? Let's discuss your next project.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div className="space-y-12">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 hairline-border bg-white flex flex-col items-center text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-accent mb-6" />
              <h2 className="text-3xl mb-4 font-serif italic">Inquiry Received.</h2>
              <p className="text-muted leading-relaxed mb-8">
                Thank you for reaching out. Our production team will contact you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[10px] uppercase tracking-widest font-bold border-b border-accent pb-1"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">Full Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors text-lg"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">Email Address</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors text-lg"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">Project Details</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-colors text-lg resize-none"
                  placeholder="Tell us about your cinematic or digital needs..."
                ></textarea>
              </div>
              
              <button
                disabled={status === "loading"}
                className="group flex items-center space-x-6 px-12 py-6 bg-accent text-white rounded-sm hover:bg-muted transition-all disabled:opacity-50"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              {status === "error" && (
                <p className="text-xs text-red-500 italic">Something went wrong. Please try again or email us directly.</p>
              )}
            </form>
          )}
        </div>

        <div className="space-y-16">
          <div className="p-12 bg-white hairline-border relative overflow-hidden group">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8">Consultation</h3>
            <p className="text-muted mb-12 leading-relaxed text-lg italic">
              "Systematic execution meets cinematic storytelling."
            </p>
            <div className="aspect-video bg-[#F5F5F5] hairline-border flex flex-col items-center justify-center text-center p-8">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-6">Discovery Call</p>
              <h4 className="text-2xl mb-8">Schedule a 15-min Session</h4>
              <button className="px-8 py-4 border border-border text-[10px] uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-all">
                Book Calendar
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted mb-4">Direct Contact</h4>
              <p className="text-lg">hello@digipro.tech</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted mb-4">Global Reach</h4>
              <p className="text-lg">Remote / Distributed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

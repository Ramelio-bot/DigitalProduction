'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, UploadCloud } from "lucide-react";

export default function NewProjectPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Integrate Supabase Upload & DB Insert here
    setTimeout(() => {
      alert("Please connect Supabase in settings to enable media uploads.");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-6">
        <Link href="/dashboard/projects" className="inline-flex items-center space-x-2 text-xs text-muted hover:text-accent transition-colors uppercase tracking-widest font-bold">
          <ArrowLeft size={14} />
          <span>Back to Projects</span>
        </Link>
        <div className="space-y-2">
          <h1 className="text-3xl font-serif uppercase tracking-widest">Upload Project</h1>
          <p className="text-muted text-xs uppercase tracking-[0.1em]">Add a new cinematic or digital piece to the portfolio.</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="space-y-10 border-t hairline-border pt-10">
        
        {/* Media Upload Area */}
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Primary Media (Video / Photo)</label>
          <div className="border-2 border-dashed hairline-border bg-[#FAFAFA] hover:bg-gray-50 transition-colors p-12 flex flex-col items-center justify-center text-center cursor-pointer rounded-sm group">
            <UploadCloud size={32} className="text-muted group-hover:text-accent transition-colors mb-4" />
            <p className="text-sm font-bold">Drag and drop your media file here</p>
            <p className="text-[10px] text-muted uppercase tracking-widest mt-2">MP4, WebM, JPG, PNG up to 50MB</p>
            <input type="file" className="hidden" accept="video/mp4,video/webm,image/jpeg,image/png" />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Project Title</label>
            <input type="text" required className="w-full bg-transparent border-b hairline-border pb-2 outline-none focus:border-accent transition-colors text-sm" placeholder="e.g. Bicara Rasa Bicara Sejarah" />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Client / Brand</label>
            <input type="text" required className="w-full bg-transparent border-b hairline-border pb-2 outline-none focus:border-accent transition-colors text-sm" placeholder="e.g. Digipro Internal" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Category</label>
            <select className="w-full bg-transparent border-b hairline-border pb-2 outline-none focus:border-accent transition-colors text-sm text-muted">
              <option>Video Production</option>
              <option>Photography</option>
              <option>App Development</option>
              <option>Web Solutions</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Project Duration</label>
            <input type="text" className="w-full bg-transparent border-b hairline-border pb-2 outline-none focus:border-accent transition-colors text-sm" placeholder="e.g. 2 Months" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Project Description</label>
          <textarea rows={4} required className="w-full bg-transparent border-b hairline-border pb-2 outline-none focus:border-accent transition-colors text-sm resize-none" placeholder="Describe the client goals, challenges, and solutions..."></textarea>
        </div>

        <div className="pt-6">
          <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-accent text-white px-12 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-muted transition-colors rounded-sm disabled:opacity-50">
            {isSubmitting ? 'Uploading...' : 'Publish Project'}
          </button>
        </div>
      </form>
    </div>
  );
}

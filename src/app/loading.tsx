import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-pulse text-muted text-xs uppercase tracking-[0.3em] font-serif">
        Loading...
      </div>
    </div>
  );
}

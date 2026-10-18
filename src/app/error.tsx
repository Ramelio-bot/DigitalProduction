"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center space-y-6 max-w-md">
        <h2 className="text-2xl font-serif font-bold uppercase tracking-widest">Something went wrong</h2>
        <p className="text-xs text-muted uppercase tracking-wider leading-relaxed">
          An unexpected error occurred in the application layer.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:bg-muted transition-colors rounded-sm"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

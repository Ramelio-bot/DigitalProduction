import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-serif italic mb-4">404</h1>
        <p className="text-muted text-xs uppercase tracking-[0.2em] mb-8">Page Not Found</p>
        <div>
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-accent border-b border-accent pb-1 hover:text-muted hover:border-muted transition-colors">
            Return to Public Sector
          </Link>
        </div>
      </div>
    </div>
  );
}

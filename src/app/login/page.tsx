import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Restricted Access | Digipro",
  robots: "noindex, nofollow",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md space-y-12">
        <div className="text-center space-y-4">
          <Link href="/" className="inline-block font-serif text-2xl font-bold tracking-[0.2em] uppercase hover:italic transition-all mb-8">
            DIGIPRO
          </Link>
          <h1 className="text-xl font-serif tracking-widest uppercase">System Access</h1>
          <p className="text-muted text-xs uppercase tracking-[0.2em]">Authorized Personnel Only</p>
        </div>

        <form className="space-y-8 mt-12">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted" htmlFor="username">
              Identification
            </label>
            <input
              id="username"
              type="text"
              className="w-full bg-transparent border-b hairline-border pb-2 outline-none focus:border-accent transition-colors text-sm font-sans"
              placeholder="Enter ID"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted" htmlFor="password">
              Passcode
            </label>
            <input
              id="password"
              type="password"
              className="w-full bg-transparent border-b hairline-border pb-2 outline-none focus:border-accent transition-colors text-sm font-sans"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="w-full py-4 bg-accent text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-muted transition-colors mt-8"
          >
            Authenticate
          </button>
        </form>

        <div className="text-center mt-16">
          <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors">
            Return to Public Sector
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      if (res.ok) {
        router.push("/dashboard");
      } else {
        setError("Invalid authorization code.");
      }
    } catch (err) {
      setError("System error. Connection failed.");
    } finally {
      setIsLoading(false);
    }
  };

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

        <form onSubmit={handleLogin} className="space-y-8 mt-12">
          {/* We only really need a passcode for this exclusive setup */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted" htmlFor="password">
              Authorization Code
            </label>
            <input
              id="password"
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full bg-transparent border-b hairline-border pb-2 outline-none focus:border-accent transition-colors text-sm font-sans"
              placeholder="••••••••"
              disabled={isLoading}
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center uppercase tracking-wider">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-accent text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-muted transition-colors mt-8 disabled:opacity-50"
          >
            {isLoading ? "Authenticating..." : "Authenticate"}
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

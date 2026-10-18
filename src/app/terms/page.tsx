import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Digipro",
  description: "Digipro International Terms of Service.",
  alternates: { canonical: "https://digital-production.vercel.app/terms" },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 lg:py-32 space-y-12">
      <header className="space-y-4">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block">Legal</span>
        <h1 className="text-5xl font-serif">Terms of Service</h1>
        <p className="text-xs text-muted tracking-widest uppercase">Last updated: 2026</p>
      </header>
      <div className="space-y-6 text-sm leading-relaxed text-muted border-t hairline-border pt-10">
        <p>
          Welcome to Digipro International. By accessing or using our website and services, you agree to comply with and be bound by these terms.
        </p>
        <h2 className="text-foreground font-bold text-base uppercase tracking-wider pt-4">Intellectual Property</h2>
        <p>
          All creative works, video productions, photography, and software designs displayed on this website are the intellectual property of Digipro International 
          or its respective clients and partners.
        </p>
        <h2 className="text-foreground font-bold text-base uppercase tracking-wider pt-4">Inquiries & Contracts</h2>
        <p>
          Formal project agreements, scope of work, and licensing terms are executed individually per client engagement.
        </p>
      </div>
      <div className="pt-8 border-t hairline-border">
        <Link href="/" className="text-xs font-bold uppercase tracking-widest text-accent hover:underline">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
}

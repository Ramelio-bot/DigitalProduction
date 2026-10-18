import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Digipro",
  description: "Digipro International Privacy Policy.",
  alternates: { canonical: "https://digital-production.vercel.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 lg:py-32 space-y-12">
      <header className="space-y-4">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted block">Legal</span>
        <h1 className="text-5xl font-serif">Privacy Policy</h1>
        <p className="text-xs text-muted tracking-widest uppercase">Last updated: 2026</p>
      </header>
      <div className="space-y-6 text-sm leading-relaxed text-muted border-t hairline-border pt-10">
        <p>
          At Digipro International, we respect your privacy and are committed to protecting your personal data. 
          This policy explains how we handle information collected through our website and client consultations.
        </p>
        <h2 className="text-foreground font-bold text-base uppercase tracking-wider pt-4">Data Collection</h2>
        <p>
          We only collect personal information that you voluntarily provide to us via our contact form (such as your name and email address) 
          solely for the purpose of communicating regarding production inquiries.
        </p>
        <h2 className="text-foreground font-bold text-base uppercase tracking-wider pt-4">Contact</h2>
        <p>
          If you have questions regarding this policy, please reach out to hello@digipro.tech.
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

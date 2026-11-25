import type { Metadata } from "next";
import { Suspense } from "react";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Digipro — Start Your Project",
  description:
    "Ready to craft your digital monument? Schedule a free 15-minute consultation with Digipro's creative-tech, AI specialist, and automation team. Remote & worldwide.",
  alternates: { canonical: "https://digital-production.vercel.app/contact" },
  openGraph: {
    title: "Contact | Digipro",
    description: "Start your project with Digipro — Video Production, Photography, App Development, Web Solutions, AI Specialist, and AI Automation.",
    type: "website",
    url: "https://digital-production.vercel.app/contact",
    siteName: "Digipro International",
    images: [
      {
        url: "https://digital-production.vercel.app/hero-bg.jpg",
        width: 2000,
        height: 1333,
        alt: "Digipro International — Start Your Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Digipro",
    description: "Start your project with Digipro — Video Production, Photography, App Development, Web Solutions, AI Specialist, and AI Automation.",
    images: ["https://digital-production.vercel.app/hero-bg.jpg"],
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-24 text-muted text-xs uppercase tracking-widest">Loading contact desk...</div>}>
      <ContactClient />
    </Suspense>
  );
}

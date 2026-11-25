import type { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Capabilities | Digipro — Video, Photo, Web, App & AI Production",
  description:
    "Full-spectrum creative-tech capabilities: cinematic video production, professional photography, app development, web solutions, AI specialist consulting, and AI automation.",
  alternates: { canonical: "https://digital-production.vercel.app/capabilities" },
  openGraph: {
    title: "Capabilities | Digipro",
    description: "Video Production • Photography • App Development • Web Solutions • AI Specialist • AI Automation",
    type: "website",
    siteName: "Digipro International",
    images: [
      {
        url: "https://digital-production.vercel.app/hero-bg.jpg",
        width: 2000,
        height: 1333,
        alt: "Digipro International — Capabilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capabilities | Digipro",
    description: "Video Production • Photography • App Development • Web Solutions • AI Specialist • AI Automation",
    images: ["https://digital-production.vercel.app/hero-bg.jpg"],
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}

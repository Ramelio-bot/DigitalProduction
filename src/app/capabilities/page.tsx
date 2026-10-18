import type { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Capabilities | Digipro — Video, Photo, Web & App Production",
  description:
    "Full-spectrum creative-tech capabilities: cinematic video production, professional photography, web development, and custom app solutions for international brands.",
  alternates: { canonical: "https://digital-production.vercel.app/capabilities" },
  openGraph: {
    title: "Capabilities | Digipro",
    description: "Cinematic Video • Photography • Web Development • App Solutions",
    type: "website",
    siteName: "Digipro International",
    images: [
      {
        url: "https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Digipro International — Capabilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capabilities | Digipro",
    description: "Cinematic Video • Photography • Web Development • App Solutions",
    images: ["https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}

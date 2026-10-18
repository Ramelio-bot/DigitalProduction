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
  },
  twitter: {
    card: "summary_large_image",
    title: "Capabilities | Digipro",
    description: "Cinematic Video • Photography • Web Development • App Solutions",
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}

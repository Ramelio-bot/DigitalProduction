import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Digipro — Start Your Project",
  description:
    "Ready to craft your digital monument? Schedule a free 15-minute consultation with Digipro's creative-tech team. Remote & worldwide.",
  alternates: { canonical: "https://digital-production.vercel.app/contact" },
  openGraph: {
    title: "Contact | Digipro",
    description: "Start your project with Digipro — Video, Photo, Web, App.",
    type: "website",
    url: "https://digital-production.vercel.app/contact",
    siteName: "Digipro International",
    images: [
      {
        url: "https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Digipro International — Start Your Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Digipro",
    description: "Start your project with Digipro — Video, Photo, Web, App.",
    images: ["https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

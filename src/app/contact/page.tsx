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
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Digipro",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

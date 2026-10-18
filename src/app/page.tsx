import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Digipro | Creative-Tech Agency",
  description: "High-end international-standard agency focusing on Video, Photo, Web, and App development.",
  alternates: { canonical: "https://digital-production.vercel.app" },
  openGraph: {
    title: "Digipro | Creative-Tech Agency",
    description: "High-end international-standard agency focusing on Video, Photo, Web, and App development.",
    type: "website",
    url: "https://digital-production.vercel.app",
    siteName: "Digipro International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digipro | Creative-Tech Agency",
    description: "High-end international-standard agency focusing on Video, Photo, Web, and App development.",
  },
};

export default function Home() {
  return <HomeClient />;
}

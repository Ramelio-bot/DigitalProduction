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
    images: [
      {
        url: "https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Digipro International — Creative-Tech Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digipro | Creative-Tech Agency",
    description: "High-end international-standard agency focusing on Video, Photo, Web, and App development.",
    images: ["https://images.unsplash.com/photo-1492691523567-6170c81cb3d3?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function Home() {
  return <HomeClient />;
}

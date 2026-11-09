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
        url: "https://digital-production.vercel.app/hero-bg.jpg",
        width: 2000,
        height: 1333,
        alt: "Digipro International — Creative-Tech Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digipro | Creative-Tech Agency",
    description: "High-end international-standard agency focusing on Video, Photo, Web, and App development.",
    images: ["https://digital-production.vercel.app/hero-bg.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}

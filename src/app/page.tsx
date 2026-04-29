"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
  const router = useRouter();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("intro-played");
    if (hasPlayed) {
      router.push("/dashboard");
    } else {
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 4000); // Slightly longer than intro duration to ensure smooth transition
      return () => clearTimeout(timer);
    }
  }, [router]);

  return (
    <main className="h-screen w-full bg-background flex items-center justify-center">
      <IntroLoader />
    </main>
  );
}

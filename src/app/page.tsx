"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // This only runs on the Home page mount
    // The IntroLoader itself handles the global played flag
    setShowIntro(true);
  }, []);

  return (
    <div className="flex flex-col">
      {showIntro && <IntroLoader />}
      <Hero />
    </div>
  );
}

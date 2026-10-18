"use client";

import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";

export default function HomeClient() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setShowIntro(true);
  }, []);

  return (
    <div className="flex flex-col">
      {showIntro && <IntroLoader />}
      <Hero />
    </div>
  );
}

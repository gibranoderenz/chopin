"use client";

import { HomeModule } from "@/components/modules";
import Lenis from "lenis";
import { useEffect } from "react";

export default function HomePage() {
  // for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return <HomeModule />;
}

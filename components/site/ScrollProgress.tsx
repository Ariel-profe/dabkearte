"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/motion";

/** Violet reading bar that fills from 0 to 100% of the page. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = bar.current;
    if (!el) return;
    const setX = gsap.quickSetter(el, "scaleX");
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => setX(self.progress),
      onRefresh: (self) => setX(self.progress),
    });
  });

  return <div ref={bar} className="progress" aria-hidden />;
}

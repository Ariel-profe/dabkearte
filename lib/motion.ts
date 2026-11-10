"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger };

/** True when the page runs the animated version (set before paint by the script in the layout). */
export const motionOn = () =>
  typeof document !== "undefined" && document.documentElement.classList.contains("motion");

const root = () => document.documentElement;
export const cssVar = (name: string) => getComputedStyle(root()).getPropertyValue(name).trim();
export const px = (name: string) => parseFloat(cssVar(name)) || 0;

export const headerH = () => {
  const header = document.querySelector<HTMLElement>(".site-header");
  return header ? header.offsetHeight : 0;
};

/** Position of an element inside an ancestor, walking offsetParents. */
export const relPos = (el: HTMLElement, ancestor: HTMLElement | null) => {
  let x = 0;
  let y = 0;
  for (let n: HTMLElement | null = el; n && n !== ancestor; n = n.offsetParent as HTMLElement | null) {
    x += n.offsetLeft;
    y += n.offsetTop;
  }
  return { x, y };
};

export const docPos = (el: HTMLElement) => relPos(el, null);

/** useGSAP that only runs on the animated version of the page. */
export function useSectionMotion(
  run: (scope: HTMLElement) => void | (() => void),
  scope: RefObject<HTMLElement>,
) {
  useGSAP(
    () => {
      const el = scope.current;
      if (!el || !motionOn()) return;
      return run(el);
    },
    { scope },
  );
}

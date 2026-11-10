"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, motionOn } from "@/lib/motion";

export const INTRO_KEY = "dabke-intro";

const lock = (on: boolean) => {
  document.documentElement.style.overflow = on ? "hidden" : "";
  window.dispatchEvent(new CustomEvent("dabke:lock", { detail: on }));
};

/** Logo, a 0–100 counter and a violet bar. Shown once per tab, never with reduced motion. */
export function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      const html = document.documentElement;
      if (!el || !motionOn() || html.classList.contains("intro-seen")) return;

      lock(true);
      const count = el.querySelector<HTMLElement>(".preloader-count");
      const bar = el.querySelector<HTMLElement>(".preloader-bar span");
      const mark = el.querySelector<HTMLElement>(".preloader-mark");
      const progress = { value: 0 };

      const ready = Promise.race([
        Promise.all([
          document.fonts?.ready,
          new Promise<void>((res) => (document.readyState === "complete" ? res() : window.addEventListener("load", () => res(), { once: true }))),
        ]),
        new Promise((res) => setTimeout(res, 4000)),
      ]);

      const finish = () => {
        sessionStorage.setItem(INTRO_KEY, "1");
        html.classList.add("intro-seen");
        lock(false);
        ScrollTrigger.refresh();
      };

      let isReady = false;
      const heroFrame = document.querySelector(".hero-frame");
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(mark, { yPercent: 30, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, 0)
        .to(progress, {
          value: 100,
          duration: 1.8,
          ease: "power2.inOut",
          onUpdate: () => {
            if (count) count.textContent = String(Math.round(progress.value));
            if (bar) gsap.set(bar, { scaleX: progress.value / 100 });
          },
        }, 0)
        .call(() => {
          if (!isReady) tl.pause();
        })
        .to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 1, ease: "power4.inOut" });
      if (heroFrame) {
        tl.fromTo(heroFrame, { scale: 0.94 }, { scale: 1, duration: 1.2, ease: "power3.out", clearProps: "transform" }, "<0.2");
      }
      tl.call(finish);

      tl.play();
      ready.then(() => {
        isReady = true;
        if (tl.paused()) tl.play();
      });

      const failSafe = window.setTimeout(() => {
        tl.progress(1);
      }, 9000);

      return () => {
        window.clearTimeout(failSafe);
        tl.kill();
        lock(false);
      };
    },
    { scope: root },
  );

  return (
    <div ref={root} className="preloader" aria-hidden>
      <span className="logo-mark preloader-mark" />
      <div className="preloader-foot">
        <p className="preloader-count">0</p>
        <p className="preloader-note">Folclore árabe de Mendoza. Preparando la fila.</p>
      </div>
      <div className="preloader-bar">
        <span />
      </div>
    </div>
  );
}

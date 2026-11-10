"use client";

import { useRef } from "react";
import { trayectoria } from "@/lib/content";
import { gsap, useSectionMotion } from "@/lib/motion";

export function Trayectoria() {
  const root = useRef<HTMLElement>(null);

  // Each rule draws left to right, then the row's text rises in.
  useSectionMotion((el) => {
    const list = el.querySelector<HTMLElement>(".rec-list");
    if (!list) return;
    const rows = Array.from(list.children) as HTMLElement[];
    const tl = gsap.timeline({ scrollTrigger: { trigger: list, start: "top 80%" } });
    tl.fromTo(rows, { "--draw": 0 }, { "--draw": 1, duration: 1.1, ease: "power3.inOut", stagger: 0.09 }, 0).fromTo(
      rows.flatMap((r) => Array.from(r.children)),
      { y: 22, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.02 },
      0.15,
    );
  }, root);

  return (
    <section ref={root} id="trayectoria" className="recognition" aria-labelledby="trayectoria-title">
      <div className="rec-grid wrap">
        <div className="rec-head">
          <h2 id="trayectoria-title" className="h2">
            {trayectoria.title}
          </h2>
          <p className="sec-lede">{trayectoria.lede}</p>
        </div>
        <ul className="rec-list">
          {trayectoria.rows.map((r) => (
            <li key={r.year + r.what} className="rec-row">
              <span className="rec-year">{r.year}</span>
              <span className="rec-award">{r.what}</span>
              <span className="rec-by">{r.by}</span>
              <span className="rec-work">{r.where}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

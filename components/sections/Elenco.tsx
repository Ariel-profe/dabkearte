"use client";

import { useRef } from "react";
import { elenco, team } from "@/lib/content";
import { gsap, ScrollTrigger, useSectionMotion } from "@/lib/motion";
import ProfileCard from "../ui/profile-card";

export function Elenco() {
  const root = useRef<HTMLElement>(null);

  // Each row rises once as it reaches the viewport, left to right like a dabke line.
  useSectionMotion((el) => {
    const list = el.querySelector<HTMLElement>(".people");
    if (!list) return;
    const cards = Array.from(list.children) as HTMLElement[];
    const columns = () => getComputedStyle(list).gridTemplateColumns.split(" ").length;

    gsap.set(cards, { autoAlpha: 0, y: 48 });
    ScrollTrigger.batch(cards, {
      start: "top 90%",
      once: true,
      interval: 0.08,
      batchMax: columns,
      onEnter: (row) =>
        gsap.to(row, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.07,
          overwrite: true,
          clearProps: "transform,opacity,visibility",
        }),
    });
  }, root);

  return (
    <section ref={root} id="elenco" className="team" aria-labelledby="elenco-title">
      <div className="sec-head wrap">
        <h2 id="elenco-title" className="h2">
          {elenco.title}
        </h2>
        <p className="sec-lede">{elenco.lede}</p>
      </div>
      <div className="people wrap">
        {team.map((p) => (
          <div key={p.name}>
            <ProfileCard dancer={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

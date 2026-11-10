"use client";

import Image from "next/image";
import { useRef } from "react";
import { elenco, team, whatsappLink } from "@/lib/content";
import { gsap, useSectionMotion } from "@/lib/motion";

export function Elenco() {
  const root = useRef<HTMLElement>(null);

  // The cards start stacked in a fan at the centre and deal out to their places as you scroll.
  useSectionMotion((el) => {
    const list = el.querySelector<HTMLElement>(".people");
    if (!list) return;
    const cards = Array.from(list.children) as HTMLElement[];
    if (cards.length < 2) return;
    const dx = (c: HTMLElement) => list.clientWidth / 2 - (c.offsetLeft + c.offsetWidth / 2);
    const dy = (c: HTMLElement) => Math.min(list.offsetHeight / 2, window.innerHeight * 0.6) - (c.offsetTop + c.offsetHeight / 2);
    gsap.fromTo(
      cards,
      {
        x: (_i: number, c: HTMLElement) => dx(c) * 0.92,
        y: (_i: number, c: HTMLElement) => Math.max(dy(c) * 0.92 + 40, -window.innerHeight),
        rotation: (_i: number, c: HTMLElement) => {
          const d = dx(c);
          return d === 0 ? 0 : (d > 0 ? -1 : 1) * Math.min(10, (Math.abs(d) / list.clientWidth) * 22);
        },
      },
      {
        x: 0,
        y: 0,
        rotation: 0,
        ease: "power2.out",
        stagger: 0.02,
        scrollTrigger: { trigger: list, start: "top 90%", end: "top 20%", scrub: 0.6, invalidateOnRefresh: true },
      },
    );
  }, root);

  return (
    <section ref={root} id="elenco" className="team" aria-labelledby="elenco-title">
      <div className="sec-head wrap">
        <h2 id="elenco-title" className="h2">
          {elenco.title}
        </h2>
        <div className="side-col">
          <p className="sec-lede">{elenco.lede}</p>
          <a
            className="link link--under"
            href={whatsappLink("Hola DabkeArte, quiero sumarme al grupo.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero sumarme a la fila
          </a>
        </div>
      </div>
      <ul className="people wrap">
        {team.map((p) => {
          const card = (
            <>
              <figure className="member-photo">
                <Image src={p.src} alt="" width={480} height={640} sizes="(max-width: 620px) 50vw, 200px" quality={70} />
              </figure>
              <p className="member-name">{p.name}</p>
              <p className="member-role">{p.social ? "Agregame!" : "Integrante del elenco"}</p>
            </>
          );
          return (
            <li key={p.name} className="member">
              {p.social ? (
                <a href={p.social} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} en Instagram`}>
                  {card}
                </a>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { elenco, team } from "@/lib/content";
import { gsap, useSectionMotion } from "@/lib/motion";
import ProfileCard from "../ui/profile-card";

export function Elenco() {
  const root = useRef<HTMLElement>(null);

  useSectionMotion((el) => {
    const list = el.querySelector<HTMLElement>(".people");
    if (!list) return;
    const cards = Array.from(list.children) as HTMLElement[];
    if (cards.length < 2) return;

    // Métricas dinámicas encapsuladas para evitar recalculaciones pesadas en el thread principal
    const calculatePositions = () => {
      const dx = (c: HTMLElement) => list.clientWidth / 2 - (c.offsetLeft + c.offsetWidth / 2);
      const dy = (c: HTMLElement) => Math.min(list.offsetHeight / 2, window.innerHeight * 0.6) - (c.offsetTop + c.offsetHeight / 2);

      return { dx, dy };
    };

    const { dx, dy } = calculatePositions();

    // Línea de tiempo principal con ScrollTrigger optimizado
    gsap.fromTo(
      cards,
      {
        x: (_i: number, c: HTMLElement) => dx(c) * 0.95,
        y: (_i: number, c: HTMLElement) => Math.max(dy(c) * 0.95 + 50, -window.innerHeight * 0.4),
        rotation: (_i: number, c: HTMLElement) => {
          const d = dx(c);
          // Modificamos el multiplicador para un abanico más armónico y menos agresivo
          return d === 0 ? 0 : (d > 0 ? -1 : 1) * Math.min(12, (Math.abs(d) / list.clientWidth) * 28);
        },
        opacity: 0,
        scale: 0.85,
      },
      {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        ease: "power3.out", // 🌟 Cambiado a power3 para mayor suavidad cinemática
        stagger: {
          amount: 0.3, // Distribuye uniformemente el tiempo total en lugar de un paso fijo
          from: "center", // Las cartas se esparcen desde el centro hacia afuera de forma orgánica
        },
        scrollTrigger: {
          trigger: list,
          start: "top 100%", // Entra un poco antes para evitar cortes visuales
          end: "bottom 97%", // 🌟 Ajustado el end para darle más espacio físico al desarrollo del scroll
          scrub: 1.2, // 🌟 Subido a 1.2 para que amortigüe perfectamente con el scroll de Lenis
          invalidateOnRefresh: true, // Recalcula si el usuario cambia el tamaño de la pantalla
        },
      },
    );
  }, root);

  return (
    <section ref={root} id="elenco" className="team py-20" aria-labelledby="elenco-title">
      <div className="sec-head wrap mb-16">
        <h2 id="elenco-title" className="h2 text-4xl md:text-6xl font-black uppercase tracking-tighter">
          {elenco.title}
        </h2>
        <div className="side-col mt-4">
          <p className="sec-lede text-zinc-400 font-mono text-sm max-w-xl">{elenco.lede}</p>
        </div>
      </div>
      
      {/* 🌟 CAMBIO SEMÁNTICO: Modificado a <div> para cumplir estándares HTML con los divs internos de las Cards */}
      <div className="people wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 isolation-auto">
        {team.map((p) => (
          <div key={p.name} className="will-change-transform">
            <ProfileCard dancer={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

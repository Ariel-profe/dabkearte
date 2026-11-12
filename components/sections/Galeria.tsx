"use client";

import Image from "next/image";
import { useRef } from "react";
import { galeria, socials } from "@/lib/content";
import { gsap, useSectionMotion } from "@/lib/motion";
import { BtnText } from "@/components/ui/split";

const shotClass = ["shot-a", "shot-b", "shot-c", "shot-d", "shot-e"];
const instagram = socials.find((s) => s.id === "instagram")!;

export function Galeria() {
  const root = useRef<HTMLElement>(null);

  // Each photo drifts at its own speed behind the sticky card.
  useSectionMotion((el) => {
    const collage = el.querySelector<HTMLElement>(".collage");
    if (!collage) return;
    const shots = Array.from(collage.querySelectorAll<HTMLElement>("[data-speed]"));
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: collage, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
    });
    shots.forEach((shot) => {
      const f = () => parseFloat(shot.dataset.speed || "0") * window.innerHeight * (window.innerWidth < 761 ? 0.35 : 1);
      tl.fromTo(shot, { y: f }, { y: () => -f(), duration: 1 }, 0);
    });
  }, root);

  return (
    <section ref={root} id="galeria" className="studio" aria-labelledby="galeria-title">
      <div className="studio-inner">
        <div className="studio-copy-wrap">
          <div className="studio-copy">
            <h2 id="galeria-title" className="h2">
              {galeria.title}
            </h2>
            <p>{galeria.text}</p>
            <a className="btn" href={instagram.href} target="_blank" rel="noopener noreferrer">
              <BtnText>Ver más en Instagram</BtnText>
            </a>
          </div>
        </div>
        <div className="collage">
          {galeria.shots.map((shot, i) => (
            <figure key={shot.src} className={`shot ${shotClass[i]}`} data-speed={shot.speed}>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(max-width: 760px) 50vw, 33vw"
                quality={75}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

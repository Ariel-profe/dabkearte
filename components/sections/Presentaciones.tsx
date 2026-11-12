"use client";

import Image from "next/image";
import { useRef } from "react";
import { presentaciones } from "@/lib/content";
import { gsap, px, useSectionMotion } from "@/lib/motion";

export function Presentaciones() {
  const root = useRef<HTMLElement>(null);

  useSectionMotion((el) => {
    const r = px("--r-md");
    el.querySelectorAll<HTMLElement>("[data-mask]").forEach((media) => {
      const img = media.querySelector("img");
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: media, start: "top bottom", end: "bottom 30%", scrub: true },
      });
      tl.fromTo(media, { clipPath: `inset(14% 9% 14% 9% round ${r}px)` }, { clipPath: `inset(0% 0% 0% 0% round ${r}px)`, duration: 0.55 }, 0);
      if (img) tl.fromTo(img, { scale: 1.28 }, { scale: 1, duration: 1 }, 0);
    });

    // Right-hand column drifts against the scroll on wide screens.
    const grid = el.querySelector<HTMLElement>(".work-grid");
    if (!grid) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 761px)", () => {
      const w = grid.clientWidth;
      Array.from(grid.children).forEach((item) => {
        const node = item as HTMLElement;
        if (node.offsetWidth > w * 0.7 || node.offsetLeft < w * 0.4) return;
        gsap.fromTo(node, { y: 90 }, { y: -90, ease: "none", scrollTrigger: { trigger: node, start: "top bottom", end: "bottom top", scrub: true } });
      });
    });
    return () => mm.revert();
  }, root);

  return (
    <section ref={root} id="presentaciones" className="work" aria-labelledby="presentaciones-title">
      <div className="sec-head wrap">
        <h2 id="presentaciones-title" className="title dot">
          En escena
        </h2>
        <p className="sec-lede">
          Algunos escenarios, fiestas y eventos en los que participamos.
        </p>
      </div>
      <div className="work-grid wrap">
        {presentaciones.map((p) => (
          <a key={p.name} className={`project${p.wide ? " project--wide" : ""}`} href="#contacto">
            <div className="project-media" data-mask>
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes={p.wide ? "(max-width: 760px) 84vw, 100vw" : "(max-width: 760px) 84vw, 50vw"}
                quality={78}
                className="object-cover object-top"
              />
            </div>
            <div className="project-meta">
              <h3 className="project-name">{p.name}</h3>
              <p className="project-kind">{p.kind}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

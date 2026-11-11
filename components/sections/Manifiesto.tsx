"use client";

import Image from "next/image";
import { useRef } from "react";
import { manifiesto } from "@/lib/content";
import { gsap, useSectionMotion } from "@/lib/motion";
import { Words } from "@/components/ui/split";

export function Manifiesto() {
  const root = useRef<HTMLElement>(null);

  useSectionMotion((el) => {
    const text = el.querySelector(".about-text");
    const words = el.querySelectorAll(".about-text .w");
    if (text && words.length) {
      gsap.fromTo(words, { opacity: 0.16 }, {
        opacity: 1,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: { trigger: text, start: "top 82%", end: "bottom 50%", scrub: true },
      });
    }
    const photo = el.querySelector<HTMLElement>(".about-photo");
    if (photo) {
      const shift = () => 0.08 * window.innerHeight * (window.innerWidth < 761 ? 0.35 : 1);
      gsap.fromTo(photo, { y: shift }, {
        y: () => -shift(),
        ease: "none",
        scrollTrigger: { trigger: photo.parentElement, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
      });
    }
  }, root);

  return (
    <section ref={root} id="nosotros" className="about" aria-label="Quiénes somos">
      <div className="about-grid wrap">
        <figure className="about-photo">
          <Image
            src={manifiesto.image.src}
            alt={manifiesto.image.alt}
            width={manifiesto.image.width}
            height={manifiesto.image.height}
            sizes="(max-width: 760px) 62vw, 33vw"
            quality={78}
          />
        </figure>
        <div>
          <h2 className="about-text">
            <Words text={manifiesto.text} />
          </h2>
          <div className="about-foot">
            <p className="about-sign">
              {manifiesto.sign} <span>{manifiesto.signMuted}</span>
            </p>
            <a className="btn" href="#contacto">
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

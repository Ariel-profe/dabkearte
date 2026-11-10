"use client";

import { useRef } from "react";
import { resenas, whatsappLink, yearsOnStage } from "@/lib/content";
import { gsap, ScrollTrigger, useSectionMotion } from "@/lib/motion";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-ZÁÉÍÓÚÑ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

function Review({ item, clone = false }: { item: (typeof resenas.items)[number]; clone?: boolean }) {
  return (
    <li className="review" data-clone={clone || undefined} aria-hidden={clone || undefined}>
      <p className="review-text">“{item.text}”</p>
      <div className="review-by">
        <span className="review-face" aria-hidden>
          {initials(item.name)}
        </span>
        <p className="review-name">
          {item.name} <span>{item.where}</span>
        </p>
      </div>
    </li>
  );
}

export function Testimonios() {
  const root = useRef<HTMLElement>(null);

  // Endless row of reviews; it only runs while on screen and stops under the pointer or keyboard focus.
  useSectionMotion((el) => {
    const box = el.querySelector<HTMLElement>("[data-marquee]");
    const track = box?.querySelector<HTMLElement>(".marquee-track");
    if (!box || !track) return;
    const tween = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      repeat: -1,
      duration: Math.max(20, track.scrollWidth / 2 / 38),
      paused: true,
    });
    let hover = false;
    let seen = false;
    const sync = () => (hover || !seen ? tween.pause() : tween.play());
    const on = () => {
      hover = true;
      sync();
    };
    const off = () => {
      hover = false;
      sync();
    };
    box.addEventListener("mouseenter", on);
    box.addEventListener("mouseleave", off);
    box.addEventListener("focusin", on);
    box.addEventListener("focusout", off);
    ScrollTrigger.create({
      trigger: box,
      start: "top bottom",
      end: "bottom top",
      onToggle: (s) => {
        seen = s.isActive;
        sync();
      },
    });
    return () => {
      box.removeEventListener("mouseenter", on);
      box.removeEventListener("mouseleave", off);
      box.removeEventListener("focusin", on);
      box.removeEventListener("focusout", off);
    };
  }, root);

  return (
    <section ref={root} id="resenas" className="reviews" aria-labelledby="resenas-title">
      <div className="rev-head wrap">
        <h2 id="resenas-title" className="title dot">
          Lo que dicen
        </h2>
        <div>
          <p className="score">
            <span className="score-num">{yearsOnStage()}</span>
            <span className="score-of">años</span>
          </p>
          <p className="score-text">{resenas.scoreText}</p>
          <a
            className="link link--under"
            href={whatsappLink("Hola DabkeArte, quiero dejarles una reseña de su show.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Dejanos tu reseña
          </a>
        </div>
      </div>
      <div className="marquee" data-marquee>
        <ul className="marquee-track">
          {resenas.items.map((item) => (
            <Review key={item.name} item={item} />
          ))}
          {resenas.items.map((item) => (
            <Review key={`c-${item.name}`} item={item} clone />
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import { hero, whatsappLink } from "@/lib/content";
import { gsap, ScrollTrigger, cssVar, docPos, px, useSectionMotion } from "@/lib/motion";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useSectionMotion((el) => {
    const frame = el.querySelector<HTMLElement>(".hero-frame");
    const photo = el.querySelector<HTMLElement>(".hero-photo");
    const bottom = el.querySelector<HTMLElement>(".hero-bottom");
    const city = el.querySelector<HTMLElement>(".hero-city");
    const wordmark = el.querySelector<HTMLElement>("[data-flight-from]");
    const logo = document.querySelector<HTMLElement>("[data-flight-to]");
    const dist = () => Math.round(Math.min(window.innerHeight * 0.72, 600));

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: el, start: "top top", end: () => "+=" + dist(), scrub: true, invalidateOnRefresh: true },
    });

    if (frame) {
      tl.fromTo(
        frame,
        { clipPath: () => `inset(0% 0% 0% 0% round ${px("--r-xl")}px)` },
        { clipPath: () => `inset(5% 3.5% 0% 3.5% round ${px("--r-xl") * 1.8}px)`, duration: 1 },
        0,
      );
    }
    if (photo) tl.fromTo(photo, { scale: 1.12 }, { scale: 1, duration: 1 }, 0);
    if (bottom) tl.to(bottom, { y: () => -window.innerHeight * 0.1, duration: 1 }, 0);
    if (city) tl.to(city, { opacity: 0, y: -30, duration: 0.4 }, 0);

    // The giant wordmark shrinks and travels into the header logo as the hero scrolls away.
    if (wordmark && logo) {
      const geo = () => {
        const r = logo.getBoundingClientRect();
        const p = docPos(wordmark);
        const start = docPos(el).y;
        const s = parseFloat(getComputedStyle(logo).fontSize) / parseFloat(getComputedStyle(wordmark).fontSize);
        return { x: r.left - p.x, y: r.top + start + dist() - p.y, s };
      };
      tl.to(wordmark, { x: () => geo().x, y: () => geo().y, scale: () => geo().s, duration: 1 }, 0)
        .to(wordmark, { color: () => cssVar("--ink"), duration: 0.3 }, 0.62)
        .to(logo, { opacity: 1, duration: 0.02 }, 0.98)
        .to(wordmark, { opacity: 0, duration: 0.02 }, 0.98);
    }

    ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onToggle: (s) => el.classList.toggle("is-off", !s.isActive),
    });
  }, root);

  return (
    <section ref={root} id="inicio" className="hero">
      <div className="hero-frame">
        <div className="hero-photo">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            sizes="100vw"
            quality={80}
            priority
          />
        </div>
        <div className="hero-shade" aria-hidden />
        <div className="grain" aria-hidden />
      </div>
      <div className="hero-inner">
        <div className="hero-top">
          <p className="wordmark" data-flight-from style={{ ["--len" as string]: 9 }} aria-hidden>
            DabkeArte
          </p>
          <p className="hero-city">{hero.city}</p>
        </div>
        <div className="hero-marks" aria-hidden>
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="hero-bottom">
          <h1 className="hero-lede">
            <span className="sr">DabkeArte Mendoza. </span>
            {hero.lede} <span>{hero.ledeMuted}</span>
          </h1>
          <ul className="hero-list">
            {hero.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="brand-card">
            <div className="brand-card-mark">
              <span className="logo-mark" />
            </div>
            <div className="brand-card-body">
              <p className="brand-card-role">
                {hero.card.role} <span>{hero.card.roleMuted}</span>
              </p>
              <p className="brand-card-name">{hero.card.name}</p>
              <a className="btn btn--sm" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Escribinos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

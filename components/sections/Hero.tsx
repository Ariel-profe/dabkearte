"use client";

import Image from "next/image";
import { useRef } from "react";
import { hero, whatsappLink } from "@/lib/content";
import { gsap, ScrollTrigger, docPos, px, relPos, useSectionMotion } from "@/lib/motion";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useSectionMotion((el) => {
    const frame = el.querySelector<HTMLElement>(".hero-frame");
    const photo = el.querySelector<HTMLElement>(".hero-photo");
    const inner = el.querySelector<HTMLElement>(".hero-inner");
    const bottom = el.querySelector<HTMLElement>(".hero-bottom");
    const city = el.querySelector<HTMLElement>(".hero-city");
    const wordmark = el.querySelector<HTMLElement>("[data-flight-from]");
    const logo = document.querySelector<HTMLElement>("[data-flight-to]");
    const dist = () => Math.round(Math.min(window.innerHeight * 0.72, 600));
    const sideInset = 0.035;

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: el, start: "top top", end: () => "+=" + dist(), scrub: true, invalidateOnRefresh: true },
    });

    if (frame) {
      tl.fromTo(
        frame,
        { clipPath: () => `inset(0% 0% 0% 0% round ${px("--r-xl")}px)` },
        { clipPath: () => `inset(5% ${sideInset * 100}% 0% ${sideInset * 100}% round ${px("--r-xl") * 1.8}px)`, duration: 1 },
        0,
      );
    }
    if (photo) tl.fromTo(photo, { scale: 1.12 }, { scale: 1, duration: 1 }, 0);
    if (bottom) tl.to(bottom, { y: () => -window.innerHeight * 0.1, duration: 1 }, 0);
    if (city) tl.to(city, { opacity: 0, y: -30, duration: 0.4 }, 0);

    // The text and button along the bottom step in with the photo's side edges, so they never end up outside it.
    if (frame && inner && bottom) {
      const edgeItems = [...Array.from(bottom.children), ...Array.from(el.querySelectorAll(".hero-marks i"))] as HTMLElement[];
      const inward = (item: HTMLElement) => {
        // Full-width rows (the stacked mobile layout) already clear the edges with their padding.
        if (item.offsetWidth > inner.clientWidth * 0.8) return 0;
        const centre = relPos(item, inner).x + item.offsetWidth / 2;
        return (centre < inner.offsetWidth / 2 ? 1 : -1) * frame.offsetWidth * sideInset;
      };
      edgeItems.forEach((item) => tl.to(item, { x: () => inward(item), duration: 1 }, 0));
    }

    // The giant white logo shrinks and travels into the header, turning into the colour logo on the way.
    const colour = wordmark?.querySelector<HTMLElement>(".wordmark-colour");
    if (wordmark && logo) {
      const geo = () => {
        const r = logo.getBoundingClientRect();
        const p = docPos(wordmark);
        const start = docPos(el).y;
        const s = logo.offsetWidth / wordmark.offsetWidth;
        return { x: r.left - p.x, y: r.top + start + dist() - p.y, s };
      };
      tl.to(wordmark, { x: () => geo().x, y: () => geo().y, scale: () => geo().s, duration: 1 }, 0);
      if (colour) tl.fromTo(colour, { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.62);
      // The header logo appears before the travelling one hides, so there is never a frame with neither on screen.
      tl.to(logo, { opacity: 1, duration: 0.01 }, 0.97)
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
          <div className="wordmark" data-flight-from aria-hidden>
            <Image src="/logos/logo-text-white.png" alt="" width={2084} height={1534} sizes="(max-width: 900px) 80vw, 640px" priority />
            <Image
              className="wordmark-colour"
              src="/logos/logo-text-color.png"
              alt=""
              width={2084}
              height={1534}
              sizes="(max-width: 900px) 80vw, 640px"
              loading="eager"
            />
          </div>
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
          <div className="hero-cta">
            <a className="btn btn--light" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              {hero.cta.label}
            </a>
            <p className="hero-cta-note">{hero.cta.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

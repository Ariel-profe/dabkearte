"use client";

import Image from "next/image";
import { useRef } from "react";
import { hero, whatsappLink } from "@/lib/content";
import { gsap, ScrollTrigger, docPos, px, relPos, useSectionMotion } from "@/lib/motion";
import { BtnText } from "@/components/ui/split";

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

    // One element makes the whole trip: the header logo starts scaled up exactly over the hero wordmark
    // (which stays as an invisible placeholder) and lands at transform 0, so there is no hand-off to see.
    const white = logo?.querySelector<HTMLElement>(".logo-white");
    if (wordmark && logo) {
      const geo = () => {
        // Offsets ignore the logo's own transform; the header is fixed, so its rect is the viewport origin.
        const header = logo.offsetParent as HTMLElement;
        const h = header.getBoundingClientRect();
        const p = docPos(wordmark);
        return {
          x: p.x - (h.left + logo.offsetLeft),
          y: p.y - docPos(el).y - (h.top + logo.offsetTop),
          s: wordmark.offsetWidth / logo.offsetWidth,
        };
      };
      gsap.set(wordmark, { visibility: "hidden" });
      gsap.set(logo, { opacity: 1, transformOrigin: "0 0" });
      // 2D transforms keep the docked logo on the normal paint path, as sharp as the static one.
      tl.fromTo(
        logo,
        { x: () => geo().x, y: () => geo().y, scale: () => geo().s, force3D: false },
        { x: 0, y: 0, scale: 1, force3D: false, duration: 1, ease: "power1.inOut" },
        0,
      );
      if (white) tl.fromTo(white, { opacity: 1 }, { opacity: 0, duration: 0.3 }, 0.62);
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
        
      </div>
      <div className="hero-inner">
        <div className="hero-top">
          <div className="wordmark" data-flight-from aria-hidden>
            <Image src="/logos/logo-text-white.png" alt="" width={2084} height={1534} sizes="(max-width: 900px) 80vw, 640px" priority />
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
              <BtnText>{hero.cta.label}</BtnText>
            </a>
            <p className="hero-cta-note">{hero.cta.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

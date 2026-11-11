"use client";

import { useRef } from "react";
import Image from "next/image";
import { contact, nav, socials, whatsappLink } from "@/lib/content";
import { gsap, useSectionMotion } from "@/lib/motion";

export function Footer() {
  const root = useRef<HTMLElement>(null);

  useSectionMotion((el) => {
    const wrap = el.querySelector(".foot-mark-wrap");
    const mark = el.querySelector(".foot-mark");
    if (!wrap || !mark) return;
    gsap.fromTo(mark, { yPercent: 55 }, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom bottom", scrub: true },
    });
  }, root);

  return (
    <footer ref={root} className="site-footer">
      <div className="foot-top wrap">
        <div className="foot-col">
          <p className="foot-h">Escribinos</p>
          <a className="foot-big link" href={`mailto:${contact.email}`}>
            {contact.email.split("@")[0]}@<wbr />
            {contact.email.split("@")[1]}
          </a>
          <a className="link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp {contact.whatsappDisplay}
          </a>
        </div>
        <div className="foot-col">
          <p className="foot-h">Dónde estamos</p>
          <p>Mendoza</p>
          <p>Argentina</p>
        </div>
        <nav className="foot-col" aria-label="Secciones">
          <p className="foot-h">Secciones</p>
          {nav.map((item) => (
            <a key={item.href} className="link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="foot-col">
          <p className="foot-h">Seguinos</p>
          {socials.map((s) => (
            <a key={s.id} className="link" href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="foot-bottom wrap">
        <p>© {new Date().getFullYear()} DabkeArte Mendoza</p>
        <span className="logo-mark foot-logo" aria-hidden />
        <p>
          Desarrollado por{" "}
          <a className="link link--under" href="https://amn.com.ar" target="_blank" rel="noopener noreferrer">
            AMN Consultora Informática
          </a>
        </p>
      </div>
    </footer>
  );
}

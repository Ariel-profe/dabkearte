"use client";

import { useRef } from "react";
import { preguntas, whatsappLink } from "@/lib/content";
import { gsap, useSectionMotion } from "@/lib/motion";
import { Accordion } from "@/components/ui/accordion";

export function Preguntas() {
  const root = useRef<HTMLElement>(null);

  // Questions wipe in from the left, one after another.
  useSectionMotion((el) => {
    const list = el.querySelector<HTMLElement>(".faq-list");
    if (!list) return;
    gsap.fromTo(list.children, { clipPath: "inset(0% 100% 0% 0%)" }, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.1,
      clearProps: "clipPath",
      scrollTrigger: { trigger: list, start: "top 82%" },
    });
  }, root);

  return (
    <section ref={root} id="preguntas" className="faq" aria-labelledby="preguntas-title">
      <div className="faq-grid wrap">
        <div className="faq-side">
          <h2 id="preguntas-title" className="title dot">
            Dudas
          </h2>
          <p className="sec-lede">{preguntas.lede}</p>
          <a className="btn" href={whatsappLink("Hola DabkeArte, tengo una consulta sobre un show.")} target="_blank" rel="noopener noreferrer">
            Preguntar por WhatsApp
          </a>
        </div>
        <Accordion
          items={preguntas.items}
          idPrefix="faq"
          className="faq-list"
          itemClassName="faq-item"
          buttonClassName="faq-btn"
          label={(item) => <span>{item.q}</span>}
          panel={(item) => <p className="faq-a">{item.a}</p>}
        />
      </div>
    </section>
  );
}

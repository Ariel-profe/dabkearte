"use client";

import Image from "next/image";
import { useRef } from "react";
import { shows } from "@/lib/content";
import { gsap, headerH, px, relPos, useSectionMotion } from "@/lib/motion";
import { Accordion } from "@/components/ui/accordion";
import { Stop, BtnText } from "@/components/ui/split";

function StageCopy() {
  return (
    <>
      <h2 className="title dot has-stop">
        Shows
        <Stop />
      </h2>
      <p className="svc-lede">{shows.lede}</p>
    </>
  );
}

export function Shows() {
  const root = useRef<HTMLElement>(null);

  // The dark panel floods out of the title's full stop until it covers the whole stage.
  useSectionMotion((el) => {
    const track = el.querySelector<HTMLElement>(".svc-track");
    const stage = el.querySelector<HTMLElement>("[data-flood]");
    const dark = el.querySelector<HTMLElement>(".svc-dark");
    const dot = el.querySelector<HTMLElement>(".svc-light .stop");
    const dotCopy = el.querySelector<HTMLElement>(".svc-dark .stop");
    if (!track || !stage || !dark) return;

    const geo = () => {
      const w = stage.offsetWidth;
      const h = stage.offsetHeight;
      if (!dot) return { x: w / 2, y: h / 2, r0: 0, r1: Math.hypot(w, h) / 2 + 2 };
      const p = relPos(dot, stage);
      const x = p.x + dot.offsetWidth / 2;
      const y = p.y + dot.offsetHeight / 2;
      const r1 = Math.max(Math.hypot(x, y), Math.hypot(w - x, y), Math.hypot(x, h - y), Math.hypot(w - x, h - y)) + 2;
      return { x, y, r0: dot.offsetWidth / 2, r1 };
    };
    const circle = (full: boolean) => () => {
      const g = geo();
      return `circle(${(full ? g.r1 : g.r0).toFixed(1)}px at ${g.x.toFixed(1)}px ${g.y.toFixed(1)}px)`;
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: track,
        start: () => "top " + headerH(),
        end: () => "bottom bottom-=" + px("--frame"),
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    tl.fromTo(dark, { clipPath: circle(false) }, { clipPath: circle(true), ease: "power2.in", duration: 1 }, 0);
    if (dotCopy) tl.fromTo(dotCopy, { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.75);
    tl.to({}, { duration: 0.25 });
  }, root);

  return (
    <section ref={root} id="shows" className="services" aria-label="Shows">
      <div className="svc-track">
        <div className="svc-stage" data-flood>
          <div className="svc-layer svc-light">
            <StageCopy />
          </div>
          <div className="svc-layer svc-dark" aria-hidden>
            <StageCopy />
          </div>
        </div>
      </div>
      <div className="svc-body on-dark">
        <Accordion
          items={shows.items}
          initialOpen={0}
          idPrefix="show"
          itemClassName="svc-item"
          buttonClassName="svc-btn"
          label={(item) => <span className="svc-name">{item.name}</span>}
          panel={(item) => (
            <div className="svc-grid">
              <Image
                className="svc-img"
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                sizes="(max-width: 760px) 240px, 200px"
                quality={75}
              />
              <p className="svc-text">{item.text}</p>
              <ul className="tags">
                {item.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}
        />
        <div className="svc-foot">
          <p>{shows.footNote}</p>
          <a className="btn btn--light" href="#contacto">
            <BtnText>Pedí tu show</BtnText>
          </a>
        </div>
      </div>
    </section>
  );
}

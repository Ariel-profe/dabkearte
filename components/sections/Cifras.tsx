"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { cifras } from "@/lib/content";
import { gsap, useSectionMotion } from "@/lib/motion";

const ringFill = Math.min(100, Math.max(0, (cifras.ring.value / cifras.ring.max) * 100));
const barMax = Math.max(1, ...cifras.bars.data.map((d) => d.value));

export function Cifras() {
  const root = useRef<HTMLElement>(null);

  useSectionMotion((el) => {
    const fg = el.querySelector(".donut-fg");
    if (fg) {
      gsap.fromTo(fg, { strokeDashoffset: 100 }, {
        strokeDashoffset: 100 - ringFill,
        duration: 1.8,
        ease: "power3.inOut",
        scrollTrigger: { trigger: fg, start: "top 85%" },
      });
    }
    const bars = el.querySelectorAll(".bar");
    if (bars.length) {
      gsap.fromTo(bars, { scaleY: 0 }, {
        scaleY: 1,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el.querySelector(".bars"), start: "top 88%" },
      });
    }
    const photo = el.querySelector<HTMLElement>(".tile-photo");
    if (photo) {
      const shift = () => 0.05 * window.innerHeight;
      gsap.fromTo(photo, { y: shift }, {
        y: () => -shift(),
        ease: "none",
        scrollTrigger: { trigger: photo.parentElement, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
      });
    }
  }, root);

  const { caseTile, figs, quote, ring, bars } = cifras;

  return (
    <section ref={root} id="cifras" className="results" aria-labelledby="cifras-title">
      <div className="sec-head wrap">
        <h2 id="cifras-title" className="h2">
          {cifras.title}
        </h2>
        <p className="sec-lede">{cifras.lede}</p>
      </div>
      <div className="bento wrap">
        <article className="tile tile-case">
          <Image
            className="tile-photo"
            src={caseTile.image.src}
            alt={caseTile.image.alt}
            width={caseTile.image.width}
            height={caseTile.image.height}
            sizes="(max-width: 980px) 100vw, 40vw"
            quality={75}
          />
          <div className="tile-case-in">
            <p className="tile-label">{caseTile.label}</p>
            <p className="tile-brand">{caseTile.brand}</p>
            <p className="tile-sub">{caseTile.sub}</p>
            <a className="btn btn--light btn--sm" href="#encuentro">
              Ver la parte teórica
            </a>
          </div>
        </article>
        <article className="tile tile-figs">
          {figs.map((f) => (
            <div key={f.label} className="fig">
              <p className="fig-num">{f.num}</p>
              <p className="fig-label">{f.label}</p>
            </div>
          ))}
          <div className="tile-quote">
            <p>{quote.text}</p>
            <p className="tile-quote-by">{quote.by}</p>
          </div>
        </article>
        <article className="tile tile-donut">
          <div className="donut-box">
            <svg className="donut" viewBox="0 0 120 120" aria-hidden>
              <circle className="donut-bg" cx="60" cy="60" r="52" pathLength="100" />
              <circle className="donut-fg" cx="60" cy="60" r="52" pathLength="100" style={{ strokeDashoffset: 100 - ringFill }} />
            </svg>
            <p className="donut-num">{ring.label}</p>
          </div>
          <p className="tile-title">{ring.title}</p>
          <p className="tile-text">{ring.text}</p>
        </article>
        <article className="tile tile-bars">
          <div>
            <p className="fig-num">{bars.num}</p>
            <p className="fig-label">{bars.label}</p>
          </div>
          <ul className="bars" aria-label="Integrantes por año">
            {bars.data.map((d) => (
              <li key={d.label}>
                <span className="bar-val">{d.value}</span>
                <span className="bar" style={{ "--h": (d.value / barMax).toFixed(3) } as CSSProperties} />
                <span className="bar-label">{d.label}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

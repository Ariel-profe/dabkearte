"use client";

import Image from "next/image";
import { useRef } from "react";
import { encuentro, socials } from "@/lib/content";
import { gsap, useSectionMotion } from "@/lib/motion";

const youtube = socials.find((s) => s.id === "youtube")!;

export function Encuentro() {
  const root = useRef<HTMLElement>(null);

  // Photos slide slightly inside their frames while the cards pass.
  useSectionMotion((el) => {
    el.querySelectorAll<HTMLElement>("[data-inner]").forEach((frame) => {
      const img = frame.querySelector("img");
      if (!img) return;
      gsap.fromTo(img, { yPercent: -7 }, {
        yPercent: 7,
        ease: "none",
        scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
    const doc = el.querySelector(".doc");
    if (doc) {
      gsap.fromTo(doc, { rotationX: -14, y: 80, opacity: 0, transformPerspective: 1400, transformOrigin: "50% 0%" }, {
        rotationX: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: doc, start: "top 85%" },
      });
    }
  }, root);

  const { doc } = encuentro;

  return (
    <section ref={root} id="encuentro" className="encuentro" aria-labelledby="encuentro-title">
      <div className="sec-head wrap">
        <h2 id="encuentro-title" className="h2">
          {encuentro.title}
        </h2>
        <p className="sec-lede">{encuentro.lede}</p>
      </div>

      <article className="doc">
        <figure className="doc-media" data-inner>
          <Image
            src={doc.image.src}
            alt={doc.image.alt}
            width={doc.image.width}
            height={doc.image.height}
            sizes="(max-width: 860px) 100vw, 55vw"
            quality={78}
          />
        </figure>
        <div className="doc-body">
          <p className="doc-kind">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
              <path d="M14 3v5h5M9 13h6M9 17h4" />
            </svg>
            {doc.kind}
          </p>
          <h3 className="doc-title">{doc.title}</h3>
          <p className="doc-text">{doc.text}</p>
          <ul className="doc-list">
            {doc.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="doc-actions">
            <a className="btn" href={doc.href} target="_blank" rel="noopener noreferrer">
              Ver en el navegador
            </a>
            <a className="btn btn--line" href={doc.href} download={doc.downloadName}>
              Descargar PDF
            </a>
          </div>
        </div>
      </article>

      <div className="videos wrap">
        {encuentro.videos.map((v) => (
          <a key={v.title} className="post" href={youtube.href} target="_blank" rel="noopener noreferrer">
            <figure className="post-photo" data-inner>
              <Image src={v.src} alt={v.alt} width={v.width} height={v.height} sizes="(max-width: 860px) 100vw, 33vw" quality={72} />
              <span className="post-play" aria-hidden>
                <svg viewBox="0 0 12 14" fill="currentColor">
                  <path d="M0 0v14l12-7z" />
                </svg>
              </span>
            </figure>
            <p className="post-date">Video en YouTube</p>
            <h3 className="post-title">{v.title}</h3>
            <p className="post-text">{v.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

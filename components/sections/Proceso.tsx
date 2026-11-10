"use client";

import Image from "next/image";
import { useRef } from "react";
import { proceso } from "@/lib/content";
import { gsap, headerH, px, relPos, useSectionMotion } from "@/lib/motion";
import { Stop } from "@/components/ui/split";

const [firstHalf, secondHalf] = (() => {
  const words = proceso.title.split(" ");
  const cut = Math.ceil(words.length / 2);
  return [words.slice(0, cut).join(" "), words.slice(cut).join(" ")];
})();

function SplitTitle() {
  return (
    <h2 className="title dot has-stop split-title">
      <span className="half half-a">{firstHalf}</span> <span className="half half-b">
        {secondHalf}
        <Stop />
      </span>
    </h2>
  );
}

export function Proceso() {
  const root = useRef<HTMLElement>(null);

  useSectionMotion((el) => {
    // The title splits to both edges while the photo opens from a sliver to the full stage.
    const track = el.querySelector<HTMLElement>(".split-track");
    const split = el.querySelector<HTMLElement>("[data-split]");
    const title = split?.querySelector<HTMLElement>(":scope > .split-title");
    const fig = el.querySelector<HTMLElement>(".split-photo");
    const over = el.querySelector<HTMLElement>(".split-over");
    if (track && split && title && fig && over) {
      const a = title.querySelector<HTMLElement>(".half-a")!;
      const b = title.querySelector<HTMLElement>(".half-b")!;
      const img = fig.querySelector("img");
      const cap = fig.querySelector("figcaption");
      const pad = () => parseFloat(getComputedStyle(title).paddingLeft) || 0;
      const shiftA = () => -(relPos(a, split).x - pad());
      const shiftB = () => split.clientWidth - pad() - (relPos(b, split).x + b.offsetWidth);
      const r = px("--r-xl");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: () => "top " + headerH(),
          end: () => "bottom bottom-=" + px("--frame"),
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      tl.fromTo(fig, { clipPath: "inset(34% 49% 34% 49% round 14px)" }, { clipPath: `inset(0% 0% 0% 0% round ${r}px)`, ease: "power2.inOut", duration: 1 }, 0)
        .fromTo([a, over.querySelector(".half-a")], { x: 0 }, { x: shiftA, ease: "power2.inOut", duration: 0.9 }, 0)
        .fromTo([b, over.querySelector(".half-b")], { x: 0 }, { x: shiftB, ease: "power2.inOut", duration: 0.9 }, 0);
      if (img) tl.fromTo(img, { scale: 1.35 }, { scale: 1, ease: "power2.out", duration: 1 }, 0);
      if (cap) tl.fromTo(cap, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.2 }, 0.85);
      tl.to({}, { duration: 0.15 });
    }

    // The timeline fills and each step lights up as the line reaches it.
    const stepsTrack = el.querySelector<HTMLElement>(".steps-track");
    const line = stepsTrack?.querySelector<HTMLElement>(".steps-line");
    const steps = Array.from(el.querySelectorAll<HTMLElement>(".step"));
    if (!stepsTrack || !line) return;
    const mm = gsap.matchMedia();
    mm.add({ wide: "(min-width: 761px)", narrow: "(max-width: 760px)" }, (ctx) => {
      const vertical = Boolean(ctx.conditions?.narrow);
      const prop = vertical ? "scaleY" : "scaleX";
      let marks: number[] = [];
      const measure = () => {
        marks = steps.map((s) =>
          vertical ? s.offsetTop / Math.max(1, stepsTrack.offsetHeight) : s.offsetLeft / Math.max(1, stepsTrack.offsetWidth),
        );
      };
      const paint = (p: number) => steps.forEach((s, i) => s.classList.toggle("is-on", p >= marks[i] + 0.004));
      gsap.fromTo(line, { [prop]: 0 }, {
        [prop]: 1,
        ease: "none",
        scrollTrigger: {
          trigger: stepsTrack,
          start: "top 78%",
          end: vertical ? "bottom 55%" : "top 30%",
          scrub: true,
          onRefresh: (self) => {
            measure();
            paint(self.progress);
          },
          onUpdate: (self) => paint(self.progress),
        },
      });
      return () => steps.forEach((s) => s.classList.remove("is-on"));
    });
    return () => mm.revert();
  }, root);

  return (
    <section ref={root} id="como-contratar" className="process" aria-label="Cómo contratarnos">
      <div className="split-track">
        <div className="split" data-split>
          <SplitTitle />
          <figure className="split-photo">
            <Image
              src={proceso.image.src}
              alt={proceso.image.alt}
              width={proceso.image.width}
              height={proceso.image.height}
              sizes="100vw"
              quality={80}
            />
            <div className="split-over" aria-hidden>
              <SplitTitle />
            </div>
            <figcaption className="split-cap">{proceso.caption}</figcaption>
          </figure>
        </div>
      </div>
      <div className="steps wrap">
        <div className="sec-head">
          <h3 className="h2">{proceso.stepsTitle}</h3>
          <p className="sec-lede">{proceso.stepsLede}</p>
        </div>
        <div className="steps-track">
          <span className="steps-line" aria-hidden />
          <ol className="step-list">
            {proceso.steps.map((s) => (
              <li key={s.title} className="step">
                <span className="step-node" aria-hidden />
                <p className="step-when">{s.when}</p>
                <h4 className="step-title">{s.title}</h4>
                <p className="step-text">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

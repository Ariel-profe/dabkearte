import { useRef, type FocusEvent } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/motion";

interface DancerProps {
  id: string | number;
  name: string;
  lastName: string;
  birthdate: string;
  instagramUrl: string;
  primaryImage: string;
  hoverImage: string;
}

const HOVER_QUERY = "(min-width: 768px) and (hover: hover)";

export default function ProfileCard({ dancer }: { dancer: DancerProps }) {
  const cardRef = useRef<HTMLElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const handle = dancer.instagramUrl.split("/").filter(Boolean).pop();

  // One timeline per card, played on enter and reversed on leave, so quick in-and-out never leaves a half state.
  // Only built where hover exists; touch screens show the info over the first photo instead.
  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;
      const back = card.querySelector("[data-back]");
      const backImg = card.querySelector("[data-back] img");
      const info = card.querySelector("[data-info]");
      const items = card.querySelectorAll("[data-item]");

      const mm = gsap.matchMedia();
      mm.add({ hover: HOVER_QUERY, reduce: "(prefers-reduced-motion: reduce)" }, (ctx) => {
        if (!ctx.conditions?.hover) return;
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
        if (ctx.conditions.reduce) {
          tl.fromTo(back, { clipPath: "inset(0% 0% 0% 0%)", opacity: 0 }, { opacity: 1, duration: 0.2 }, 0)
            .fromTo(info, { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0);
        } else {
          tl.fromTo(back, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power3.inOut" }, 0)
            .fromTo(backImg, { scale: 1.12 }, { scale: 1, duration: 0.8 }, 0)
            .fromTo(info, { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.2)
            .fromTo(items, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.05 }, 0.22);
        }
        tlRef.current = tl;
        return () => {
          tlRef.current = null;
        };
      });
      return () => mm.revert();
    },
    { scope: cardRef },
  );

  const open = () => tlRef.current?.timeScale(1).play();
  const close = () => tlRef.current?.timeScale(1.6).reverse();
  const onBlur = (e: FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) close();
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={onBlur}
      className="dancer"
    >
      {/* Photo 1: the colour portrait everyone sees first. */}
      <div className="dancer-photo">
        <Image src={dancer.primaryImage} alt={`${dancer.name} ${dancer.lastName}`} fill sizes="(max-width: 620px) 50vw, 260px" />
        <div className="dancer-shade" />
      </div>

      {/* Photo 2: grey, darkened background for the info; opens from the bottom edge on hover. */}
      <div data-back className="dancer-back" aria-hidden>
        <Image src={dancer.hoverImage} alt="" fill sizes="260px" />
      </div>

      <div data-info className="dancer-info">
        <p data-item className="dancer-bday">
          <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7M5 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0M12 12V8M12 5.5c.8 0 1.3-.6 1.3-1.3 0-.9-1.3-2.2-1.3-2.2s-1.3 1.3-1.3 2.2c0 .7.5 1.3 1.3 1.3z" />
          </svg>
          <span className="sr">Cumpleaños:</span>
          {dancer.birthdate.replace("-", "/")}
        </p>

        <h3 data-item className="dancer-name">
          {dancer.name}
          <span>{dancer.lastName}</span>
        </h3>

        <a
          data-item
          className="dancer-ig"
          href={dancer.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram de ${dancer.name} ${dancer.lastName}`}
        >
          <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
          </svg>
          <span>@{handle}</span>
        </a>
      </div>
    </article>
  );
}

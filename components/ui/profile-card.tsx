import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface DancerProps {
  id: string | number;
  name: string;
  lastName: string;
  birthdate: string;
  instagramUrl: string;
  primaryImage: string;
  hoverImage: string;
}

export default function ProfileCard({ dancer }: { dancer: DancerProps }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const primaryImgRef = useRef<HTMLDivElement>(null);
  const hoverImgRef = useRef<HTMLDivElement>(null);
  const blurOverlayRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const textItemsRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLAnchorElement>(null);
  const activeTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Touch screens fire mouseenter on tap and never mouseleave, which would leave image 2 stuck on.
  const isDesktop = () => window.matchMedia("(min-width: 768px) and (hover: hover)").matches;

  const handleMouseEnter = () => {
    if (!cardRef.current || !isDesktop()) return;

    if (activeTimelineRef.current) activeTimelineRef.current.kill();

    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 0.55 } });
    activeTimelineRef.current = tl;

    tl.to(primaryImgRef.current, { scale: 0.95, opacity: 0 }, 0)
      .to(blurOverlayRef.current, { opacity: 1 }, 0)
      .to(hoverImgRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        filter: "grayscale(100%) brightness(0.35)", // 🌟 IMAGEN 2: Escala de grises + oscurecido controlado por GSAP
      }, 0)
      .to(infoRef.current, { opacity: 1, y: 0 }, 0.08)
      .to(textItemsRef.current?.children || [], { opacity: 1, y: 0, stagger: 0.04 }, 0.1);
  };

  const handleMouseLeave = () => {
    if (!isDesktop()) return;

    if (activeTimelineRef.current) activeTimelineRef.current.kill();
    if (instagramRef.current) gsap.to(instagramRef.current, { x: 0, y: 0, duration: 0.3 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.4 } });
    activeTimelineRef.current = tl;

    tl.to(hoverImgRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      scale: 1.15,
      filter: "grayscale(0%) brightness(1)", // 🌟 RESET: Retorna la Imagen 2 a su color original al salir
    }, 0)
      .to(blurOverlayRef.current, { opacity: 0 }, 0)
      .to(primaryImgRef.current, { scale: 1, opacity: 1 }, 0)
      .to(textItemsRef.current?.children || [], { opacity: 0, y: 15, stagger: 0.01 }, 0)
      .to(infoRef.current, { opacity: 0, y: 10 }, 0.1);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isDesktop()) return;
    const el = instagramRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseReset = () => {
    if (!isDesktop() || !instagramRef.current) return;
    gsap.to(instagramRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-zinc-950 cursor-pointer will-change-transform border border-zinc-800/30"
    >
      {/* IMAGEN 1: Primera Medida */}
      <div ref={primaryImgRef} className="absolute inset-0 h-full w-full will-change-transform">
        <Image
          src={dancer.primaryImage}
          alt={`${dancer.name} ${dancer.lastName}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent can-hover:hidden" />
      </div>

      {/* Capa estática de Desenfoque / Multiplicador de contraste por hardware */}
      <div 
        ref={blurOverlayRef}
        className="absolute inset-0 z-10 opacity-0 pointer-events-none hidden can-hover:block backdrop-blur-[6px] bg-black/25 will-change-transform"
      />

      {/* IMAGEN 2: Arranca recortada a una línea en el borde inferior; el hover la abre. */}
      <div
        ref={hoverImgRef}
        className="absolute inset-0 h-full w-full overflow-hidden z-10 will-change-transform"
        style={{
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          transform: "scale(1.15)",
        }}
        aria-hidden
      >
        <Image
          src={dancer.hoverImage}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover select-none"
        />
      </div>

      {/* CONTENIDO INTERACTIVO */}
      <div
        ref={infoRef}
        className="absolute inset-0 z-20 flex flex-col justify-end p-2 opacity-100 can-hover:opacity-0 translate-y-0 can-hover:translate-y-5 pointer-events-auto can-hover:pointer-events-none group-hover:pointer-events-auto select-none"
      >
        <div ref={textItemsRef} className="space-y-2 md:space-y-3">
          {/* Cumpleaños */}
          <div className="opacity-100 can-hover:opacity-0 translate-y-0 can-hover:translate-y-4 flex items-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white bg-purple-950/40 border border-purple-500/30 px-2 py-0.5 rounded-md">
              🎂 {dancer.birthdate}
            </span>
          </div>
          
          {/* Nombre Completo */}
          <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter leading-none opacity-100 can-hover:opacity-0 translate-y-0 can-hover:translate-y-4">
            {dancer.name} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
              {dancer.lastName}
            </span>
          </h3>

          {/* Enlace de Instagram con Estilo de Marca Oficial */}
          <div className="pt-1 md:pt-2 opacity-100 can-hover:opacity-0 translate-y-0 can-hover:translate-y-4">
            <a
              ref={instagramRef}
              href={dancer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseReset}
              className="inline-flex items-center gap-2.5 text-xs font-bold text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-105 shadow-lg shadow-black/30 px-2 py-2.5 rounded-md pointer-events-auto transition-transform duration-300 will-change-transform"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@ {dancer.instagramUrl.split("/").filter(Boolean).pop()}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

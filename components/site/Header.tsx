"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { contact, nav, socials, whatsappLink } from "@/lib/content";
import { lockScroll } from "@/lib/motion";
import { BtnText } from "@/components/ui/split";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 901px)");
    const onWide = () => wide.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    lockScroll(true);
    return () => {
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
      lockScroll(false);
    };
  }, [open]);

  // Unlock right away: the smooth-scroll click handler runs before the effect cleanup and ignores a stopped scroller.
  const close = () => {
    lockScroll(false);
    setOpen(false);
  };

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      {/* The hero scales this same element up over its wordmark, so the image is sized for the big state. */}
      <a className="logo" href="#inicio" data-flight-to aria-label="DabkeArte, volver al inicio">
        <Image src="/logos/logo-text-color.png" alt="" width={2084} height={1534} sizes="(max-width: 900px) 80vw, 640px" priority />
        <Image
          className="logo-white"
          src="/logos/logo-text-white.png"
          alt=""
          width={2084}
          height={1534}
          sizes="(max-width: 900px) 80vw, 640px"
          priority
        />
      </a>
      <nav className="nav" id="site-nav" aria-label="Principal">
        <div className="nav-links">
          {nav.map((item, i) => (
            <a key={item.href} className="link" href={item.href} onClick={close} style={{ "--i": i } as CSSProperties}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-foot">
          <a className="btn btn--light" href="#contacto" onClick={close}>
            <BtnText>Contactanos</BtnText>
          </a>
          <div className="nav-contact">
            <a className="link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp {contact.whatsappDisplay}
            </a>
            <a className="link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
          <div className="nav-social">
            {socials.map((s) => (
              <a key={s.id} className="link" href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="header-end">
        <a className="btn btn--sm" href="#contacto">
          <BtnText>Contactanos</BtnText>
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-lines" aria-hidden />
          <span className="sr">Menú</span>
        </button>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { BtnText } from "@/components/ui/split";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

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
        {nav.map((item) => (
          <a key={item.href} className="link" href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
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

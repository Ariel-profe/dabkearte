"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

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
      <a className="logo" href="#inicio" data-flight-to aria-label="DabkeArte, volver al inicio">
        DabkeArte
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
          Contratanos
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

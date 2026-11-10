"use client";

import Image from "next/image";
import { useRef, useState, type FormEvent } from "react";
import { contacto, whatsappLink } from "@/lib/content";
import { gsap, ScrollTrigger, useSectionMotion } from "@/lib/motion";
import { Chars, Stop } from "@/components/ui/split";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}/${m}/${y}` : iso;
};

function BookingForm() {
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const lines = [
      "Hola DabkeArte, quiero consultar por un show.",
      `Nombre: ${get("nombre")}`,
      `Fecha del evento: ${formatDate(get("fecha"))}`,
      `Tipo de evento: ${get("tipo")}`,
      `Ciudad: ${get("ciudad")}`,
    ];
    if (get("mensaje")) lines.push(`Mensaje: ${get("mensaje")}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setStatus("Abrimos WhatsApp con tu mensaje. Solo falta que lo envíes.");
  };

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      <p className="form-title">¿Qué estás celebrando?</p>
      <label className="field">
        <span>Tu nombre</span>
        <input type="text" name="nombre" autoComplete="name" placeholder="Laura Haddad" required />
      </label>
      <div className="form-row">
        <label className="field">
          <span>Fecha del evento</span>
          <input type="date" name="fecha" required />
        </label>
        <label className="field">
          <span>Ciudad</span>
          <input type="text" name="ciudad" autoComplete="address-level2" placeholder="Mendoza" required />
        </label>
      </div>
      <label className="field">
        <span>Tipo de evento</span>
        <select name="tipo" defaultValue="" required>
          <option value="" disabled>
            Elegí una opción
          </option>
          {contacto.eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Mensaje (opcional)</span>
        <textarea name="mensaje" rows={3} placeholder="Cantidad de invitados, horario, salón" />
      </label>
      <button className="btn" type="submit">
        Enviar por WhatsApp
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
      <p className="form-small">Usamos tus datos solo para responderte.</p>
    </form>
  );
}

export function Contacto() {
  const root = useRef<HTMLElement>(null);

  useSectionMotion((el) => {
    const title = el.querySelector<HTMLElement>("[data-rise]");
    if (title) {
      gsap.fromTo(title.querySelectorAll(".ch, .stop"), { yPercent: 130 }, {
        yPercent: 0,
        ease: "power3.out",
        duration: 1.1,
        stagger: 0.045,
        scrollTrigger: { trigger: title, start: "top 92%", toggleActions: "play none none reverse" },
      });
    }
    ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onToggle: (s) => el.classList.toggle("is-off", !s.isActive),
    });
  }, root);

  return (
    <section ref={root} id="contacto" className="contact" aria-labelledby="contacto-title">
      <div className="contact-panel on-dark">
        <div className="contact-bg">
          <Image
            src={contacto.image.src}
            alt=""
            width={contacto.image.width}
            height={contacto.image.height}
            sizes="100vw"
            quality={70}
          />
          <div className="hero-shade" aria-hidden />
          <div className="grain" aria-hidden />
        </div>
        <div className="contact-in">
          <div className="contact-copy">
            <h2 id="contacto-title" className="title dot has-stop is-split" data-rise aria-label={contacto.title}>
              <Chars text={contacto.title} />
              <span className="wd" aria-hidden>
                <Stop />
              </span>
            </h2>
            <p className="contact-lede">{contacto.lede}</p>
            <ul className="contact-notes">
              {contacto.notes.map((n) => (
                <li key={n.title}>
                  <strong>{n.title}</strong>
                  {n.text}
                </li>
              ))}
            </ul>
            <div className="brand-card">
              <div className="brand-card-mark">
                <span className="logo-mark" />
              </div>
              <div className="brand-card-body">
                <p className="brand-card-role">
                  DabkeArte <span>Mendoza, Argentina</span>
                </p>
                <p className="brand-card-name">Hablemos por WhatsApp</p>
                <a className="btn btn--sm" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Abrir chat
                </a>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

import { Hero } from "@/components/sections/Hero";
import { Presentaciones } from "@/components/sections/Presentaciones";
import { Manifiesto } from "@/components/sections/Manifiesto";
import { Shows } from "@/components/sections/Shows";
import { Proceso } from "@/components/sections/Proceso";
import { Testimonios } from "@/components/sections/Testimonios";
import { Cifras } from "@/components/sections/Cifras";
import { Galeria } from "@/components/sections/Galeria";
import { Elenco } from "@/components/sections/Elenco";
import { Trayectoria } from "@/components/sections/Trayectoria";
import { Preguntas } from "@/components/sections/Preguntas";
import { Encuentro } from "@/components/sections/Encuentro";
import { Contacto } from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Presentaciones />
      <Manifiesto />
      <Shows />
      <Proceso />
      <Testimonios />
      <Cifras />
      <Galeria />
      <Elenco />
      <Preguntas />
      <Encuentro />
      <Contacto />
    </>
  );
}

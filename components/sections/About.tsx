"use client";

import { WobbleCard } from "../ui/wooble-card";
import {SparklesText} from "../ui/sparkles-text";

export function About() {
  return (
  <section className="py-10 lg:py-20 px-3 lg:px-6" id="nosotros">
    <SparklesText text="Estos detalles como parte de nuestra esencia" className="text-end" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-10 lg:my-20">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-primary min-h-[500px] lg:min-h-[300px]"
        className=""
        >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Nuestro grupo se creo el 27 de agosto del año 2014
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            ¡En ese momento eramos solo 8 personas!
          </p>
        </div>
        <img
          src="/images/hero/5.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          El nombre lo elegimos para que incluya una palabra en espanol
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          (No quisimos olvidarnos de nuestro idioma natal)
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-secondary min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Los valores como la union, amistad y respeto son nuestra bandera.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
           Eso nos impulsa para poder ir todos en una misma direccion y vivir hermosos momentos.
          </p>
        </div>
        <img
          src="/logo.svg"
          width={150}
          height={150}
          alt="linear demo image"
          className="absolute right-4 bottom-4 object-contain rounded-2xl"
          />
      </WobbleCard>
    </div>
  </section>
  );
}

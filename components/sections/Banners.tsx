"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SparklesText } from "@/components/ui/sparkles-text";

const images = [
  "/images/lottery/lottery-1.jpg",
  "/images/lottery/lottery-2.jpg",
  "/images/sponsors/sponsor.png",
  "/images/sponsors/miembro.png",

];

export function Banners() {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );


  return (
    <div className="relative container">
      <SparklesText text={"Copate con estos anuncios"} subtext='¡Sorteos y más!' className='text-center lg:text-end' />

      <Carousel
        plugins={[plugin.current]}
        className="w-full px-3"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{loop: true}}
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <img src={img} alt="imagen-banner" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

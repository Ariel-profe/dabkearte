
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { VideoCarousel } from "../ui/video-carousel";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("mx-auto max-w-[1080px] px-3", className)}>
      {children}
    </div>
  );
};

type FadeInProps = {
  children: React.ReactNode;
};

export const FadeIn = ({ children }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -300px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export const Usps = () => {
  return (
    <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-2xl font-bold text-white md:text-4xl text-center">
      <FadeIn>
        <p>El Dabke es lo que nos apasiona y une en cada momento.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Nuestros valores son la guía que nos lleva al camino del amor por lo que hacemos.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Fuerza en nuestros pasos y unión para ir juntos en la misma dirección.</p>
      </FadeIn>
      <FadeIn>
        <p>Queremos conocerte y que nos conozcas.</p>
      </FadeIn>
    </Container>
  );
};

export const Hero = () => {
  return (
    <div>
        <div className="bg-[#191036] relative z-10">
          <Hero2 />
          <Usps />
        </div>
        <VideoCarousel />
      </div>
  )
}

const Hero2 = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-[#191036] text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full "
      >
        <div className="absolute inset-0 h-full bg-black z-10 opacity-40"></div>
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/images/hero/hero.webp"
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end w-full"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-5 text-4xl font-bold lg:text-7xl w-full text-center">Somos DabkeArte Mendoza</h1>
        <p className="text-2xl lg:text-3xl xl:text-5xl w-full text-center">Grupo de folclore árabe</p>
        </motion.div>
      </Container>
    </div>
  );
};

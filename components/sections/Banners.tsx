"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { SparklesText } from "@/components/ui/sparkles-text";


export function Banners() {
  const images = [
    "/images/lottery/lottery-1.jpg",
    "/images/lottery/lottery-2.jpg",
    "/images/sponsors/sponsor.png",
    "/images/sponsors/miembro.png",
    
  ];
  return (
    <div className="relative container px-3">
        <SparklesText text={"Copate con estos anuncios"} subtext='Sorteos y mas!' className='text-center lg:text-end'/>
        <ImagesSlider images={images} className="h-[80vh] mx-auto">
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
                >
            </motion.div>
        </ImagesSlider>
    </div>
  );
}

"use client";

import { cn, sponsors } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { SparklesText } from "../ui/sparkles-text";
import { motion } from "framer-motion";

const firstRow = sponsors.slice(0, sponsors.length / 2);
const secondRow = sponsors.slice(sponsors.length / 2);

const ReviewCard = ({
  id,
  img,
  name,
  href
}: {
  id: number;
  img: string;
  name: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden border p-1 rounded-md",
        // light styles
        "border-gray-950/10 bg-white hover:bg-gray-950/10 hover:scale-105 transition"
      )}
    >
        <img className="w-full h-full object-contain rounded-md" alt={name} src={img} />
    </a>
  );
};

export function Sponsors() {
  return (
    <div className="container px-3 my-10 mx-auto relative flex w-full flex-col gap-y-5 items-center justify-center overflow-hidden">
      <SparklesText text='Sponsors' subtext='Empresas que confían y apoyan' className='text-center lg:text-start' />
      
      <div className="w-full flex flex-col md:flex-row gap-5 justify-center mb-10">
        <motion.div className="w-full md:max-w-sm lg:max-w-lg">
          <img
            src="/images/sponsors/sponsor.png"
            alt="rifa-1"
            className="w-full h-full object-contain"
            />
        </motion.div>
        <motion.div className="w-full md:max-w-sm lg:max-w-lg">
          <img
            src="/images/sponsors/miembro.png"
            alt="rifa-1"
            className="w-full h-full object-contain"
            />
        </motion.div>
        </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {sponsors.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee> */}
    </div>
  );
}

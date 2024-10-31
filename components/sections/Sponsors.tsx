"use client";

import { cn, sponsors } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { SparklesText } from "../ui/sparkles-text";

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
        "relative w-40 md:w-56 h-full cursor-pointer overflow-hidden aspect-video lg:hover:opacity-75",
        // light styles
        "border-gray-950/10 bg-white hover:bg-gray-950/10 hover:scale-105 transition"
      )}
    >
        <img className="w-full h-full" alt={name} src={img} />
    </a>
  );
};

export function Sponsors() {
  return (
    <div className="container px-3 my-10 mx-auto relative flex w-full flex-col gap-y-5 items-center justify-center overflow-hidden">
      <SparklesText text='Sponsors' subtext='Empresas que confían y apoyan' className='text-center lg:text-start' />
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring
} from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { PiLinktreeLogoThin } from "react-icons/pi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    src: string;
    social?: string;
  }[];
}) => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-30, 30]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <motion.div
          className="relative group"
          key={item.id}
          initial={{
            opacity: 0, 
            translateX: -10, 
            translateY: -10
          }}
          whileInView={{opacity: 1, translateX: 0, translateY: 0}}
          transition={{duration: 0.1, delay: idx * 0.05}}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px "/>
                <div className="font-bold text-white relative z-30 text-base">
                  {item.title}
                </div>
                <div className="text-slate-300 text-sm flex items-center gap-x-2"> <LiaBirthdayCakeSolid size={25} /> {item.description}</div>
                <a href={item.social} target="_blank" className="flex items-center gap-x-2 text-slate-300 text-sm transition-colors md:hover:opacity-75 animate-bounce">
                  {item.social && <span>Seguime!</span>}
                  {item.social && item.social.includes('instagram') && <FaInstagram size={25} className="text-rose-400" />}
                  {item.social && item.social.includes('linktr') && <PiLinktreeLogoThin size={25} className="text-emerald-300"  />}
                  </a>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.src}
            alt={item.title}
            className="object-cover !m-0 !p-0 object-top rounded-full h-20 w-20 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
          />
        </motion.div>
      ))}
    </>
  );
};


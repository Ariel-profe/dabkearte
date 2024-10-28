"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"

import { SparklesText } from "../ui/sparkles-text";

export const Lottery = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])

  return (
    <section className="relative z-10 px-3 container mx-auto">
        <SparklesText text='Participá y ganá' subtext='¡Que lindos premios!' className='text-center lg:text-end' />
        <motion.div 
            ref={ref}
            className="flex flex-col lg:flex-row items-center gap-5 justify-center mx-auto"
            style={{scale}}
        >
            <motion.div className="w-full lg:w-1/2">
                <img
                src="/images/lottery/lottery-1.jpg"
                alt="rifa-1"
                className="w-full h-full object-contain"
                />
        </motion.div>

        <motion.div className="w-full lg:w-1/2">
            <img
            src="/images/lottery/lottery-2.jpg"
            alt="rifa-2"
            className="w-full h-full object-contain"
            />
        </motion.div>
    </motion.div>
  </section>
  )
}

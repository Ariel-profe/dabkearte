"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navlinks } from "@/lib/utils";
import { BurgerButton } from "./burger-button";
import { FlipLink } from "./flip-link";
import clsx from "clsx";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const children = {
    hidden: {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    show: (i:number) => ({
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        ease: [0.110, 0.325, 0.160, 0.95],
        delay: Math.random() * (i/50),
        duration: 0.6
      }
    }),
    exit: (i:number) => ({
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      transition: {
        ease: [0.645, 0.045, 0.355, 0.8],
        delay: Math.random() * (i/50),
        duration: 0.6
      }
    })
  };

  const navLink = {
    hidden: {
      y: "100%",
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        delay: 0.2,
        duration: 0.4
      }
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      }
    }
  };

  return (
    <nav className={clsx("fixed top-0 left-0 z-50 w-full px-3 xl:px-6 py-10 transition-all duration-500 max-lg:py-2",
      hasScrolled && "py-2 bg-[#201446] backdrop-blur-[8px]",
    )}>
      <div className="w-full flex justify-between items-center rounded-lg relative z-50 container px-3 mx-auto">
        <img src="/logo.svg" alt="logo-dabkearte" className="w-16 h-16 lg:w-20 lg:h-20" />
        <BurgerButton setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>

      {/* Navbar */}
      <AnimatePresence>
      {
        isOpen ? (
          <div className="w-screen h-screen overflow-hidden fixed inset-0 z-40">
            <div className="w-full h-full grid md:grid-cols-20 grid-rows-1">
              {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((_, i) => (
                  <motion.div key={i} className="w-full h-full bg-[#201446]" variants={children} initial="hidden" animate="show" exit="exit" custom={i}></motion.div>
                ))
              }
            </div>

          <div className="w-full h-full absolute inset-0 flex justify-center items-center z-30">
              <ul className="max-w-[900px] space-y-6 leading-none">
                {
                  navlinks.map(({href, icon:Icon, id, name}) => (
                    <motion.li 
                      key={id} 
                      className="overflow-hidden flex gap-y-2 items-center" 
                      onClick={()=>setIsOpen(false)} 
                      variants={navLink} 
                      initial="hidden" 
                      animate="show" 
                      exit="exit"
                    >
                     <FlipLink href={href}>{name}</FlipLink>
                    </motion.li>
                  ))
                }
              </ul>
          </div>
          </div>
        ) : null
      }
      </AnimatePresence>
    </nav>
  )
}

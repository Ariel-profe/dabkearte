"use client";

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../ui/animated-modal";
import { SparklesText } from "../ui/sparkles-text";
import { TextHoverEffect } from "../ui/text-hover-effect";

export function Surprise() {

    return (
        <section className="py-20 relative bg-slate-950/50">
            <div className="container mx-auto">

            <SparklesText text="Nuestro show más esperado" className="text-center lg:text-end" />
            <TextHoverEffect text="#YoDabkeArte" />

            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-2">

                <img src="/banner.png" alt="" className="w-full max-w-xl md:w-1/2" />

                <div className="hidden group lg:flex items-center justify-center">
                    <div className="relative bg-primary lg:w-[450px] xl:w-[550px] group transition-all duration-700 aspect-video flex items-center justify-center">
                        <div
                        className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-[99%] h-full absolute group-hover:-translate-y-16"
                        >
                        <p className="lg:text-3xl font-semibold text-gray-500 font-serif">
                            Invitación
                        </p>
                        <p className="px-10 lg:text-lg text-center mt-1 text-gray-700">
                            Queremos que seas parte de nuestro festejo de 10 años
                        </p>
                        <p className="font-serif sm:text-[12px] text-gray-700">
                            ¡Esperamos que nos acompañes!
                        </p>
                        <p className="font-sans text-base text-gray-700 pt-5">DabkeArte</p>
                        </div>

                        <img
                        src="/logo.svg"
                        className="w-12 z-40 group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180"
                        />
                        
                        <div className="tp transition-all duration-1000 group-hover:duration-100 bg-primary absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
                        ></div>
                        <div className="lft transition-all duration-700 absolute w-full h-full bg-primary [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
                        ></div>
                        <div className="rgt transition-all duration-700 absolute w-full h-full bg-primary [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
                        ></div>
                        <div className="btm transition-all duration-700 absolute w-full h-full bg-primary [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
                        ></div>
                    </div>
                </div>

            </div>
            </div>
        </section>
    );
};
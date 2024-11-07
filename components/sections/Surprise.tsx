"use client";

import { SparklesText } from "../ui/sparkles-text";
import { TextHoverEffect } from "../ui/text-hover-effect";

export function Surprise() {

    return (
        <section className="py-20 relative bg-slate-950/50">
            <div className="container mx-auto">

            <SparklesText text="Nuestro show más esperado" className="text-center lg:text-end" />
            
            <div className="grid place-content-center">
                <TextHoverEffect text="#YoDabkeArte" />
                <img src="/banner.png" alt="" className="w-full max-w-xl" />
            </div>
            </div>
        </section>
    );
};
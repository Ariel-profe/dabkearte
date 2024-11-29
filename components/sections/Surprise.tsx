"use client";

import useCanvasCursor from "@/hooks/use-canvas-cursor";
import { SparklesText } from "@/components/ui/sparkles-text";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function Surprise() {

    useCanvasCursor()

    return (
        <section className="py-20 relative bg-slate-950/50">
            <canvas className="hidden lg:block pointer-events-none fixed inset-0 z-50" id="canvas"/>
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
"use client";
import { team } from "@/lib/utils";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { SparklesText } from "../ui/sparkles-text";

export function Team() {
  return (
    <section className="min-h-[80vh] bg-slate-950/50 px-3 py-10 lg:py-20" id="integrantes">
      <div className="container flex flex-col items-center justify-center gap-5 w-full h-full mx-auto">
        <SparklesText text="El team DabkeArte" subtext="¡Seguinos en nuestras redes!" className="text-center lg:text-end" />
        <div className="flex flex-wrap gap-1 justify-center">
          <AnimatedTooltip items={team} />
        </div>
      </div>
    </section>
  );
}

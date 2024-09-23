"use client";
import { team } from "@/lib/utils";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { SparklesText } from "../ui/sparkles-text";

const firstTeam = team.slice(0, 14);
const secondTeam = team.slice(14, 27);

export function Team2() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-10 w-full h-screen bg-slate-950 px-3">
        <SparklesText text="El team DabkeArte" className="text-center lg:text-end" />
        <div className="flex flex-wrap items-center justify-center">
            <AnimatedTooltip items={firstTeam} />
        </div>
        <div className="flex flex-wrap items-center justify-center">
            <AnimatedTooltip items={secondTeam} />
        </div>

    </div>
  );
}

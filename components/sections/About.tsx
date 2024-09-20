import { cn, events } from "@/lib/utils";
import { IconType } from "react-icons";
import { SparklesText } from "../ui/sparkles-text";

export function About() {
 
  return (
    <div className="2xl:container mx-auto py-10 lg:py-20" id="nosotros">
      <SparklesText text="Un poquito de nosotros" className="text-center lg:text-start" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10  mx-auto px-3">
        {events.map((event, index) => (
          <Feature key={event.title} {...event} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  desc,
  icon: Icon,
  index,
}: {
  title: string;
  desc: string;
  icon: IconType;
  index: number;
}) => {
  return (
    <section
      id="#nosotros"
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-slate-200">
        <Icon size={40} />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-quaternary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-200">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-300 max-w-xs relative z-10 px-10">
        {desc}
      </p>
    </section>
  );
};

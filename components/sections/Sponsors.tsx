import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { SparklesText } from "../ui/sparkles-text";

const sponsors = [
  {
    id: 1,
    name: "Alepo Motors",
    img: "/images/sponsors/alepo-motors.png",
    href: 'https://www.instagram.com/alepomotors/'
  },
  {
    id: 2,
    name: "Las Pastas de Ro",
    img: "/images/sponsors/las-pastas-de-ro.jpg",
    href: 'https://www.instagram.com/las.pastas.de.ro/'
  },
  {
    id: 3,
    name: "AMN Consultoria Informatica",
    img: "/images/sponsors/amn.svg",
    href: 'https://www.instagram.com/amn.consultorainformatica/'
  },
];

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
        "relative w-64 cursor-pointer overflow-hidden border p-1 rounded-md",
        // light styles
        "border-gray-950/10 bg-white hover:bg-gray-950/10 hover:scale-105 transition"
      )}
    >
        <img className="w-full h-full object-contain rounded-md" alt={name} src={img} />
    </a>
  );
};

export function Sponsors() {
  return (
    <div className="container px-3 mx-auto relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <SparklesText text='Sponsors' subtext='Empresas que confían y apoyan' className='text-center lg:text-start' />
      <Marquee pauseOnHover className="[--duration:20s]">
        {sponsors.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee> */}
    </div>
  );
}

import "@fontsource-variable/host-grotesk";
import "./globals.css";
import "./site.css";
import type { Metadata, Viewport } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Preloader } from "@/components/site/Preloader";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SmoothScroll } from "@/components/site/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://dabkearte.vercel.app"),
  title: "DabkeArte Mendoza | Shows de dabke para tu evento",
  description:
    "Grupo de dabke, folclore árabe del Levante, en Mendoza desde 2014. Shows para casamientos, cumpleaños, eventos de la colectividad y festivales. Clases y talleres.",
  openGraph: {
    title: "DabkeArte Mendoza",
    description: "Shows de dabke, folclore árabe en vivo, para casamientos, cumpleaños y eventos.",
    locale: "es_AR",
    type: "website",
    images: ["/images/hero/hero.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Runs before paint: turns on the animated version unless the visitor prefers reduced motion,
// and skips the loading screen if it already played in this tab.
const bootScript = `(function(){var d=document.documentElement;try{if(sessionStorage.getItem('dabke-intro'))d.classList.add('intro-seen')}catch(e){}if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('motion')})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        <Preloader />
        <ScrollProgress />
        <SmoothScroll />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

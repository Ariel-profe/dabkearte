
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "400", "700"] 
});

export const metadata: Metadata = {
  title: "DabkeArte Mendoza",
  description: "Sitio web de DabkeArte Mendoza. Grupo de Dabke. Folclore arabe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`w-full bg-[#291b5a] mx-auto flex flex-col antialiased ${poppins.className} text-tertiary`}>
        <div className='flex flex-col relative'>
          <Navbar />
          <div className="pointer-events-none absolute inset-0 z-0 h-full bg-[url('/noisetexture.jpg')] opacity-10 mix-blend-soft-light"></div>
          <main className='flex-grow shadow-md z-20'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

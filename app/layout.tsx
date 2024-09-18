
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {Footer} from "@/components/ui/footer";
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
    <html lang="en">
      <body className={`w-full bg-slate-900 bg-grid-small-white/[0.1] flex flex-col antialiased ${poppins.className} text-tertiary`}>
        <div className='flex flex-col'>
          <Navbar />
          <main className='flex-grow shadow-md'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

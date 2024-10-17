
import Link from "next/link";
import { PiFacebookLogoLight, PiYoutubeLogoThin, PiInstagramLogoLight, PiWhatsappLogoThin   } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

import { navlinks } from "@/lib/utils";

const footerSocials = [
  {
      id:1,
      href: 'https://www.instagram.com/dabkearte_mendoza/',
      icon: PiInstagramLogoLight
  },
  {
      id:2,
      href: 'https://www.facebook.com/profile.php?id=100031039077291',
      icon: PiFacebookLogoLight
  },
  {
      id:3,
      href: 'https://www.youtube.com/@dabkeartemendoza6982',
      icon: PiYoutubeLogoThin
  },
  {
      id:4,
      href: 'https://api.whatsapp.com/send?phone=+5492613625959&text=Hola DabkeArte!',
      icon: PiWhatsappLogoThin
  },
  {
      id:5,
      href: 'mailto:dabkearte.mendoza@gmail.com',
      icon: CiMail
  },
]

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
      <footer className="text-slate-400 px-3 lg:px-6 py-10 w-full mx-auto flex flex-col items-center bg-[#201446]">
        <div className="container px-3">
          <Link href={'/'} className="relative max-w-lg mx-auto text-center">
              <img src="/logo.svg" className="w-20 lg:w-32 mx-auto" />
          </Link>
          <ul className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-5  sm:space-x-4 sm:space-y-0">
              {
                  navlinks.map((item, idx) => (
                      <li key={idx} className="hover:text-slate-300 transition-colors capitalize">
                          <a key={idx} href={item.href}>
                              { item.name }
                          </a>
                      </li>
                  ))
              }
          </ul>
         
          <div className="mt-8 flex flex-col lg:flex-row items-center justify-between w-full">
              <h4 className="mt-4 sm:mt-0 text-center">
                  &copy; {year} Desarrollado por <br className="lg:hidden" /> 
                    <a href="/" className="text-slate-300 transition-colors md:hover:underline"> AMN Consultora Informática. </a>
              </h4>
              <div className="mt-6 sm:mt-0">
                  <ul className="flex items-center space-x-4">
                    {footerSocials.map( ({href, icon: Icon, id}) => (
                        <li
                          key={id} 
                          className="w-10 h-10 flex items-center justify-center mt-2">
                           <a 
                            href={href}
                            target="_blank"
                            className="group relative outline-0 [--sz-btn:68px] [--space:calc(var(--sz-btn)/5.5)] [--gen-sz:calc(var(--space)*2)] [--sz-text:calc(var(--sz-btn)-var(--gen-sz))] h-[var(--sz-btn)] w-[var(--sz-btn)] border border-solid border-transparent rounded-xl flex items-center justify-center aspect-square cursor-pointer transition-transform duration-200 active:scale-[0.95]"
                          >
                            <svg
                              className="absolute z-10 overflow-visible transition-all duration-300 text-secondary md:group-hover:text-slate-200 top-[calc(var(--sz-text)/4)] left-[calc(var(--sz-text)/7)] h-[var(--gen-sz)] w-[var(--gen-sz)] md:group-hover:h-[var(--sz-text)] md:group-hover:w-[var(--sz-text)] md:group-hover:left-[calc(var(--sz-text)/4)] md:group-hover:top-[calc(calc(var(--gen-sz))/2)]"
                              stroke="none"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                              ></path>
                            </svg>
                            <span
                              className="text-3xl  leading-none text-white transition-all duration-200 md:group-hover:opacity-0"
                              ><Icon /></span>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
              </div>
          </div>
        </div>
      </footer>
  )
}


import Link from "next/link";
import { PiFacebookLogoLight, PiYoutubeLogoThin, PiInstagramLogoLight, PiWhatsappLogoThin   } from "react-icons/pi";
import { contactMethods, navlinks } from "@/lib/utils";

const footerSocials = [
  {
      id:1,
      href: 'https://www.instagram.com/dabkearte_mendoza/',
      icon: PiInstagramLogoLight
  },
  {
      id:2,
      href: '/',
      icon: PiFacebookLogoLight
  },
  {
      id:3,
      href: '/',
      icon: PiYoutubeLogoThin
  },

  {
      id:4,
      href: '/',
      icon: PiWhatsappLogoThin
  }
]

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
      <footer className="text-slate-400 px-3 lg:px-6 py-10 w-full mx-auto flex flex-col items-center bg-[#201446]">
        <div className="container px-3">
          <Link href={'/'} className="relative max-w-lg mx-auto text-center">
              <img src="/logo.svg" className="w-32 mx-auto" />
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
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-5 sm:space-x-4 sm:space-y-0">
              {
                  contactMethods.map((item, idx) => (
                      <div key={idx} className="hover:text-slate-300 transition-colors">
                        <p className="flex flex-wrap items-center gap-1">
                        <span className="text-secondary">{item.icon}</span>
                        { item.contact }
                        </p>
                      </div>
                  ))
              }
          </div>
          <div className="mt-8 flex flex-col lg:flex-row items-center justify-between w-full">
              <h4 className="mt-4 sm:mt-0 text-center">
                  &copy; {year} Desarrollado por  
                    <a href="/" className="hover:text-slate-300 transition-colors md:hover:underline"> AMN Consultora Informatica. </a>
              </h4>
              <div className="mt-6 sm:mt-0">
                  <ul className="flex items-center space-x-4">
                    {
                      footerSocials.map( ({href, icon: Icon, id}) => (
                        <li
                          key={id} 
                          className="w-10 h-10 flex items-center justify-center">
                            <a href={href} target="_blank" className="md:hover:text-slate-300 md:hover:scale-105 transition">
                               <Icon size={30} />
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

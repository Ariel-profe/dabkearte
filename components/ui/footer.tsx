
import { contactMethods } from "@/lib/utils";
import { PiFacebookLogoLight, PiYoutubeLogoThin, PiInstagramLogoLight, PiWhatsappLogoThin   } from "react-icons/pi";

const footerNavs = [
  {
      href: '#nosotros',
      name: 'Nosotros'
  },
  {
      href: '#integrantes',
      name: 'Integrantes'
  },
  {
      href: '#galeria',
      name: 'Galeria'
  },

  {
      href: '#contacto',
      name: 'Contacto'
  }
];

const footerSocials = [
  {
      id:1,
      href: '/',
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
      <footer className="text-slate-500 bg-slate-950 px-3 lg:px-6 py-10 w-full mx-auto flex flex-col items-center">
          <div className="relative group max-w-lg mx-auto text-center transition duration-500">
              <img src="/logo.svg" className="w-32 mx-auto" />
              <div className="hidden group-hover:flex h-20 w-20 rounded-full bg-quaternary/90 mx-auto absolute inset-0 blur-3xl"></div>
          </div>
          <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
              {
                  footerNavs.map((item, idx) => (
                      <li key={idx} className="hover:text-slate-400 transition-colors">
                          <a key={idx} href={item.href}>
                              { item.name }
                          </a>
                      </li>
                  ))
              }
          </ul>
          <div className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
              {
                  contactMethods.map((item, idx) => (
                      <div key={idx} className="hover:text-slate-400 transition-colors">
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
                    <a href="/" className="hover:text-slate-400 transition-colors md:hover:underline"> AMN Consultora Informatica. </a>
              </h4>
              <div className="mt-6 sm:mt-0">
                  <ul className="flex items-center space-x-4">
                    {
                      footerSocials.map( ({href, icon: Icon, id}) => (
                        <li
                          key={id} 
                          className="w-10 h-10 flex items-center justify-center">
                            <a href={href} className="md:hover:text-slate-400 md:hover:scale-105 transition">
                               <Icon size={30} />
                            </a>
                        </li>
                      ))
                    }
                  </ul>
              </div>
          </div>
      </footer>
  )
}

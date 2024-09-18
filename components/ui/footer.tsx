
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
      <footer className="text-slate-500 px-4 py-5 lg:py-10 w-full mx-auto">
          <div className="max-w-lg sm:mx-auto sm:text-center">
              <img src="/logo.svg" className="w-32 sm:mx-auto" />
              <p className="leading-relaxed mt-4 text-sm">
                  Hagamos del Dabke una danza popular para poder compartirla juntos.
              </p>
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
          <div className="mt-8 items-center justify-between sm:flex">
              <div className="mt-4 sm:mt-0">
                  &copy; {year} Desarrollado por  
                    <a href="/" className="hover:text-slate-400 transition-colors md:hover:underline"> AMN Consultora Informatica. </a>
              </div>
              <div className="mt-6 sm:mt-0">
                  <ul className="flex items-center space-x-4">
                    {
                      footerSocials.map( ({href, icon: Icon, id}) => (
                        <li
                          key={id} 
                          className="w-10 h-10 flex items-center justify-center">
                            <a href={href} className="md:hover:text-slate-300 transition-colors">
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

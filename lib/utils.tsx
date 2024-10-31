import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { LuPartyPopper } from "react-icons/lu";
import { GiLinkedRings } from "react-icons/gi";
import { LiaBirthdayCakeSolid, LiaMedalSolid  } from "react-icons/lia";
import { BiHomeSmile } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { IoPeopleCircleOutline } from "react-icons/io5";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navlinks = [
  {
    id: 1,
    name: 'inicio',
    href: '/',
    icon: BiHomeSmile
  },
  {
    id: 2,
    name: 'nosotros',
    href: '#nosotros',
    icon: IoPeopleCircleOutline
  },
  {
    id: 3,
    name: 'integrantes',
    href: '#integrantes',
    icon: FaRegHandshake
  },
  {
    id: 4,
    name: 'galeria',
    href: '#galeria',
    icon: CiImageOn
  }
];

export const heroImages = [
  {id: 1, img: "/images/hero/1.jpeg"},
  {id: 2, img: "/images/hero/2.jpeg"},
  {id: 3, img: "/images/hero/3.jpg"},
  {id: 4, img: "/images/hero/4.jpg"},
  {id: 5, img: "/images/hero/5.jpg"},
  {id: 6, img: "/images/hero/6.jpg"},
  {id: 7, img: "/images/hero/7.jpeg"},
  {id: 8, img: "/images/hero/8.jpg"},
  {id: 9, img: "/images/hero/9.jpg"},
  {id: 10, img: "/images/hero/10.jpg"},
  {id: 11, img: "/images/hero/11.jpeg"},
  {id: 12, img: "/images/hero/12.jpg"},
  {id: 13, img: "/images/hero/13.jpg"},
  {id: 14, img: "/images/hero/14.jpg"},
  {id: 15, img: "/images/hero/15.jpg"}
];

export const events = [
  {
    id: 1,
    title: 'Historia',
    desc: 'Nacimos en el año 2014 para poder brindarle a la colectividad árabe de Mendoza un grupo estable que pueda representar a cada sirio y libanés de este suelo.',
    icon: LiaBirthdayCakeSolid
  },
  {
    id: 2,
    title: 'Integrantes',
    desc: '¡Comenzamos siendo 8 personas!. Al día de hoy somos un elenco de 27 bailarines estables y apasionados por el Dabke.',
    icon: LuPartyPopper
  },
  {
    id: 3,
    title: 'Ensayos',
    desc: 'Entrenamos cada semana para seguir perfeccionando nuestra técnica y así poder mejorar la representatividad que queremos alcanzar.',
    icon: GiLinkedRings
  },
  {
    id: 4,
    title: 'Estilos',
    desc: 'Estudiamos, aprendemos y enseñamos muchos estilos de Dabke, cada uno con sus técnicas, detalles y fuerza.',
    icon: LiaMedalSolid
  },
  {
    id: 5,
    title: 'Institucional',
    desc: 'Contamos con el apoyo de las instituciones y organizaciones árabes de Mendoza, que son de gran ayuda para difundir nuestro arte.',
    icon: LiaBirthdayCakeSolid
  },
  {
    id: 6,
    title: 'Contrataciones',
    desc: 'Realizamos eventos públicos y privados. Cumpleaños, casamientos, homenajes y toda participación de nuestro interés.',
    icon: LiaMedalSolid
  },
];

export const team = [
  {
    id:1,
    description: "12/01",
    title: "Aldana Arenas",
    src: "/images/team/aldana.jpeg",
    social: 'https://www.instagram.com/aldyarenas/',
  },
  {
    id:2,
    description: "13/12",
    title: "Andrea Fuentes",
    src: "/images/team/andrea.jpeg",
    social: 'https://www.instagram.com/andrefuentesgomez/'
  },
  {
    id:3,
    description: "03/07",
    title: "Ariel Elias",
    src: "/images/team/ariel.jpg",
    social: 'https://www.instagram.com/arielo_elias/',
  },
  // {
  //   id:4,
  //   description: "Lorem ipsum",
  //   title: "Camila Ferro",
  //   src: "/images/team/ariel.jpg",
  // },
  {
    id:5,
    description: "8/10",
    title: "Camila Quiroga",
    src: "/images/team/camilaQ.jpeg",
    social: 'https://www.instagram.com/camiqnacif/',
  },
  {
    id:6,
    description: "9/10",
    title: "Carolina Leiva",
    src: "/images/team/carolina.png",
    social: 'https://www.instagram.com/caracolinaleiva/',
  },
  {
    id:7,
    description: "11/02",
    title: "Daniela Amín",
    src: "/images/team/daniela.jpeg",
    social: 'https://www.instagram.com/dani.amin.11/',
  },
  {
    id:8,
    description: "11/12",
    title: "Fátima Taha",
    src: "/images/team/fatima.jpeg",
    social: 'https://www.instagram.com/fatima.tahaa/',
  },
  {
    id:9,
    description: "17/08",
    title: "Florencia Amín",
    src: "/images/team/florenciaA.jpeg",
    social: 'https://www.instagram.com/florcitamin/',
  },
  {
    id:10,
    description: "02/01",
    title: "Florencia Cuillieri",
    src: "/images/team/florC.jpeg",
    social: 'https://www.instagram.com/florcuillieri/',
  },
  {
    id:11,
    description: "29/07",
    title: "Florencia Munafó",
    src: "/images/team/florenciaM.jpeg",
    social: 'https://www.instagram.com/flor_munafo_bellydancer/',
  },
  {
    id:12,
    description: "17/01",
    title: "Gisel Guzman",
    src: "/images/team/gisel.jpeg",
    social: 'https://www.instagram.com/gisel_guzman_/'
  },
  {
    id:13,
    description: "20/03",
    title: "Guillermina Elias",
    src: "/images/team/guillermina.jpeg",
    social: 'https://linktr.ee/gelias',
  },
  {
    id:14,
    description: "09/04",
    title: "Mauge Cassar",
    src: "/images/team/mauge.jpeg",
    social: 'https://www.instagram.com/mauge.cassar/',
  },
  {
    id:15,
    description: "02/09",
    title: "Maca Della Gaspera",
    src: "/images/team/macarena.png",
    social: 'https://www.instagram.com/macadg0295/',
  },
  {
    id:16,
    description: "24/02",
    title: "Magalí Mafauad",
    src: "/images/team/magali.jpeg",
  },
  {
    id:17,
    description: "19/10",
    title: "Martín Bulfon",
    src: "/images/team/martin.jpeg",
  },
  {
    id:18,
    description: "19/10",
    title: "Micaela Poblete",
    src: "/images/team/mica.jpg",
    social: 'https://www.instagram.com/micapoblete_/',
  },
  {
    id:19,
    description: "15/12",
    title: "Nadir Daou",
    src: "/images/team/nadir.jpg",
  },
  {
    id:20,
    description: "26/06",
    title: "Nancy Ceschin",
    src: "/images/team/nancy.jpeg",
    social: 'https://www.instagram.com/nanyceschin/',
  },
  {
    id:21,
    description: "06/11",
    title: "Nur Yamin",
    src: "/images/team/nur.jpeg",
    social: 'https://www.instagram.com/nur.yaminsemaan/',
  },
  {
    id:22,
    description: "08/04",
    title: "Renzo Farjo",
    src: "/images/team/renzo.jpeg",
    social: 'https://www.instagram.com/renzofarjo/',
  },
  {
    id:23,
    description: "10/08",
    title: "Rocío Cutifani",
    src: "/images/team/rocio.jpeg",
    social: 'https://www.instagram.com/ro_cutifani/',
  },
  {
    id:24,
    description: "20/04",
    title: "Sebastián Andrawos",
    src: "/images/team/sebastian.png",
  },
  {
    id:25,
    description: "30/10",
    title: "Sol Sttoco",
    src: "/images/team/sol.jpeg",
    social: 'https://www.instagram.com/sol_sttoco/',
  },
  {
    id:26,
    description: "04/03",
    title: "Yamil Mocayar",
    src: "/images/team/yamil.jpeg",
    social: 'https://www.instagram.com/yamilovich.ar/',
  },
  {
    id:27,
    description: "20/06",
    title: "Yisel Gari",
    src: "/images/team/yisel.jpeg",
    social: 'https://www.instagram.com/yiselgari/',
  }
];

export const sponsors = [
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
  {
    id: 4,
    name: "Monica Ojeda Indumentaria",
    img: "/images/sponsors/monica.svg",
    href: 'https://www.instagram.com/monicaojeda.indumentaria/'
  },
  {
    id: 5,
    name: "Emilia Diez",
    img: "/images/sponsors/emilia.svg",
    href: 'https://www.instagram.com/emiliadiezfotografia/'
  },
  {
    id: 6,
    name: "Macarena Della Gaspera",
    img: "/images/sponsors/macarena.jpg",
    href: 'https://www.instagram.com/macadg0295/'
  },
  {
    id: 7,
    name: "Macarena Della Gaspera",
    img: "/images/sponsors/macarena.jpg",
    href: 'https://www.instagram.com/macadg0295/'
  },
  {
    id: 8,
    name: "La Limpisima",
    img: "/images/sponsors/lalimpisima.png",
    href: 'https://www.instagram.com/la_limpisima.arg/'
  },
];
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { LuPartyPopper } from "react-icons/lu";
import { GiLinkedRings } from "react-icons/gi";
import { LiaBirthdayCakeSolid, LiaMedalSolid  } from "react-icons/lia";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navlinks = [
  {
    id: 1,
    name: 'inicio',
    href: '/'
  },
  {
    id: 2,
    name: 'nosotros',
    href: '#nosotros'
  },
  {
    id: 3,
    name: 'equipo',
    href: '#equipo'
  },
  {
    id: 4,
    name: 'galeria',
    href: '#galeria'
  }
];

export const heroImages = [
  {
    title: "Daq almani",
    img: "/images/hero/1.jpeg",
  },
  {
    title: "Lebnani",
    img: "/images/hero/2.jpeg",
  },
  {
    title: "Hal bawadi",
    img: "/images/hero/3.jpeg",
  },
 
  {
    title: "Dela3ona",
    img: "/images/hero/4.jpeg",
  },
  {
    title: "Mahlake",
    img: "/images/hero/5.jpg",
  },
  {
    title: "Hal el mayed",
    img: "/images/hero/1.jpeg",
  },
 
  {
    title: "Allah yeshglu",
    img: "/images/hero/2.jpeg",
  },
  {
    title: "Dabke daqtein",
    img: "/images/hero/3.jpeg",
  },
  {
    title: "Dabke nar",
    img: "/images/hero/4.jpeg",
  },
  {
    title: "Bel ruh bel damm",
    img: "/images/hero/5.jpg",
  }
];

export const contactMethods = [
  {
      icon:
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
      ,
      contact: "Ciudad de Mendoza, Argentina.",
      title: "Nuestro lugar"
  },
  {
      icon:
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
      ,
      contact: "+54 9 (261) 3625959",
      title: "Telefono"
  },
  {
      icon:
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
      ,
      contact: "dabkearte.mendoza@gmail.com",
      title: "Email"
  },
];

export const events = [
  {
    id: 1,
    title: 'Historia',
    desc: 'Nacimos en el anio 2014 para poder brindarle a la colectividad arabe de Mendoza un grupo estable que pueda representar a cada sirio y libanes de este suelo.',
    icon: LiaBirthdayCakeSolid
  },
  {
    id: 2,
    title: 'Integrantes',
    desc: 'Comenzamos siendo 8 integrantes. Al dia de hoy somos un elenco de 27 bailarines estables, con edades entre 19 y 42 anios.',
    icon: LuPartyPopper
  },
  {
    id: 3,
    title: 'Ensayos',
    desc: 'Entrenamos cada semana para seguir perfeccionando nuestra tecnica y asi poder mejorar la representatividad que queremos alcanzar.',
    icon: GiLinkedRings
  },
  {
    id: 4,
    title: 'Estilos',
    desc: 'Estudiamos, aprendemos y ensenamos muchos estilos de Dabke, cada uno con sus tecnicas, detalles y fuerza.',
    icon: LiaMedalSolid
  },
  {
    id: 5,
    title: 'Institucional',
    desc: 'Contamos con el apoyo de todas las instituciones y organizaciones arabes de Mendoza, gracias a todos ellos aumenta nuestra visibilidad.',
    icon: LiaBirthdayCakeSolid
  },
  {
    id: 6,
    title: 'Vestuario',
    desc: 'Contamos con una amplia variedad de vestuarios tradicionales para poder representar de forma correcta cada estilo de Dabke que bailemos.',
    icon: LuPartyPopper
  },
  {
    id: 7,
    title: 'Estudios',
    desc: 'Contamos con profesores y alumnos altamente capacitados para poder bailar y ensenar el Dabke de la mejor manera.',
    icon: GiLinkedRings
  },
  {
    id: 8,
    title: 'Contrataciones',
    desc: 'Realizamos eventos publicos y privados. Cummpleanos, casamientos, homenajes y toda participacion de nuestro interes.',
    icon: LiaMedalSolid
  },
];

export const team = [
  {
    id:1,
    description: "Lorem ipsum",
    title: "Aldana Arenas",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos!
        </p>
      );
    },
  },
  {
    id:2,
    description: "Lorem ipsum",
    title: "Andrea Fuentes",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:3,
    description: "Lorem ipsum",
    title: "Ariel Elias",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    id:4,
    description: "Lorem ipsum",
    title: "Camila Ferro",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:5,
    description: "Lorem",
    title: "Camila Quiroga",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:6,
    description: "Lorem",
    title: "Carolina Leiva",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:7,
    description: "Lorem ipsum",
    title: "Daniela Amin",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:8,
    description: "Lorem ipsum",
    title: "Fatima Taha",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:9,
    description: "Lorem",
    title: "Florencia Amin",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:10,
    description: "Lorem",
    title: "Florencia Cuillieri",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:11,
    description: "Lorem",
    title: "Florencia Munafo",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:12,
    description: "Lorem",
    title: "Gisel Guzman",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:13,
    description: "Lorem",
    title: "Guillermina Elias",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:14,
    description: "Lorem",
    title: "Maria Eugenia Cassar",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:15,
    description: "Lorem",
    title: "Maca Della Gaspera",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:16,
    description: "Lorem",
    title: "Magali Mafauad",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:17,
    description: "Lorem",
    title: "Martin Bulfon",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:18,
    description: "Lorem",
    title: "Micaela Poblete",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:19,
    description: "Lorem",
    title: "Nadir Daou",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:20,
    description: "Lorem",
    title: "Nancy Ceschin",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:21,
    description: "Lorem",
    title: "Nur Yamin",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:22,
    description: "Lorem",
    title: "Renzo Farjo",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:23,
    description: "Lorem",
    title: "Rocio Cutifani",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:24,
    description: "Lorem",
    title: "Sebastian Andrawos",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:25,
    description: "Lorem",
    title: "Sol Sttoco",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:26,
    description: "Lorem",
    title: "Yamil Mocayar",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  },
  {
    id:27,
    description: "Lorem",
    title: "Yisel Gari",
    src: "/images/team/ariel.jpg",
    content: () => {
      return (
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ad molestiae, enim aliquam error pariatur dolor hic explicabo, eum commodi saepe itaque totam blanditiis fugit impedit nisi delectus! Veritatis, quos
        </p>
      );
    },
  }
];

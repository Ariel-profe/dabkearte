// Every text on the home page lives here.
// Entries marked "Borrador" were written as placeholders: replace them with real data.

export const FOUNDED = 2014;
export const yearsOnStage = () => new Date().getFullYear() - FOUNDED;

export const contact = {
  whatsappNumber: "5492613625959",
  whatsappDisplay: "+54 9 261 362 5959",
  email: "dabkearte.mendoza@gmail.com",
  city: "Mendoza, Argentina",
};

export const whatsappLink = (text = "Hola DabkeArte, quiero consultar por un show.") =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const socials = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/dabkearte_mendoza/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/share/19rZ52YbyX/?mibextid=wwXIfr" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@dabkeartemendoza" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@dabkearte.mendoza" },
];

export const nav = [
  { href: "#shows", label: "Shows" },
  { href: "#elenco", label: "Elenco" },
  { href: "#galeria", label: "Galería" },
  { href: "#encuentro", label: "Encuentro" }
];

export const hero = {
  city: "Mendoza",
  image: { src: "/images/hero/hero.jpeg", alt: "DabkeArte en escena, con fuego de fondo", width: 1600, height: 1068 },
  lede: "Folclore árabe ",
  ledeMuted: "para casamientos, cumpleaños, muestras y eventos en general.",
  cta: { label: "Escribinos para tu evento", note: "Lo haremos inolvidable" },
};

// Borrador: nombres y años de cada presentación.
export const presentaciones = [
  { name: "Encuentro regional en Viedma", kind: "Dabke shimaliie", src: "/images/gallery/22.webp", width: 1280, height: 853, alt: "La fila de bailarinas en el escenario", wide: true },
  { name: "Festival de folclore árabe", kind: "Dabke bedewe", src: "/images/gallery/2.jpeg", width: 1280, height: 828, alt: "Cuadro de dabke con vestuario rojo" },
  { name: "Encuentro de agrupaciones", kind: "Dabke moderno", src: "/images/gallery/12.jpeg", width: 1178, height: 1134, alt: "Elenco con vestuario azul" },
  { name: "Fiesta San Marón", kind: "Evento institucional", src: "/images/gallery/8.jpg", width: 1600, height: 1200, alt: "El elenco con vestuario tradicional" },
  { name: "Seminario", kind: "Danza con espadas", src: "/images/gallery/2.jpg", width: 1600, height: 1200, alt: "El grupo con vestuario tradicional en un jardín" },
];

export const manifiesto = {
  image: { src: "/images/gallery/28.jpg", alt: "Bailarines de DabkeArte con vestuario rojo", width: 1200, height: 1600 },
  text: "Nacimos en 2014 para darle a la colectividad árabe de Mendoza un grupo estable que represente a cada sirio y libanés de este suelo. Hoy somos 24 bailarines estables, unidos por el amor a esta danza.",
  sign: "DabkeArte Mendoza",
  signMuted: "Grupo de folclore árabe desde 2014",
};

export const shows = {
  lede: "Formatos pensados para cada evento, con vestuario, música y una energía que invita a todos a bailar.",
  items: [
    {
      name: "Casamientos",
      text: "La entrada de los novios, el momento de la torta o el cierre de la fiesta: armamos un cuadro de dabke que hace levantar a todos de la silla.",
      tags: ["Entrada de novios", "Show central", "Baile con invitados"],
      image: { src: "/images/gallery/24.jpeg", alt: "Elenco con vestuario dorado sobre el escenario", width: 1280, height: 847 },
    },
    {
      name: "Cumpleaños y fiestas",
      text: "Quince, cumpleaños, aniversarios y reuniones familiares. Adaptamos la duración y el repertorio al espacio y al público.",
      tags: ["Quince años", "Aniversarios", "Fiestas familiares"],
      image: { src: "/images/gallery/34.jpg", alt: "Bailarines con vestuario tradicional al aire libre", width: 1600, height: 1200 },
    },
    {
      name: "Eventos institucionales",
      text: "Actos de la colectividad, festivales, ferias culturales, escenarios municipales y eventos en general. Representamos al Levante árabe con respeto por la tradición.",
      tags: ["Colectividad", "Festivales", "Actos culturales"],
      image: { src: "/images/gallery/19.jpeg", alt: "El grupo completo con vestuario rojo", width: 1600, height: 1200 },
    },
    {
      name: "Clases y talleres",
      text: "Clases de nivel básico y avanzado, y talleres para escuelas, academias o grupos que quieran aprender a bailar.",
      tags: ["Nivel básico", "Nivel avanzado", "Talleres a medida"],
      image: { src: "/images/gallery/27.jpg", alt: "Ensayo de dabke en un salón", width: 1256, height: 670 },
    },
  ],
  footNote: "¿Qué tipo de evento estás organizando? Contanos la fecha y el lugar, y te proponemos el mejor show para tu evento.",
};

export const proceso = {
  title: "¡Yallah el Dabke!",
  image: { src: "/images/gallery/23.jpeg", alt: "La fila de DabkeArte en un escenario iluminado", width: 1280, height: 853 },
  caption: "Bailamos de la mano, en símbolo de unión y paz.",
  stepsTitle: "Cómo contratarnos",
  stepsLede: "Escribinos, te proponemos el mejor show para tu evento y coordinamos el resto.",
  steps: [
    { when: "El primer mensaje", title: "Escribinos", text: "Contanos la fecha, el lugar y qué tipo de evento estás organizando." },
    { when: "En 48 horas", title: "Armamos la propuesta", text: "Te enviamos formato, duración, cantidad de bailarines y presupuesto." },
    { when: "La semana previa", title: "Ensayo y vestuario", text: "Coordinamos la música, el espacio y los tiempos con tu organizador." },
    { when: "El gran día", title: "El show", text: "Llegamos, bailamos y hacemos que tu evento sea inolvidable." },
  ],
};

// Borrador: reseñas de ejemplo.
export const resenas = {
  scoreText: "Bailando dabke en casamientos, cumpleaños, festivales y eventos de la colectividad.",
  items: [
    { text: "Mi familia nos dió el regalo sorpresa de DabkeArte y nos hicieron pasar un momento hermoso. Gracias por todo!", name: "Lucía y Martín", where: "Casamiento" },
    { text: "Súper puntuales y organizados. Se adaptaron al poco espacio que teniamos. Hermoso show.", name: "Carolina M.", where: "Cumpleaños de 50" },
    { text: "Representan a la colectividad con muchísimo respeto y alegría. Siempre los volvemos a convocar.", name: "Comisión directiva", where: "Evento institucional" },
    { text: "El vestuario, la música y la energía. Mis abuelos se emocionaron al verlos.", name: "Sofía A.", where: "Quince años" },
    { text: "Hicimos un taller con DabkeArte y nos encantó. Queremos más clases!", name: "Academia de danza", where: "Taller de dabke" },
  ],
};

// Borrador: cifras intermedias y cita.
export const cifras = {
  title: "Una historia que crece cada vez más.",
  lede: "De un grupo de pocas personas a un elenco estable que baila en todo el país.",
  caseTile: {
    brand: "Nos formamos constantemente",
    sub: "Aprendemos y bailamos cada semana",
    image: { src: "/images/gallery/33.jpg", alt: "Integrantes de DabkeArte durante una formación", width: 1280, height: 847 },
  },
  figs: [
    { num: "2014", label: "El año en que nació el grupo" },
    { num: "5 → 24", label: "Integrantes, del primer ensayo a hoy" },
    { num: "+150", label: "Presentaciones en escenarios y eventos" },
  ],
  quote: { text: "Bienvenidos a nuestra historia.", by: "Elenco de DabkeArte" },
  ring: { label: "+20", value: 20, max: 20, title: "Coreografías", text: "Estudiamos cada estilo con sus pasos, su ritmo y su historia." },
};

export const galeria = {
  title: "Así se vive el dabke.",
  text: "Ensayos, viajes, festivales y escenarios. Seguinos en Instagram para ver cada presentación.",
  shots: [
    { src: "/images/gallery/1.jpg", alt: "El grupo con la bandera argentina", width: 4000, height: 3000, speed: 0.3 },
    { src: "/images/gallery/25.jpg", alt: "Integrantes con vestuario tradicional", width: 720, height: 716, speed: 0.2 },
    { src: "/images/gallery/20.jpeg", alt: "Integrantes después de un show", width: 1600, height: 1200, speed: 0.1 },
    { src: "/images/gallery/21.jpeg", alt: "Bailarines con vestuario azul", width: 1600, height: 1200, speed: 0.45 },
    { src: "/images/gallery/26.jpg", alt: "Cuadro de dabke con vestuario negro y dorado", width: 1600, height: 900, speed: 0.33 },
  ],
};

export const elenco = {
  title: "El elenco completo.",
  lede: "Quienes están detras de cada paso recorrido.",
};

export const team = [
  { id: 1, name: "Aldana", lastName: "Arenas", birthdate: "12-01", instagramUrl: "https://www.instagram.com/aldyarenas/", primaryImage: "/images/team/aldana.jpg", hoverImage: "/images/team/aldana-1.jpeg" },
  { id: 2, name: "Andrea", lastName: "Fuentes", birthdate: "13-12", instagramUrl: "https://www.instagram.com/andrefuentesgomez/", primaryImage: "/images/team/andrea.jpg", hoverImage: "/images/team/andrea-1.jpeg" },
  { id: 3, name: "Ariel", lastName: "Elias", birthdate: "03-07", instagramUrl: "https://www.instagram.com/arielo_elias/", primaryImage: "/images/team/ariel.jpg", hoverImage: "/images/team/ariel-1.jpg" },
  { id: 4, name: "Camila", lastName: "Quiroga", birthdate: "08-10", instagramUrl: "https://www.instagram.com/camiqnacif/", primaryImage: "/images/team/camila.jpg", hoverImage: "/images/team/camila-1.jpeg" },
  { id: 5, name: "Daniela", lastName: "Amín", birthdate: "11-02", instagramUrl: "https://www.instagram.com/dani.amin.11/", primaryImage: "/images/team/daniela.jpg", hoverImage: "/images/team/daniela-1.jpeg" },
  { id: 6, name: "Fátima", lastName: "Taha", birthdate: "11-12", instagramUrl: "https://www.instagram.com/fatima.tahaa/", primaryImage: "/images/team/fatima.jpg", hoverImage: "/images/team/fatima-1.jpeg" },
  { id: 7, name: "Florencia", lastName: "Amín", birthdate: "17-08", instagramUrl: "https://www.instagram.com/florcitamin/", primaryImage: "/images/team/florenciaA.jpg", hoverImage: "/images/team/florenciaA-1.jpeg" },
  { id: 8, name: "Florencia", lastName: "Cuillieri", birthdate: "02-01", instagramUrl: "https://www.instagram.com/florcuillieri/", primaryImage: "/images/team/florC.jpg", hoverImage: "/images/team/florC-1.jpeg" },
  { id: 9, name: "Florencia", lastName: "Munafó", birthdate: "29-07", instagramUrl: "https://www.instagram.com/flor_munafo_bellydancer/", primaryImage: "/images/team/florenciaM.jpg", hoverImage: "/images/team/florenciaM-1.jpeg" },
  { id: 10, name: "Gisel", lastName: "Guzman", birthdate: "17-01", instagramUrl: "https://www.instagram.com/gisel_guzman_/", primaryImage: "/images/team/gisel.jpg", hoverImage: "/images/team/gisel-1.jpeg" },
  { id: 11, name: "Guillermina", lastName: "Elias", birthdate: "20-03", instagramUrl: "https://linktr.ee/gelias", primaryImage: "/images/team/guillermina-1.jpeg", hoverImage: "/images/team/guillermina-1.jpeg" },
  { id: 12, name: "Mauge", lastName: "Cassar", birthdate: "09-04", instagramUrl: "https://www.instagram.com/mauge.cassar/", primaryImage: "/images/team/mauge.jpg", hoverImage: "/images/team/mauge-1.jpeg" },
  { id: 13, name: "Maca", lastName: "Della Gaspera", birthdate: "02-09", instagramUrl: "https://www.instagram.com/macadg0295/", primaryImage: "/images/team/macarena.jpg", hoverImage: "/images/team/macarena-1.png" },
  { id: 14, name: "Magalí", lastName: "Mafauad", birthdate: "24-02", instagramUrl: "https://www.instagram.com/magali.mafauad/", primaryImage: "/images/team/magali.jpg", hoverImage: "/images/team/magali-1.jpeg" },
  { id: 15, name: "Martín", lastName: "Bulfon", birthdate: "19-10", instagramUrl: "https://www.instagram.com/tnchx/", primaryImage: "/images/team/martin.jpg", hoverImage: "/images/team/martin-1.jpeg" },
  { id: 16, name: "Micaela", lastName: "Poblete", birthdate: "19-10", instagramUrl: "https://www.instagram.com/micapoblete_/", primaryImage: "/images/team/micaela.jpg", hoverImage: "/images/team/micaela-1.jpg" },
  { id: 17, name: "Nadir", lastName: "Daou", birthdate: "15-12", instagramUrl: "https://www.instagram.com/nadir.daou/", primaryImage: "/images/team/nadir.jpg", hoverImage: "/images/team/nadir-1.jpg" },
  { id: 18, name: "Nancy", lastName: "Ceschin", birthdate: "26-06", instagramUrl: "https://www.instagram.com/nanyceschin/", primaryImage: "/images/team/nancy.jpg", hoverImage: "/images/team/nancy-1.jpeg" },
  { id: 19, name: "Nur", lastName: "Yamin", birthdate: "06-11", instagramUrl: "https://www.instagram.com/nur.yaminsemaan/", primaryImage: "/images/team/nur.jpg", hoverImage: "/images/team/nur-1.jpeg" },
  { id: 20, name: "Renzo", lastName: "Farjo", birthdate: "08-04", instagramUrl: "https://www.instagram.com/renzofarjo/", primaryImage: "/images/team/renzo.jpg", hoverImage: "/images/team/renzo-1.jpeg" },
  { id: 21, name: "Rocío", lastName: "Cutifani", birthdate: "10-08", instagramUrl: "https://www.instagram.com/ro_cutifani/", primaryImage: "/images/team/rocio.jpg", hoverImage: "/images/team/rocio-1.jpeg" },
  { id: 22, name: "Sol", lastName: "Sttoco", birthdate: "30-10", instagramUrl: "https://www.instagram.com/sol_sttoco/", primaryImage: "/images/team/sol-1.jpeg", hoverImage: "/images/team/sol-1.jpeg" },
  { id: 23, name: "Yamil", lastName: "Mocayar", birthdate: "04-03", instagramUrl: "https://www.instagram.com/yamilovich.ar/", primaryImage: "/images/team/yamil.jpg", hoverImage: "/images/team/yamil-1.jpeg" },
  { id: 23, name: "Yisel", lastName: "Gari", birthdate: "20-06", instagramUrl: "https://www.instagram.com/yiselgari/", primaryImage: "/images/team/yisel.jpg", hoverImage: "/images/team/yisel-1.jpeg" },
] as {
  id: string | number;
  name: string;
  lastName: string;
  birthdate: string;
  instagramUrl: string;
  primaryImage: string;
  hoverImage: string;
}[];

// Borrador: hitos de la trayectoria.
export const trayectoria = {
  title: "Trayectoria",
  lede: "Algunos momentos que nos marcaron. El mejor sigue siendo el aplauso del público.",
  rows: [
    { year: "2025", what: "Encuentro Nacional de Dabke", by: "Clase teórica sobre orígenes y estilos", where: "Argentina" },
    { year: "2025", what: "Festival de colectividades", by: "Escenario central", where: "Mendoza" },
    { year: "2024", what: "Gala aniversario de la colectividad", by: "Show principal", where: "Mendoza" },
    { year: "2022", what: "Semana de la cultura árabe", by: "Presentación y taller abierto", where: "Mendoza" },
    { year: "2014", what: "Nace DabkeArte", by: "Primer ensayo con cinco integrantes", where: "Mendoza" },
  ],
};

// Borrador: respuestas a confirmar.
export const preguntas = {
  lede: "Preguntas frecuentes sobre nuestros shows y eventos.",
  items: [
    { q: "¿Cuánto dura el show?", a: "Varía según el evento y la propuesta que elijas. Puede ser entre 10 y 35min. Está la opción de hacer un cuadro enlazado o con varios bloques." },
    { q: "¿Cuántos bailarines van?", a: "Desde dos parejas hasta el elenco completo. Lo definimos según el espacio, el presupuesto y el tipo de evento." },
    { q: "¿Qué espacio necesitan?", a: "Con un espacio de unos 3 por 3 metros alcanza. Pero si es más grande, mejor." },
    { q: "¿Llevan la música?", a: "Enviamos la música al canal de comunicación que nos pidan (WhatsApp o correo) y también la llevamos el día del evento por si hay que coordinar con el DJ encargado." },
    { q: "¿Con cuánta anticipación hay que reservar?", a: "Te recomendamos reservar la fecha con la mayor anticipación posible, para asegurarte de que podamos asistir a tu evento." },
    { q: "¿Viajan fuera de Mendoza?", a: "Sí. Consultanos por eventos en otras provincias y armamos una propuesta con traslado incluido." },
  ],
};

export const encuentro = {
  title: "Encuentro Nacional de Dabke",
  lede: "En el END compartimos y brindamos una clase. Acá podés leerla completa o descargarla.",
  doc: {
    kind: "PDF, parte teórica",
    title: "Dabke Baalbackiie",
    text: "DESDE LA RAIZ DE SUS ESTILOS A LA MODERNIDAD.",
    points: ["Hipótesis sobre el origen del dabke", "Los estilos de Baalbek y sus pasos", "Fuentes y bibliografía"],
    href: "/docs/encuentro-nacional-dabke.pdf",
    downloadName: "DabkeArte - Encuentro Nacional de Dabke.pdf",
    image: { src: "/images/gallery/32.jpg", alt: "Participantes del Encuentro Nacional de Dabke", width: 4000, height: 3000 },
  },
  videos: [
    { title: "Clásico de Fairouz", text: "Dabke de mujeres estilo clásico.", href: "https://www.youtube.com/watch?v=Q1DTP3ROLOI", src: "/images/videos/clasico-fairouz.jpg", width: 1440, height: 1080, alt: "Bailarinas con vestidos blancos abren los brazos en el escenario" },
    { title: "Dabke bedewe", text: "Dabke de hombres estilo bedewe.", href: "https://www.youtube.com/watch?v=VmW9hmI-Pwo", src: "/images/videos/dabke-bedewe.jpg", width: 1440, height: 1080, alt: "Fila de bailarines tomados de las manos en el escenario" },
    { title: "Dabke Lebnani", text: "Dabke grupal libanés.", href: "https://www.youtube.com/watch?v=E7f6cp53RGc", src: "/images/videos/dabke-lebnani.jpg", width: 1440, height: 1080, alt: "El elenco completo baila frente a la bandera del Líbano" },
  ],
};

export const contacto = {
  title: "Contactanos",
  lede: "Queremos ser parte de tu evento.",
  image: { src: "/images/gallery/11.jpg", alt: "El elenco con vestuario azul en un escenario", width: 1600, height: 1200 },
  eventTypes: ["Casamiento", "Cumpleaños o quince", "Evento institucional", "Festival", "Clase o taller", "Otro"],
};

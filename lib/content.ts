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
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=100031039077291" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@dabkeartemendoza6982" },
];

export const nav = [
  { href: "#shows", label: "Shows" },
  { href: "#como-contratar", label: "Cómo contratar" },
  { href: "#elenco", label: "Elenco" },
  { href: "#galeria", label: "Galería" },
  { href: "#encuentro", label: "Encuentro" },
];

export const hero = {
  city: "Mendoza",
  image: { src: "/images/hero/17.jpeg", alt: "DabkeArte en escena, con fuego de fondo", width: 1600, height: 1068 },
  lede: "Folclore árabe en vivo desde 2014.",
  ledeMuted: "Una fila, un mismo golpe y toda la energía del dabke para tu evento.",
  list: ["Casamientos", "Cumpleaños y aniversarios", "Eventos de la colectividad", "Festivales y escenarios"],
  card: { role: "Contrataciones", roleMuted: "Respondemos por WhatsApp", name: "Llevá el dabke a tu fiesta" },
};

// Borrador: nombres y años de cada presentación.
export const presentaciones = [
  { name: "Noche de la colectividad", kind: "Escenario", year: "2025", src: "/images/hero/22.webp", width: 1280, height: 853, alt: "La fila de bailarinas en el escenario", wide: true },
  { name: "Festival de folclore árabe", kind: "Festival", year: "2025", src: "/images/hero/2.jpeg", width: 1280, height: 828, alt: "Cuadro de dabke con vestuario rojo" },
  { name: "Estilos de Baalbek", kind: "Cuadro de repertorio", year: "2024", src: "/images/galery/5.jpg", width: 1178, height: 1134, alt: "Elenco con vestuario azul" },
  { name: "Gala aniversario", kind: "Evento institucional", year: "2024", src: "/images/galery/12.jpg", width: 1600, height: 1200, alt: "El elenco con vestuario tradicional" },
  { name: "Casamiento al aire libre", kind: "Evento privado", year: "2023", src: "/images/hero/12.jpeg", width: 1600, height: 1200, alt: "El grupo con vestuario tradicional en un jardín" },
];

export const manifiesto = {
  image: { src: "/images/galery/13.jpg", alt: "Bailarines de DabkeArte con vestuario rojo", width: 1200, height: 1600 },
  text: "Nacimos en 2014 para darle a la colectividad árabe de Mendoza un grupo estable que represente a cada sirio y libanés de este suelo. Empezamos siendo ocho. Hoy somos veintisiete, unidos por la misma fila y el mismo golpe.",
  sign: "DabkeArte Mendoza",
  signMuted: "Grupo de folclore árabe desde 2014",
};

export const shows = {
  lede: "Formatos pensados para cada celebración, con vestuario, música y una fila que invita a todos a bailar.",
  items: [
    {
      name: "Casamientos",
      text: "La entrada de los novios, el momento de la torta o el cierre de la fiesta: armamos un cuadro de dabke que hace levantar a todos de la silla.",
      tags: ["Entrada de novios", "Show central", "Baile con invitados"],
      image: { src: "/images/hero/11.jpeg", alt: "Elenco con vestuario dorado sobre el escenario", width: 1280, height: 847 },
    },
    {
      name: "Cumpleaños y fiestas",
      text: "Quince, cumpleaños, aniversarios y reuniones familiares. Adaptamos la duración y el repertorio al espacio y al público.",
      tags: ["Quince años", "Aniversarios", "Fiestas familiares"],
      image: { src: "/images/hero/19.jpeg", alt: "Bailarines con vestuario tradicional al aire libre", width: 1600, height: 1200 },
    },
    {
      name: "Eventos institucionales",
      text: "Actos de la colectividad, festivales, ferias culturales y escenarios municipales. Representamos al Levante árabe con respeto por la tradición.",
      tags: ["Colectividad", "Festivales", "Actos culturales"],
      image: { src: "/images/hero/4.jpg", alt: "El grupo completo con vestuario rojo", width: 1600, height: 1200 },
    },
    {
      name: "Clases y talleres",
      text: "Clases de nivel básico y avanzado, y talleres para escuelas, empresas o grupos que quieran aprender a bailar en fila.",
      tags: ["Nivel básico", "Nivel avanzado", "Talleres a medida"],
      image: { src: "/images/galery/15.jpg", alt: "Ensayo de dabke en un salón", width: 1256, height: 670 },
    },
  ],
  footNote: "¿No sabés qué formato elegir? Contanos la fecha y el lugar, y te proponemos el show que mejor encaja.",
};

export const proceso = {
  title: "Una fila, un golpe",
  image: { src: "/images/hero/hero.jpeg", alt: "La fila de DabkeArte en un escenario iluminado", width: 1280, height: 853 },
  caption: "El dabke se baila de la mano. Cuando la fila golpea el piso al mismo tiempo, el salón entero lo siente.",
  stepsTitle: "Cómo contratarnos",
  stepsLede: "Cuatro pasos y una sola persona que te responde. Así llegás al día del show sin sorpresas.",
  steps: [
    { when: "El primer mensaje", title: "Escribinos", text: "Contanos la fecha, el lugar y qué tipo de evento estás organizando." },
    { when: "En 48 horas", title: "Armamos la propuesta", text: "Te enviamos formato, duración, cantidad de bailarines y presupuesto." },
    { when: "La semana previa", title: "Ensayo y vestuario", text: "Coordinamos la música, el espacio y los tiempos con tu organizador." },
    { when: "El gran día", title: "El show", text: "Llegamos con tiempo, bailamos y sumamos a tus invitados a la fila." },
  ],
};

// Borrador: reseñas de ejemplo.
export const resenas = {
  scoreText: "Bailando dabke en casamientos, cumpleaños, festivales y eventos de la colectividad.",
  items: [
    { text: "Entraron en la fiesta y en dos minutos estaban todos los invitados bailando en fila. Fue el mejor momento de la noche.", name: "Lucía y Martín", where: "Casamiento" },
    { text: "Súper puntuales y organizados. Se adaptaron al salón y al horario sin ningún problema.", name: "Carolina M.", where: "Cumpleaños de 50" },
    { text: "Representan a la colectividad con muchísimo respeto y alegría. Siempre los volvemos a convocar.", name: "Comisión directiva", where: "Evento institucional" },
    { text: "El vestuario, la música y la energía. Mis abuelos se emocionaron al ver el dabke de su tierra.", name: "Sofía A.", where: "Quince años" },
    { text: "Hicimos un taller con el equipo de trabajo y terminamos todos bailando. Una experiencia distinta.", name: "Recursos Humanos", where: "Taller para empresas" },
  ],
};

// Borrador: cifras intermedias y cita.
export const cifras = {
  title: "Una historia que crece en cada fila.",
  lede: "De un grupo de ocho amigos a un elenco estable que baila en toda la provincia.",
  caseTile: {
    label: "Formación",
    brand: "Encuentro Nacional de Dabke",
    sub: "Compartimos la parte teórica: orígenes y estilos",
    image: { src: "/images/galery/2.jpg", alt: "Encuentro de dabke con bailarines de varios grupos", width: 4000, height: 3000 },
  },
  figs: [
    { num: "2014", label: "El año en que nació el grupo" },
    { num: "8 → 27", label: "Integrantes, del primer ensayo a hoy" },
    { num: "+150", label: "Presentaciones en escenarios y eventos" },
  ],
  quote: { text: "Cada vez que bailamos, alguien del público se suma a la fila. Esa es nuestra mejor cifra.", by: "Elenco de DabkeArte" },
  ring: { value: 6, max: 6, title: "Estilos de dabke de Baalbek en el repertorio", text: "Estudiamos cada estilo con sus pasos, su ritmo y su historia." },
  bars: {
    num: "27",
    label: "Bailarines estables en el elenco",
    data: [
      { label: "2014", value: 8 },
      { label: "2016", value: 12 },
      { label: "2018", value: 16 },
      { label: "2020", value: 18 },
      { label: "2023", value: 23 },
      { label: "2026", value: 27 },
    ],
  },
};

export const galeria = {
  title: "Así se vive el dabke.",
  text: "Ensayos, viajes, festivales y escenarios. Seguinos en Instagram para ver cada presentación.",
  shots: [
    { src: "/images/galery/1.jpg", alt: "El grupo con la bandera argentina", width: 4000, height: 3000, speed: 0.3 },
    { src: "/images/hero/20.jpeg", alt: "Integrantes después de un show", width: 1600, height: 1200, speed: 0.1 },
    { src: "/images/galery/9.jpg", alt: "Bailarines con vestuario azul", width: 1600, height: 1200, speed: 0.45 },
    { src: "/images/hero/13.jpg", alt: "Integrantes con vestuario tradicional", width: 720, height: 716, speed: 0.2 },
    { src: "/images/hero/5.jpg", alt: "Cuadro de dabke con vestuario negro y dorado", width: 1600, height: 900, speed: 0.33 },
  ],
};

export const elenco = {
  title: "La fila completa.",
  lede: "Las personas que ensayan cada semana y suben al escenario de la mano. Tocá una foto para ver su Instagram.",
};

export const team = [
  { name: "Aldana Arenas", src: "/images/team/aldana.jpeg", social: "https://www.instagram.com/aldyarenas/" },
  { name: "Andrea Fuentes", src: "/images/team/andrea.jpeg", social: "https://www.instagram.com/andrefuentesgomez/" },
  { name: "Ariel Elias", src: "/images/team/ariel.jpg", social: "https://www.instagram.com/arielo_elias/" },
  { name: "Camila Quiroga", src: "/images/team/camilaQ.jpeg", social: "https://www.instagram.com/camiqnacif/" },
  { name: "Daniela Amín", src: "/images/team/daniela.jpeg", social: "https://www.instagram.com/dani.amin.11/" },
  { name: "Fátima Taha", src: "/images/team/fatima.jpeg", social: "https://www.instagram.com/fatima.tahaa/" },
  { name: "Florencia Amín", src: "/images/team/florenciaA.jpeg", social: "https://www.instagram.com/florcitamin/" },
  { name: "Florencia Cuillieri", src: "/images/team/florC.jpeg", social: "https://www.instagram.com/florcuillieri/" },
  { name: "Florencia Munafó", src: "/images/team/florenciaM.jpeg", social: "https://www.instagram.com/flor_munafo_bellydancer/" },
  { name: "Gisel Guzman", src: "/images/team/gisel.jpeg", social: "https://www.instagram.com/gisel_guzman_/" },
  { name: "Guillermina Elias", src: "/images/team/guillermina.jpeg", social: "https://linktr.ee/gelias" },
  { name: "Mauge Cassar", src: "/images/team/mauge.jpeg", social: "https://www.instagram.com/mauge.cassar/" },
  { name: "Maca Della Gaspera", src: "/images/team/macarena.png", social: "https://www.instagram.com/macadg0295/" },
  { name: "Magalí Mafauad", src: "/images/team/magali.jpeg" },
  { name: "Martín Bulfon", src: "/images/team/martin.jpeg", social: "https://www.instagram.com/tnchx/" },
  { name: "Micaela Poblete", src: "/images/team/mica.jpg", social: "https://www.instagram.com/micapoblete_/" },
  { name: "Nadir Daou", src: "/images/team/nadir.jpg" },
  { name: "Nancy Ceschin", src: "/images/team/nancy.jpeg", social: "https://www.instagram.com/nanyceschin/" },
  { name: "Nur Yamin", src: "/images/team/nur.jpeg", social: "https://www.instagram.com/nur.yaminsemaan/" },
  { name: "Renzo Farjo", src: "/images/team/renzo.jpeg", social: "https://www.instagram.com/renzofarjo/" },
  { name: "Rocío Cutifani", src: "/images/team/rocio.jpeg", social: "https://www.instagram.com/ro_cutifani/" },
  { name: "Sol Sttoco", src: "/images/team/sol.jpeg", social: "https://www.instagram.com/sol_sttoco/" },
  { name: "Yamil Mocayar", src: "/images/team/yamil.jpeg", social: "https://www.instagram.com/yamilovich.ar/" },
  { name: "Yisel Gari", src: "/images/team/yisel.jpeg", social: "https://www.instagram.com/yiselgari/" },
] as { name: string; src: string; social?: string }[];

// Borrador: hitos de la trayectoria.
export const trayectoria = {
  title: "Trayectoria",
  lede: "Algunos momentos que nos marcaron. El mejor sigue siendo cuando el público se suma a la fila.",
  rows: [
    { year: "2025", what: "Encuentro Nacional de Dabke", by: "Clase teórica sobre orígenes y estilos", where: "Argentina" },
    { year: "2025", what: "Festival de colectividades", by: "Escenario central", where: "Mendoza" },
    { year: "2024", what: "Gala aniversario de la colectividad", by: "Show principal", where: "Mendoza" },
    { year: "2022", what: "Semana de la cultura árabe", by: "Presentación y taller abierto", where: "Mendoza" },
    { year: "2014", what: "Nace DabkeArte", by: "Primer ensayo con ocho integrantes", where: "Mendoza" },
  ],
};

// Borrador: respuestas a confirmar.
export const preguntas = {
  lede: "Lo que suelen consultarnos antes de cerrar una fecha.",
  items: [
    { q: "¿Cuánto dura el show?", a: "Entre 15 y 40 minutos, según el formato. Podemos hacer un cuadro corto de entrada o un show con varios bloques." },
    { q: "¿Cuántos bailarines van?", a: "Desde cuatro parejas hasta el elenco completo. Lo definimos según el espacio, el presupuesto y el tipo de evento." },
    { q: "¿Qué espacio necesitan?", a: "Con una pista de unos 4 por 4 metros alcanza para un cuadro. Si el lugar es más chico, adaptamos la coreografía." },
    { q: "¿Llevan la música?", a: "Sí. Llevamos la música en un pendrive o un teléfono y la coordinamos con el DJ o el sonido del salón." },
    { q: "¿Con cuánta anticipación hay que reservar?", a: "Lo ideal es escribirnos con uno o dos meses de anticipación, sobre todo en temporada de casamientos." },
    { q: "¿Viajan fuera de Mendoza?", a: "Sí. Consultanos por eventos en otras provincias y armamos una propuesta con traslado incluido." },
  ],
};

export const encuentro = {
  title: "Encuentro Nacional de Dabke",
  lede: "En el Encuentro Nacional compartimos la parte teórica del dabke. Acá podés leerla completa o descargarla.",
  doc: {
    kind: "PDF, parte teórica",
    title: "Orígenes y estilos del dabke",
    text: "El material que presentamos en el Encuentro Nacional de Dabke: de dónde viene la danza y cómo se baila cada estilo.",
    points: ["Hipótesis sobre el origen del dabke", "Los estilos de Baalbek y sus pasos", "Fuentes y bibliografía"],
    href: "/docs/encuentro-nacional-dabke.pdf",
    downloadName: "DabkeArte - Encuentro Nacional de Dabke.pdf",
    image: { src: "/images/galery/3.jpg", alt: "Participantes del Encuentro Nacional de Dabke", width: 4000, height: 3000 },
  },
  videos: [
    { title: "El dabke en escena", text: "Cuadros y presentaciones del elenco.", src: "/images/hero/16.jpeg", width: 1280, height: 853, alt: "La fila de bailarinas en el escenario" },
    { title: "Ensayos y talleres", text: "Cómo preparamos cada coreografía.", src: "/images/galery/14.jpg", width: 1600, height: 1200, alt: "Ensayo en un salón" },
    { title: "Fiestas y eventos", text: "El dabke cuando el público se suma a la fila.", src: "/images/hero/9.jpg", width: 1080, height: 804, alt: "Integrantes en una fiesta" },
  ],
};

export const contacto = {
  title: "Contratanos",
  lede: "Contanos qué estás celebrando. Te respondemos por WhatsApp con una propuesta para tu evento.",
  notes: [
    { title: "Respuesta rápida", text: "Te contestamos en el día, de una persona del grupo." },
    { title: "Propuesta a medida", text: "Formato, duración y presupuesto en menos de 48 horas." },
  ],
  image: { src: "/images/galery/11.jpg", alt: "El elenco con vestuario azul en un escenario", width: 1600, height: 1200 },
  eventTypes: ["Casamiento", "Cumpleaños o quince", "Evento institucional", "Festival", "Clase o taller", "Otro"],
};

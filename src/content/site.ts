/**
 * TODA la data de la landing vive aquí. Frank llena este archivo y listo.
 * Los campos marcados con TODO están pendientes de confirmar: no se inventan.
 */

export interface Curso {
  id: string;
  nombre: string;
  /** Para quién es (nivel / grados). */
  para: string;
  /** Una frase que explica el curso con la voz de la profe. */
  detalle: string;
  /** Qué incluye. */
  incluye: string[];
  /** TODO: precio. `null` muestra "consúltalo por WhatsApp". Ej: 'S/ 120 el ciclo'. */
  precio: string | null;
  /** Foto de la tarjeta (ruta bajo /public). Generadas con Gemini a pedido de Frank (scripts/generar-imagenes.mjs, prompts en .impeccable/prompts/). */
  foto: string;
  fotoAlt: string;
  /** Mensaje prellenado del WhatsApp para este curso. */
  mensaje: string;
}

export interface Tema {
  nombre: string;
  texto: string;
}

export interface Paso {
  /** Etiqueta corta de la fila: "Paso 1". */
  etiqueta: string;
  titulo: string;
  texto: string;
}

export interface Horario {
  curso: string;
  nivel: string;
  dias: string;
  hora: string;
}

export interface Testimonio {
  nombre: string;
  /** Texto del testimonio. Si es una captura, usa `imagen` y deja `texto` vacío. */
  texto?: string;
  /** Ruta bajo /public, ej. '/img/testimonios/ana.jpg'. */
  imagen?: string;
  /** Ej. "4.º de secundaria" o "mamá de un alumno". */
  detalle?: string;
}

export const site = {
  nombre: 'Miss Karla',
  nombreCompleto: 'Karla Cornejo Flores',
  rol: 'Profesora de matemática',
  /** El rol partido en líneas para el hero (como en la referencia). */
  rolLineas: ['Profesora de', 'matemática'],
  claim: 'Matemática desde cero',

  // TODO: dominio final. Por ahora Cloudflare Pages.
  dominio: 'https://misskarla.pages.dev',

  /**
   * `true` muestra chips "TODO" y marca las fotos de ejemplo. Desde el 2026-09-05
   * está en `false`: Frank pidió llenar todo con datos provisionales (ver los
   * comentarios PROVISIONAL) para que la página se vea completa.
   */
  mostrarPendientes: false,

  /** TODO: confirmar si se usa "Tu fe es tu fortuna". `null` = no se muestra. */
  lema: null as string | null,

  /** PROVISIONAL (Frank, 2026-09-05): 15 años. Confirmar con Karla. */
  aniosEnsenando: 15 as number | null,

  nav: [
    { texto: 'Inicio', href: '#inicio' },
    { texto: 'Cursos', href: '#cursos' },
    { texto: 'Te ayudo con', href: '#te-ayudo' },
    { texto: 'Cómo funciona', href: '#como-funciona' },
    { texto: 'En vivo', href: '#en-vivo' },
  ],

  hero: {
    /** El saludo cursivo, una palabra a cada lado de la cabeza. */
    saludo: ['Hola,', 'soy'],
    /** El nombre gigante en dos líneas. */
    nombreLineas: ['Miss', 'Karla'],
    /** La píldora con punto de acento. Debe ser algo cierto siempre. */
    pildora: 'Lives a diario en TikTok',
    parrafo: 'Matemática desde cero para secundaria. Paso a paso, con paciencia y 100% garantizado.',
  },

  redes: {
    tiktok: {
      handle: '@karlacornejo242',
      url: 'https://www.tiktok.com/@karlacornejo242',
      seguidoresTexto: '61.5K',
    },
    instagram: {
      handle: '@karlapatriciacorn',
      url: 'https://www.instagram.com/karlapatriciacorn',
    },
  },

  mensajes: {
    general: 'Hola Miss Karla, vi tu página y quiero información sobre tus clases de matemática.',
    horarios: 'Hola Miss Karla, ¿me pasas los horarios del ciclo actual?',
    padres: 'Hola Miss Karla, soy mamá/papá de un alumno y quiero saber cómo funcionan tus clases.',
  },

  cursos: [
    {
      id: 'desde-cero',
      nombre: 'Matemática desde cero',
      para: 'Secundaria · nivel básico y pre-intermedio',
      detalle: 'Para quienes se perdieron en algún punto y quieren entender de verdad, sin vergüenza de preguntar.',
      incluye: ['Clases en vivo por videollamada', 'Grabación de cada clase', 'Fichas en PDF', 'Ciclo de 9 semanas'],
      precio: 'S/ 180 el ciclo de 9 semanas', // PROVISIONAL: precio imaginario, confirmar con Karla
      foto: '/img/cursos/desde-cero.webp',
      fotoAlt: 'Estudiante de secundaria resolviendo ejercicios en su cuaderno durante una clase virtual',
      mensaje: 'Hola Miss Karla, quiero información sobre el curso Matemática desde cero.',
    },
    {
      id: 'refuerzo',
      nombre: 'Refuerzo escolar',
      para: '5.º y 6.º de primaria · 1.º a 4.º de secundaria',
      detalle: 'Aritmética, Álgebra, Geometría, Trigonometría y Razonamiento Matemático, al ritmo del colegio.',
      incluye: ['Clases en vivo', 'Fichas en PDF'],
      precio: 'S/ 120 al mes', // PROVISIONAL: precio imaginario, confirmar con Karla
      foto: '/img/cursos/refuerzo.webp',
      fotoAlt: 'Dos niños de primaria haciendo la tarea de matemática juntos en la mesa',
      mensaje: 'Hola Miss Karla, quiero información sobre el refuerzo escolar.',
    },
    {
      id: 'concursos',
      nombre: 'Taller de concursos',
      para: 'Para quienes quieren ir más allá del colegio',
      detalle: 'Matemática y Razonamiento Matemático orientados a concursos escolares.',
      incluye: ['Clases en vivo', 'Fichas en PDF'],
      precio: 'S/ 150 al mes', // PROVISIONAL: precio imaginario, confirmar con Karla
      foto: '/img/cursos/concursos.webp',
      fotoAlt: 'Estudiante resolviendo un problema de geometría en la pizarra',
      mensaje: 'Hola Miss Karla, quiero información sobre el taller de concursos.',
    },
    {
      id: 'clases-grabadas',
      nombre: 'Clases grabadas',
      para: 'A tu ritmo, desde donde estés',
      detalle: 'Los temas básicos explicados desde cero, para verlos las veces que necesites.',
      incluye: ['28 clases grabadas', 'Fichas en PDF'],
      precio: 'S/ 90 el paquete completo', // PROVISIONAL: precio imaginario, confirmar con Karla
      foto: '/img/cursos/clases-grabadas.webp',
      fotoAlt: 'Estudiante viendo una clase grabada en su laptop por la noche',
      mensaje: 'Hola Miss Karla, quiero información sobre el paquete de clases grabadas.',
    },
  ] satisfies Curso[],

  temas: [
    { nombre: 'Aritmética', texto: 'Números, operaciones, fracciones y porcentajes. La base de todo lo demás.' },
    { nombre: 'Álgebra', texto: 'Ecuaciones, polinomios y funciones explicados paso a paso, sin saltos.' },
    { nombre: 'Geometría y Trigonometría', texto: 'Figuras, ángulos y razones trigonométricas con dibujos claros.' },
    { nombre: 'Razonamiento Matemático', texto: 'Estrategias para los problemas del colegio y de los concursos.' },
  ] satisfies Tema[],

  comoEnseno: {
    titulo: 'Clases en vivo por videollamada, con grabación y fichas para repasar.',
    texto:
      'Empezamos desde lo más básico y avanzamos al ritmo del grupo. Si algo no se entendió, se vuelve a explicar: para eso está la clase.',
    padres: 'Si eres mamá o papá: yo misma respondo el WhatsApp y te explico cómo funciona todo antes de pagar.',
    /** Video real de Karla (TikTok), recortado a 14 s con scripts/videos.mjs → public/video/como-enseno.* */
    video: { nombre: 'como-enseno', id: '7676355502724467988', titulo: 'Karla explica cómo enseña: paso a paso y con paciencia' },
  },

  pasos: [
    {
      etiqueta: 'Paso 1',
      titulo: 'Me escribes al WhatsApp',
      texto: 'Te confirmo el cupo y el horario del ciclo. Reservas con tu pago por adelantado.',
    },
    {
      etiqueta: 'Paso 2',
      titulo: 'Entras al grupo del curso',
      texto: 'Te agrego al grupo seleccionado. Por ahí te llega todo el material y los avisos.',
    },
    {
      etiqueta: 'Paso 3',
      titulo: 'Empiezan las clases',
      texto: 'Clases en vivo, grabación de cada una y tus fichas en PDF para practicar.',
    },
  ] satisfies Paso[],

  /**
   * PROVISIONAL (2026-09-05): horarios imaginarios para que la sección se vea
   * completa. Cambian por ciclo: reemplazar por los reales antes de publicar.
   * Vacío = se ofrece pasarlos por WhatsApp.
   */
  horarios: [
    { curso: 'Matemática desde cero', nivel: 'Básico', dias: 'Lunes, miércoles y viernes', hora: '4:00 a 5:30 p.m.' },
    { curso: 'Matemática desde cero', nivel: 'Pre-intermedio', dias: 'Lunes, miércoles y viernes', hora: '6:00 a 7:30 p.m.' },
    { curso: 'Refuerzo escolar', nivel: 'Primaria', dias: 'Martes y jueves', hora: '4:00 a 5:00 p.m.' },
    { curso: 'Refuerzo escolar', nivel: 'Secundaria', dias: 'Martes y jueves', hora: '5:30 a 7:00 p.m.' },
    { curso: 'Taller de concursos', nivel: 'Avanzado', dias: 'Sábados', hora: '9:00 a 11:00 a.m.' },
  ] as Horario[],

  /**
   * Galería de "Mírame en vivo": clips reales de sus TikToks (Frank los bajó el 2026-09-05).
   * Cada uno sale de `node scripts/videos.mjs <video.mp4> <nombre>` → public/video/<nombre>.{webm,mp4,webp}.
   * `id` es el id del video en TikTok; arma el enlace al video completo.
   */
  videos: [
    { nombre: 'tiktok-1', id: '7637612288534416661', titulo: 'Leyes de la potenciación, explicadas desde cero' },
    { nombre: 'tiktok-2', id: '7664787023886093588', titulo: '¿Por qué cero entre cero es indeterminado?' },
    { nombre: 'tiktok-3', id: '7664823619624635668', titulo: 'Simplificando potencias con x' },
    { nombre: 'tiktok-4', id: '7677751370891545877', titulo: 'Signos y potencias: (−3)² no es −3²' },
  ],

  /**
   * PROVISIONAL (2026-09-05): reseñas imaginarias, escritas como las que suelen
   * dejar alumnos y padres. Reemplazar por testimonios reales antes de publicar.
   */
  testimonios: [
    {
      nombre: 'Valeria',
      detalle: '3.º de secundaria',
      texto: 'Yo le tenía miedo a álgebra. La Miss empezó desde lo más básico y por primera vez entendí de dónde salen las cosas. Subí de 09 a 16 en un bimestre.',
    },
    {
      nombre: 'Rosa',
      detalle: 'mamá de un alumno de 1.º',
      texto: 'Lo que más valoro es que ella misma responde el WhatsApp y me explica cómo va mi hijo. Las clases quedan grabadas y él las repasa antes de los exámenes.',
    },
    {
      nombre: 'Diego',
      detalle: '5.º de secundaria',
      texto: 'Explica con paciencia y no te hace sentir mal por preguntar. Los lives de TikTok me ayudaron a decidirme y las fichas en PDF son lo mejor para practicar.',
    },
  ] as Testimonio[],
};

export type Site = typeof site;

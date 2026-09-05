/**
 * TODA la data de la landing vive aquí. Frank llena este archivo y listo.
 * Los campos marcados con TODO están pendientes de confirmar: no se inventan.
 */

export type ColorMarca = 'magenta' | 'turquesa' | 'dorado' | 'rosa';
export type IconoCurso = 'libro' | 'trofeo' | 'play' | 'lapiz';

export interface Curso {
  id: string;
  nombre: string;
  /** Para quién es (nivel / grados). */
  para: string;
  /** Una frase que explica el curso con la voz de la profe. */
  detalle: string;
  /** Solo el curso destacado muestra la lista completa. */
  incluye: string[];
  /** TODO: precio. `null` muestra "consúltalo por WhatsApp". Ej: 'S/ 120 el ciclo'. */
  precio: string | null;
  color: ColorMarca;
  icono: IconoCurso;
  /** Chip corto opcional (ej. "28 clases + fichas PDF"). */
  chip?: string;
  destacado?: boolean;
  /** Mensaje prellenado del WhatsApp para este curso. */
  mensaje: string;
}

export interface Paso {
  titulo: string;
  texto: string;
  icono: 'billete' | 'celular' | 'carpeta';
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
  rol: 'Docente de matemática',
  claim: 'Matemática desde cero',

  // TODO: dominio final. Por ahora Cloudflare Pages.
  dominio: 'https://misskarla.pages.dev',

  /**
   * Mientras sea `true`, la página muestra chips "TODO" y los bloques
   * pendientes (testimonios) para que se vean en revisión. Ponlo en `false`
   * antes de publicar.
   */
  mostrarPendientes: true,

  /**
   * TODO: decidir el CTA principal.
   *  - 'directo'    → todos los botones abren WhatsApp con mensaje prellenado.
   *  - 'formulario' → el hero manda al formulario del cierre (nombre + celular),
   *                   que luego abre WhatsApp con esos datos en el mensaje.
   */
  ctaModo: 'directo' as 'directo' | 'formulario',

  /** TODO: confirmar si se usa "Tu fe es tu fortuna". `null` = no se muestra. */
  lema: null as string | null,

  redes: {
    tiktok: {
      handle: '@karlacornejo242',
      url: 'https://www.tiktok.com/@karlacornejo242',
      /** En miles. */
      seguidores: 61.5,
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
  },

  cursos: [
    {
      id: 'desde-cero',
      nombre: 'Matemática desde cero',
      para: 'Secundaria · nivel básico y pre-intermedio',
      detalle:
        'Para quienes se perdieron en algún punto y quieren entender de verdad, sin vergüenza de preguntar.',
      incluye: [
        'Clases en vivo por videollamada',
        'Grabación de cada clase y fichas en PDF',
        'Ciclo de 9 semanas',
        'Grupo del curso por donde llega todo el material',
      ],
      precio: null, // TODO
      color: 'magenta',
      icono: 'lapiz',
      destacado: true,
      mensaje: 'Hola Miss Karla, quiero información sobre el curso Matemática desde cero.',
    },
    {
      id: 'refuerzo',
      nombre: 'Refuerzo escolar',
      para: '5.º y 6.º de primaria · 1.º a 4.º de secundaria',
      detalle:
        'Aritmética, Álgebra, Geometría, Trigonometría y Razonamiento Matemático, al ritmo del colegio.',
      incluye: [],
      precio: null, // TODO
      color: 'turquesa',
      icono: 'libro',
      mensaje: 'Hola Miss Karla, quiero información sobre el refuerzo escolar.',
    },
    {
      id: 'concursos',
      nombre: 'Taller de concursos',
      para: 'Para quienes quieren ir más allá del colegio',
      detalle: 'Matemática y Razonamiento Matemático orientados a concursos escolares.',
      incluye: [],
      precio: null, // TODO
      color: 'dorado',
      icono: 'trofeo',
      mensaje: 'Hola Miss Karla, quiero información sobre el taller de concursos.',
    },
    {
      id: 'clases-grabadas',
      nombre: 'Clases grabadas',
      para: 'A tu ritmo, desde donde estés',
      detalle: 'Los temas básicos explicados desde cero, para verlos las veces que necesites.',
      incluye: [],
      precio: null, // TODO
      color: 'rosa',
      icono: 'play',
      chip: '28 clases + fichas PDF',
      mensaje: 'Hola Miss Karla, quiero información sobre el paquete de clases grabadas.',
    },
  ] satisfies Curso[],

  pasos: [
    {
      titulo: 'Reservas con tu pago',
      texto: 'Me escribes, te confirmo el cupo y haces el pago por adelantado.',
      icono: 'billete',
    },
    {
      titulo: 'Te agrego al grupo',
      texto: 'Entras al grupo del curso, por donde te llega todo el material.',
      icono: 'celular',
    },
    {
      titulo: 'Recibes tu material',
      texto: 'Fichas en PDF y las clases grabadas, además de las clases en vivo del ciclo.',
      icono: 'carpeta',
    },
  ] satisfies Paso[],

  /**
   * TODO: horarios exactos del ciclo actual. Cambian por ciclo, por eso no se
   * copian de los flyers. Vacío = se muestra "consúltalo por WhatsApp".
   * Ej: { curso: 'Matemática desde cero', nivel: 'Básico', dias: 'Lun, Mié y Vie', hora: '4:00 a 6:00 p.m.' }
   */
  horarios: [] as Horario[],

  /**
   * TODO: Frank decide si van capturas reales de comentarios o textos.
   * Vacío = se muestra el bloque pendiente (si mostrarPendientes es true).
   */
  testimonios: [] as Testimonio[],
};

export type Site = typeof site;

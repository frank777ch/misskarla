# Referencia: heynesh.com (Nenad Popadic, "NESH")

Sitio personal de un desarrollador Webflow. Frank lo eligió como **modelo de vibe y de
animación**, no para copiar. Capturas en esta carpeta (`heynesh-*.png`).

> Regla: no se copia código, CSS ni textos de este sitio. Se recrean las técnicas con
> nuestro stack (Astro + Tailwind + GSAP). Las fuentes que usa son de pago y no se usan.

## Stack de la referencia
- Webflow + GSAP 3.15 (ScrollTrigger, SplitText, Flip, ScrollSmoother) + Lenis + Swiper.
- Un solo script propio de ~110 KB que orquesta todo ("Animation Engine v2.5").
- Fuentes: **PP Neue Montreal** (títulos, bold) y **Tr 3 A** (texto). Ambas comerciales.
- Paleta: arena `#d6cfbd` aprox. (fondo), amarillo ácido `#ffff23`, negro, blanco,
  y bloques oscuros `#111`/`#000` en la sección de proyectos.

## Por qué funciona (lo que vale la pena tomar)

1. **El nombre es el hero.** "NESH" ocupa el 100% del ancho, en amarillo, y la foto
   recortada se superpone encima. Nombre + cara = marca. Nada más compite.
2. **Un solo color de acento** (amarillo) sobre un fondo cálido neutro. Todo lo demás es
   negro o blanco. Por eso no parece plantilla: hay disciplina de color.
3. **Datos flotando sobre la foto** en tarjetas semitransparentes con blur: "80+ Projects",
   "7+ Years", lista de 5 adjetivos. Prueba social pegada a la persona, no en otra sección.
4. **Título corto de tres líneas** ("Webflow, Applied Differently.") en blanco, encima del
   pecho de la foto, con dos botones debajo. Copy de una idea.
5. **Nav que nace del hero.** En desktop, al hacer scroll, el logo, los links y las
   tarjetas de datos "vuelan" a un sidebar fijo a la izquierda (técnica FLIP con
   ScrollTrigger scrub). La página se siente como una sola pieza.
6. **Timeline personal con curva SVG** ("'19, '20, '21…") con tarjetas tipo post y avatar.
   Cuenta la historia de la persona. Muy adaptable a "cómo llegué a enseñar".
7. **Cambio de tema por sección**: la página pasa de arena a negro para los proyectos y
   vuelve a arena. El contraste marca capítulos sin necesidad de tarjetas.
8. **Texto grande con chips incrustados** (íconos amarillos dentro del párrafo gigante).
   Da personalidad sin ilustraciones.
9. **Precios claros** en tarjetas de una columna en móvil, con lista de viñetas y nota.

## Secuencia de animación de entrada (desktop, medida del código)

Total ~4 s. En móvil (<768 px) el preloader se desactiva: la página aparece directo.

| t (s) | Qué pasa | Cómo |
|-------|----------|------|
| 0.0–1.0 | Fondo arena vacío, el logo "NESH" gigante entra letra por letra desde abajo | `yPercent: 110 → 0`, `stagger 0.2`, `ease power3.out`, cada letra dentro de un contenedor con `overflow: hidden` |
| 1.0–2.0 | El logo sube de centro a su posición final arriba | `x/y → 0`, `ease power2.inOut` |
| 1.4 | Empieza el "heroReveal" mientras el logo aún sube | label de timeline |
| +0.0 | Foto: aparece desde abajo con blur y escala | `autoAlpha 0→1`, `scale 0.88→1`, `blur(20px)→0`, `transformOrigin center bottom`, 1.1 s |
| +0.3 | Título línea por línea con blur y escala | `scale 0.9→1`, `blur(10px)→0`, `stagger 0.1` |
| +0.6 | Links del nav suben dentro de máscaras (sin opacidad) | `yPercent 100→0`, 0.4 s |
| +0.6 → +1.2 | Tarjetas de datos, una cada 0.1 s | `autoAlpha` + `blur(8px)→0`, 0.9 s |
| +1.25 | Botones | `scale 0.94→1` + blur, 0.8 s |
| +1.65 | Párrafos laterales línea por línea | SplitText en líneas, `yPercent 100→0` + blur leve, `stagger 0.075` |

Patrones que se repiten en todo el sitio:
- **Nunca solo opacidad.** Siempre opacidad + blur + un poco de escala o desplazamiento.
- **Máscaras de línea** (`overflow: hidden` + `yPercent`) para textos, no fade.
- Eases: `power2.out` para entradas, `power3.inOut`/`power2.inOut` para movimientos de
  posición, `expo.out` (1.1 s) para tarjetas de proyectos al entrar en viewport.
- Scroll suave con Lenis sincronizado con ScrollTrigger.
- Los elementos del hero se desvanecen al hacer scroll (`opacity 0`, `scale 0.3`,
  desplazamiento) entre `5% top` y `20% top` del hero.

## Traducción a Miss Karla (propuesta inicial, para discutir en `shape`)

- **Hero:** "KARLA" o "MISS KARLA" ocupando todo el ancho, la foto recortada encima,
  frase de tres líneas tipo "Matemática. Desde cero. Contigo." y un solo botón verde de
  WhatsApp. Datos flotantes sobre la foto: seguidores en TikTok, lives diarios, años
  enseñando (TODO confirmar).
- **Color:** un solo acento fuerte sobre fondo claro cálido. Decidir cuál de la paleta de
  `brand.md` toma ese rol (candidatos: magenta o dorado). Marino pasa a ser el "negro".
- **Timeline personal:** "Cómo llegué a enseñar desde cero", con hitos reales de Karla
  (TODO pedir a Frank). Reemplaza la sección "Así de simple" genérica.
- **Cambio de tema:** sección de cursos sobre marino oscuro, el resto sobre claro.
- **Móvil primero:** en la referencia el hero móvil es foto a pantalla completa con
  nombre arriba, tarjetas flotantes y título abajo. Ese es el layout base nuestro; el
  sidebar FLIP de desktop es opcional y solo si sobra tiempo.
- **Animación:** misma receta (blur + escala + máscaras de línea), pero el preloader
  máximo 1.5 s y desactivado en móvil, igual que ellos. Respetar `prefers-reduced-motion`.
- **Tipografía:** Montserrat 800 puede hacer el papel de PP Neue Montreal para el nombre
  gigante. Evaluar una grotesca alternativa gratuita si Montserrat se ve muy "plantilla".

---
name: Miss Karla
description: Portafolio personal cálido para una profesora de matemática; tres tintas más un acento verde azulado, resplandor durazno y una sola acción (WhatsApp).
colors:
  fondo: "#fdfbf7"
  tinta: "#111111"
  tinta-2: "#5c5750"
  tinta-3: "#77716a"
  linea: "rgb(17 17 17 / 0.12)"
  arena: "#efe9dd"
  sol: "#ffefc2"
  durazno: "#ffd1c4"
  naranja: "#ff7a2f"
  acento: "#0f8b8d"
  blanco: "#ffffff"
typography:
  nombre:
    fontFamily: "Anton, Impact, Arial Narrow, sans-serif"
    fontSize: "clamp(8rem, 13.5vw, 12.5rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.005em"
  saludo:
    fontFamily: "Instrument Serif, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(8rem, 12.5vw, 12.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  display:
    fontFamily: "Anton, Impact, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 4.4vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Anton, Impact, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 2rem + 2.6vw, 4rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.005em"
  cifra:
    fontFamily: "Anton, Impact, Arial Narrow, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 1
  logo:
    fontFamily: "Instrument Serif, Iowan Old Style, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.375
  body-lg:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 450
    lineHeight: 1.375
  body:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 450
    lineHeight: 1.625
  small:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 450
    lineHeight: 1.55
  label:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  foco: "0.5rem"
  foto: "1.25rem"
  pildora: "9999px"
spacing:
  gutter-sm: "1.25rem"
  gutter-md: "2rem"
  gutter-lg: "2.5rem"
  seccion-sm: "5rem"
  seccion-lg: "8rem"
  titulo-contenido-sm: "3rem"
  titulo-contenido-lg: "4rem"
  fila-sm: "1.5rem"
  fila-lg: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.fondo}"
    typography: "{typography.body}"
    rounded: "{rounded.pildora}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "#232323"
    textColor: "{colors.fondo}"
  button-large:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.fondo}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.pildora}"
    padding: "1rem 2.25rem"
    height: "3.75rem"
  fab:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.fondo}"
    typography: "{typography.body}"
    rounded: "{rounded.pildora}"
    padding: "0.75rem 1.25rem 0.75rem 1rem"
    height: "3.5rem"
  pill-status:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    typography: "{typography.small}"
    rounded: "{rounded.pildora}"
    padding: "0.6rem 1.1rem 0.6rem 0.8rem"
  chip-outline:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
    rounded: "{rounded.pildora}"
    padding: "0.25rem 0.75rem"
  link-arrow:
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
  photo-frame:
    backgroundColor: "{colors.arena}"
    rounded: "{rounded.foto}"
  nav-link:
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
  nav-link-hover:
    textColor: "{colors.tinta-2}"
  icon-button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pildora}"
    size: "2.5rem"
  icon-button-outline-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.fondo}"
---

# Design System: Miss Karla

## Overview

**Creative North Star: "El retrato con luz de tarde"**

La página es un portafolio personal cálido, no una academia ni un chat. Karla aparece recortada sobre un resplandor amarillo-durazno que se funde en el blanco cálido del fondo; detrás de su cabeza, un saludo en cursiva enorme; pisándole el pecho, su nombre en una condensada negra a todo el ancho. Todo lo demás es cuerpo simple: títulos centrados en mayúsculas, columnas y filas separadas por líneas de un píxel, fotos con esquinas de 20px, y un solo botón en toda la página, negro, con el ícono de WhatsApp en blanco. La regla acordada fue "el hero de Nesh, el cuerpo simple", y el resultado la sigue: un solo momento autorado (la entrada del hero) y después lectura tranquila.

La paleta es de tres tintas: blanco cálido, negro y naranja. El naranja casi no se ve: vive en el punto que late dentro de la píldora "Lives a diario", en el punto final del logo y en el color del caret y del foco. Los numerales grandes, las cifras y los titulares son negro Anton; la profundidad la da el resplandor y el arena, no colores nuevos. Se rechazó explícitamente la paleta marino + magenta de los flyers (urgencia, academia) y el cuerpo en burbujas de chat de la iteración anterior.

El movimiento es parte del retrato: al cargar, el resplandor florece, el saludo aparece, la foto sube desde el desenfoque y el nombre entra por líneas desde abajo, en alrededor de un segundo y sin preloader. En escritorio el resplandor deriva unos grados detrás del puntero; es la única animación continua además del punto de la píldora. Los reveals por scroll ocurren una sola vez, y todo se apaga con `prefers-reduced-motion` (el `html` no recibe la clase `js`, así que nada arranca oculto).

**Key Characteristics:**
- Tres tintas (fondo cálido, negro, naranja) más un resplandor `sol → durazno`; ningún otro color de superficie.
- Tres voces tipográficas con roles fijos: Instrument Serif itálica (saludo, logo, "Tú puedes,"), Anton mayúsculas (nombre, titulares, cifras, numerales), Inter Variable (todo lo demás).
- Un solo estilo de botón: píldora negra, texto e ícono de WhatsApp en blanco cálido. No existe ningún verde en la página.
- Estructura de portafolio: título centrado, luego rejilla o filas separadas por `linea`; fotos con radio 1.25rem sobre `arena`.
- Un hero autorado (~1 s) y un cuerpo que solo se revela una vez al hacer scroll.

## Colors

Una paleta de tres tintas sobre papel cálido, con un resplandor radial como único "color" de superficie y grises cálidos derivados del negro para el apoyo.

### Primary
- **Tinta** (`{colors.tinta}`): titulares, cuerpo, botones, íconos de trazo, punto final del cierre. Es el único color de texto principal y el único fondo de botón.
- **Naranja** (`{colors.naranja}`): el punto que late en la píldora de estado, el punto final del logo "Miss Karla.", el `caret-color` y el anillo de `:focus-visible` (3px, offset 3px). Nunca es fondo de botón ni color de texto corrido. También es el fondo del chip TODO de desarrollo, que desaparece con `mostrarPendientes = false` y no forma parte del sistema publicado.

### Secondary
- **Sol** (`{colors.sol}`) y **Durazno** (`{colors.durazno}`): las dos paradas del resplandor (`.resplandor`): elipse amarilla arriba al 44% de alto, elipse durazno debajo al 72%, ambas fundidas a transparente y enmascaradas hacia abajo para desaparecer en el fondo. Aparece en el hero (enmascarado) y en el cierre (sin máscara). Durazno además colorea `::selection`.

### Neutral
- **Fondo** (`{colors.fondo}`): toda la página, `theme-color`, y el color del texto sobre botones negros.
- **Tinta 2** (`{colors.tinta-2}`): párrafos de apoyo, descripciones de curso, footer, "Tú puedes," del cierre, hover de los enlaces del nav. Es el gris cálido de lectura secundaria (19 usos, el más frecuente después de la tinta).
- **Tinta 3** (`{colors.tinta-3}`): solo las etiquetas de fila ("Paso 1", nivel del horario) a 0.8125rem 500. Un escalón más claro que tinta-2 para lo que es metadato, no lectura.
- **Línea** (`{colors.linea}`): todo borde y divisor: filas tipo tabla, borde izquierdo de las columnas numeradas, chips de contorno, anillo del botón-flecha, borde superior del footer, borde discontinuo del placeholder de testimonios. Negro al 12%, nunca un gris opaco.
- **Arena** (`{colors.arena}`): fondo de espera de todas las fotos (`.foto`, `FotoEjemplo`) y el color de los numerales gigantes 01-04 y del "?" cuando falta una cifra. Es el "casi nada" que da relieve sin sombra.
- **Blanco** (`{colors.blanco}`): solo el fondo de la píldora de estado (para separarse del fondo cálido) y el texto del chip TODO.

### Sin verde de marca ajena
- El glifo de WhatsApp (`Icon nombre="whatsapp"`) hereda `fondo` dentro de botones negros y `tinta` en el enlace del footer. El verde `#25d366` no se usa en ninguna parte.

### Named Rules
**The Tres Tintas Rule.** Toda superficie es `fondo`, toda letra es `tinta` (o sus dos grises cálidos `tinta-2` / `tinta-3`), y el único acento de marca es `acento` (verde azulado `#0f8b8d`, elegido por Frank el 2026-09-05; `naranja` queda solo como referencia de Madison) en puntos de ≤ 10px y en las comillas de las reseñas. Un hex que no esté en los doce del frontmatter no existe; los tonos intermedios se derivan con opacidad sobre `tinta` (`linea` = 12%, `bg-tinta/80` en la marca de foto de ejemplo, hover del botón `#232323`).

**The Sin Verde Rule.** El ícono de WhatsApp toma el color del texto que lo acompaña (blanco cálido en botones negros). Un solo color de botón y ningún color ajeno a las tres tintas.

**The Resplandor Es la Única Superficie de Color Rule.** No hay franjas, tarjetas ni fondos de color: la única variación de superficie es el degradado radial `sol → durazno` detrás de la foto del hero y del bloque de cierre, siempre fundido a `fondo`.

## Modo oscuro

Un solo sistema de tokens con dos valores. En oscuro: `fondo` #15130f, `superficie` #211e19, `tinta` #f4efe6, `tinta-2` #b6ad9f, `tinta-3` #8e867a, `linea` 14 % de tinta, `arena` #2a2620, resplandor `sol` #7a5a22 → `durazno` #6e3f2c (ámbar sobre negro cálido, como un reflector), `acento` #3fb8b6 (más claro para contraste). Se aplica con `prefers-color-scheme: dark` salvo `data-theme` explícito en `<html>`, que fija el botón sol/luna del nav y persiste en `localStorage`. Los botones se invierten solos (píldora clara con texto oscuro). Las capas sobre video (`negro`, blanco) no cambian: el video es material fotográfico y su chrome debe leerse igual en ambos modos. Nuevos tokens fijos: `superficie` (#ffffff) para píldoras y tarjetas blancas, `negro` (#111111) para capas sobre imagen.

## Typography

**Display Font:** Anton 400 (con Impact, Arial Narrow)
**Body Font:** Inter Variable (con Inter, ui-sans-serif, system-ui)
**Voz emocional:** Instrument Serif 400 itálica (con Iowan Old Style, Georgia)

**Character:** Una condensada de cartel en mayúsculas contra una itálica de libro, ambas sostenidas por una grotesca neutra a peso 450 con `cv11` y `ss01` activados. El contraste es de escala, no de peso: Anton y la itálica se usan enormes; Inter se mantiene entre 13 y 22px y solo sube a 600 para los títulos de ítem.

### Hierarchy
- **Nombre** (Anton 400, `clamp(8rem, 13.5vw, 12.5rem)` en escritorio / `clamp(5.25rem, 23vw, 9.5rem)` en móvil, interlínea 0.86, tracking −0.005em, mayúsculas): "MISS KARLA" pisando la foto del hero, partido en dos líneas con `overflow: hidden` por línea para la entrada.
- **Saludo** (Instrument Serif itálica, `clamp(8rem, 12.5vw, 12.5rem)` en escritorio / `clamp(3.5rem, 16vw, 7rem)` en móvil, interlínea 1): "Hola, soy" a los lados de la cabeza, detrás de la foto (`z-0`), decorativo (`aria-hidden`).
- **Display** (Anton 400, `clamp(3rem, 4.4vw, 4.25rem)` en escritorio / `clamp(2.1rem, 9vw, 3.25rem)` en móvil, interlínea 1.02 / 0.95, mayúsculas): el rol "PROFESORA DE MATEMÁTICA" en tres líneas. El cierre sube a `clamp(3.5rem, 3rem + 5vw, 7rem)` para "YO TE AYUDO".
- **Headline** (Anton 400, `clamp(2.5rem, 2rem + 2.6vw, 4rem)`, interlínea 0.95, mayúsculas, centrado): todo `h2` de sección mediante `.titulo`.
- **Cifra** (Anton 400, 2.75rem / 3.25rem en `lg`, interlínea 1): seguidores y años enseñando. Los numerales 01-04 de "Te ayudo con" usan la misma voz a 3.25rem / 4rem pero en `arena`.
- **Logo** (Instrument Serif itálica, 1.75rem / 2rem en `lg`; 1.25rem en el footer): "Miss Karla" con el punto final en naranja. El cierre "Tú puedes," usa la misma voz a `clamp(2.25rem, 7vw, 3.5rem)` en `tinta-2`.
- **Title** (Inter 600, 1.375rem, interlínea 1.25, tracking −0.01em): nombre del curso, "Horarios del ciclo", titular de "Cómo enseño" (1.625rem en `lg`).
- **Subtitle** (Inter 600, 1.125rem, interlínea 1.375): título del paso; nombre del tema (1.0625rem en móvil).
- **Body large** (Inter 450–500, 1.0625rem): párrafo del cierre, botón grande, nombre del curso en horarios, enlace a TikTok.
- **Body** (Inter 450, 0.9375rem, interlínea 1.625 en párrafos / 1.375 en el hero): el tamaño más usado de la página (14 usos): párrafos, enlaces del nav, botones, descripción de cursos, FAB.
- **Small** (Inter 450–500, 0.875rem): píldora de estado, texto de tema, footer.
- **Label** (Inter 500, 0.8125rem): etiquetas de fila en `tinta-3`, chips "incluye", pie de las cifras.

### Named Rules
**The Tres Voces Rule.** Instrument Serif solo en itálica y solo para el saludo, el logo y "Tú puedes,". Anton solo en mayúsculas y solo para nombre, rol, titulares de sección, cifras y numerales. Inter para todo lo que se lee. No entra una cuarta fuente ni Anton en caja baja ni la itálica en texto corrido.

**The Mayúsculas Sin Tracking Rule.** Las mayúsculas son de Anton y van con tracking casi nulo (−0.005em) e interlínea ≤ 1.02; no existen etiquetas en mayúsculas con tracking positivo en Inter dentro del sistema publicado. Un texto de sección va en caja normal.

**The Escala Contenida Rule.** Inter vive entre 0.8125rem y 1.375rem (1.625rem solo en `lg`); lo que necesite ser más grande cambia de voz (Anton o la itálica), no de tamaño.

## Layout

Una sola columna de página con `.contenedor`: ancho máximo 85rem (1360px), centrado, con gutter 1.25rem en móvil, 2rem desde `sm` (40rem) y 2.5rem desde `lg` (64rem). Los breakpoints reales son los de Tailwind: `sm` 40rem, `md` 48rem, `lg` 64rem; `lg` es el que cambia la composición.

**Hero.** En móvil es una escena apilada: saludo absoluto detrás de la cabeza, foto centrada a `min(74%, 23rem)` de ancho, nombre con margen negativo (`-26vw`, `-18vw` en `sm`) pisando la foto, luego píldora, rol, párrafo y botón a ancho completo con `gap` 1rem. En `lg` es la composición de la referencia: un lienzo de `clamp(40rem, 100vh − 6.5rem, 54rem)` con la foto centrada al 88% de alto anclada abajo, el nombre abajo-izquierda (`bottom: 3%`), el rol abajo-derecha (`bottom: 6%`), la píldora a la izquierda al 39% y el botón debajo al 47%, el párrafo a la derecha al 48% con ancho máximo 15.5rem.

**Ritmo de secciones.** Cada sección abre con `pt-20` (5rem) en móvil y `pt-32` (8rem) en `lg`, y cierra con `pb-6` / `pb-10`; el título va centrado y el contenido empieza a `mt-12` (3rem) / `mt-16` (4rem). "Mis cursos", la primera, es más corta (`pt-16` / `pt-28`, `mt-10` / `mt-14`). El cierre se separa con `mt-24` / `mt-36` y respira `py-24` / `py-36` dentro del resplandor.

**Patrones de cuerpo.**
- Rejilla de tarjetas sin marco: 1 columna, 2 desde `md`, `gap-x-8 gap-y-12` (`gap-y-16` en `lg`).
- Columnas numeradas: 2 columnas en móvil, 4 en `lg`, cada una con borde izquierdo de 1px `linea` y `pl-5` / `pl-6`.
- Texto + foto: `grid-cols-[0.9fr_1.1fr]` en `lg` con `gap-16`; apilado con `gap-10` antes.
- Filas tipo tabla (`.fila`): 1 columna con `padding-block` 1.5rem; desde `md`, tres columnas `8rem / 1fr / 1.3fr`, `padding-block` 2rem y `gap` 2rem, separadas por `border-top` de `linea` y cerradas con `border-b`.
- Galería: carrusel horizontal con `snap-x snap-mandatory`, ítems al 72% (46% en `sm`), sin scrollbar; en `lg` pasa a rejilla de 4 con `gap-6`.

**Medidas de lectura.** Los párrafos se limitan a 26rem (hero, cierre, titular de "Cómo enseño"), 28rem (apoyo) o 30–36rem (intro de galería, detalle de curso). Ningún texto corrido supera 36rem.

**Anclas y seguridad.** Las secciones llevan `scroll-mt-6`; el footer reserva `pb-[6rem + safe-area-inset-bottom]` para que el botón flotante no tape nada.

## Elevation & Depth

Sistema esencialmente plano: la profundidad la dan el resplandor radial, el arena de los marcos de foto y las líneas de 1px al 12%. Las sombras existen solo en tres objetos que "flotan" sobre la página, siempre teñidas del negro de la tinta a baja opacidad y con desenfoque amplio; nunca hay sombra dura ni desplazada.

### Shadow Vocabulary
- **Píldora** (`box-shadow: 0 1px 2px rgb(17 17 17 / 0.06), 0 10px 24px -14px rgb(17 17 17 / 0.25)`): la píldora de estado blanca del hero, para despegarla del fondo cálido.
- **Flotante** (`box-shadow: 0 18px 36px -16px rgb(17 17 17 / 0.5), 0 3px 8px -3px rgb(17 17 17 / 0.3)`): el botón flotante de WhatsApp en reposo y cualquier botón negro en hover.
- **Tarjeta** (`box-shadow: 0 2px 4px rgb(17 17 17 / 0.04), 0 24px 48px -28px rgb(17 17 17 / 0.3)`): definida en `@theme` y hoy sin uso; las tarjetas de curso van sin marco ni sombra. Reservada, no obligatoria.

### Named Rules
**The Plano Salvo Lo Que Flota Rule.** Las superficies en reposo no tienen sombra. Solo flota lo que está sobre la página (píldora, FAB) o responde a un hover (botón sube 2px y toma `flotante`). Las fotos, tarjetas y filas se separan por línea, arena o aire.

**The Sombra de Tinta Rule.** Toda sombra es `rgb(17 17 17 / α)` con α ≤ 0.5 y desenfoque ≥ 8px. No hay sombras negras puras, de color ni con desplazamiento sin desenfoque.

## Shapes

Dos radios y nada más. Todo lo que es acción o estado es una píldora completa (`9999px`): botones, FAB, píldora de estado, chips "incluye", el botón-flecha circular de 2.5rem, el skip-link. Todo lo que es imagen es un rectángulo con esquinas de 1.25rem (20px) sobre fondo `arena`, con la proporción fijada por `aspect-ratio` (4/3 en cursos y "Cómo enseño", 4/5 en la galería). El anillo de foco redondea a 0.5rem.

Los bordes son siempre de 1px en `linea`: rectos en filas y columnas, discontinuos solo en el placeholder de testimonios. La foto del hero no tiene marco: se funde hacia abajo con `mask-image` (`--fundido` 80% en móvil, 84% en escritorio) y sus lados se desvanecen entre el 14% y el 86% para que ningún corte del PNG deje una línea recta.

Los íconos propios son de trazo único (2px, puntas y uniones redondas) en `currentColor`, 16–24px; los logos de WhatsApp y TikTok son sus marcas oficiales en relleno. No hay glifos de fuente de íconos ni emojis.

## Components

### Buttons
Píldoras negras, únicas en toda la página: una sola forma, un solo color, dos tamaños.
- **Shape:** píldora completa (`9999px`).
- **Primary (`.boton`):** fondo `tinta`, texto `fondo`, Inter 500 a 0.9375rem, `padding` 0.75rem 1.5rem, alto mínimo 3rem, `gap` 0.6rem con el ícono de WhatsApp (20px, relleno `fondo`, como el texto). El nav lo usa más compacto (alto 2.75rem, `px-5`).
- **Large (`.boton-grande`):** 1.0625rem, `padding` 1rem 2.25rem, alto mínimo 3.75rem, ícono 24px. Hero y cierre. En móvil ocupa todo el ancho.
- **Hover / Active / Focus:** sube 2px (`translate: 0 -2px`), fondo `#232323`, sombra `flotante`, 0.2s con `--ease-salida`; `:active` vuelve a 0 en 0.08s; `:focus-visible` anillo naranja 3px con offset 3px. Bajo `prefers-reduced-motion` no se desplaza.
- **No hay variantes:** ni botón secundario ni fantasma ni de color. La acción secundaria es un enlace con flecha.

### Botón flotante (`.fab`)
La misma píldora negra, fija abajo a la derecha (`right: 1rem`, `bottom: 1rem + safe-area`), alto mínimo 3.5rem, ícono 28px, texto "WhatsApp" a 0.9375rem, sombra `flotante`, `z-index` 50. Se esconde (`.fab-oculto`: opacidad 0, baja 1.5rem, sin eventos) mientras un `[data-cta-hero]` está ≥ 40% visible; sin JS es siempre visible.

### Píldora de estado (`.pildora`)
Blanca sobre el fondo cálido, texto `tinta` Inter 500 a 0.875rem, `padding` 0.6rem 1.1rem 0.6rem 0.8rem, sombra `pildora`. A la izquierda, un punto naranja de 10px con un halo que late (`pulso`, 1.8s, escala 1→2.6, se oculta con `motion-reduce`). Solo para un dato siempre cierto ("Lives a diario en TikTok").

### Chips
- **Contorno ("incluye"):** píldora con borde 1px `linea`, sin fondo, texto `tinta` a 0.8125rem, `padding` 0.25rem 0.75rem, en fila con `gap` 0.5rem. Informativos, sin estado ni hover.

### Enlaces
- **Nav:** Inter 500 a 0.9375rem, sin subrayado, `tinta` → `tinta-2` en hover, `gap` 2.25rem entre ítems; solo visibles desde `lg`.
- **Con flecha (`.enlace`):** Inter 500, subrayado 1px a `tinta` 30% con offset 0.3em, ícono de trazo 16–20px; en hover el subrayado pasa a `tinta` pleno y el `gap` crece de 0.4 a 0.65rem. Es la acción secundaria del sistema (teléfono, "Pedir horarios", redes).

### Cards / Containers
Las tarjetas de curso no tienen contenedor: foto con radio 1.25rem sobre `arena`, luego título Inter 600 a 1.375rem con un botón-flecha circular (2.5rem, borde `linea`) a la derecha, descripción en `tinta-2`, chips de contorno y precio. Toda la tarjeta es un solo enlace a WhatsApp; en hover la foto sube 4px (0.5s, `--ease-salida`) y el botón-flecha se invierte a `tinta` / `fondo`.

### Filas (`.fila`)
Lista de pasos y horarios: etiqueta a 0.8125rem 500 en `tinta-3`, título Inter 600 a 1.125rem y texto a 0.9375rem en `tinta-2`, separadas por 1px `linea`. Sin fondos alternos ni sombras.

### Marco de foto (`FotoEjemplo` / `.foto`)
`figure` con `aspect-ratio`, radio 1.25rem, fondo `arena`, `overflow: hidden`, imagen `object-fit: cover`. Es el único contenedor con radio grande de la página.

### Navigation
Barra estática (no pegajosa) dentro de `.contenedor`, `py-4` / `py-7` en `lg`: logo en Instrument Serif itálica con punto naranja a la izquierda, enlaces al centro solo en `lg`, botón negro compacto "WhatsApp" a la derecha. Sin menú hamburguesa: en móvil quedan logo y botón.

### Hero y resplandor (componente firma)
`header` con `isolate` y `overflow: hidden`; `.resplandor` absoluto detrás con las dos elipses `sol` / `durazno` enmascaradas hacia abajo al 78–100%. La foto (`.foto-hero`) es un PNG recortado servido en WebP, fundido abajo y a los lados con `mask-image`. Motion (GSAP, solo con `html.js`): resplandor `autoAlpha 0 → 1`, escala 0.8 → 1 en 1.4s `power2.out`; saludo `y 24 → 0` en 0.9s con stagger 0.12 desde 0.1s; foto `y 48`, `blur(14px) → 0` en 1.1s `power3.out` desde 0.15s; líneas del nombre `yPercent 110 → 0` en 0.8s con stagger 0.09 desde 0.5s; píldora, rol, párrafo y botón `y 16 → 0` en 0.7s con stagger 0.08 desde 0.75s. En punteros finos el resplandor deriva ±3% en x y ±2% en y siguiendo al cursor con `quickTo` de 1.4s.

### Reveals por scroll
`[data-reveal]` (títulos): `y 28 → 0`, 1s, `expo.out`, dispara a `top 88%`, una vez. `[data-reveal-grupo]` anima a sus hijos `[data-anim]` con `y 24 → 0`, 0.9s, stagger 0.1, a `top 85%`, una vez. Sin `html.js` nada está oculto.

## Do's and Don'ts

### Do:
- **Do** usar una sola forma de botón: píldora negra `tinta` / `fondo` con el ícono de WhatsApp en `fondo`; dos tamaños (`.boton`, `.boton-grande`), ninguna variante de color.
- **Do** abrir cada sección con `h2.titulo` centrado (Anton, `clamp(2.5rem, 2rem + 2.6vw, 4rem)`) y separar el contenido con 3rem / 4rem en `lg`.
- **Do** derivar todo gris de la tinta: `tinta-2` para apoyo, `tinta-3` para etiquetas, `linea` (12%) para bordes; nunca un gris nuevo.
- **Do** dar a toda imagen radio 1.25rem sobre `arena` con `aspect-ratio` fijo; a toda acción o estado, radio completo.
- **Do** separar listas con líneas de 1px `linea` (filas, columnas numeradas), no con tarjetas ni fondos alternos.
- **Do** limitar los párrafos a 26–36rem y mantener Inter entre 0.8125rem y 1.375rem; lo que deba gritar cambia a Anton o a la itálica.
- **Do** animar solo con `[data-anim]` + `data-reveal` / `data-reveal-grupo`, `once: true`, `expo.out`; usar `translate` (no `transform`) en hovers y dejar todo visible sin `html.js`.
- **Do** usar el resplandor `sol → durazno` como única superficie de color, siempre fundido a `fondo`.

### Don't:
- **Don't** introducir hex fuera de los once del frontmatter; ni marino, ni magenta, ni negro puro en sombras (todas son `rgb(17 17 17 / α)`).
- **Don't** introducir el verde de WhatsApp (`#25d366`) en ningún elemento: el glifo va en `fondo` (decisión de Frank, 2026-09-05).
- **Don't** usar `naranja` como fondo de botón, color de texto corrido o titular; es un punto de ≤ 10px, el punto final del logo y el anillo de foco.
- **Don't** añadir una cuarta fuente, usar Anton en caja baja, la itálica en texto corrido, ni etiquetas en mayúsculas con tracking positivo en Inter.
- **Don't** poner sombra a fotos, tarjetas o filas; la sombra es solo para la píldora, el FAB y el hover del botón.
- **Don't** añadir preloader, scroll suave por librería, animaciones que se repitan al volver a entrar, ni movimiento que no se apague con `prefers-reduced-motion`.
- **Don't** publicar el PNG del retrato ni generar fotos: se sirve solo el WebP que `npm run foto` deja en `public/img`, con su `.json` de procedencia.

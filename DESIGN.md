---
name: Miss Karla
description: Landing de conversión de Miss Karla, docente de matemática. Marino como aula de noche, hueso como cuaderno, plumón dorado.
colors:
  marino: "#1a2350"
  marino-oscuro: "#131a3a"
  magenta: "#e6197a"
  rosa: "#ff4d8d"
  dorado: "#ffd23f"
  turquesa: "#16b8a6"
  whatsapp: "#25d366"
  hueso: "#f7f5ef"
typography:
  display:
    fontFamily: "Montserrat Variable, Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 13.5vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Montserrat Variable, Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 6vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat Variable, Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Nunito Sans Variable, Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Montserrat Variable, Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  chip: "6px"
  tile: "16px"
  card: "24px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "28px"
  xl: "44px"
  section: "80px"
  section-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.marino-oscuro}"
    rounded: "{rounded.pill}"
    padding: "12.8px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#45d97d"
    textColor: "{colors.marino-oscuro}"
  button-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.hueso}"
    rounded: "{rounded.pill}"
    padding: "12.8px 24px"
    height: "48px"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.marino}"
    rounded: "{rounded.pill}"
    padding: "12.8px 24px"
    height: "48px"
  card-dark:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.hueso}"
    rounded: "{rounded.card}"
    padding: "28px"
  card-light:
    backgroundColor: "rgb(26 35 80 / 0.05)"
    textColor: "{colors.marino}"
    rounded: "{rounded.card}"
    padding: "24px"
  chip-inverse:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.hueso}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  input:
    backgroundColor: "rgb(19 26 58 / 0.65)"
    textColor: "{colors.hueso}"
    rounded: "{rounded.tile}"
    padding: "12px 17.6px"
    height: "52px"
---

# Design System: Miss Karla

## Overview

**Creative North Star: "Pizarra de noche, cuaderno de día"**

La página alterna dos superficies que el público reconoce sin pensar: el azul marino
profundo de una pizarra vista de noche desde el celular, y el blanco hueso de un
cuaderno. Sobre esas dos superficies trabaja una sola herramienta expresiva, el plumón:
dorado para subrayar, numerar y sellar; magenta o rosa para la única palabra que importa
("desde cero"); turquesa para los íconos dibujados a trazo. El verde existe solo para una
cosa, el botón de WhatsApp, y por eso siempre se ve.

La densidad es de landing de una sola acción: primera pantalla completa con la profesora,
secciones cortas que confirman y un cierre grande. No hay grises ni negros: todo neutro es
un tinte de marino o de hueso con opacidad, así la página nunca se ve "de plantilla". Las
formas son píldoras y tarjetas de esquinas muy redondeadas, sin bordes de color ni
sombras duras. El motion es un solo momento autorado (la entrada del hero con el subrayado
que se dibuja) y apoyos discretos al hacer scroll.

Rechazos confirmados por el brief: hero de dos columnas con ilustración, grilla de
features iguales, testimonios de relleno, textos copiados de los flyers.

**Key Characteristics:**
- Dos superficies (marino y hueso) que se alternan sección a sección.
- Un acento que actúa: el plumón dorado subraya, numera y sella.
- Magenta/rosa reservado para la palabra clave y etiquetas; verde solo WhatsApp.
- Sin grises: neutros teñidos con opacidad sobre marino o hueso.
- Píldoras y tarjetas de 24px; sombras suaves con caída.
- Montserrat 800 para todo titular, Nunito Sans para todo cuerpo.

## Colors

Paleta cerrada de seis colores de marca más un verde funcional; la paleta por defecto de
Tailwind está borrada para que no exista ningún color fuera de esta lista.

### Primary
- **Marino pizarra** (#1a2350): fondo de la página, del hero, de la comunidad, del cierre
  y de la tarjeta del curso principal. Es el "suelo" de la marca.
- **Marino profundo** (#131a3a): footer, píldoras translúcidas sobre foto (al 70%) y
  texto oscuro sobre el verde de WhatsApp y sobre dorado.
- **Hueso cuaderno** (#f7f5ef): fondo de cursos, cómo funciona y horarios; texto principal
  sobre marino.

### Secondary
- **Magenta plumón** (#e6197a): relleno del ícono del curso principal, subrayado y flecha
  de los enlaces "Consultar" sobre hueso. Nunca como fondo de bloque.
- **Rosa resaltador** (#ff4d8d): la palabra "desde cero" en el H1, el punto "EN VIVO", la
  etiqueta "Curso principal" (sobre rosa al 15%). Es la versión del magenta que pasa
  contraste sobre marino (4.8:1); el magenta puro no.

### Tertiary
- **Dorado plumón** (#ffd23f): nameplate del hero, subrayado del H1, números de los pasos,
  la línea que los une, la cifra 61.5K, el sello "100% garantizado", chips TODO,
  anillo de foco. Es el acento que "hace" cosas.
- **Turquesa tiza** (#16b8a6): íconos de trazo dentro de tiles marino y checks de la
  lista del curso principal. Solo sobre marino: sobre hueso no pasa contraste como texto.
- **Verde WhatsApp** (#25d366): exclusivamente botones que abren WhatsApp. Siempre con
  texto marino profundo, nunca blanco (blanco sobre este verde da 2:1).

### Neutral
- No hay grises. Texto secundario sobre marino: hueso al 70–85%. Texto secundario sobre
  hueso: marino al 70–80%. Divisores: hueso al 10–15% sobre marino, marino al 10% sobre
  hueso. Superficies suaves sobre hueso: marino al 5% con anillo de marino al 10%.

### Named Rules
**La regla del verde único.** El verde (#25d366) aparece solo en botones que abren
WhatsApp. Ningún otro elemento lo usa, para que el botón se reconozca a un metro.

**La regla sin grises.** Ningún gris ni negro. Todo neutro es marino o hueso con opacidad.

**La regla de la palabra.** Magenta y rosa resaltan una palabra o una etiqueta corta; no
pintan fondos ni bloques. Sobre marino se usa rosa (#ff4d8d); sobre hueso, magenta solo en
íconos y subrayados, nunca en texto corrido.

## Typography

**Display Font:** Montserrat Variable (con Montserrat, system-ui)
**Body Font:** Nunito Sans Variable (con Nunito Sans, system-ui)

**Character:** una sans geométrica y pesada para gritar "desde cero" como en los flyers, y
una sans redonda y cálida para hablar de tú a un estudiante. Solo dos familias, siempre
autohospedadas (Fontsource), sin llamadas a Google Fonts.

### Hierarchy
- **Display** (800, clamp(3.1rem, 13.5vw, 5.75rem) la palabra clave; clamp(2.5rem, 10.5vw,
  4.25rem) la línea previa; en escritorio clamp(3.5rem, 6.2vw, 5.25rem) y clamp(2.75rem,
  4.6vw, 4rem); line-height 0.92; tracking -0.025em): solo el H1 del hero. La segunda
  línea es un paso mayor que la primera: la escala es el volumen.
- **Headline** (800, clamp(2rem, 6vw, 3.25rem), 1.02, -0.02em): H2 de cada sección. El
  cierre "¿Empezamos?" sube a clamp(2.75rem, 11vw, 5.5rem) con tracking -0.03em.
- **Title** (800, 1.25–1.5rem tarjetas compactas; 1.875–2.25rem curso principal; -0.01 a
  -0.02em): nombres de curso y de paso.
- **Body** (500, 1rem; 1.125–1.25rem en frases de apoyo; 1.55): Nunito Sans. Medida máxima
  65ch (`max-w-prose`) en párrafos largos.
- **Label** (700, 0.75–0.875rem, tracking 0.18–0.2em, mayúsculas): nameplate del hero y
  "seguidores en TikTok". Chips y etiquetas: 700, 11–12px, tracking normal o ligero.
- **Cifra** (800, clamp(4rem, 16vw, 6rem), line-height 1, tracking -0.04em, tabular):
  el 61.5K. Techo de tamaño: 6rem.

### Named Rules
**La regla de dos familias.** Montserrat para todo lo que titula, numera o etiqueta;
Nunito Sans para todo lo que se lee. Nunca una tercera fuente, aunque los flyers mezclen
varias.

**La regla del plumón.** El subrayado dorado dibujado (SVG, trazo redondo, curva a mano)
va solo bajo la palabra clave del H1. No se repite bajo otros títulos.

## Layout

Una sola columna centrada de 72rem como máximo con 20px de padding lateral en móvil y
32px desde 640px. Secciones con 80px de aire vertical en móvil y 112px desde 640px.
Ritmo de superficies: hero marino, cursos hueso, cómo funciona hueso (separado por un
divisor marino al 10%), comunidad marino, horarios hueso, cierre marino, footer marino
profundo.

Móvil primero: el hero mide la altura de la pantalla (min-height 100svh) con la foto de
fondo y el texto anclado abajo, con aire inferior de 5.75rem para que el botón flotante
no tape los botones. Desde 1024px el hero pasa a texto en la mitad izquierda (máximo 50%
del contenedor) y foto en el 56% derecho anclada al piso, con el degradado marino en
horizontal. La tarjeta del curso principal se abre a dos columnas (1.15fr / 1fr) y las
tres compactas se ponen en fila; los pasos pasan de columna con línea vertical a fila
con línea horizontal.

Espaciado interno: tarjetas 28px (36px desde 640px, 44px en la principal desde 1024px),
huecos entre tarjetas 20px (24px en escritorio), grupos de texto 8–16px, más aire encima
de un título que debajo.

## Elevation & Depth

Híbrido: la profundidad principal la da el contraste de superficies (marino sobre hueso
y viceversa); las sombras solo acompañan a lo que "flota" (tarjeta principal, botones de
WhatsApp, botón flotante) y siempre llevan caída vertical y desenfoque amplio, teñidas de
marino o del verde del botón, nunca negras.

### Shadow Vocabulary
- **Tarjeta** (`box-shadow: 0 14px 34px -16px rgb(26 35 80 / 0.32), 0 2px 6px -2px rgb(26 35 80 / 0.12)`): tarjetas marino sobre hueso.
- **Botón** (`box-shadow: 0 12px 26px -12px rgb(37 211 102 / 0.6), 0 2px 4px -1px rgb(19 26 58 / 0.25)`): botones primarios de WhatsApp.
- **Flotante** (`box-shadow: 0 16px 32px -14px rgb(19 26 58 / 0.55), 0 3px 8px -2px rgb(19 26 58 / 0.3)`): el botón flotante.

### Named Rules
**La regla de la sombra con caída.** Toda sombra tiene desplazamiento vertical y
desenfoque. Nada de halos centrados ni sombras duras sin desenfoque.

## Shapes

Lenguaje de píldoras y bloques suaves. Botones, chips, badges y sellos son píldoras o
círculos (9999px). Tarjetas y paneles llevan esquinas de 24px; tiles de íconos y campos de
formulario, 16px; el chip TODO, 6px. Ninguna tarjeta lleva borde de color: las claras usan
un anillo de marino al 10% de 1px, las oscuras nada. Los degradados existen solo en el
hero (para leer texto sobre foto) y en el cierre (halo radial magenta al 38% sin filtros).
El adorno es dibujado a mano en SVG: subrayado de plumón, notación de pizarra en el hero
al 16%, sello dentado "100% garantizado", íconos de trazo de 2px con puntas redondas.

## Components

### Buttons
- **Shape:** píldora (9999px), alto mínimo 48px, padding 12.8px 24px, Montserrat 700 de
  1rem, ícono de 20px a la izquierda con 10px de separación, texto sin partir.
- **Primary (WhatsApp):** fondo verde (#25d366), texto marino profundo (#131a3a), sombra
  Botón. Variante grande para el cierre: alto 60px, padding 16px 36px, 1.125rem.
- **Hover / Focus:** sube 2px con la propiedad `translate` (no `transform`, que la usa
  GSAP) en 200ms con curva de salida; el fondo se aclara mezclando 12% de blanco. Foco
  visible: anillo dorado de 3px con 3px de separación.
- **Outline oscuro:** borde de 2px hueso al 45%, texto hueso; en hover borde hueso pleno
  y fondo hueso al 10%. Para fondos marino.
- **Outline claro:** borde marino al 30%, texto marino; hover borde marino y fondo marino
  al 6%. Para fondos hueso.
- **Enlace de acción:** Montserrat 700 marino con subrayado magenta al 40% (2px, offset
  4px) y flecha magenta; en hover el subrayado sube a magenta pleno. Para tarjetas
  compactas donde un botón pesaría demasiado.

### Chips
- **Badge en vivo:** píldora marino profundo al 70% con anillo hueso al 15% y desenfoque
  de fondo, texto Montserrat 700 de 12px; punto rosa de 10px con onda pulsante (1.8s, se
  apaga con reduced-motion).
- **Chip inverso:** píldora marino con texto hueso de 11px (ej. "28 clases + fichas PDF").
- **Etiqueta de rol:** píldora rosa al 15% con texto rosa mayúsculas de 12px ("Curso
  principal"). Va al lado del título, nunca encima.
- **Tile de ícono:** cuadrado 44–48px de esquinas 16px; sobre hueso lleva un color de
  marca pleno (turquesa, dorado, rosa) con ícono marino profundo; en los pasos es marino
  con ícono turquesa.

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** tarjeta oscura marino con texto hueso (curso principal, horarios, slots
  de testimonios en marino profundo); tarjeta clara marino al 5% con anillo marino al 10%
  (cursos compactos, nota para padres).
- **Shadow Strategy:** solo la oscura sobre hueso lleva sombra Tarjeta.
- **Border:** ninguno de color; la clara usa anillo de 1px.
- **Internal Padding:** 24–28px móvil, 36px desde 640px, 44px la principal en escritorio.

### Inputs / Fields
- **Style:** fondo marino profundo al 65%, borde 2px hueso al 25%, esquinas 16px, texto
  hueso, placeholder hueso al 45%, alto mínimo 52px. Solo existen en modo formulario.
- **Focus:** borde dorado, sin anillo adicional.

### Navigation
- No hay menú. El hero lleva arriba el badge "En vivo" y el chip de TikTok como única
  cabecera; las secciones se alcanzan por anclas con 16px de margen de scroll. El footer
  lista TikTok, Instagram y WhatsApp como píldoras con anillo hueso al 20%.

### Botón flotante de WhatsApp
Píldora primaria fija abajo a la derecha (16px más el área segura), alto 56px, ícono de
28px y la palabra "WhatsApp", sombra Flotante. Siempre visible, sin depender de JS; el
hero y el footer reservan aire inferior para que no tape nada.

### Sello "100% garantizado"
Círculo dorado de 96–112px con anillo dentado (trazo discontinuo) y anillo interior
punteado marino profundo, texto Montserrat 800 en dos líneas, rotado -6°. Es la promesa
que Karla imprime en sus flyers; vive en la tarjeta del curso principal.

### Pasos numerados
Círculo dorado de 48px con número Montserrat 800 marino profundo y anillo hueso de 4px
que "corta" la línea dorada de 2px que une los pasos (vertical en móvil, horizontal en
escritorio; se dibuja con el scroll).

## Do's and Don'ts

### Do:
- **Do** usar el verde (#25d366) solo en botones que abren WhatsApp, siempre con texto
  marino profundo.
- **Do** alternar superficies marino y hueso por sección; una sección nunca mezcla las dos
  como fondo.
- **Do** teñir todo neutro desde marino o hueso con opacidad (70–85% para secundario,
  10–15% para divisores).
- **Do** dibujar los íconos en SVG con trazo de 2px y puntas redondas; los logos de
  WhatsApp y TikTok van en relleno.
- **Do** usar Montserrat 800 con tracking negativo en titulares y dejar el H1 en dos
  líneas con la segunda un paso mayor.
- **Do** apagar todo motion con `prefers-reduced-motion` y dejar el contenido visible sin
  JS.

### Don't:
- **Don't** usar grises, negros ni la paleta por defecto de Tailwind.
- **Don't** poner magenta o rosa como fondo de bloque, ni turquesa como texto sobre hueso.
- **Don't** usar texto blanco sobre el verde de WhatsApp.
- **Don't** poner bordes de color en tarjetas ni sombras duras sin desenfoque.
- **Don't** repetir el subrayado de plumón fuera del H1 del hero ni añadir eyebrows
  encima de otros títulos: el nameplate dorado es una excepción fijada por el brief solo
  para el hero.
- **Don't** animar `transform` con CSS en elementos que GSAP también anima; los hovers
  usan `translate`.

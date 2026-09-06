# Proyecto: Landing de Miss Karla (docente de matemática)

Landing de conversión de una sola página para **Karla Cornejo Flores ("Miss Karla")**,
profesora de matemática que enseña "desde cero" y hace lives a diario.

## Objetivo único
Llevar a la persona al **WhatsApp** (`https://wa.me/51995623008`).
El público llega caliente desde TikTok e Instagram y decide en segundos.
No es un sitio corporativo largo: es una landing enfocada en convertir.

## Cómo construirla
- Usa la skill **Impeccable** (Astro + Tailwind + GSAP).
- **Mobile-first.** La mayoría del tráfico es de celular.
- Una sola página con scroll y secciones ancladas.
- Español (Perú).

## Reglas fijas (no romper)
1. Paleta y tipografía en `context/brand.md` (look cálido: blanco cálido, resplandor durazno,
   tinta negra, acento verde azulado `#0f8b8d`; Instrument Serif itálica + Anton + Inter). No inventes otros
   colores ni fuentes. El marino y el magenta de los flyers ya NO se usan en la web.
2. **La foto del hero la entrega Frank**: `src/assets/foto/profe.png` (recorte PNG con fondo
   transparente, 1600×2000). Después de reemplazarla, correr `npm run foto`, que genera lo
   único que se publica: `public/img/profe.webp` y `profe-avatar.webp`. NO generes fotos
   nuevas. Si no existe el WebP, el hero usa la silueta placeholder y lo marca con un chip TODO.
3. **No copies textos de los flyers al pie de la letra.** Los flyers de
   `context/referencias/` son solo para leer color, tipografía y tono.
4. La referencia de diseño es el portafolio "Madison" en
   `context/referencias/inspiracion/madison/` (capturas + notas): se sigue su **estructura,
   layout y vibe sección por sección** con el contenido de Karla. NO se copia su texto ni su
   código. Regla acordada con Frank el 2026-09-05: "la misma estructura, lo más idéntico posible".
   La referencia anterior (heynesh) queda descartada.
5. Botón flotante de WhatsApp visible siempre en mobile (negro con ícono blanco).
6. Las fotos de los cursos (`public/img/cursos/`) se **generan con Gemini** a pedido de Frank
   (2026-09-05) con `node scripts/generar-imagenes.mjs`, prompts en `.impeccable/prompts/`, clave
   en `.env` (nunca en el chat ni en Git). Cada WebP lleva su `.json` con el prompt exacto. Los
   videos de la galería y de "Cómo enseño" son TikToks reales de Karla (`public/video/`). La regla 2
   sigue: la foto de Karla del hero NO se genera.

## Dónde está el contexto
- `context/brand.md` → colores, tipografía, voz, datos de contacto.
- `context/estructura.md` → secciones de la landing y copy sugerido.
- `context/referencias/` → flyers y perfiles reales (leer, no copiar).

## Datos provisionales (Frank, 2026-09-05)
Frank pidió que no quede nada "por confirmar" a la vista. Por eso `site.mostrarPendientes`
está en `false` y estos datos son **inventados**, marcados con `PROVISIONAL` en `src/content/site.ts`:
años enseñando (15), precios de los cursos, horarios del ciclo y tres reseñas. Reemplazar por los
reales antes de publicar. Siguen abiertos, sin mostrarse: el lema "Tu fe es tu fortuna" (`site.lema`)
y el dominio final (por ahora `misskarla.pages.dev`). Las fotos de cursos y escritorio siguen siendo de
ejemplo (Unsplash), ya sin etiqueta; la galería "Mírame en vivo" usa clips reales de sus TikToks
(`public/video/`, generados con `scripts/videos.mjs`).

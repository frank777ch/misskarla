# Miss Karla · landing

Landing de conversión de una sola página para Karla Cornejo Flores ("Miss Karla"),
docente de matemática. Todo empuja al WhatsApp.

Stack: Astro 7 + Tailwind CSS 4 + GSAP 3. Salida estática, lista para Cloudflare Pages.

## Correr

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Dónde se edita el contenido

Toda la data vive en `src/content/site.ts`. Ahí están los cursos, los pasos, los
mensajes prellenados de WhatsApp, las redes y **todos los pendientes** marcados con
`TODO`. No hace falta tocar componentes para llenarlos.

Mientras `mostrarPendientes` sea `true`, la página muestra chips amarillos "TODO"
sobre cada dato pendiente y el bloque de testimonios vacío. Ponlo en `false` antes
de publicar.

## Pendientes (Frank)

| Pendiente | Dónde | Qué pasa mientras tanto |
|-----------|-------|-------------------------|
| Precios de cada curso | `site.cursos[].precio` | Se muestra "consúltalo por WhatsApp" |
| Horarios del ciclo actual | `site.horarios` | Se muestra "te lo confirmo por WhatsApp" con botón |
| Testimonios (capturas o textos) | `site.testimonios` | Se muestra un bloque pendiente; con datos se arma solo |
| Lema "Tu fe es tu fortuna" | `site.lema` | No se muestra (`null`) |
| CTA directo o formulario | `site.ctaModo` | `'directo'` abre WhatsApp; `'formulario'` pide nombre + celular y luego abre WhatsApp |
| Foto real de la profe | `public/img/profe-placeholder.jpg` | Reemplazar el archivo con el mismo nombre. Recorte sobre fondo plano, vertical 3:4, mínimo 1200 px de ancho |
| Imagen para compartir (og:image) | `src/layouts/Base.astro` | Sin imagen hasta tener la foto real |
| Dominio final | `astro.config.mjs` (`site`) y `site.dominio` | `https://misskarla.pages.dev` |
| Plataforma exacta de videollamada | copy de `site.ts` | El copy dice "videollamada" sin nombrar la plataforma |

## Contexto de diseño

- `CLAUDE.md`: reglas del proyecto.
- `context/brand.md`: paleta, tipografía, voz.
- `context/estructura.md`: secciones y copy sugerido.
- `context/referencias/`: flyers y perfiles reales (solo para leer, no copiar).
- `PRODUCT.md` y `DESIGN.md`: registro de producto y sistema visual (skill Impeccable).

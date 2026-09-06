# Miss Karla · landing

Landing de conversión de una sola página para Karla Cornejo Flores ("Miss Karla"),
docente de matemática. Todo empuja al WhatsApp.

Diseño (2026-09-05, segunda ronda): **la estructura del portafolio "Madison"** (Dribbble),
con paleta cálida. Saludo cursivo detrás de la cabeza, nombre gigante en Anton pisando la
foto, y las secciones de la referencia traducidas a los cursos de Karla. Detalle en
`context/estructura.md` y `context/referencias/inspiracion/madison/`.

Stack: Astro 7 + Tailwind CSS 4 + GSAP 3. Salida estática, lista para Cloudflare Pages.

## Correr

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Dónde se edita el contenido

Toda la data vive en `src/content/site.ts`: textos del hero, nav, cursos, temas, pasos,
horarios, galería, mensajes prellenados de WhatsApp, redes y **todos los pendientes**
marcados con `TODO`. No hace falta tocar componentes para llenarlos.

`mostrarPendientes` está en `false` (2026-09-05): la página se ve completa con datos
**provisionales** marcados `PROVISIONAL` en `site.ts` (15 años, precios, horarios y tres
reseñas inventadas). Si lo pones en `true`, vuelven los chips "TODO" y las etiquetas
"foto de ejemplo".

Imágenes con IA: `node scripts/generar-imagenes.mjs public/img/cursos/<nombre> .impeccable/prompts/<nombre>.txt`
genera una imagen Full HD (16:9) con Gemini y su `.json` con el prompt. Lee `GEMINI_API_KEY` de `.env`
(ignorado por Git). Acepta `--ref foto.jpg` para usar una foto de referencia y `--ratio 4:3`.

Videos de la galería "Mírame en vivo" y de "Cómo enseño": `node scripts/videos.mjs <tiktok.mp4> <nombre> [segundo]`
recorta 10 s sin audio a 480 px y genera `public/video/<nombre>.{webm,mp4,webp}`; luego se
registra en `site.videos` con el id del video de TikTok. Necesita `ffmpeg` (el de Fedora sirve:
usa VP9 y OpenH264).

Capturas: `node scripts/captura.mjs <salida.png> <ancho> <alto> [--full] [--movil]` saca
una captura con Chrome headless (movimiento reducido, todas las imágenes cargadas). El
histórico de iteraciones va fechado en `context/historico/`.

## Pendientes (Frank)

| Pendiente | Dónde | Qué pasa mientras tanto |
|-----------|-------|-------------------------|
| Foto de la profe (ya entregada) | `src/assets/foto/profe.png` | Para cambiarla: reemplaza el PNG (fondo transparente, 1600×2000) y corre `npm run foto`, que regenera `public/img/profe.webp` y `profe-avatar.webp` (lo único que se publica) |
| Años enseñando | `site.aniosEnsenando` | Provisional: 15 |
| Fotos de los cursos | `public/img/cursos/` + `site.cursos[].foto` | Generadas con Gemini (`node scripts/generar-imagenes.mjs <salida> <prompt.txt>`, clave en `.env`); regenerar si Karla prefiere fotos reales |
| Precios de cada curso | `site.cursos[].precio` | Provisionales (inventados); `null` vuelve a "consúltalo por WhatsApp" |
| Horarios del ciclo actual | `site.horarios` | Provisionales (inventados); vacío vuelve a la fila "cambian cada ciclo" |
| Testimonios (capturas o textos) | `site.testimonios` | Tres reseñas provisionales (inventadas) bajo "Mírame en vivo" |
| Lema "Tu fe es tu fortuna" | `site.lema` | No se muestra (`null`) |
| Imagen para compartir (og:image) | `src/layouts/Base.astro` | Pendiente de armar con `src/assets/foto/profe-original.jpg` |
| Dominio final | `astro.config.mjs` (`site`) y `site.dominio` | `https://misskarla.pages.dev` |
| Plataforma exacta de videollamada | copy de `site.ts` | El copy dice "videollamada" sin nombrar la plataforma |

Decidido: el CTA abre WhatsApp directo, sin formulario.

## Publicar en Cloudflare Pages

Conectar el repo `frank777ch/misskarla`, rama `main`, con estos valores:

| Campo | Valor |
|-------|-------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Variable de entorno | `NODE_VERSION` = `22` |

No hace falta ninguna otra variable: la clave de Gemini (`.env`) solo se usa en la máquina
local para generar imágenes.

### Activar Web Analytics (gratis, sin cookies)

Cloudflare Web Analytics mide visitas, páginas vistas, países y dispositivos sin cookies ni
consentimiento, y en Pages se activa con un clic:

1. En el panel de Cloudflare entra a **Workers & Pages → misskarla**.
2. Abre la pestaña **Metrics** (o **Analytics**) y pulsa **Enable Web Analytics**.
3. Listo: Cloudflare inyecta el script de medición en cada despliegue del sitio. No hay que
   tocar el código ni volver a desplegar.

Si en algún momento el sitio se sirve desde otro dominio o la inyección automática está
apagada, se agrega el beacon a mano en `src/layouts/Base.astro`, antes de `</body>`:

```html
<script defer src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "TOKEN_DEL_SITIO"}'></script>
```

El token sale de **Web Analytics → Manage site → JS snippet** en el panel de Cloudflare.
Los datos aparecen en **Analytics & Logs → Web Analytics** y tardan unos minutos en llegar.

## Contexto de diseño

- `CLAUDE.md`: reglas del proyecto.
- `context/brand.md`: paleta, tipografía, voz.
- `context/estructura.md`: secciones y copy sugerido.
- `context/referencias/`: flyers y perfiles reales (solo para leer, no copiar).
- `context/referencias/inspiracion/madison/`: capturas y lectura de la referencia de layout (heynesh queda como histórico).
- `PRODUCT.md`, `DESIGN.md` y `.impeccable/`: registro de producto, sistema visual y
  contrato de dirección (skill Impeccable).

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Astro 5 + Tailwind CSS 4 + GSAP 3, salida estática (`astro build` → `dist/`). Elegido por el usuario en el brief (CLAUDE.md) y confirmado en sesión. Deploy previsto: Cloudflare Pages (`misskarla.pages.dev`; dominio final pendiente). Node 24 en la máquina de desarrollo.

## Users
- **Primario: estudiante de secundaria (1.º a 5.º) en Perú** que llega "caliente" desde un video o live de TikTok/Instagram de Miss Karla, desde el celular, y decide en segundos si le escribe. Le cuesta matemática y busca a alguien que le explique desde cero, con paciencia. El copy le habla de tú.
- **Secundario: madre/padre que paga** y muchas veces es quien escribe al WhatsApp. Necesita una señal de confianza (cómo funciona el pago, garantía, quién es la profesora). Recibe una línea dirigida a él/ella dentro de la misma página, no una landing aparte.
- También llegan alumnos de 5.º y 6.º de primaria (refuerzo escolar) a través de sus padres.

## Product Purpose
Landing de conversión de una sola página para Karla Cornejo Flores, "Miss Karla", docente de matemática. Existe para convertir el tráfico de redes en conversaciones de WhatsApp (`https://wa.me/51995623008`). Éxito = la persona toca el botón de WhatsApp y escribe. No es un sitio corporativo ni un catálogo: una acción, una página.

## Positioning
"Matemática desde cero": enseña desde lo más básico, paso a paso y con paciencia, a estudiantes a los que la matemática les cuesta. Lo que una academia genérica no puede copiar: la relación directa con la profesora (ella misma responde el WhatsApp), la comunidad activa en TikTok (61.5K seguidores, lives diarios donde resuelve ejercicios en vivo) y un proceso simple de tres pasos sin plataforma ni matrícula.

## Operating Context
- Clases **virtuales en vivo por videollamada** (Zoom/Meet; plataforma exacta por confirmar con Frank) en los horarios del ciclo, más **grabaciones y fichas en PDF** enviadas por el grupo del curso.
- Flujo real: pago adelantado → Karla agrega al alumno a un grupo seleccionado → recibe el material de trabajo en PDF y las clases grabadas.
- Ciclos con fecha de inicio y fin (el último flyer: 9 semanas). Los horarios cambian por ciclo.
- Cursos: Matemática desde cero (básico y pre-intermedio, secundaria); Clases grabadas (paquete de 28 clases + fichas PDF); Refuerzo escolar (5.º-6.º primaria y 1.º-4.º secundaria: Aritmética, Álgebra, Geometría, Trigonometría, Razonamiento Matemático); Taller de concursos.
- Canales de origen del tráfico: TikTok @karlacornejo242 (61.5K), Instagram @karlapatriciacorn, Threads karlapatriciacorn.
- Frank es el contacto del lado del cliente: entrega la foto final, precios y horarios, y decide los pendientes.

## Capabilities and Constraints
- Una sola página con scroll y anclas por sección; sin backend, sin base de datos, sin analytics definidos.
- Todos los CTA llevan a WhatsApp con mensaje prellenado. Botón flotante de WhatsApp siempre visible en mobile.
- Mobile-first: la mayoría del tráfico es celular.
- Idioma: español de Perú (`lang="es-PE"`).
- La foto del hero es `src/assets/foto/profe.png`, entregada por Frank el 2026-09-05 (recorte con fondo transparente, cabeza a cintura, 1600×2000 px, saco marino sobre blusa blanca). Se publica solo como `public/img/profe.webp` y `profe-avatar.webp`, generados por `npm run foto`. No se generan fotos nuevas; si el archivo falta, el hero muestra la silueta placeholder marcada como pendiente.
- No copiar textos de los flyers al pie de la letra; solo tono, color y datos.
- **Decidido (2026-09-05, Frank):** el CTA principal abre WhatsApp directo con mensaje prellenado (sin formulario). Cifras que se muestran: 61.5K en TikTok, lives diarios y años enseñando (el número está pendiente).
- **Decisiones pendientes (no inventar):** precios de los cursos o "consulta por WhatsApp"; horarios exactos del ciclo actual; años enseñando (número); tres hitos reales de la historia de Karla; si se usa el lema "Tu fe es tu fortuna"; dominio final; plataforma exacta de videollamada; si se muestran testimonios y en qué formato.
- Terminología: "Miss Karla" (nombre público), "Matemática desde cero" (curso insignia y claim), "ciclo" (periodo de clases), "fichas" (material PDF), "grupo" (grupo de WhatsApp del curso).

## Brand Commitments
- Nombre público: **Miss Karla** (Karla Cornejo Flores, docente de matemática).
- **Dirección visual fijada por Frank el 2026-09-05 (segunda ronda):** seguir la estructura y el look cálido del portafolio "Madison" (Dribbble shot 24120347, capturas en `context/referencias/inspiracion/madison/`), "lo más idéntico posible" en layout, con el contenido de Karla. La dirección anterior (hero de heynesh + cuerpo como chat, marino + magenta) queda descartada: Frank la sintió de plantilla y vendedora; lo cálido transmite calma y profesionalismo.
- Paleta obligatoria de `context/brand.md`: blanco cálido `#fdfbf7`, resplandor `#ffefc2`→`#ffd1c4` (dorado a rosa suave, elegido el 2026-09-05), tinta `#111111`, tinta secundaria `#5c5750`, acento verde azulado `#0f8b8d` (Frank lo eligió el 2026-09-05 en lugar del naranja de la referencia). Sin verde de WhatsApp (ícono en blanco), sin marino ni magenta.
- Tipografía: Instrument Serif itálica (saludo y logo), Anton (titulares en mayúsculas), Inter (cuerpo). Tres familias, autohospedadas.
- Botones negros en píldora en toda la página, ícono de WhatsApp en blanco; el flotante igual.
- Voz: cercana, motivadora, paciente. Frases propias que sí se pueden usar: "Matemática desde cero", "Paso a paso y con paciencia", "100% garantizado", "Tú puedes, yo te ayudo", "Comprende, practica, aprende, triunfa". "Tu fe es tu fortuna" queda en pausa hasta que Frank decida.
- Orden fijado en `context/estructura.md`: nav, hero, mis cursos, te ayudo con, cómo enseño, cómo funciona (+ horarios), mírame en vivo, cierre, footer.
- Fotos que no son de Karla: de ejemplo (Unsplash, `public/img/ejemplo/`), marcadas como placeholder hasta que Frank entregue capturas reales.

## Evidence on Hand
- **Existe:** 61.5K seguidores y lives diarios en TikTok (captura en `context/referencias/perfil-tiktok.png`); flyers reales en `context/referencias/` con la oferta de cursos; fotos reales de clases y alumnos en su Instagram (aula llena, eventos) que podrían usarse **solo si Frank las autoriza y las entrega**; el claim "100% garantizado" aparece en sus propios flyers.
- **No existe hoy (no inventar):** testimonios o capturas de comentarios (Frank decide si los pasa; dejar slots marcados como pendientes); resultados verificables (notas, ingresos, etc.); precios; horarios del ciclo actual; foto final de la profesora.

## Product Principles
1. **Una página, una acción.** Todo empuja al WhatsApp; nada compite con ese botón.
2. **Decidir en segundos, desde el celular.** Lo importante cabe en la primera pantalla; lo demás confirma.
3. **Paciencia como diferenciador.** El tono y el ritmo de la página deben sentirse como la clase: claros, sin apuro, sin jerga.
4. **Verdad antes que relleno.** Cifras y claims solo los que existen; los pendientes se muestran como pendientes, no se inventan.
5. **Estudiante primero, padre tranquilo.** El copy le habla al alumno; una línea le da confianza a quien paga.

## Accessibility & Inclusion
- Contraste AA en texto y botones sobre marino y hueso (el botón verde de WhatsApp lleva texto oscuro, no blanco).
- Objetivos táctiles de al menos 44px; el botón flotante no tapa contenido ni el footer.
- Animaciones desactivadas con `prefers-reduced-motion`.
- Público de secundaria y padres con celulares de gama media y datos limitados: página liviana, fuentes autohospedadas, una sola imagen grande.

# Marca — Miss Karla

Dirección visual decidida con Frank el 2026-09-05 (segunda ronda): **el look cálido del portafolio
"Madison"** (`context/referencias/inspiracion/madison/`). La paleta marino + magenta de los flyers
queda descartada para la web: transmitía academia y apuro; lo cálido transmite calma, confianza
y cercanía, que es justo lo que Karla vende ("desde cero, con paciencia").

## Colores
| Rol | Hex | Uso |
|-----|-----|-----|
| Fondo | `#fdfbf7` (blanco cálido) | toda la página |
| Resplandor | `#ffe9a8` → `#ffc9a3` (amarillo suave a durazno) | detrás de Karla en el hero; franjas suaves entre secciones |
| Tinta | `#111111` | titulares, cuerpo, botones principales |
| Tinta secundaria | `#5c5750` | párrafos de apoyo, etiquetas |
| Acento | `#0f8b8d` (verde azulado) | el punto de la píldora, el punto del logo y las comillas de las reseñas; complementario del durazno. Elegido por Frank el 2026-09-05 en lugar del naranja de la referencia. Los numerales 01-04 van en gris cálido claro |
| (sin verde) | — | El ícono de WhatsApp va en blanco dentro de los botones negros; el verde de WhatsApp no se usa (decisión de Frank, 2026-09-05) |

Los botones son negros en píldora (nav, CTA, flotante) con el ícono de WhatsApp en blanco:
un solo color de botón y ningún color ajeno en la página.
No se usa el marino ni el magenta: el saco marino de la foto ya aporta el azul.

## Tipografía (tres voces, roles fijos)
- **Instrument Serif itálica** → lo emocional: el saludo "Hola, soy" del hero y el logo "Miss Karla."
- **Anton** → los titulares en mayúsculas: "MISS KARLA", "MIS CURSOS", "TE AYUDO CON".
- **Inter** → todo lo demás: nav, párrafos, etiquetas, botones.
Las tres se autohospedan con Fontsource. No agregar una cuarta.

## Voz y tono
- Cercana, motivadora, paciente. Le habla a estudiantes de secundaria y a sus padres.
- Frases que ella ya usa: "Matemática desde cero", "Paso a paso y con paciencia",
  "100% garantizado", "Tú puedes, yo te ayudo", "Comprende, practica, aprende, triunfa".
- TODO: confirmar si se usa "Tu fe es tu fortuna" (es su lema en TikTok, tiene tono
  de fe). Si Frank prefiere separar lo religioso de lo académico, omitir.

## Contacto y redes
- Nombre: Karla Cornejo Flores — "Miss Karla"
- WhatsApp: **995623008** → `https://wa.me/51995623008`
- TikTok: **@karlacornejo242** (61.5K seguidores, usar como prueba social)
- Instagram: **@karlapatriciacorn**
- Threads: karlapatriciacorn

## Cursos (de los flyers)
- **Matemática desde cero** — nivel básico y pre-intermedio, secundaria. Duración 9 semanas.
- **Clases grabadas** — paquete de 28 clases + fichas en PDF.
- **Refuerzo escolar** — primaria (5.º-6.º) y secundaria (1.º-4.º).
  Temas: Aritmética, Álgebra, Geometría, Trigonometría, Raz. Matemático.
- **Taller de concursos.**
- Cómo funciona: pago adelantado → grupo seleccionado → envío de material en PDF.

## Imágenes
- La foto del hero es la de Frank (`src/assets/foto/profe.png` → `npm run foto`).
- Las fotos de los cursos (`public/img/cursos/`) están generadas con Gemini, Full HD, con la
  misma dirección: luz cálida de ventana, crema y durazno, estudiantes peruanos, sin texto.
  Prompts en `.impeccable/prompts/`; cada WebP lleva su `.json` de origen.
- Los videos (`public/video/`) son TikToks reales de Karla recortados a clips mudos de 10 a 14 s.

## TODO de datos
- Precios (o "consulta por WhatsApp").
- Horarios exactos del ciclo actual (los flyers tienen varios, cambian por ciclo).
- Años enseñando y tres hitos reales.

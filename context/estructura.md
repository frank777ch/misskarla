# Estructura de la landing (one-page)

Decidida con Frank el 2026-09-05 (segunda ronda): **seguir la estructura del portafolio
"Madison"** (`context/referencias/inspiracion/madison/`) sección por sección, con el contenido
de Karla. Mobile-first: se maqueta primero en celular y se pule con Frank. Todo lo que se
muestra sale de `src/content/site.ts`.

## 0. Nav
Logo "Miss Karla." en Instrument Serif itálica a la izquierda. En escritorio, cinco enlaces
ancla al centro (Inicio, Cursos, Te ayudo con, Cómo funciona, Horarios). A la derecha, botón
negro en píldora "WhatsApp". En móvil: solo logo y botón, sin menú.

## 1. Hero
- Fondo blanco cálido con un resplandor amarillo→durazno detrás de Karla.
- "Hola, soy" en Instrument Serif itálica, enorme, detrás de su cabeza (una palabra a cada lado).
- Foto recortada de Karla centrada, brazos cruzados, desde la cintura.
- "MISS KARLA" en Anton, gigante, abajo a la izquierda, montado sobre la foto.
- "PROFESORA DE MATEMÁTICA" en Anton, tres líneas, abajo a la derecha.
- Píldora blanca con punto naranja a la izquierda: "Inscripciones abiertas" (TODO: ciclo).
- Párrafo corto a la derecha: matemática desde cero para secundaria, paso a paso.
- En móvil se apila: saludo detrás de la cabeza, foto, nombre en dos líneas, píldora, rol, párrafo
  y el botón "Escríbeme al WhatsApp".
- Entrada animada corta: resplandor que florece, saludo que aparece, foto que sube, nombre que
  entra desde abajo. Sin preloader. Se apaga con reduced-motion.

## 2. Mis cursos  (= "Recent projects")
Título "MIS CURSOS" centrado en Anton. Tarjetas grandes con foto (de ejemplo) y esquinas
redondeadas: nombre, para quién, qué incluye, precio (TODO → "consúltalo por WhatsApp") y
enlace "Consultar por WhatsApp". Dos por fila en escritorio, una en móvil.

## 3. Te ayudo con  (= "I can help you with")
Cuatro columnas numeradas 01-04 en naranja: Aritmética, Álgebra, Geometría y Trigonometría,
Razonamiento Matemático. Título y una línea cada una. Dos por fila en móvil.

## 4. Cómo enseño  (= "Turning my vision")
Texto a la izquierda con dos cifras grandes: 61.5K en TikTok y años enseñando (TODO).
Foto a la derecha (escritorio con laptop, de ejemplo). Una línea para mamá o papá.

## 5. Cómo funciona  (= "Experience & skills")
Filas tipo tabla separadas por líneas finas: paso, título, detalle. Pago adelantado → grupo →
material en PDF y clases grabadas. Debajo, horarios: cambian por ciclo, se piden por WhatsApp
(TODO: cuando existan, se listan en filas iguales).

## 6. Mírame en vivo  (= "My workstation")
Galería de cuatro fotos en fila (de ejemplo, luego capturas de los lives). Enlace a TikTok.
Slot de testimonios (TODO).

## 7. Cierre
Franja con resplandor cálido: "¿Empezamos?" en Anton, botón negro grande a WhatsApp,
el número para llamar debajo.

## 8. Footer
Blanco cálido, una línea: nombre completo, TikTok, Instagram, WhatsApp. Sin menús.

## Extras
- Botón flotante negro con ícono blanco de WhatsApp, fijo, siempre visible en móvil.
- Sin scroll suave de librería, sin preloader, sin menú hamburguesa.

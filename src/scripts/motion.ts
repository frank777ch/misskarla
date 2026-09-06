/**
 * Motion de la landing.
 *  1. Un solo momento autorado: la entrada del hero (~1 s): el resplandor
 *     florece, aparece el saludo, la foto sube con blur, el nombre entra por
 *     líneas y luego píldora, rol, párrafo y botón. Sin preloader.
 *  2. En escritorio, el resplandor sigue suavemente al puntero.
 *  3. Reveals por scroll, una sola vez, con el mismo easing.
 *  4. El botón flotante se esconde mientras el botón del hero está en pantalla.
 * Todo se apaga con prefers-reduced-motion (Base.astro no añade `js` al html):
 * el contenido siempre es visible sin JS.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SALIDA = 'expo.out';
const raiz = document.documentElement;

/* Botón de tema: alterna claro/oscuro con fundido y lo recuerda. */
document.querySelector<HTMLButtonElement>('[data-tema]')?.addEventListener('click', () => {
  const oscuro = raiz.dataset.theme === 'dark';
  raiz.classList.add('tema-transicion');
  raiz.dataset.theme = oscuro ? 'light' : 'dark';
  setTimeout(() => raiz.classList.remove('tema-transicion'), 500);
  try {
    localStorage.setItem('tema', raiz.dataset.theme);
  } catch {}
});

/* Nav: marca la sección visible con aria-current (el subrayado lo dibuja el CSS). */
const enlacesNav = document.querySelectorAll<HTMLAnchorElement>('[data-nav-enlace]');
if (enlacesNav.length && 'IntersectionObserver' in window) {
  const porId = new Map([...enlacesNav].map((a) => [a.dataset.navEnlace!, a]));
  const visibles = new Map<string, number>();
  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) visibles.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
      let mejor = '';
      let max = 0;
      for (const [id, r] of visibles) if (r > max) { max = r; mejor = id; }
      for (const [id, a] of porId) {
        if (id === mejor) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      }
    },
    { threshold: [0.15, 0.35, 0.6], rootMargin: '-20% 0px -40% 0px' },
  );
  for (const id of porId.keys()) {
    const sec = document.getElementById(id);
    if (sec) io.observe(sec);
  }
}

/* Botón flotante: oculto mientras el botón del hero se ve. */
const fab = document.querySelector<HTMLElement>('[data-fab]');
const ctasHero = document.querySelectorAll<HTMLElement>('[data-cta-hero]');
if (fab && ctasHero.length && 'IntersectionObserver' in window) {
  const visibles = new Set<Element>();
  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) e.isIntersecting ? visibles.add(e.target) : visibles.delete(e.target);
      fab.classList.toggle('fab-oculto', visibles.size > 0);
    },
    { threshold: 0.4 },
  );
  ctasHero.forEach((el) => io.observe(el));
}

/* Videos de la galería: se reproducen mudos solo mientras están en pantalla. No arrancan
   con "reducir movimiento" ni con ahorro de datos: queda el póster y el toque abre TikTok. */
const videos = document.querySelectorAll<HTMLVideoElement>('[data-video-tiktok]');
const ahorroDatos = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
if (videos.length && raiz.classList.contains('js') && !ahorroDatos && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        const v = e.target as HTMLVideoElement;
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      }
    },
    { threshold: 0.5 },
  );
  videos.forEach((v) => io.observe(v));
}

if (raiz.classList.contains('js')) {
  /* Las dos escenas del hero (móvil y escritorio) se animan a la vez: la que está
     en display:none no se ve, pero queda revelada si la ventana cambia de tamaño. */
  const visible = (sel: string) => gsap.utils.toArray<HTMLElement>(sel);

  // 1. Entrada del hero (el nav entra con él).
  const hero = gsap.timeline({ defaults: { ease: SALIDA } });
  hero
    .fromTo('[data-nav-item]', { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.05 }, 0)
    .fromTo('[data-hero-resplandor]', { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: 1.4, ease: 'power2.out' }, 0)
    .fromTo(visible('[data-hero-saludo] > *'), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 }, 0.1)
    .fromTo(
      visible('[data-hero-foto]'),
      { autoAlpha: 0, y: 48, filter: 'blur(14px)' },
      { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' },
      0.15,
    )
    .fromTo(visible('[data-hero-linea]'), { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.8, stagger: 0.09 }, 0.5)
    .fromTo(visible('[data-hero-item]'), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.75)
    // Al terminar, el resplandor respira despacio (escala) mientras el puntero lo desplaza (xPercent).
    .add(() => {
      gsap.to('[data-hero-resplandor]', { scale: 1.05, duration: 5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    });

  // 2. El resplandor sigue al puntero (solo punteros finos).
  const resplandor = document.querySelector<HTMLElement>('[data-hero-resplandor]');
  const cabecera = document.querySelector<HTMLElement>('#inicio');
  if (resplandor && cabecera && matchMedia('(pointer: fine)').matches) {
    const xTo = gsap.quickTo(resplandor, 'xPercent', { duration: 1.4, ease: 'power2.out' });
    const yTo = gsap.quickTo(resplandor, 'yPercent', { duration: 1.4, ease: 'power2.out' });
    cabecera.addEventListener('pointermove', (e) => {
      const r = cabecera.getBoundingClientRect();
      xTo(((e.clientX - r.left) / r.width - 0.5) * 2.5);
      yTo(((e.clientY - r.top) / r.height - 0.5) * 2);
    });
    cabecera.addEventListener('pointerleave', () => {
      xTo(0);
      yTo(0);
    });
  }

  // 3. Reveals por scroll. Los títulos de sección entran con barrido (como las líneas del nombre).
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.classList.contains('titulo') && el.children.length === 0) {
      const texto = el.textContent ?? '';
      el.textContent = '';
      el.style.overflow = 'hidden';
      const interior = document.createElement('span');
      interior.className = 'block pb-[0.08em] -mb-[0.08em]';
      interior.textContent = texto;
      el.appendChild(interior);
      gsap.set(el, { autoAlpha: 1 });
      gsap.fromTo(
        interior,
        { yPercent: 110 },
        { yPercent: 0, duration: 1, ease: SALIDA, scrollTrigger: { trigger: el, start: 'top 90%', once: true } },
      );
      return;
    }
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 28 },
      { autoAlpha: 1, y: 0, duration: 1, ease: SALIDA, scrollTrigger: { trigger: el, start: 'top 88%', once: true } },
    );
  });
  gsap.utils.toArray<HTMLElement>('[data-reveal-grupo]').forEach((grupo) => {
    const hijos = grupo.querySelectorAll<HTMLElement>('[data-anim]');
    if (!hijos.length) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: grupo, start: 'top 85%', once: true } });
    tl.fromTo(hijos, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: SALIDA }, 0);
    // Las fotos de tarjeta se asientan: llegan un poco ampliadas y bajan a su tamaño.
    const fotos = grupo.querySelectorAll<HTMLElement>('.foto-tarjeta');
    if (fotos.length) tl.fromTo(fotos, { scale: 1.08 }, { scale: 1, duration: 1.4, stagger: 0.1, ease: SALIDA, clearProps: 'scale' }, 0);
    // Las filas dibujan su línea superior de izquierda a derecha.
    const filas = grupo.querySelectorAll<HTMLElement>('.fila');
    if (filas.length) tl.fromTo(filas, { '--linea': '0%' }, { '--linea': '100%', duration: 1.1, stagger: 0.1, ease: SALIDA }, 0.1);
  });

  // 4. Cifras que cuentan hacia arriba al aparecer (61.5K, 15 años).
  gsap.utils.toArray<HTMLElement>('[data-cifra]').forEach((el) => {
    const fin = parseFloat(el.dataset.cifra ?? '0');
    const dec = parseInt(el.dataset.decimales ?? '0', 10);
    const sufijo = el.dataset.sufijo ?? '';
    const estado = { v: 0 };
    gsap.to(estado, {
      v: fin,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onUpdate: () => {
        el.textContent = estado.v.toFixed(dec) + sufijo;
      },
    });
  });
}

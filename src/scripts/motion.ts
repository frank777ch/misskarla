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

  // 1. Entrada del hero.
  const hero = gsap.timeline({ defaults: { ease: SALIDA } });
  hero
    .fromTo('[data-hero-resplandor]', { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: 1.4, ease: 'power2.out' }, 0)
    .fromTo(visible('[data-hero-saludo] > *'), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 }, 0.1)
    .fromTo(
      visible('[data-hero-foto]'),
      { autoAlpha: 0, y: 48, filter: 'blur(14px)' },
      { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' },
      0.15,
    )
    .fromTo(visible('[data-hero-linea]'), { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.8, stagger: 0.09 }, 0.5)
    .fromTo(visible('[data-hero-item]'), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.75);

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

  // 3. Reveals por scroll.
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 28 },
      { autoAlpha: 1, y: 0, duration: 1, ease: SALIDA, scrollTrigger: { trigger: el, start: 'top 88%', once: true } },
    );
  });
  gsap.utils.toArray<HTMLElement>('[data-reveal-grupo]').forEach((grupo) => {
    const hijos = grupo.querySelectorAll<HTMLElement>('[data-anim]');
    if (!hijos.length) return;
    gsap.fromTo(
      hijos,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: SALIDA, scrollTrigger: { trigger: grupo, start: 'top 85%', once: true } },
    );
  });
}

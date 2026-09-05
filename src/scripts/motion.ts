/**
 * Motion de la landing. Un solo momento autorado (la entrada del hero con el
 * subrayado de plumón) y apoyos discretos al hacer scroll. Todo se apaga con
 * prefers-reduced-motion; el contenido siempre es visible sin JS.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SALIDA = 'expo.out';

const mm = gsap.matchMedia();

mm.add(
  {
    conMotion: '(prefers-reduced-motion: no-preference)',
    escritorio: '(min-width: 64rem)',
  },
  (contexto) => {
    const { conMotion, escritorio } = contexto.conditions as { conMotion: boolean; escritorio: boolean };
    if (!conMotion) return;

    // 1. Entrada del hero: foto, fila superior, nombre, H1, plumón, frase, botones.
    const hero = gsap.timeline({ defaults: { ease: SALIDA, duration: 0.9 } });
    hero
      .from('[data-hero-foto]', { scale: 1.06, duration: 1.8 }, 0)
      .from('[data-hero-top] > *', { y: -10, opacity: 0, stagger: 0.08, duration: 0.6 }, 0.15)
      .from('[data-hero-nombre]', { y: 14, opacity: 0 }, 0.25)
      .from('[data-hero-linea]', { y: 28, opacity: 0, stagger: 0.12 }, 0.35)
      .from('[data-plumon]', { strokeDashoffset: 1, duration: 0.7, ease: 'power2.inOut' }, 0.8)
      .from('[data-hero-sub]', { y: 16, opacity: 0 }, 0.75)
      .from('[data-hero-ctas] > *', { y: 16, opacity: 0, stagger: 0.1 }, 0.9);

    // 2. Bloques que suben al entrar (una sola vez).
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: SALIDA,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    // 3. Cursos compactos: entran desde la derecha en escalera.
    const compactos = gsap.utils.toArray<HTMLElement>('[data-reveal-x]');
    if (compactos.length) {
      gsap.from(compactos, {
        x: 32,
        opacity: 0,
        duration: 0.8,
        ease: SALIDA,
        stagger: 0.1,
        scrollTrigger: { trigger: compactos[0], start: 'top 85%', once: true },
      });
    }

    // 4. Pasos: la línea dorada se dibuja con el scroll y cada paso aparece en orden.
    const pasos = document.querySelector('[data-pasos]');
    const segmentos = gsap.utils.toArray<HTMLElement>('[data-linea-pasos]');
    if (pasos && segmentos.length) {
      gsap.from(segmentos, {
        ...(escritorio ? { scaleX: 0 } : { scaleY: 0 }),
        ease: 'none',
        stagger: 0.6,
        scrollTrigger: { trigger: pasos, start: 'top 75%', end: 'bottom 65%', scrub: 0.5 },
      });
      gsap.from('[data-paso]', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: SALIDA,
        stagger: 0.18,
        scrollTrigger: { trigger: pasos, start: 'top 80%', once: true },
      });
    }

    // 5. Contador de seguidores.
    const contador = document.querySelector<HTMLElement>('[data-count]');
    if (contador) {
      const meta = parseFloat(contador.dataset.count ?? '0');
      const estado = { valor: 0 };
      gsap.to(estado, {
        valor: meta,
        duration: 1.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: contador, start: 'top 85%', once: true },
        onUpdate: () => {
          contador.textContent = estado.valor.toFixed(1);
        },
      });
    }

    // 6. Cierre: título, frase y botón suben en cascada.
    gsap.from('[data-cta-final] > *', {
      y: 24,
      opacity: 0,
      duration: 0.9,
      ease: SALIDA,
      stagger: 0.1,
      scrollTrigger: { trigger: '[data-cta-final]', start: 'top 80%', once: true },
    });
  },
);

import { existsSync } from 'node:fs';
import path from 'node:path';

/**
 * La foto real la entrega Frank en `src/assets/foto/profe.png` (recorte con
 * fondo transparente, 1600×2000). `npm run foto` la convierte en
 * `public/img/profe.webp` (hero) y `public/img/profe-avatar.webp` (cabecera del
 * chat), que es lo único que se publica. Sin esos archivos, el hero usa la
 * silueta placeholder y lo marca como pendiente.
 *
 * Se resuelve desde la raíz del proyecto (cwd) y no desde import.meta.url,
 * porque en `astro build` el módulo se empaqueta lejos de `public/`.
 */
const raiz = process.cwd();
const hayWebp = existsSync(path.join(raiz, 'public/img/profe.webp'));
const hayAvatar = existsSync(path.join(raiz, 'public/img/profe-avatar.webp'));

export const FOTO = hayWebp
  ? {
      src: '/img/profe.webp',
      avatar: hayAvatar ? '/img/profe-avatar.webp' : '/img/profe.webp',
      esReal: true,
      ancho: 1600,
      alto: 2000,
    }
  : {
      src: '/img/profe-placeholder-recorte.png',
      avatar: '/img/profe-placeholder-recorte.png',
      esReal: false,
      ancho: 405,
      alto: 540,
    };

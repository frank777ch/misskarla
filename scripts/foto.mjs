/**
 * Convierte src/assets/foto/profe.png (recorte con fondo transparente que entrega
 * Frank) a WebP liviano para la web. Corre: `npm run foto`.
 */
import sharp from 'sharp';
import { existsSync } from 'node:fs';

const entrada = 'src/assets/foto/profe.png';
if (!existsSync(entrada)) {
  console.log('No existe src/assets/foto/profe.png; nada que convertir.');
  process.exit(0);
}
await sharp(entrada).resize(1600, 2000, { fit: 'inside' }).webp({ quality: 86, alphaQuality: 90 }).toFile('public/img/profe.webp');
await sharp(entrada).resize(200, 200, { fit: 'cover', position: 'top' }).webp({ quality: 80 }).toFile('public/img/profe-avatar.webp');
console.log('Listo: public/img/profe.webp y public/img/profe-avatar.webp');

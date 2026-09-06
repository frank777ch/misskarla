// Convierte videos de TikTok (576×1024, varios minutos) en clips cortos y livianos para la
// galería "Mírame en vivo": 10 s sin audio, 480 px de ancho, WebM (VP9) + MP4 (H.264 con
// OpenH264, el único H.264 del ffmpeg de Fedora) + póster WebP.
// Uso: node scripts/videos.mjs <entrada.mp4> <nombre-salida> [segundo-inicio=5] [duracion=10]
// Requiere ffmpeg en el PATH. Salida: public/video/<nombre>.mp4 y <nombre>.webp (+ .json de origen).
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const [entrada, nombre, inicio = '5', duracion = '10'] = process.argv.slice(2);
if (!entrada || !nombre) {
  console.error('Uso: node scripts/videos.mjs <entrada.mp4> <nombre-salida> [segundo-inicio]');
  process.exit(1);
}
const mp4 = `public/video/${nombre}.mp4`;
const webm = `public/video/${nombre}.webm`;
const poster = `public/video/${nombre}.webp`;
const comun = ['-v', 'error', '-y', '-ss', inicio, '-t', duracion, '-i', entrada, '-an', '-vf', 'scale=480:-2,fps=24'];

execFileSync('ffmpeg', [...comun, '-c:v', 'libvpx-vp9', '-crf', '34', '-b:v', '0', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '1',
  '-pix_fmt', 'yuv420p', webm], { stdio: 'inherit' });
execFileSync('ffmpeg', [...comun, '-c:v', 'libopenh264', '-b:v', '550k', '-maxrate', '750k', '-bufsize', '1500k', '-profile:v', 'main',
  '-pix_fmt', 'yuv420p', '-movflags', '+faststart', mp4], { stdio: 'inherit' });
execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', inicio, '-i', entrada, '-frames:v', '1',
  '-vf', 'scale=480:-2', '-quality', '78', poster], { stdio: 'inherit' });

const idTikTok = entrada.match(/(\d{15,})/)?.[1];
const origen = {
  prompt: `Clip de ${duracion} s (desde el segundo ${inicio}) del video de TikTok de Miss Karla${idTikTok ? ` (id ${idTikTok})` : ''}, descargado por Frank el 2026-09-05. Recodificado con scripts/videos.mjs (480 px, VP9 CRF 34 + H.264 550 kbps, sin audio). El póster es el primer cuadro del clip.`,
  createdAt: new Date().toISOString(),
};
writeFileSync(`${poster}.json`, JSON.stringify(origen, null, 2) + '\n');
writeFileSync(`${mp4}.json`, JSON.stringify(origen, null, 2) + '\n');
writeFileSync(`${webm}.json`, JSON.stringify(origen, null, 2) + '\n');
console.log(`${webm} + ${mp4} + ${poster}`);

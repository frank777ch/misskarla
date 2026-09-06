// Genera una imagen con Gemini (API de imágenes) y la guarda como WebP Full HD en el repo.
// Uso: node scripts/generar-imagenes.mjs <salida-sin-extension> <archivo-prompt.txt> [--ref foto.jpg] [--ratio 16:9] [--modelo gemini-3-pro-image]
// Lee GEMINI_API_KEY de .env (nunca lo imprime). Escribe <salida>.webp y <salida>.webp.json con el prompt exacto.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const [salida, promptPath] = args;
const opt = (k, d) => (args.includes(k) ? args[args.indexOf(k) + 1] : d);
const ref = opt('--ref', null);
const ratio = opt('--ratio', '16:9');
const modelo = opt('--modelo', 'gemini-3-pro-image');
if (!salida || !promptPath) { console.error('Uso: node scripts/generar-imagenes.mjs <salida> <prompt.txt> [--ref foto] [--ratio 16:9] [--modelo m]'); process.exit(1); }

const env = Object.fromEntries(readFileSync('.env', 'utf8').split('\n').filter((l) => l.includes('=')).map((l) => l.split('=').map((x) => x.trim())));
const key = env.GEMINI_API_KEY;
if (!key) { console.error('Falta GEMINI_API_KEY en .env'); process.exit(1); }

const prompt = readFileSync(promptPath, 'utf8').trim();
const parts = [];
if (ref) {
  const mime = ref.endsWith('.png') ? 'image/png' : ref.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
  parts.push({ inlineData: { mimeType: mime, data: readFileSync(ref).toString('base64') } });
}
parts.push({ text: prompt });

const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`, {
  method: 'POST',
  headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
  body: JSON.stringify({
    contents: [{ role: 'user', parts }],
    generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: ratio, imageSize: '2K' } },
  }),
});
const data = await res.json();
if (!res.ok) { console.error('Error de la API:', res.status, JSON.stringify(data).slice(0, 600)); process.exit(2); }
const img = data.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
if (!img) { console.error('Sin imagen en la respuesta:', JSON.stringify(data).slice(0, 600)); process.exit(3); }

const tmp = `${salida}.tmp.png`;
writeFileSync(tmp, Buffer.from(img.inlineData.data, 'base64'));
execFileSync('magick', [tmp, '-resize', '1920x1920>', '-quality', '84', `${salida}.webp`]);
execFileSync('rm', ['-f', tmp]);
writeFileSync(`${salida}.webp.json`, JSON.stringify({
  prompt: `Imagen generada con ${modelo} (Gemini API) el ${new Date().toISOString().slice(0, 10)} a pedido de Frank, para la landing de Miss Karla. ${ref ? `Referencia: ${ref}. ` : ''}Prompt: ${prompt}`,
  createdAt: new Date().toISOString(),
}, null, 2) + '\n');
const dims = execFileSync('identify', ['-format', '%wx%h', `${salida}.webp`]).toString();
console.log(`${salida}.webp ${dims}`);

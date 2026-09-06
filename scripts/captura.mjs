// Captura la landing con Chrome headless vía DevTools Protocol (sin dependencias).
// Uso: node scripts/captura.mjs <salida.png> <ancho> <alto> [--full] [--movil] [--con-movimiento] [--desde 1440x900] [--url http://localhost:4321/]
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const [salida, ancho, alto] = args;
const full = args.includes('--full');
const movil = args.includes('--movil');
const url = args.includes('--url') ? args[args.indexOf('--url') + 1] : 'http://localhost:4321/';
const conMovimiento = args.includes('--con-movimiento'); // no fuerza reduced-motion: prueba la animación real
const evalExpr = args.includes('--eval') ? args[args.indexOf('--eval') + 1] : null; // imprime el resultado de una expresión JS
const desde = args.includes('--desde') ? args[args.indexOf('--desde') + 1].split('x').map(Number) : null; // carga primero a este tamaño y luego redimensiona
const port = 9222 + Math.floor(Math.random() * 500);

const chrome = spawn('google-chrome', [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
  ...(conMovimiento ? [] : ['--force-prefers-reduced-motion']), `--remote-debugging-port=${port}`,
  `--window-size=${ancho},${alto}`, 'about:blank',
], { stdio: 'ignore' });

const espera = (ms) => new Promise((r) => setTimeout(r, ms));
async function json(u) { for (let i = 0; i < 40; i++) { try { return await (await fetch(u)).json(); } catch { await espera(250); } } throw new Error('Chrome no respondió'); }

try {
  const [tab] = (await json(`http://127.0.0.1:${port}/json`)).filter((t) => t.type === 'page');
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  let id = 0; const pend = new Map();
  ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); } };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

  await send('Page.enable');
  await send('Runtime.enable');
  const errores = [];
  const onMsg = ws.onmessage;
  ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.method === 'Runtime.exceptionThrown') errores.push(m.params.exceptionDetails?.exception?.description || m.params.exceptionDetails?.text); onMsg(e); };
  await send('Emulation.setDeviceMetricsOverride', { width: desde ? desde[0] : +ancho, height: desde ? desde[1] : +alto, deviceScaleFactor: 1, mobile: movil && !desde });
  if (movil) await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  await send('Page.navigate', { url });
  await espera(conMovimiento ? 3500 : 1500);
  if (desde) {
    await send('Emulation.setDeviceMetricsOverride', { width: +ancho, height: +alto, deviceScaleFactor: 1, mobile: movil });
    await espera(1200);
  }
  // Espera a que carguen todas las imágenes (las lazy se fuerzan a cargar).
  await send('Runtime.evaluate', { awaitPromise: true, expression: `(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => { i.loading = 'eager'; });
    await document.fonts.ready;
    await Promise.all([...document.images].map((i) => i.complete ? 1 : new Promise((r) => { i.onload = i.onerror = r; })));
    window.scrollTo(0, 0);
  })()` });
  await espera(600);
  if (evalExpr) {
    const r = await send('Runtime.evaluate', { returnByValue: true, awaitPromise: true, expression: evalExpr });
    console.log(JSON.stringify(r.result?.result?.value ?? r));
  }
  let clip;
  if (full) {
    const alto = await send('Runtime.evaluate', { returnByValue: true, expression: 'document.documentElement.scrollHeight' });
    const h = alto.result.result.value;
    await send('Emulation.setDeviceMetricsOverride', { width: +ancho, height: h, deviceScaleFactor: 1, mobile: movil });
    await espera(400);
    clip = { x: 0, y: 0, width: +ancho, height: h, scale: 1 };
  }
  const cap = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: full, ...(clip ? { clip } : {}) });
  if (!cap.result) throw new Error('captureScreenshot: ' + JSON.stringify(cap.error));
  writeFileSync(salida, Buffer.from(cap.result.data, 'base64'));
  if (errores.length) console.log('ERRORES JS:', JSON.stringify(errores.slice(0, 5)));
  console.log(`${salida} ${ancho}x${clip ? clip.height : alto}`);
  ws.close();
} finally {
  chrome.kill('SIGKILL');
}

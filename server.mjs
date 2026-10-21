// Tiny zero-dependency static server. Browsers block ES modules on file://,
// so run `npm start` and open http://localhost:5173.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const port = Number(process.env.PORT) || 5173;

// Only these top-level entries are served; tests, package.json etc. stay private.
const publicEntries = new Set(['index.html', 'src', 'styles', 'public']);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
  res.end(body);
}

createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url, 'http://localhost');
    let relative = normalize(decodeURIComponent(pathname)).replace(/^[\\/]+/, '');
    if (relative === '') relative = 'index.html';

    const file = resolve(join(root, relative));
    const [top] = relative.split(/[\\/]/);
    if (!file.startsWith(root + sep) || !publicEntries.has(top)) {
      return send(res, 404, 'Not found');
    }

    const info = await stat(file);
    if (!info.isFile()) return send(res, 404, 'Not found');
    send(res, 200, await readFile(file), mimeTypes[extname(file)] ?? 'application/octet-stream');
  } catch {
    send(res, 404, 'Not found');
  }
}).listen(port, () => {
  console.log(`KCTI running at http://localhost:${port}`);
});

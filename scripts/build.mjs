import { build } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { pagePaths, renderMetadata, siteUrl } from '../src/seo.js';
import { checkSeo } from './check-seo.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = resolve(root, 'dist');
// Keep the intermediate Node bundle outside the published output.
const serverOut = resolve(root, 'node_modules/.cache/portfolio-prerender');
await build({ root });
await build({ root, publicDir: false, build: {
  ssr: resolve(root, 'src/entry-server.jsx'), outDir: serverOut, emptyOutDir: true,
  rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
} });

const { render } = await import(pathToFileURL(resolve(serverOut, 'entry-server.mjs')).href);
const template = await readFile(resolve(dist, 'index.html'), 'utf8');
const year = new Date().getFullYear();
if (!template.includes('<!--seo-start-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('Prerender template markers are missing.');
}
for (const pathname of [...pagePaths, '/404.html']) {
  const html = template
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, `<!--seo-start-->\n    ${renderMetadata(pathname)}\n    <!--seo-end-->`)
    .replace('<div id="root"></div>', `<div id="root" data-year="${year}">${render(pathname, year)}</div>`);
  const destination = pathname === '/404.html' ? resolve(dist, '404.html') : resolve(dist, `.${pathname}`, 'index.html');
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

// Only real public pages belong in the sitemap. No fabricated lastmod dates.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pagePaths.map(path => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve(dist, 'sitemap.xml'), sitemap);
await writeFile(resolve(dist, '.nojekyll'), '');
await checkSeo();
console.log(`Pre-rendered ${pagePaths.length} indexable pages and a 404 page.`);

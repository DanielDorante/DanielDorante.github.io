import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { pagePaths, pageMetadata, getProject, siteUrl } from '../src/seo.js';
import { projects, projectPath } from '../src/projects.js';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

export async function checkSeo() {
  const sitemap = await readFile(resolve(dist, 'sitemap.xml'), 'utf8');
  const robots = await readFile(resolve(dist, 'robots.txt'), 'utf8');
  assert.match(robots, /Allow: \//);
  assert.ok(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`));
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  assert.deepEqual(locations, pagePaths.map(path => `${siteUrl}${path}`));
  const titles = new Set();
  const descriptions = new Set();

  for (const pathname of pagePaths) {
    const html = await readFile(resolve(dist, `.${pathname}`, 'index.html'), 'utf8');
    const meta = pageMetadata(pathname);
    assert.equal((html.match(/<title>/g) || []).length, 1, `${pathname}: one title`);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), `${pathname}: unique title`);
    titles.add(title);
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(description && !descriptions.has(description), `${pathname}: unique description`);
    descriptions.add(description);
    assert.ok(html.includes(`<link rel="canonical" href="${meta.url}"`), `${pathname}: canonical`);
    assert.ok(!html.includes('noindex'), `${pathname}: indexable`);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${pathname}: one h1`);
    const body = html.split('<body>')[1];
    assert.ok(body.includes('Daniel Dorante'), `${pathname}: identity rendered without JS`);
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.ok(schema['@graph'].some(node => node['@type'] === 'Person'));
    const project = getProject(pathname);
    if (project) {
      assert.ok(body.includes(project.role), `${pathname}: engineering content rendered without JS`);
      assert.ok(body.includes(project.takeaway), `${pathname}: takeaway rendered without JS`);
      assert.ok(schema['@graph'].some(node => node['@type'] === 'BreadcrumbList'));
    } else {
      for (const item of projects) assert.ok(body.includes(`href="${projectPath(item)}"`), `Crawlable link: ${item.id}`);
      assert.ok(schema['@graph'].some(node => node['@type'] === 'ProfilePage'));
    }
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"#]+)"/g)) {
      await access(resolve(dist, `.${asset}`));
    }
  }
  const notFound = await readFile(resolve(dist, '404.html'), 'utf8');
  assert.match(notFound, /name="robots" content="noindex, follow"/);
  assert.ok(!notFound.includes('rel="canonical"'), '404 must not canonicalize to the homepage');
  console.log(`SEO checks passed: ${pagePaths.length} pages, metadata, structured data, static content, links, assets, sitemap, and 404.`);
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) await checkSeo();

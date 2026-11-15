import { projects, projectPath } from './projects.js';

export const siteUrl = 'https://danieldorante.github.io';
export const homeTitle = 'Daniel Dorante | Backend Software Engineer';
export const homeDescription = 'Daniel Dorante is a backend software engineer at SDSI and QUT graduate. Explore projects in Python, Django, C#, cloud systems, and machine learning.';

const projectTitles = {
  fieldwork: 'Offline-first Django API for a Mining App',
  'red-squirrel': 'Red Squirrel: Python Chess Engine',
  'bird-machine': 'Bird Machine: Bird Species Classifier',
  carbonchain: 'CarbonChain: Ethereum Sustainability App',
  'ergo-quest': 'Ergo Quest: Java Gaming Analytics',
  sadboi: 'SadBoi: AWS Cloud Data Application',
};

export const person = {
  '@type': 'Person',
  '@id': `${siteUrl}/#daniel-dorante`,
  name: 'Daniel Dorante',
  url: `${siteUrl}/`,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: 'Software Engineer',
  description: homeDescription,
  worksFor: { '@type': 'Organization', name: 'SDSI' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Queensland University of Technology' },
  knowsAbout: ['Backend engineering', 'Python', 'Django', 'C#', 'SQL', 'Machine learning', 'Computer vision', 'AWS'],
  sameAs: ['https://github.com/DanielDorante', 'https://www.linkedin.com/in/danieldorante/'],
};

export function getProject(pathname) {
  const path = pathname.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
  return projects.find(project => projectPath(project).replace(/\/$/, '') === path);
}

export const isHome = pathname => ['/', '/index.html'].includes(pathname);
export const pagePaths = ['/', ...projects.map(projectPath)];

export function pageMetadata(pathname) {
  const project = getProject(pathname);
  const home = isHome(pathname);
  if (!home && !project) return {
    title: 'Page not found | Daniel Dorante',
    description: 'This page could not be found. Explore Daniel Dorante’s software engineering portfolio.',
    noindex: true,
  };
  const url = `${siteUrl}${project ? projectPath(project) : '/'}`;
  const title = project ? `${projectTitles[project.id]} | Daniel Dorante` : homeTitle;
  const description = project ? project.description : homeDescription;
  const graph = [person, {
    '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`,
    name: 'Daniel Dorante — Software Engineering Portfolio', inLanguage: 'en-AU',
    publisher: { '@id': person['@id'] },
  }];
  if (home) {
    graph.push({
      '@type': 'ProfilePage', '@id': `${url}#webpage`, url, name: title, description,
      inLanguage: 'en-AU', isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: { '@id': person['@id'] },
    });
  } else {
    graph.push({
      '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description,
      isPartOf: { '@id': `${siteUrl}/#website` }, inLanguage: 'en-AU',
      mainEntity: { '@id': `${url}#project` }, breadcrumb: { '@id': `${url}#breadcrumbs` },
    }, {
      '@type': 'CreativeWork', '@id': `${url}#project`, name: projectTitles[project.id],
      description, url, about: project.type, keywords: project.tags.join(', '),
      contributor: { '@id': person['@id'] }, ...(project.github ? { sameAs: project.github } : {}),
    }, {
      '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Portfolio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: projectTitles[project.id], item: url },
      ],
    });
  }
  return { title, description, url, graph, heading: project ? projectTitles[project.id] : homeTitle };
}

const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function renderMetadata(pathname) {
  const meta = pageMetadata(pathname);
  const lines = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
  ];
  if (meta.noindex) return lines.join('\n    ');
  lines.push(
    `<link rel="canonical" href="${meta.url}" />`,
    '<meta name="author" content="Daniel Dorante" />',
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="en_AU" />',
    '<meta property="og:site_name" content="Daniel Dorante — Software Engineering Portfolio" />',
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${meta.url}" />`,
    `<meta property="og:image" content="${siteUrl}/profile.jpg" />`,
    '<meta property="og:image:alt" content="Daniel Dorante, backend software engineer" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${siteUrl}/profile.jpg" />`,
    '<meta name="twitter:image:alt" content="Daniel Dorante, backend software engineer" />',
    `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': meta.graph }).replaceAll('<', '\\u003c')}</script>`,
  );
  return lines.join('\n    ');
}

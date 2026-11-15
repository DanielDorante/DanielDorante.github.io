# Daniel Dorante — Portfolio

A React and Vite portfolio focused on backend engineering, data, and intelligent systems.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`; the static output is written to `dist/`.

## Editing

- `src/Portfolio.jsx`: homepage sections, project filters, and native dialog interactions.
- `src/projects.js`: shared project content; each entry gets a permanent project page.
- `src/ProjectPage.jsx`: crawlable project detail pages.
- `src/seo.js`: canonical domain, per-page metadata, structured data, and route list.
- `src/portfolio.css`: responsive layouts, typography, motion, and component styles.
- `public/profile.jpg`: portrait.
- `public/favicon.svg`: lightweight brand icon.
- `index.html`: page metadata, structured data, and font loading.

The project graphics are illustrative concepts, not application screenshots. Project descriptions and reported results are retained from the original portfolio. The site includes keyboard-accessible project controls, native modal focus containment, focus restoration, mobile navigation, a skip link, and reduced-motion support.

The redesign is local until committed and deployed through the existing GitHub Pages workflow.

## Search engine optimisation

`npm run build` pre-renders the homepage and all six project pages into real HTML, then hydrates them with React in the browser. GitHub Pages serves the project folders directly; no server or SPA rewrite is required. The build also generates `sitemap.xml` and a `noindex` 404 page, and checks titles, descriptions, canonical URLs, JSON-LD, crawlable project links, static content, and asset paths. Run `npm run test:seo` to check an existing build.

Update metadata in `src/seo.js`. The build replaces the `seo-start`/`seo-end` block in `index.html` for each page. That template's default metadata is for the development homepage. To inspect the actual published HTML and per-page metadata locally, use `npm run build` followed by `npm run preview`.

After publishing through the existing workflow:

1. Verify the URL-prefix property `https://danieldorante.github.io/` in Google Search Console using Google's supplied verification file or meta tag. Never invent a verification token.
2. Submit `https://danieldorante.github.io/sitemap.xml` under Sitemaps.
3. Inspect the homepage and a project URL with URL Inspection, test the live URL, and request indexing.
4. Monitor indexing and actual search queries in Search Console. Crawling and indexing remain Google's decision; technical SEO cannot guarantee a ranking.

Keep the same portfolio URL on GitHub and LinkedIn. New project content should describe real decisions, constraints, and measured outcomes. Don't add unsupported locations, invented results, keyword lists, or fake review markup.

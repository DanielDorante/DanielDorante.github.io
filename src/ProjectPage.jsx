import { projects, projectPath } from './projects.js';
import { pageMetadata } from './seo.js';

export default function ProjectPage({ project, year }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="/" aria-label="Daniel Dorante, home"><span className="monogram">d<span>.</span></span><span>Daniel Dorante<span className="brand-role">Software engineer</span></span></a>
      <a className="text-link" href="/#work">← All projects</a>
    </header>
    <main id="main" className="case-page section-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Portfolio</a><span aria-hidden="true">/</span><span aria-current="page">{project.id === 'fieldwork' ? 'Industry capstone' : project.name}</span></nav>
      <div className="eyebrow">{project.type}{project.year ? ` / ${project.year}` : ''}</div>
      <h1>{pageMetadata(projectPath(project)).heading}</h1>
      <p className="case-intro">{project.description}</p>
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="case-body">
        <section><h2>The engineering</h2><p>{project.role}</p></section>
        <section><h2>The takeaway</h2><p>{project.takeaway}</p></section>
      </div>
      <div className="hero-actions">{project.github && <a className="button primary" href={project.github} target="_blank" rel="noreferrer">View source on GitHub ↗</a>}<a className={project.github ? 'text-link' : 'button primary'} href="mailto:dpdorante249@gmail.com">Talk about this project ↗</a></div>
      <section className="related-projects"><h2>More projects</h2><div>{projects.filter(other => other.id !== project.id).map(other => <a key={other.id} href={projectPath(other)}>{other.id === 'fieldwork' ? 'Offline-first industry capstone' : other.name} <span aria-hidden="true">↗</span></a>)}</div></section>
    </main>
    <footer className="section-shell"><a className="footer-name" href="/">Daniel Dorante<span>© {year}</span></a><a className="text-link" href="/#contact">Get in touch ↗</a></footer>
  </>;
}

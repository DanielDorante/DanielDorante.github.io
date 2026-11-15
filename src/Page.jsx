import Portfolio from './Portfolio.jsx';
import ProjectPage from './ProjectPage.jsx';
import { getProject, isHome } from './seo.js';

export default function Page({ pathname, year }) {
  if (isHome(pathname)) return <Portfolio year={year}/>;
  const project = getProject(pathname);
  if (project) return <ProjectPage project={project} year={year}/>;
  return <main className="case-page section-shell"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>This page isn’t here.</h1><p className="case-intro">The link may have changed. You can find my projects, experience, and contact details in my portfolio.</p><a className="button primary" href="/">Back to the portfolio →</a></main>;
}

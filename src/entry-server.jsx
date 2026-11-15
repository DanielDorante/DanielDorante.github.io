import { renderToString } from 'react-dom/server';
import Page from './Page.jsx';

export function render(pathname, year) {
  return renderToString(<Page pathname={pathname} year={year}/>);
}

import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './portfolio.css'
import Page from './Page.jsx'

const root = document.getElementById('root')
const year = Number(root.dataset.year) || new Date().getFullYear()
const app = <StrictMode><Page pathname={window.location.pathname} year={year}/></StrictMode>

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}

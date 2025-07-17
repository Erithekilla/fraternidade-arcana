import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppBiblioteca from './AppBiblioteca.jsx'
import '../index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppBiblioteca />
  </StrictMode>,
)

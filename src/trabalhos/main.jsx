import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTrabalhos from './AppTrabalho.jsx'
import '../index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTrabalhos />
  </StrictMode>,
)

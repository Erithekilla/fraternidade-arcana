import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTrabalhos from './AppTrabalho.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTrabalhos />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppGrupos from './AppGrupos.jsx'
import '../index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppGrupos />
  </StrictMode>,
)

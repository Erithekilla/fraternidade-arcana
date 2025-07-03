import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppOiac from './AppOiac.jsx'
import '../index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppOiac />
  </StrictMode>,
)

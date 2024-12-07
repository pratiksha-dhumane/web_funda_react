import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //import=link
import App from './App.jsx' //component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

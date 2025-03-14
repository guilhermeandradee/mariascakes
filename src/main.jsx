import { StrictMode } from 'react'
import { AppProvider } from './contexts/windowSizeContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainRoutes from './MainRoutes.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <StrictMode>
        <MainRoutes />
      </StrictMode>
    </AppProvider>
  </BrowserRouter>
)

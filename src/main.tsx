import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { SearchProvider } from './help/SearchContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <div className='bg-black'>
        
      <App />

      </div>
    </HelmetProvider>
  </StrictMode>,
)

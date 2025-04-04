import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SearchProvider } from './help/SearchContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-black'>
      
    <App />

    </div>
  </StrictMode>,
)

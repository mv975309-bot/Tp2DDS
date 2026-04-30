import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Acá React busca el div con id="root" del index.html
// y dentro de ese div renderiza toda la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* App es el componente principal de toda la página */}
    <App />
  </React.StrictMode>,
)
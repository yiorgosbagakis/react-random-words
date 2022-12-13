import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const randomBackground = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomBackground;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ThemeProvider } from "./components/darkmode/theme.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
    <App />
    </ThemeProvider>

)

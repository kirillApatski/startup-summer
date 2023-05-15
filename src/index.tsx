import React from 'react'
import ReactDOM from 'react-dom/client'
import 'styles/index.css'
import reportWebVitals from './reportWebVitals'
import { App } from 'App'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <HashRouter>
    <App />
  </HashRouter>
)

reportWebVitals()

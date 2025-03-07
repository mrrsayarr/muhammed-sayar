import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import UsefulLinks from './pages/UsefulLinks'
import './index.css'

const basename = import.meta.env.DEV ? '/muhammed-sayar' : '/muhammed-sayar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/useful-links" element={<UsefulLinks />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
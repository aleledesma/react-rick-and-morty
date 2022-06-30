import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Details from './routes/Details'
import Inicio from './routes/Inicio'
import Personajes from './routes/Personajes'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Inicio />} />
        <Route path='personajes' element={<Personajes />} />
        <Route path='personajes/:id' element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>

)

import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuPage from './pages/Menu'
import Contactus1 from './pages/Contactus1'
import CartPage from './pages/CartPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<MenuPage/>} />
        <Route path='/contactus1' element={<Contactus1/>} />
        <Route path='/CartPage' element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
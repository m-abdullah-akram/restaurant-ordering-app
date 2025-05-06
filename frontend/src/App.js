import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOder from './pages/PlaceOder/PlaceOder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/Login'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        {/* // Mount the navbar component here*/}
        <Navbar setShowLogin={setShowLogin} /> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Order' element={<PlaceOder/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

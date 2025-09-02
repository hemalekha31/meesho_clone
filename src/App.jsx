import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Content from './pages/Content'
import Men from './pages/Men'
import Kid from './pages/Kid'
import Women from './pages/Women'
import Womenwest from './pages/Womenwest'

function App() {


  return (
    <>

      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/kids' element={<Kid />} />
          <Route path='/womenwest' element={<Womenwest />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

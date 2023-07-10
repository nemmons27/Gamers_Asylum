import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'

import './App.css'

function App() {

  return (
    <div>
      <header>
        <Nav element={<Nav />}/>
      </header>
      <br />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
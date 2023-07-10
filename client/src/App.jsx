import { useState, useEffect } from 'react'
import { Route, Routes } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3>Welcome to Gamer's Asylum</h3>
        <Nav />
        <br />
        <main>
          <Routes>
            <Route path="/" element= {<Home />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App

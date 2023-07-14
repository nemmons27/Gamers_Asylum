import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Games from './pages/Games'
import GameDetails from './pages/GameDetail'
import NewGame from './components/NewGame'
import Register from './pages/Register'
import LogIn from './pages/Login'
import { CheckSession } from './services/Auth'
import './App.css'
import { set } from 'mongoose'


function App() {
  const [user, setUser] = useState(null)




  return (
    <div>
      <header>
        <Nav element={<Nav />}/>
      </header>
      <br />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register  />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/games" element={<Games user={user}/>}  />
          <Route path="/games/:id" element={<GameDetails />}/>
          <Route path="/newgame" element={<NewGame />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
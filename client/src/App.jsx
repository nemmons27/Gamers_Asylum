import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Games from './pages/Games'
import GameDetail from './pages/GameDetail'
import NewGame from './components/NewGame'
import Register from './pages/Register'
import LogIn from './pages/Login'
import { CheckSession } from './services/Auth'
import './App.css'
import { set } from 'mongoose'
import { GetGames } from './services/GameServices'


function App() {
  const [user, setUser] = useState(null)
  const [games, setGames] = useState({})
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const handleGames = async () => {
    const data = await GetGames()
    setGames(data)
  } 

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    handleGames()
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div>
      <header>
        <Nav 
        user={user}
        handleLogOut={handleLogOut}/>
      </header>
      <br />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register  />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/games" element={<Games user={user}/>}  />
          <Route path="/games/:id" element={<GameDetail user={user} games={games} handleGames={handleGames}/>}/>
          <Route path="/new" element={<NewGame user={user}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>© {getYear()} Gamer's Asylum, all rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
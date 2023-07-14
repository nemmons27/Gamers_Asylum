import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    let unlimited
    if (user) {
        unlimited = (
            <nav>
                <Link to="/games">Main Library</Link>
                <Link to="/new">Add Game</Link>
                <Link to="/about">About</Link>
                <Link onClick={handleLogOut} to="/">LogOut</Link>
            </nav>
        )
    }

    const limited = (
        <nav>
            <Link to="/">Gamer's Asylum</Link>
            <Link to="/about">About</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
        </nav>

    )
    return(
        <header>
            {user ? unlimited : limited}
        </header>
    )
}

export default Nav
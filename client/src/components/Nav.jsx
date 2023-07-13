import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <header>
            <nav className='navLine'>
                <ul>
                    <li className='navLink'>
                        <Link to="/">Gamer's Asylum</Link>
                    </li>
                    <li className='navLink'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='navLink'>
                        <Link to="/games">Games</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
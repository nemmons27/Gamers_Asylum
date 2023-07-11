import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <header>
            <div className='nav'>
                <ul>
                    <li className='navLink'>
                        <Link to="/">Gamer's Asylum</Link>
                    </li>
                    <li className='navLink'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='navLink'>
                        <Link to="/genres">Genre</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav
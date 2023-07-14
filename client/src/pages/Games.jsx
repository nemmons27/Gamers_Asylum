import React from 'react'
import { useEffect, useState } from 'react'
import { GetGames } from '../services/GameServices'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Games = ({ user }) => {
    let navigate = useNavigate()
    const [games, setGames] = useState([])


    useEffect(() => {
        const handleGames = async () => {
            const data = await GetGames()
            setGames(data)
        }
        handleGames()
    }, [])

    return user ? (
        <div>
            <h4>Games</h4>
            <div className='grid col=4'>
                {games.map((game, idx) => (
                    <div className='card' key={idx}>
                        <Link to={`/games/${game._id}`}>
                            <h4>{game.name}</h4>
                        </Link>
                        <div>
                            <p>{game.genre}</p>
                            <p>{game.description}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    ) : (
        <div className='guard'>
            <h4>Log in to see more! </h4>
            <button className='button' onClick={() => navigate('/login')}>Log In</button>
        </div>
    )
}

export default Games
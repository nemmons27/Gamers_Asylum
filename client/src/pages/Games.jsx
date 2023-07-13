import React from 'react'
import { useEffect, useState } from 'react'
import { GetGames } from '../services/GameServices'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Games = ({ user }) => {
    let navigate = useNavigate()
    const [games, setGames] = useState([])


    useEffect(() => {
        const handleGames = async () => {
            const data = await GetGames()
            setGames(data)
        }
        handleGames()
    }, [])



    return (
        <div>
            <h4>Games</h4>
            <div className='grid col=4'>
                {games.map((game, idx) => (
                    <div className='card' key={idx}>
                        <Link to={`${game.id}`}>
                            <h4>{game.name}</h4>
                        </Link>
                        <div>
                            <p>{game.description}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
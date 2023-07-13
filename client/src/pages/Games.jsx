import React from 'react'
import { useEffect, useState } from 'react'
import { GetGames } from '../services/GameServices'
import { Link } from 'react-router-dom'

export const Games = ({user}) => {
    const [games, setGames] = useState([])

    const handleGames = async () => {
        const data = await GetGames()
        setGames(data)
    }

    useEffect(() => {
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
export default Games
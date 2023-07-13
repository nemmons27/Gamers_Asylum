import React from 'react'
import { useEffect, useState } from 'react'
import { GetGames } from '../services/GameServices'
import { Link } from 'react-router-dom'

export const Games = () => {
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
                {games.map((games, idx) => (
                    <div className='card' key={idx}>
                        <div>
                            <p>Game Location</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
export default Games
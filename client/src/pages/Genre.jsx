import { useEffect, useState } from 'react'
import { GetGame } from '../services/GameServices'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Genre = () => {
    let navigate = useNavigate()
    const [games, setGames] = useState([])

    useEffect(() => {
        const handleGames = async () => {
            const data = await GetGame()
            setGames(data)
        }
        handleGames()
    }, [])

    return (
        <div className="grid col=4">
            {games.map((game) => (
                <div className='card' key={GetGame.id}>
                    <Link to={`${game._id}`}>
                        <h3>{game.name}</h3>
                    </Link>
                    <p>{game.genre}</p>
                    <p>{game.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Genre
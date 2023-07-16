import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetGame } from "../services/GameServices";
import Review from "../components/Review";
import { useNavigate } from "react-router-dom";

const GameDetail = ({user, handleGames}) => {
    let { id } = useParams()
    const [game, setGame] = useState({})

    let navigate = useNavigate()

    useEffect(() => {
        const handleGame = async () => {
            const data = await GetGame(id)
            setGame(data)
        }
        handleGame()
    }, [])

    return user ? (
        <div className="details">
            <div className="details-header">
                <img src={game.image} alt="gameImg" className="gameImage"/>
                <h4>{game.name}</h4>
                <p>{game.genre}</p>
                <p>{game.description}</p>
                <br />
                <Review  game={game} user={user}/>
            </div>
        </div>
    ) : (
        <div className='guard'>
            <h4>Log in to see more! </h4>
            <button className='button' onClick={() => navigate('/login')}>Log In</button>
        </div>
    )
}

export default GameDetail
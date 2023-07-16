import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetGame } from "../services/GameServices";
import Review from "../components/Review";

const GameDetail = ({user, games, handleGames}) => {
    let { id } = useParams()
    const [game, setGame] = useState({})

    useEffect(() => {
        const handleGame = async () => {
            const data = await GetGame(id)
            setGame(data)
        }
        handleGame()
    }, [])

    return (
        <div className="details">
            <div className="details-header">
                <img src={game.image} alt="gameImg" className="gameImage"/>
                <h4>{game.name}</h4>
                <p>{game.genre}</p>
                <p>{game.description}</p>
                <br />
                <p>Reviews :
                    <Review  game={game} gameId={game._id} user={user} handleGames={handleGames}/></p>
            </div>
        </div>
    )
}

export default GameDetail
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetGame } from "../services/GameServices";
import { Link } from "react-router-dom"

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
console.log(game)
    return (
        <div className="details">
            <div className="details-header">
                <img src={game.image} alt="gameImg" className="gameImage"/>
                <h4>{game.name}</h4>
                <p>{game.genre}</p>
                <p>{game.description}</p>
            </div>
        </div>
    )
}

export default GameDetail
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GetGame } from "../services/GameServices";

const GameDetails = () => {
    let { id } = useParams()

    const [game, setGame] = useState({})

    useEffect(() => {
        const handleGame = async () => {
            const data = await GetGame(id)
            setGame(data)
        }
        handleGame()
    })

    return (
        <div className="details">
            <div className="details-header">
                <div className='card' key={idx}>
                        <h4>{game.name}</h4>
                        <p>{game.genres}</p>
                        <p>{game.description}</p>
                </div>
            </div>
        </div>
    )
}

export default GameDetails
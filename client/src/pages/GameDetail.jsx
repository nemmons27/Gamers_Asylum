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
                <img src="" />
                    <h3>{game.name}</h3>
                    <p>{game.genre}</p>
                    <p>{game.description}</p>
            </div>
        </div>
    )
}

export default GameDetails
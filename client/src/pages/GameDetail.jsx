import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetGame } from "../services/GameServices";
import Review from "../components/Review";
import ReviewRender from "../components/ReviewRender"
import { useNavigate } from "react-router-dom";

const GameDetail = ({ user, handleGames }) => {
    const { game_id } = useParams()
    const [game, setGame] = useState({})

    let navigate = useNavigate()

    useEffect(() => {
        const handleGame = async () => {
            const data = await GetGame(game_id)
            console.log(data)
            setGame(data)
        }
        handleGame()
    }, [])

    return user ? (
        <div className="details">
            <div className="details-header" >
                <img src={game.image} alt="gameImg" className="gameImage" />
                <h4>{game.name}</h4>
                <p>{game.genre}</p>
                <p>{game.description}</p>
                <br />
                <Review game={game} user={user} handleGames={handleGames} />
                {!!game.reviews && game.reviews.map((review, idx) => (
                <div key={idx}>
                    <ReviewRender game={game} user={user} review={review} handleGames={handleGames} />
                </div>
                ))}
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
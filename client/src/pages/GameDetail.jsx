import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetGame, GetReview, DeleteReview } from "../services/GameServices";
import Review from "../components/Review";
import ReviewRender from "../components/ReviewRender"
import { useNavigate } from "react-router-dom";

const GameDetail = ({ user, games, review_id }) => {
    const { game_id } = useParams()
    const [game, setGame, review,setReview] = useState({})

    let navigate = useNavigate()

    useEffect(() => {
        const handleGame = async () => {
            const data = await GetGame(game_id)
            setGame(data)
        }
        handleGame()
    }, [games])

    useEffect(() => {
        const handleReview = async () => {
            const data = await GetReview(review_id)
            setReview(data)
        }
        handleReview()
    }, [review])

    return user ? (
        <div className="details">
            <div className="details-header" >
                <img src={game.image} alt="gameImg" className="gameImage" />
                <h4>{game.name}</h4>
                <p>{game.genre}</p>
                <p>{game.description}</p>
            </div>
            <br />
            <div className="reviewCard">
                <p>Reviews:</p>
                {!!game.reviews && game.reviews.map((review) => (
                    <ReviewRender user={user} review={review} reviewId={review.id} DeleteReview={DeleteReview} />
                ))}
                    <Review user={user} games={games} review={review} />
                    <br />
                    <button className="removebtn" type="submit">X</button>
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
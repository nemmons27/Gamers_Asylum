import { useState, useEffect } from "react";
import Client from "../services/api";
import { GetReviews } from '../services/GameServices'
import { useNavigate } from "react-router-dom";

const Review = ({ handleGames, game, user}) => {
    const intialState= {
        review: ''
    }

    const [reviewState, setReviewState] = useState(intialState)

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let updatedState = {
            ...reviewState,
            user: user.id,
        }
        console.log(updatedState)
        await Client.post('/reviews/${game_id}', updatedState)
        setReviewState(updatedState)
        GetReviews()
        handleGames()
    }

    const handleChange = (e) =>{
        setReviewState({...reviewState, [e.target.id]: e.target.value})
    }

    return (
            <div>
            <br />
            <form onSubmit={handleSubmit}>
                <textarea 
                    className="newReview"
                    name="review" 
                    id="review" 
                    placeholder="add new review"
                    cols="25"
                    rows="5"
                    onChange={handleChange}
                    value={reviewState.review}
                ></textarea>
                <br />
                <button className="button" type="submit">Add Review?</button>
            </form>
        </div>
    )
}

export default Review
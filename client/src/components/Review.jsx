import { useState, useEffect } from "react";
import Client from "../services/api";
import { GetReviews } from '../services/GameServices'

const Review = ({ handleGames, gameId, user}) => {
    const intialState= {
        review: ''
    }

    const [reviewState, setReviewState] = useState(intialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let updatedState = {
            ...reviewState,
            user: user.id,
            userName: user.name
        }
        await Client.post(`/reviews/${gameId}`, updatedState)
        setReviewState(intialState)
        GetReviews()
        handleGames()
    }

    const handleChange = (e) =>{
        setReviewState({...reviewState, [e.target.id]: e.target.value})
        console.log(reviewState)
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
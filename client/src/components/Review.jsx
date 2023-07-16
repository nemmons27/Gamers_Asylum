import { useState, useEffect } from "react";
import Client from "../services/api";
import { GetReviews } from '../services/GameServices'
import { GetGames } from '../services/GameServices'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Review = ({ handleGames, games, game, user}) => {
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
        await Client.post('/:game_id', updatedState)
        setReviewState(updatedState)
        GetReviews()
        handleGames()
        navigate('/games')
    }

    const handleChange = (e) =>{
        setReviewState({...reviewState, [e.target.id]: e.target.value})
    }

    return (
        <div className="grid col=3">
            <table className="reviewTable">
                <thead className="reviewHead">
                    <tr>
                        <th>User:</th>
                        <th>Date:</th>
                        <th>Review:</th>
                    </tr>
                </thead>

                <tbody className="reviewBody">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <form onSubmit={handleSubmit}>
                <textarea 
                    className="newReview"
                    name="newReview" 
                    id="newReview" 
                    placeholder="add new review"
                    cols="25"
                    rows="5"
                    onChange={handleChange}
                ></textarea>
                <br />
                <button className="button" type="submit">Add Review?</button>
            </form>
        </div>
    )
}

export default Review
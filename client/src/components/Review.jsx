import { useState } from "react";
import Client from "../services/api";
import { Link } from "react-router-dom";

const Review = () => {
    const intialState= {
        newReview: 'Add a Review'
    }

    const [reviewState, setReviewState] = useState(intialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.post('/reviews', reviewState)
        setReviewState(intialState)
    }

    const handleChange = (e) =>{
        setReviewState({...reviewState, [e.target.id]: e.target.value})
    }

    return (
        <div>
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
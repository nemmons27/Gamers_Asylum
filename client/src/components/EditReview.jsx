import React, { useState, useEffect } from "react";
import Client from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { GetReview } from "../services/GameServices";

const EditReview = ({ user, games }) => {
    let { gameId } = useParams()
    let navigate = useNavigate()
    const [reviewState, setReviewState] = useState('')

    const [formState, setFormState] = useState({
        name: '',
        image: '',
        genre: '',
        description: ''
    })
    console.log(gameId)

    useEffect(() => {
        const handleReview = async () => {
            const data = await GetReview(reviewId)
            setReviewState(data)
        }
        handleReview()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.put(`/review/${reviewId}`, formState)
        navigate(`/games/${gameId}`)
    }

    const handleChange = (e) => {
        setFormState({formState, [e.target.id]: e.target.value})
    }

    return user ? (
        <div>
            <h4 htmlFor="editReview" value={formState.name}>Edit {formState.name}</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Review:</label>
                <textarea 
                type="textarea"
                id="review"
                className="descriptionText"
                placeholder={review.description}
                onChange={handleChange}
                value={formState.description}
                cols="25"
                rows="5" />
                <br />
                <br />
                <button className="editReview" type="submit">Confirm Edits</button>
            </form>
            <button to={`/games/${gameId}`}>Return</button>
        </div>
    ) : (
        <div className='guard'>
            <h4>Log in to see more! </h4>
            <button className='button' onClick={() => navigate('/login')}>Log In</button>
        </div>
    )
}

export default EditReview
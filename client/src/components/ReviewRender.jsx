import React from 'react'
import Client from '../services/api'
import { useParams, useNavigate } from 'react-router-dom'


const ReviewRender = ({ review, handleGames }) => {
    let { reviewId } = useParams()
    console.log(review)
    let navigate = useNavigate()

    const getDate = () => {
        const formattedDate = new Date(review.createdAt).toDateString()
        return formattedDate
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.delete(`/reviews/${reviewId}`)
        handleGames()
        navigate('/games')
    }


    return (
        <div className="grid col=3">
            <br />
                <form onSubmit={handleSubmit}>
                    <div className='tD'>{getDate()}</div>
                    <div className='tD'>{review.userName}</div>
                    <div className='tD'>{review.review}</div>
                    <button className='removebtn' type="submit">X</button>
                </form>

        </div>
    )
}

export default ReviewRender
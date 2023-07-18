import React from 'react'
import Client from '../services/api'
import { useParams, useNavigate } from 'react-router-dom'


const ReviewRender = ({ review, handleGames,}) => {
    let { reviewId } = useParams()

    let navigate = useNavigate()

    // const getDate = () => {
    //     const formattedDate = new Date(review.createdAt).toDateString()
    //     return formattedDate
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.delete(`/reviews/${review._id}`)
        handleGames()
    }


    return (
        <div className="grid col=3">
            <br />
            <div className='reviewTable'>
                    {/* <td className='tD'>{getDate()}</td> */}
                    <div className='tD'>{review.user}</div>
                    <div className='tD'>{review.review}</div>
                <form onSubmit={handleSubmit}>
                    <button className='removebtn' type="submit"  >X</button>
                </form>
            </div>
        </div>
    )
}

export default ReviewRender
import React from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'


const ReviewRender = ({ review, handleGames }) => {

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
            <div className='review'>
                    {/* <td className='tD'>{getDate()}</td> */}
                    <div className='tD'>yeah</div>
                    <div className='tD'>mhm</div>
                <form onSubmit={handleSubmit}>
                    <button className='editbtn' to={`/games/reviews/${review._id}`}> Edit Review</button>
                    <br />
                    <br />
                    <button className='removebtn' type="submit" onClick={handleGames} >X</button>
                </form>
            </div>
        </div>
    )
}

export default ReviewRender
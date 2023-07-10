const {Review} = require('../models')

const GetReviews = async (req,res) => {
    try {
        const reviews = await Games.find({})
        res.send(reviews)
    } catch (error) {
        throw error
    }
}

const CreateReview = async (req,res) => {
    try {
        const review = await Review.create({...req.body })
        res.send(review)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetReviews,
    CreateReview
}
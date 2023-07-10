const {Review} = require('../models')

const GetReview = async (req,res) => {
    try {
        const reviews = await Review.find({})
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
    GetReview,
    CreateReview
}
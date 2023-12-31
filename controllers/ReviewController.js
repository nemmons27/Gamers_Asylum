const {Game} = require('../models')
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
        const review = await Review.create(req.body)
        const game = await Game.findById(req.params.game_id)
        game.reviews.push(review._id)
        await game.save()
        res.status(201).send({msg: 'review sent', status: 'review', game, review})
    } catch (error) {
        throw error
    }
}

const UpdateReview = async (req,res) => {
    try{
        const review = await Review.findByIdAndUpdate(req.params.game_id, req.body, {new: true})
        res.send(review)
    } catch (error) {
        throw error
    }
}


const DeleteReview = async (req,res) => {
    try {
        await Review.deleteOne({ _id :
        req.params.review_id})
        res.send({msg: 'Review Deleted', payload :
    req.params.review_id, status: 'Ok'})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetReview,
    CreateReview,
    UpdateReview,
    DeleteReview
}
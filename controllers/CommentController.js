const {Comment} = require('../models')

const GetComment = async (req,res) => {
    try {
        const comments = await Comment.find({})
        res.send(comments)
    } catch (error) {
        throw error
    }
}

const CreateComment = async (req,res) => {
    try {
        const comment = await Comment.create({...req.body })
        res.send(comment)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetComment,
    CreateComment
}
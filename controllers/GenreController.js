const {Genre} = require('../models')

const GetGenre = async (req,res) => {
    try {
        const genre = await Genre.find({})
        res.send(genre)
    } catch (error) {
        throw error
    }
}

const CreateGenre = async (req,res) => {
    console.log(req.body)
    try {
        const genre = await Genre.create(req.body)
        res.send(genre)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetGenre,
    CreateGenre
}
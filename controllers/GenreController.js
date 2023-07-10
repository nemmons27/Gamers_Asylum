const {Genres} = require('../models')

const GetGenres = async (req,res) => {
    try {
        const genres = await Genres.find({})
        res.send(genres)
    } catch (error) {
        throw error
    }
}

const CreateGenre = async (req,res) => {
    console.log(req.body)
    try {
        const genre = await Genres.create(req.body)
        res.send(genre)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetGenres,
    CreateGenre
}
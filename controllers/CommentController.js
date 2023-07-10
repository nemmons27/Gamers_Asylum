const {Games} = require('../models')

const GetGenres = async (req,res) => {
    try {
        const games = await Games.find({})
        res.send(games)
    } catch (error) {
        throw error
    }
}

const CreateGenre = async (req,res) => {
    try {
        const game = await Games.create({...req.body })
        res.send(game)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetGenres,
    CreateGenre
}
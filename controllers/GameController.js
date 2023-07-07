const {Games} = require('../models')

const GetGames = async (req,res) => {
    try {
        const games = await Games.find({})
        res.send(games)
    } catch (error) {
        throw error
    }
}

const CreateGame = async (req,res) => {
    try {
        const game = await Games.create({...req.body })
        res.send(game)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetGames,
    CreateGame
}
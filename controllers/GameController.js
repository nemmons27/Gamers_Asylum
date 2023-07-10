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

const UpdateGame = async (req,res) => {
    try{
        const game = await Game.findByIdAndUpdate(req.params.game_id, req.body, {new: true})
        res.send(game)
    } catch (error) {
        throw error
    }
}

const DeleteGame = async (req,res) => {
    try {
        await Games.deleteOne({_id: req.params.game_id})
        res.send({msg: 'Game has reached the Shadow Realm', payload: req.params.game_id, status: 'OK'})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetGames,
    CreateGame,
    UpdateGame,
    DeleteGame
}
const {Game} = require('../models')

const GetGames = async (req,res) => {
    try {
        const game = await Game.find({}).populate('reviews')
        res.send(game)
    } catch (error) {
        throw error
    }
}

const GetGameById = async (req,res) => {
    try{
        const game = await Game.findById(req.params.id).populate('reviews')
        res.send(game)
    } catch (error) {
        throw error
    }
}

const CreateGame = async (req,res) => {
    try {
        const game = await Game.create(req.body)
        console.log(game)
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
        await Game.deleteOne({_id: req.params.game_id})
        res.send({msg: 'Game has reached the Shadow Realm', payload: req.params.game_id, status: 'OK'})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetGames,
    GetGameById,
    CreateGame,
    UpdateGame,
    DeleteGame
}
const mongoose = require('mongoose')
const gamesSchema = require('./Game')

const Games = mongoose.model('Games', gamesSchema)

module.exports = {
    Games
}
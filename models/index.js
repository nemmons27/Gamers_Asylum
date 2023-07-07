const mongoose = require('mongoose')
const gamesSchema = require('./Games')

const Games = mongoose.model('Games', gamesSchema)

module.exports = {
    Games
}
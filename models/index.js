const mongoose = require('mongoose')
const gamesSchema = require('./Game')
const userSchema = require('./User')
const reviewSchema = require('./Review')
const commemntSchema = require('./Comment')
const genreSchema = require('./Genre')

const Games = mongoose.model('Games', gameSchema)
const Users = mongoose.model('Games', userSchema)
const Reviews = mongoose.model('Games', reviewSchema)
const Comments = mongoose.model('Games', commemntSchema)
const Genres = mongoose.model('Games', genreSchema)

module.exports = {
    Games,
    Users,
    Reviews,
    Comments,
    Genres
}
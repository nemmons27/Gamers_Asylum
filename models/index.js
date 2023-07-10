const mongoose = require('mongoose')
const gameSchema = require('./Game')
const userSchema = require('./User')
const reviewSchema = require('./Review')
const commentSchema = require('./Comment')
const genreSchema = require('./Genre')

const Games = mongoose.model('Games', gameSchema)
const Users = mongoose.model('User', userSchema)
const Reviews = mongoose.model('Reviews', reviewSchema)
const Comments = mongoose.model('Comments', commentSchema)
const Genres = mongoose.model('Genres', genreSchema)

module.exports = {
    Games,
    Users,
    Reviews,
    Comments,
    Genres
}
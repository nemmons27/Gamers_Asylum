const mongoose = require('mongoose')
const gameSchema = require('./Game')
const userSchema = require('./User')
const reviewSchema = require('./Review')
const commentSchema = require('./Comment')

const Game = mongoose.model('Game', gameSchema)
const User = mongoose.model('User', userSchema)
const Review = mongoose.model('Review', reviewSchema)
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
    Game,
    User,
    Review,
    Comment,

}
const {Schema} = require('mongoose')
const {reviewSchema} = require('./Review')

const gameSchema = new Schema(
    {
        name: {type: String, required: true},
        image: {type: String},
        genre: {type: String, required: true},
        reviews: {reviewSchema},
        id: {type: String}
    },
    {timestamps: true}
)
module.exports = {
    gameSchema
}
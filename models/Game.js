const {Schema} = require('mongoose')

const gameSchema = new Schema(
    {
        name: {type: String, required: true},
        image: {type: String},
        genre: {
            name: Schema.Types.ObjectId,
            ref: 'Genre'
        },
        reviews: {
            type: Schema.Types.ObjectId,
            ref: 'Review'},
        id: {type: String}
    },
    {timestamps: true}
)
module.exports = gameSchema

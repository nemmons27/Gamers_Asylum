const {Schema} = require('mongoose')

const gameSchema = new Schema(
    {
        name: {type: String, required: true},
        genre: {
            type: Schema.Types.ObjectId,
            ref: 'Genre'
        },
        description: {type: String, required: true},
        id: {type: String}
    },
    {timestamps: true}
)
module.exports = gameSchema
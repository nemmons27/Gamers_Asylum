const {Schema} = require('mongoose')

const gameSchema = new Schema(
    {
        name: {type: String, required: true},
        genre: {type: String},
        description: {type: String, required: true},
        id: {type: String}
    },
    {timestamps: true}
)
module.exports = gameSchema
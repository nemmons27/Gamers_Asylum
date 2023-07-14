const { Schema } = require('mongoose')

const gameSchema = new Schema(
    {
        name: { type: String, required: true },
        genre: {
            type: String,
            enum: ['Adventure', 'Action', 'RPG', 'Shooting', 'Driving', 'Fighting', 'MMO', 'Puzzle', 'Horror', 'Sports'],
            maxItems: 3
        },
        description: { type: String, required: true },
        id: { type: String }
    },
    { timestamps: true }
)
module.exports = gameSchema
const { Schema } = require('mongoose')

const gameSchema = new Schema(
    {
        name: { type: String, required: true },
        image: {type: String},
        genre: {
            type: String,
            enum: ['Adventure', 'Action', 'RPG', 'Shooting', 'Driving', 'Fighting', 'MMO', 'Puzzle', 'Horror', 'Sports'],
            maxItems: 3
        },
        description: { type: String, required: true },
        reviews: [{ 
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }]
    },
    { timestamps: true }
)
module.exports = gameSchema
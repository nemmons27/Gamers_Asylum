const {Schema} = require('mongoose')

const genreSchema = new Schema(
    {name: {
        type: String,
        enum: ['Adventure','Action','RPG','Shooting','Driving','Fighting','MMO','Puzzle','Horror','Sports'],
    }}
)

module.exports = genreSchema

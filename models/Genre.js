const {Schema} = require('mongoose')

const genreSchema = new Schema(
    {
        id: {type: String},
        enum: ['Adventure','Action','RPG','Shooting','Driving','Fighting','MMO','Puzzle','Horror','Sports'],
        maxItems: 3
    }
)

module.exports = {
    genreSchema
}
const {Schema} = require('mongoose')

const commentsSchema = new Schema(
    {
        id: {type: String},
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        body: {type: String},
        date: {type: String}
    }
)

module.exports = commentsSchema
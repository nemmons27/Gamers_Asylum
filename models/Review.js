const {Schema} = require('mongoose')

const reviewSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        date: {type: String },
        review: {type: String},
    }
)

module.exports =reviewSchema
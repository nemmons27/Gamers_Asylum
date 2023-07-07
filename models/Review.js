const {Schema} = require('mongoose')

const reviewSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        id: {type: String},
        date: {type: String },
        body: {type: String},
        comment: {
            type: Schema.Types.String,
            ref: "Comment",
        }
    }
)

module.exports ={
    reviewSchema
}
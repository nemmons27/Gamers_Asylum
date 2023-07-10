const {Schema} = require('mongoose')

const userSchema = new Schema(
    {
        username: {type: String},
        email: {type: String},
        password: {type: String},
        confirmPassword: {type: String},
        id: {type: String}
    }
)

module.exports = userSchema
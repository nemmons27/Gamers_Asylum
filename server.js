const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const game = require('./routes/GameRouter')
const comment = require('./routes/CommentRouter')
const review = require('./routes/ReviewRouter')
const AuthRouter= require('./routes/AuthRouter')

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/games', game)
app.use('/users', AuthRouter)
app.use('/reviews', review)
app.use('/comments', comment)



app.listen(PORT, () => {
    console.log(`Running Express server on Port ${PORT} . . .`)
})

const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const genre = require('./routes/GenreRouter')
const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/genres', genre)

app.listen(PORT, () => {
    console.log(`Running Express server on Port ${PORT} . . .`)
})

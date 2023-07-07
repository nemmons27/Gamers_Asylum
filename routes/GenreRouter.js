const router = require('express').Router()
const controller = require('../controllers/GenreController')

router.get('/', controller.GetGenres)
router.post ('/', controller.CreateGenre)

module.exports = router
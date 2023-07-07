const router = require('express').Router()
const controller = require('../controllers/GamesController')

router.get('/', controller.GetGames)
router.post ('/', controller.CreateGame)

module.exports = router
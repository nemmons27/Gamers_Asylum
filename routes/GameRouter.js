const router = require('express').Router()
const controller = require('../controllers/GameController')

router.get('/', controller.GetGames)
router.post ('/', controller.CreateGame)
router.put('/:game_id', controller.UpdateGame)
router.delete('/:game_id', controller.DeleteGame)

module.exports = router
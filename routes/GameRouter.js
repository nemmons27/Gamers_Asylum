const router = require('express').Router()
const controller = require('../controllers/GameController')
const middleware = require('../middleware')

router.get('/', controller.GetGame)
router.post ('/', controller.CreateGame)
router.put('/:game_id', controller.UpdateGame)
router.put(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateGame
)
router.delete('/:game_id', controller.DeleteGame)

module.exports = router
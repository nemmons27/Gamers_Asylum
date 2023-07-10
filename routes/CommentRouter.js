const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/', controller.GetComment)
router.post ('/', controller.CreateComment)
router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateComment
)

module.exports = router
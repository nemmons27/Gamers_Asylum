const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetReview)
router.post ('/', controller.CreateReview)
router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateReview
)

module.exports = router
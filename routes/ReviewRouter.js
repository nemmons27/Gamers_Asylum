const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetReview)
router.post (
    '/:game_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateReview)
router.put(
    '/:review_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateReview
)
router.delete(
    '/:review_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteReview
)

module.exports = router
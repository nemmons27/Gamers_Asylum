const router = require('express').Router()
const controller = require('../controllers/ReviewController')

router.get('/', controller.GetReview)
router.post ('/', controller.CreateReview)

module.exports = router
const router = require('express').Router()
const controller = require('../controllers/CommentController')

router.get('/', controller.GetComment)
router.post ('/', controller.CreateComment)

module.exports = router
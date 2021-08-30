const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/post', controllers.createComment)
module.exports = router

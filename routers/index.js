const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/post', controllers.createComment)
router.delete('/delete/:id', controllers.deleteComment)
router.get('/carid/:id', controllers.findCombyCarid)
module.exports = router

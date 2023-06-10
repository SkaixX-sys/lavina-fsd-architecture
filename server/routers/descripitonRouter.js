const controller = require('../controllers/descriptionController')
const Router = require('express')
const router = new Router;
const authenticateToken = require('../middlewares/authenticateToken')

router.post('/', authenticateToken, controller.create)
router.put('/:id', authenticateToken, controller.update)
router.delete('/:id', authenticateToken, controller.delete)
router.get('/:id', controller.getOne)

module.exports = router
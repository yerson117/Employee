const express = require('express'),
router = express.Router(),
employeectrl = require('../controllers/employee.controller')

router.post('/', employeectrl.create)
router.get('/', employeectrl.list)
router.put('/', employeectrl.update)
router.delete('/:_id', employeectrl.delete)
router.post('/search', employeectrl.search)
router.get('/searchget', employeectrl.searchget)
router.put('/active', employeectrl.active)
module.exports = router
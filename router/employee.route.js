const express = require('express'),
router = express.Router(),
employeectrl = require('../controllers/employee.controller')

router.post('/', employeectrl.create)

module.exports = router
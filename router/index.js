const {Router} = require('express'),
    router = Router();

    router.use('/employee', require('../router/employee.route'));

    module.exports = router;
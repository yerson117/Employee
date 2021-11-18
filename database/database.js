const mongoose = require('mongoose'),
config = require('../config/config')

mongoose.connect(config.Urldb)
    .then(db => console.log('Connected to DB'))
    .catch(err => console.log(err))
module.exports = mongoose
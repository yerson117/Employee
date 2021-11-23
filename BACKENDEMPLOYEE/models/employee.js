 const mongoose = require('mongoose')

 var employeeSchema = new mongoose.Schema({
    name: {type: String},
    phone: {type: String},
    email: {type: String },
    document: {type: String},
    salary:{type: Number} ,
    gender: {type: String} ,
    dateofbirth: {type: Date}
 })
 module.exports = mongoose.model('back_employee', employeeSchema)
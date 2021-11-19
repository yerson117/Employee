const ctrlEmployee = {},
    Employee = require ('../models/employee');
ctrlEmployee.create = async (req, res) =>{
    console.log(req.body)
    const newEmployee = new Employee({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        document: req.body.document,
        salary:req.body.salary,
        gender: req.body.gender ,
        dateofbirth: req.body.dateofbirth
    });

    console.log('data: ', newEmployee);


    await newEmployee.save();

    res.json({
        msg:'Employee created successfully'
    });
}

module.exports = ctrlEmployee;
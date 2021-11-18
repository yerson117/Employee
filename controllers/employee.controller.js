const ctrlEmployee = {},
    Employee = require ('../models/employee');
ctrlEmployee.create = async (req, res) =>{
    const newEmployee = new Employee({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        document: req.body.document,
        salary:req.body.salary,
        gender: req.body.gender ,
        dateofbirth: req.body.dateofbirth
    });

    console.log('name ', newEmployee.name);
    console.log('phone ', newEmployee.phone);
    console.log('email ', newEmployee.email);
    console.log('document ', newEmployee.document);
    console.log('salary ', newEmployee.salary);
    console.log('gender ', newEmployee.gender);
    console.log('dateofbirth ', newEmployee.dateofbirth);

    await newEmployee.save();

    res.json({
        msg:'Employee created successfully'
    });
}

module.exports = ctrlEmployee;
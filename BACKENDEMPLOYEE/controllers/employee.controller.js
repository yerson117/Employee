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
    //console.log('data: ', newEmployee);
    await newEmployee.save();
    res.json({
        msg:'Employee created successfully',
        status: true
    });
};


ctrlEmployee.list = async (req, res) =>{
    const employees = await Employee.find({})
    res.json(employees);
};


ctrlEmployee.update = async (req, res) =>{
     const {_id, name, phone, email, document, salary, gender,dateofbirth} = req.body;
     await Employee.findOneAndUpdate(
         { _id: _id },
         {
             name: name,
             phone: phone,
             email: email,
             document: document,
             salary: salary,
             gender: gender,
             dateofbirth: dateofbirth
         }
     );
     res.json({status: true})
};

ctrlEmployee.delete = async (req, res) =>{
    const{ _id } = req.params;
    const employees = await Employee.deleteOne({ _id: _id});
    res.json({ status: true});
};


ctrlEmployee.search = async (req, res) => {
    console.log(req.body.name)
    const name = await Employee.find( { employee :
        { $regex: ".*" +req.body.name + ".*"}
    })
    res.json(name)
};

ctrlEmployee.searchget = async (req, res ) => {
    console.log(req.params.name)
    const name = await Employee.find( { name : { $regex: ".*" + req.params.name + ".*" } })
    res.json(name)
};

ctrlEmployee.active = async (req, res) => {
    console.log(req.body)
    const { _id, status } = req.body;
    await Employee.findOneAndUpdate(
      { _id: _id },
      { 
        status: status
      }
    );
    res.json({ status: true });
  };

module.exports = ctrlEmployee;

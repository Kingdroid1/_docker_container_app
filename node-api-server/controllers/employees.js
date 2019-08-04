const Employee = require('../models/employees');

module.exports.addEmployee = (req, res) => {
    const employee = new Employee(
        req.body
    );
    employee.save()
    .then(() => res.status(200)
    .json({
        status: true,
        message: 'employee saved successfully'
    }))
    .catch(err => res.send({
    message: 'something went wrong ',
    err: err 
    }));
}

module.exports.getEmployees = (req, res) => {
    Employee.find({})
            .then(emps => res.status(200)
            .json({
                status: true,
                message: (emps)
            }))
            .catch(err => res.send(err));
}

module.exports.getEmployee = (req, res) => {
    const { id } = req.params;

    Employee.findById({id})
            .then(emp => res.status(200)
            .json({
                status: true,
                message: (emp)
            }))
            .catch(err => res.send(err));
}
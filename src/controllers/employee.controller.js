const Employee = require("../models/employee.model");

exports.findAll = (req, res) => {

        Employee.findAll((err, employee) => {
            console.log("Controller");
            if (err) res.send(err);
            console.log('res', employee);
            res.send(employee);
        })

    }
    // find employee by id
exports.findById = (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) console.log(err);
        res.json(employee);
    })
}
'use strict';

const dbComm = require('./../../config/db.config');

// employee object create

let Employee = (employee) => {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.is_deleted = employee.is_deleted;
    this.created_at = new Date();
    this.updated_at = new Date();
};

// create employee

Employee.create = (newEmp, result) => {
    dbComm.query("INSERT INTO employees set ?", newEmp, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

// find employee by id

Employee.findById = (id, result) => {
    dbComm.query("select * from employees where id=?", id, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

// get all employee

Employee.findAll = (result) => {
    dbComm.query("select * from employees", (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
        } else {
            console.log("Employees :", res);
            result(null, res);
        }
    });
};

//




module.exports = Employee;
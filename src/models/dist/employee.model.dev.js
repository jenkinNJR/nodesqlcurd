'use strict';

var _this = void 0;

var dbComm = require('./../../config/db.config'); // employee object create


var Employee = function Employee(employee) {
  _this.first_name = employee.first_name;
  _this.last_name = employee.last_name;
  _this.email = employee.email;
  _this.phone = employee.phone;
  _this.organization = employee.organization;
  _this.designation = employee.designation;
  _this.salary = employee.salary;
  _this.status = employee.status ? employee.status : 1;
  _this.is_deleted = employee.is_deleted;
  _this.created_at = new Date();
  _this.updated_at = new Date();
}; // create employee


Employee.create = function (newEmp, result) {
  dbComm.query("INSERT INTO employees set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
}; // find employee by id


Employee.findById = function (id, result) {
  dbComm.query("select * from employees where id=?", id, function (err, res) {
    if (err) {
      console.log("error", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
}; // get all employee


Employee.findAll = function (result) {
  dbComm.query("select * from employees", function (err, res) {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      console.log("Employees :", res);
      result(null, res);
    }
  });
}; //


module.exports = Employee;
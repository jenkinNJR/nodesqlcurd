"use strict";

var Employee = require("../models/employee.model");

exports.findAll = function (req, res) {
  Employee.findAll(function (err, employee) {
    console.log("Controller");
    if (err) res.send(err);
    console.log('res', employee);
    res.send(employee);
  });
}; // find employee by id


exports.findById = function (req, res) {
  Employee.findById(req.params.id, function (err, employee) {
    if (err) console.log(err);
    res.json(employee);
  });
};
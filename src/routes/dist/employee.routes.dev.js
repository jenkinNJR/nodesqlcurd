"use strict";

var express = require('express');

var router = express.Router();

var employeeController = require("../controllers/employee.controller"); //retrivr all employees


router.get('/', employeeController.findAll);
router.get('/:id', employeeController.findById);
module.exports = router;
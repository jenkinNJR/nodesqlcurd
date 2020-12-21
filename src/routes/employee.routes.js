const express = require('express');

const router = express.Router();

const employeeController = require("../controllers/employee.controller");

//retrivr all employees

router.get('/', employeeController.findAll);
router.get('/:id', employeeController.findById);


module.exports = router;
"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var employeeRouter = require('./src/routes/employee.routes');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("hi");
});
app.use('/api/v1/employees', employeeRouter);
app.listen(3000, function () {
  console.log("listening to port 3000");
});
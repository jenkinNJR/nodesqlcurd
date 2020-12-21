const express = require("express");
const bodyParser = require("body-parser");
const employeeRouter = require('./src/routes/employee.routes');

const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get("/", (req, res) => {
    res.send("hi");
})
app.use('/api/v1/employees', employeeRouter);

app.listen(3000, () => {
    console.log("listening to port 3000");
})
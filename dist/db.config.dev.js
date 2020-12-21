'use strict';

var mysql = require('mysql');

var dbConn = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: 'node_mysql_crud_db'
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database connected");
});
module.exports = dbConn;
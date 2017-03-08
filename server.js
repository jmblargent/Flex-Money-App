var express = require('express');
var app = express();
var sql = require("mssql");
// config for your database
//need to change this to point to the right DB
var config = {
  user: 'sa',
  password: 'Welldoc@123',
  server: 'localhost\\MSSQLSERVER', 
  database: 'JavascriptPoint' 
};
 
app.get('/', function (req, res) { 
 
  // connect to your database
  sql.connect(config, function (err) {
 
  if (err) console.log(err);
 
    // create Request object
    var request = new sql.Request();
    // query to the database and get the data
    //This needs to be changed to get the flex data
    request.query('select * from Student', function (err, recordset) {
      if (err) console.log(err)
      // send data as a response
      res.send(recordset);
    });
 });
});
 
var server = app.listen(4000, function () {
  console.log('Server is running.. on Port 4000');
});

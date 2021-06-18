var oracledb = require('oracledb');
var http = require('http'),
fs = require('fs');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors()); 



  app.get('/', function (req, res) {
    oracledb.getConnection(
      {
        user          : "SYS",
        password      : "bhumi",
        connectString : "localhost/XE",
        privilege: oracledb.SYSDBA
      },
      function(err, connection)
      {
        if (err) { console.error(err); return; }
        connection.execute(
          "SELECT * FROM departments ",
          function(err, result)
          {
            if (err) { console.error(err); return; }
            console.log(result)
            console.log(result.rows);
            res.send(result.rows);
          });
      });
 })

 var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
})



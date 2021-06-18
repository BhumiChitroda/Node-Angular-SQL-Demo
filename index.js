var oracledb = require('oracledb');
oracledb.autoCommit = true;
var http = require('http'),
fs = require('fs');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors()); 



  app.get('/get', function (req, res) {
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

 app.get('/add', function (req, res) {
  str="insert into departments values("+req.query.uid+","+"'"+req.query.firstname+"'"+","+"'"+req.query.lastname+"'"+","+"'"+req.query.dept+"')"
  console.log(str)
   console.log(req.query)
   const options = {
    autoCommit: true,
   }
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
        str,
        function(err, result)
        {
          if (err) { console.error(err); return; }
          console.log(result)
          console.log(result.rows);
          res.send(result.rows);
        });
    });  
   res.send("Sent")
 
})

 var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
})



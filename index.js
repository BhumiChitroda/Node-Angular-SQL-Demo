var oracledb = require('oracledb');
var http = require('http'),
fs = require('fs');
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
      });
  });



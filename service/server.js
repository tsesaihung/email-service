var express = require('express');
var app = express();
var fs = require("fs");
var userService = require("./user-service");

app.get('/listUsers', function (req, res) {
   // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //    console.log( data );
   //    res.end( data );
   // });

   const results = userService.hasMatchEmails('adamk@gmail.com,test@hotmail.com,anthony@hotmails.com,rsteiner@live.com,chaffar@aol.com');
   console.log('results: ' + JSON.stringify(results));
   res.end( JSON.stringify(results) );
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
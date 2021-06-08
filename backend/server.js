const express = require('express');
const app = express();
const userService = require("./user-service");

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.post('/findUsers', (req, res) => {
   console.log('findUsers: ' + req.body.emails);
   const emails = req.body.emails;
   const results = userService.hasMatchEmails(emails);
   res.end(JSON.stringify(results));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
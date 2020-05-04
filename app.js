var express = require('express');
var app = express();

var greeting = 'Maratona Full Cycle 2.0';
var port = 3000;

app.get('/', function(req, res) {
    res.send(greeting);
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`)
});
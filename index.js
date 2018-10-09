var port = 4200;

var express = require('express');
var app = express();
var path = require('path');
var foodGenerator = require('./foodGenerator.js');

// Start express app
app.use(express.static(__dirname + '/pub'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('chat')
})

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
});

var count = 0;
setInterval(() => {
    count ++;
    io.emit('move', { x: count, y: 10 });
}, 100);

setInterval(() => {
	io.emit('generateFood', foodGenerator.generateFood());
}, 5000);


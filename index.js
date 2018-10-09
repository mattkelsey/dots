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
	console.log("connection was made");
	socket.on('disconnect', () => {
		clearInterval();
		console.log("intervals were cleared");
	});
});

var dotMoveSpeed = 1;
var dotX = 250;
var dotY = 250;
var dotDirection = 1*Math.PI;
var deltaX;
var deltaY;
updateDirection();
setInterval(() => {
	if(dotX >= 1000) {
		deltaX = -Math.abs(deltaX);
	} else if (dotX <= 0) {
		deltaX = Math.abs(deltaX);
	} else if (dotY >= 1000) {
		deltaY = -Math.abs(deltaY);
	} else if (dotY <= 0) {
		deltaY = Math.abs(deltaY);
	}
	dotY += deltaY;
	dotX += deltaX;
	console.log(deltaX, deltaY);
	io.emit('move', { x: dotX, y: dotY });
}, 10);

setInterval(updateDirection, 2000);

function updateDirection() {
	dotDirection = Math.random() * 2*Math.PI;
  deltaY = dotMoveSpeed * Math.sin(dotDirection);
  deltaX = dotMoveSpeed * Math.cos(dotDirection);
}

setInterval(() => {
	io.emit('generateFood', foodGenerator.generateFood());
}, 5000);

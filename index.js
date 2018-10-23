"use strict";
exports.__esModule = true;
var socketio = require("socket.io");
var FoodGenerator_1 = require("./src/FoodGenerator");
var express = require("express");
var Dot_1 = require("./src/Dot");
var port = 4200;
var app = express();
// Start express app
app.use(express.static(__dirname + '/pub'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('chat');
});
var io = socketio.listen(app.listen(port));
io.sockets.on('connection', function (socket) {
    socket.on('disconnect', function () {
        clearInterval();
    });
});
var jim = new Dot_1.Dot(250, 250);
setInterval(function () {
    jim.tick();
    console.log(jim.x, jim.x);
    io.emit('move', { x: jim.x, y: jim.y });
}, 10);
setInterval(function () {
    jim.recomputePath();
}, 2000);
setInterval(function () {
    io.emit('generateFood', FoodGenerator_1["default"].generateFood());
}, 5000);

import * as socketio from "socket.io";
import FoodGenerator from './src/FoodGenerator';
import * as express from 'express';
import Dot from './src/Dot'

const port = 4200

const app = express();

// Start express app
app.use(express.static(__dirname + '/pub'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('chat')
})

const io = socketio.listen(app.listen(port));
io.sockets.on('connection', (socket) => {
  
  socket.on('disconnect', () => {
		clearInterval();
	});
});

let jim: Dot = new Dot(250, 250);

setInterval(() => {
  jim.tick();
  console.log(jim.x, jim.x);
  io.emit('move', { x: jim.x, y: jim.y });
}, 10);

setInterval(() => {
  jim.recomputePath();
}, 2000);

setInterval(() => {
	io.emit('generateFood', FoodGenerator.generateFood());
}, 5000);

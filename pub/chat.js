window.onload = function() {
	var canvas = document.getElementById('world');
	var socket = io.connect('http://localhost:4200');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		socket.on('move', function (data) {
 			ctx.clearRect(0, 0, canvas.width, canvas.height);
			console.log("move");
			ctx.save();
			ctx.translate(data.x, data.y);
      ctx.beginPath();
			ctx.arc(data.x, data.y, 5, 0, 2*Math.PI);
			ctx.stroke();
			ctx.restore();
		});
	}
}

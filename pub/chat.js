window.onload = function() {
	var canvas = document.getElementById('world');
	var socket = io.connect('http://localhost:4200');

	var borderWidth = 5;

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');

		ctx.beginPath();
		ctx.lineWidth=borderWidth;
		ctx.rect(0, 0, 1000, 1000);
		ctx.stroke();

		socket.on('move', function (data) {
 			ctx.clearRect(borderWidth/2, borderWidth/2, canvas.width-borderWidth, canvas.height-borderWidth);
			ctx.save();
      ctx.beginPath();
			ctx.arc(data.x, data.y, 5, 0, 2*Math.PI);
			ctx.fill();
		});
	}
}

window.onload = function() {
  let frame: Frame = new Frame();
  frame.socket.on('move', function (data) {
    console.log(data.x, data.y);
    frame.context.clearRect(Frame.borderWidth/2, Frame.borderWidth/2, frame.canvas.width-Frame.borderWidth, frame.canvas.height-Frame.borderWidth);
    frame.context.beginPath();
    frame.context.arc(data.x, data.y, 5, 0, 2*Math.PI);
    frame.context.fill();
  });

  frame.socket.on('generateFood', function (data) {
    console.log("generating food");
    frame.context.beginPath();
    frame.context.rect(data.x, data.y, 2, 2);
    frame.context.fillStyle = "red";
    frame.context.fill();
  });

}

class Frame {
  public static borderWidth: number = 5;
  public socket;
  public context;
  public canvas: HTMLCanvasElement;
  public io;
  Frame() {
    this.canvas = <HTMLCanvasElement> document.getElementById('world');
    this.socket = this.io.connect('http://localhost:4200');
    if (this.canvas.getContext) {
      this.context = this.canvas.getContext('2d');
      this.context.beginPath();
      this.context.lineWidth = Frame.borderWidth;
      this.context.rect(0, 0, 1000, 1000);
      this.context.stroke();
    }
  }
}
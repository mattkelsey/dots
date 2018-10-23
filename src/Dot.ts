export class Dot {
  public x: number;
  public y: number;
  private dotDirection: number;
  private deltaX: number;
  private deltaY: number;
  
  private dotMoveSpeed = 1;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.recomputePath();
  }

  public tick() {
    if(this.x >= 1000) {
      this.deltaX = -Math.abs(this.deltaX);
    } else if (this.x <= 0) {
      this.deltaX = Math.abs(this.deltaX);
    } else if (this.y >= 1000) {
      this.deltaY = -Math.abs(this.deltaY);
    } else if (this.y <= 0) {
      this.deltaY = Math.abs(this.deltaY);
    }
    this.y += this.deltaY;
    this.x += this.deltaX;
  }

  public recomputePath() {
    this.dotDirection = this.getRandomDirection();
    this.deltaY = this.dotMoveSpeed * Math.sin(this.dotDirection);
    this.deltaX = this.dotMoveSpeed * Math.cos(this.dotDirection);
  }
  
  public getRandomDirection(): number {
    return Math.random() * 2*Math.PI;
  }
}
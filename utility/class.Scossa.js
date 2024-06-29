class Scossa{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  display() {
    if (random(1) > 0.5) {
      let len = random(20, 50);
      line(this.x, this.y, this.x, this.y + len * sin(frameCount * 0.1 + this.x * 0.2));
    }
  }
}
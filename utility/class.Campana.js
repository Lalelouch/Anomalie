class Campana {
  constructor(x, y, minRadius, maxRadius) {
    this.x = x;
    this.y = y;
    this.minRadius = minRadius;
    this.maxRadius = maxRadius;
    this.radius = minRadius;
    this.visible = false;
  }

  display() {
    push();
    this.radius = random(this.minRadius, this.maxRadius);
    stroke(255, 0.5);
    noFill();
    strokeWeight(3);
    circle(this.x, this.y, this.radius * 2);
    circle(this.x, this.y, this.radius / 1.5);
    pop();
  }
}

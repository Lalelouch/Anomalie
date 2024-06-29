class Graffio {
  constructor(position) {
    this.graffi = [];
    this.x = random(position.x0, position.x1);
    this.y = random(position.y0, position.y1);
    this.w = random(5, 50);
    this.h = random(1, 5);
  }

  display() {
    push()
    colorMode(RGB)
    noStroke();
    fill(color(random(255), random(255), random(255)));
    rect(this.x, this.y, this.w, this.h);
    pop()
  }
}


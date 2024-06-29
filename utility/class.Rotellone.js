class Rotellone {
  constructor(rotellonePosition, lineaDestra = false) {
    this.rotellonePosition = rotellonePosition;
    this.lineaDestra = lineaDestra;
    this.angle = 0;
  }
  
  display() {
    push();
    translate(this.rotellonePosition.x0 + this.rotellonePosition.h/2, this.rotellonePosition.y0 + this.rotellonePosition.h/2);
    stroke(255);
    noFill();
    strokeWeight(1);
    ellipse(0, 0, this.rotellonePosition.h, this.rotellonePosition.h);
    
    let lineLength = this.rotellonePosition.h / 2;
    let x1 = lineLength * cos(this.angle);
    let y1 = lineLength * sin(this.angle);
    
    if (this.lineaDestra) {
      line(0, 0, x1, y1);
    } else {
      line(0, 0, -x1, -y1);
    }
    pop();
  }
}
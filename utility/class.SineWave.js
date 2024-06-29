class SineWave {
  constructor(sineWavePosition, r) {
    this.sineWavePosition = sineWavePosition;
    this.waveHeight = sineWavePosition.h;
    this.r = r;
    this.angles = [];
    this.angleV = [];
    this.total = floor(this.sineWavePosition.w / (r * 2));
    this.xOffset = 0;
    this.yOffset = 0;
    this.bass = 0

    for (let i = 0; i < this.total + 1; i++) {
      this.angles[i] = map(i, 0, this.total, 0, 2 * TWO_PI);
      this.angleV[i] = 0.01 + i / 100;
    }
  }

  setPosition(x, y) {
    this.xOffset = x;
    this.yOffset = y;
  }

  update(bass) {
    for (let i = 0; i < this.angles.length; i++) {
      this.angles[i] += 0.02;
      this.angles[i] += this.angleV[i];
    }
    this.bass = bass/10;
  }

  display() {
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    translate(this.sineWavePosition.x0, this.sineWavePosition.y0);

    beginShape();
    for (let i = 0; i < this.angles.length; i++) {
      let y = map(sin(this.angles[i]), -1, 1, -this.bass, this.bass);
      let x = map(i, 0, this.angles.length, 0, this.sineWavePosition.w);
      vertex(x, y);
    }
    endShape();


    stroke(255); 
    noFill();
    rect(0, -this.bass - 30, this.sineWavePosition.w, this.bass * 2 + 60);
    pop();
  }
}
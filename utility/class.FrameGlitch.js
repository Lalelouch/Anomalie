class FrameGlitch {
  constructor(canvasPosition, frameWidth, frameHeight) {
    this.frameEsterno = new Position(
      canvasPosition.x0,
      canvasPosition.y0,
      canvasPosition.x0 + frameWidth,
      canvasPosition.y0 + frameHeight,
      (w = frameWidth),
      (h = frameHeight)
    );
    this.frameInterno = new Position(
      this.frameEsterno.x0 + 10,
      this.frameEsterno.y0 + 10,
      canvasPosition.x0 + this.frameEsterno.w - 20,
      canvasPosition.y0 + this.frameEsterno.h - 20,
      this.frameEsterno.w - 20,
      this.frameEsterno.h - 20
    );
    this.canvasPosition = canvasPosition;
  }

  getFrameInternoPosition() {
    return this.frameInterno;
  }

  getFrameEsternoPosition() {
    return this.frameEsterno;
  }

  display() {
    push();
    noStroke();
    fill(0);
    rect(0, 0, this.frameInterno.x0, this.canvasPosition.h); // sinistra

    rect(0, 0, this.canvasPosition.w, this.frameInterno.y0); // sopra

    rect(
      0,
      this.frameInterno.y1,
      this.canvasPosition.w,
      this.canvasPosition.h
    ); // sotto

    rect(
      this.frameInterno.x1,
      0,
      this.canvasPosition.w,
      this.canvasPosition.w
    ); // destra

    noFill();
    stroke(255);
    strokeWeight(1);

    rect(
      this.frameInterno.x0,
      this.frameInterno.y0,
      this.frameInterno.w,
      this.frameInterno.h
    );

    rect(
      this.frameEsterno.x0,
      this.frameEsterno.y0,
      this.frameEsterno.w,
      this.frameEsterno.h
    );

    pop();
  }
}

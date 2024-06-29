class Position {
  //w => width, h => height
  constructor(x0, y0, x1, y1, w = null, h = null) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.w = w;
    this.h = h;
  }
}

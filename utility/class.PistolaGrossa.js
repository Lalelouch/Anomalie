class PistolaGrossa {
  constructor(pistolaGrossaPosition) {
    this.pistolaGrossaPosition = pistolaGrossaPosition;
  }
  update(IsFill = false) {
    if (!IsFill) {
      noFill();
    } else {
      fill(255);
    }
  }
  display() {
    rect(this.pistolaGrossaPosition.x0, this.pistolaGrossaPosition.y0, this.pistolaGrossaPosition.w, this.pistolaGrossaPosition.h);
  }
}


